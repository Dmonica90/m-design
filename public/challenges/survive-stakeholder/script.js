// --- 1. QUESTION DATABASE (5 QUESTIONS) ---
const preguntas = [
    {
        texto: "This compliance training seems very boring. Can you 'gamify' it? Add points and badges so people want to take it.",
        opciones: [
            { texto: "A. Let's build real-life scenarios based on their daily challenges instead.", estres: 0 },
            { texto: "B. Sure! Points, confetti, and a leaderboard will fix everything.", estres: 20 }
        ]
    },
    {
        texto: "I have this 200-page PDF manual. Just convert it into e-learning, quickly. It should take like an hour, right?",
        opciones: [
            { texto: "A. Copy that. I'll paste it into Storyline slide by slide.", estres: 20 },
            { texto: "B. Help me filter this: What is essential for them to practice, and what can stay as a PDF reference?", estres: 0 }
        ]
    },
    {
        texto: "We don't need to define learning objectives or test them. Just make sure they click 'Next' and see all the information.",
        opciones: [
            { texto: "A. What specific behavior do we want to change? Let's measure that.", estres: 0 },
            { texto: "B. Perfect. I'll lock the 'Next' button so they are forced to wait.", estres: 20 }
        ]
    },
    {
        texto: "I know the voiceover is already recorded and the course is built, but my boss wants to rewrite the entire second module.",
        opciones: [
            { texto: "A. No problem! I love doing everything twice. I'll start over.", estres: 20 },
            { texto: "B. Let's review the change management process and the cost of re-recording first.", estres: 0 }
        ]
    },
    {
        texto: "Wait! The director wants to add 'just' 15 more slides about the company history. The course launches tomorrow.",
        opciones: [
            { texto: "A. What impact would this have on the delivery date if we add it now?", estres: 0 },
            { texto: "B. Don't worry, I won't sleep tonight and I'll add it all.", estres: 20 }
        ]
    }
];

// --- 2. GAME VARIABLES ---
let indicePreguntaActual = 0;
let nivelEstresObjetivo = 0; // El puntaje real (0-100)
let videoSyncLoop; // Variable para controlar el bucle de sincronización del video

// --- 3. DOM ELEMENTS ---
const bgImage = document.getElementById('bg-image');
const bgVideo = document.getElementById('bg-video');

const screenStart = document.getElementById('screen-start');
const screenGame = document.getElementById('screen-game');
const screenEnd = document.getElementById('screen-end');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
// NUEVO: Referencia al marcador visual en lugar del slider viejo
const stressMarker = document.getElementById('stress-marker');

const endTitle = document.getElementById('end-title');
const endFeedback = document.getElementById('end-feedback');

// --- 4. CORE FUNCTIONS ---

// Start Game
document.getElementById('btn-start').addEventListener('click', () => {
    screenStart.style.display = 'none';
    screenGame.style.display = 'flex';
    
    bgImage.style.display = 'none';
    bgVideo.style.display = 'block';
    bgVideo.currentTime = 0; 
    
    indicePreguntaActual = 0;
    nivelEstresObjetivo = 0;
    // Resetear marcador al 0%
    stressMarker.style.left = "0%";
    
    mostrarPregunta();
    // Iniciar el bucle que mantiene el video sincronizado con el marcador visual
    iniciarSincronizacionVideo();
});

// Show Current Question
function mostrarPregunta() {
    const pregunta = preguntas[indicePreguntaActual];
    questionText.innerText = pregunta.texto;
    optionsContainer.innerHTML = ''; 

    pregunta.opciones.forEach(opcion => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opcion.texto;
        
        btn.onclick = () => procesarRespuesta(opcion.estres, btn);
        optionsContainer.appendChild(btn);
    });
}

// Process Answer & Animate Marker
function procesarRespuesta(puntosEstres, btnSeleccionado) {
    // Deshabilitar botones
    const botones = optionsContainer.querySelectorAll('.option-btn');
    botones.forEach(b => b.disabled = true);
    
    btnSeleccionado.style.backgroundColor = "rgba(255,255,255,0.3)";

    // Calcular nuevo objetivo
    nivelEstresObjetivo += puntosEstres;
    if(nivelEstresObjetivo > 100) nivelEstresObjetivo = 100;

    // --- Mover el marcador visual ---
    // El CSS se encarga de que este movimiento tome 1 segundo y sea suave
    stressMarker.style.left = nivelEstresObjetivo + "%";

    // Esperar 1.5 segundos (tiempo suficiente para la animación CSS)
    setTimeout(() => {
        indicePreguntaActual++;
        if (indicePreguntaActual < preguntas.length) {
            mostrarPregunta(); 
        } else {
            finalizarJuego(); 
        }
    }, 1500);
}

// Bucle para sincronizar el video con la posición visual del marcador
function iniciarSincronizacionVideo() {
    // Esta función se ejecuta en cada frame de la pantalla
    function step() {
        if(bgVideo.duration && screenGame.style.display !== 'none') {
            // Obtenemos la posición actual del marcador en porcentaje directamente del estilo calculado
            // Esto nos dice dónde está visualmente el marcador mientras se anima
            const currentLeftStr = getComputedStyle(stressMarker).left;
            const parentWidth = stressMarker.parentElement.offsetWidth;
            const currentLeftPx = parseFloat(currentLeftStr);
            
            // Calcular porcentaje actual visual (0.0 a 1.0)
            let currentPercent = currentLeftPx / parentWidth;
            if (currentPercent < 0) currentPercent = 0;
            if (currentPercent > 1) currentPercent = 1;

            // Mover el video a ese punto exacto
            bgVideo.currentTime = currentPercent * bgVideo.duration;
        }
        // Solicitar el siguiente frame
        videoSyncLoop = requestAnimationFrame(step);
    }
    // Iniciar el bucle
    videoSyncLoop = requestAnimationFrame(step);
}


// End Game & Show Feedback
function finalizarJuego() {
    // Detener el bucle de sincronización de video
    if (videoSyncLoop) cancelAnimationFrame(videoSyncLoop);

    screenGame.style.display = 'none';
    screenEnd.style.display = 'flex';
    
    bgVideo.style.display = 'none';
    bgImage.style.display = 'block';

    if (nivelEstresObjetivo <= 20) {
        bgImage.src = "img/alex_neutral.jpg"; 
        endTitle.innerText = "You're the Dream Stakeholder! 🏆";
        endFeedback.innerText = "You understand the process, respect cognitive load, and focus on real performance. Alex loves working with you and the project will be a massive success!";
        
    } else if (nivelEstresObjetivo <= 60) {
        bgImage.src = "img/alex_nervioso.jpg"; 
        endTitle.innerText = "You survived... barely 😅";
        endFeedback.innerText = "You had some classic slip-ups, but Alex hasn't quit yet. Remember: IDs do more than decorate PDFs, let them guide you!";
        
    } else {
        bgImage.src = "img/alex_triste.jpg"; 
        endTitle.innerText = "Total Meltdown! 💥";
        endFeedback.innerText = "You've triggered every Instructional Designer's nightmare. Alex is updating his LinkedIn profile right now. You need an empathy course ASAP!";
    }
}

// Restart Game
document.getElementById('btn-restart').addEventListener('click', () => {
    screenEnd.style.display = 'none';
    screenStart.style.display = 'flex';
    bgImage.src = "img/alex_neutral.jpg"; 
    // Asegurar que el marcador vuelva a 0 visualmente
    stressMarker.style.left = "0%";
});