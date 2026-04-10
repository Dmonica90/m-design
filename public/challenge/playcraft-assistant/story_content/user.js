window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script6 = function()
{
  // 1. Enviamos el mensaje a Spline inmediatamente
var iframes = document.querySelectorAll('iframe');

iframes.forEach(function(iframe) {
    if (iframe.contentWindow) {
        iframe.contentWindow.postMessage('ACTIVAR_YES', '*');
    }
});

// 2. Configuramos el retraso para el salto de slide
// 1000 milisegundos = 1 segundo
var tiempoDeEspera = 2000; // Cambia este número por los segundos que quieras (ej. 2000 = 2 seg)

setTimeout(function() {
    var player = GetPlayer();
    player.SetVar("SiguienteSlide", true);
    
    // Opcional: Console log para que veas en la consola que el tiempo se cumplió
    console.log("⏱️ Retraso completado. Saltando de slide...");
}, tiempoDeEspera);
}

window.Script7 = function()
{
  
// Esperamos 1 segundo (1000 ms) para asegurar que el iframe ya cargó
setTimeout(function() {
    
    var iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(function(iframe) {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage('ACTIVAR_LOADING', '*');
        }
    });

}, 1000); // Si sigue sin funcionar, súbele a 1500 (1.5 segundos)
}

window.Script8 = function()
{
  // Conexión con Articulate
const player = GetPlayer();
const progressTextVar = 'TextoTerminal';

// Secuencia de textos de tu Playcraft Assistant
const steps = [
  'Processing Data',
  '✅ Phase 1: Narrative Context & Storytelling',
  'Complete',
  '✅ Phase 2: Player Archetype Alignment',
  'Complete',
  '✅ Phase 3: Core Mechanics Selection',
  'Complete',
  '🔒 Phases 4 - 7: [ ENCRYPTED - VIP ACCESS ONLY ]',
  'Process Complete. Advancing...'
];

let currentStep = 0;
let baseText = "";
let typeInterval;
let dotInterval;

// 1. FUNCIÓN MÁQUINA DE ESCRIBIR
function escribirTexto(texto, callback) {
  let i = 0;
  baseText = ""; // Limpiamos el texto base
  
  // Escribe una letra cada 40 milisegundos
  typeInterval = setInterval(() => {
    baseText += texto.charAt(i);
    player.SetVar(progressTextVar, baseText);
    i++;
    
    // Cuando termina de escribir la frase...
    if (i >= texto.length) {
      clearInterval(typeInterval);
      if (callback) callback(); // Pasa a la animación de los puntitos
    }
  }, 40); 
}

// 2. FUNCIÓN PUNTITOS ANIMADOS (LOADING)
function animarPuntosYEsperar() {
  let dots = 0;
  
  // Añade un punto cada medio segundo
  dotInterval = setInterval(() => {
    dots = (dots + 1) % 4; // Ciclo: 0, 1, 2, 3
    let dotString = ".".repeat(dots);
    
    // Muestra el texto base + los puntitos
    player.SetVar(progressTextVar, baseText + dotString);
  }, 400);

  // Espera 3 segundos haciendo el "loading" y luego pasa al siguiente paso
  setTimeout(() => {
    clearInterval(dotInterval);
    currentStep++;
    procesarSiguientePaso();
  }, 3000); 
}

// 3. CONTROLADOR MAESTRO DE LA SECUENCIA
function procesarSiguientePaso() {
  // Si ya mostramos todas las fases, avanzamos de diapositiva
  if (currentStep >= steps.length) {
    avanzarDiapositiva();
    return;
  }

  // Ejecutamos la secuencia: Escribir -> Animar Puntos -> Repetir
  escribirTexto(steps[currentStep], () => {
    // Solo ponemos puntitos animados si no es el último mensaje
    if (currentStep < steps.length - 1) {
      animarPuntosYEsperar();
    } else {
      // Si es el último mensaje, esperamos 2 segundos y avanzamos
      setTimeout(avanzarDiapositiva, 2000);
    }
  });
}

// 4. FUNCIÓN PARA AVANZAR EN STORYLINE
function avanzarDiapositiva() {
  // La forma más segura en Storyline: Cambiar una variable.
  // Asegúrate de tener un trigger en Storyline que salte de diapositiva
  // cuando la variable "FinLoading" cambie a True.
  player.SetVar("FinLoading", true);
  
  // Tu fallback de respaldo por si acaso:
  try {
    const btn = document.querySelector('[data-acc-text="Siguiente"], .next');
    if (btn) btn.click();
  } catch (e) {}
}

// ¡ARRANCAMOS EL MOTOR!
procesarSiguientePaso();
}

window.Script9 = function()
{
  // Esperamos 1 segundo (1000 ms) para asegurar que el iframe ya cargó
setTimeout(function() {
    
    var iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(function(iframe) {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage('ACTIVAR_SALUDO', '*');
        }
    });

}, 1000); // Si sigue sin funcionar, súbele a 1500 (1.5 segundos)
}

window.Script10 = function()
{
  // Animación de escritura de código digital para "Cuadro de texto 1"
const textBox = object('5mRR04nn5nP'); // ID del cuadro de texto seleccionado

// Texto inicial del cuadro de texto
const fullText = textBox.plainText.trim();

// Limpia el contenido inicial
textBox.plainText = '';

// Variables de configuración
const typingSpeed = 50; // Velocidad de escritura (ms por letra)
let currentCharIndex = 0;

// Función para escribir letra por letra
function typeLetter() {
    if (currentCharIndex < fullText.length) {
        // Añade la siguiente letra al cuadro de texto
        textBox.plainText += fullText[currentCharIndex];
        currentCharIndex++;

        // Llama nuevamente con retraso para la siguiente letra
        setTimeout(typeLetter, typingSpeed);
    }
}

// Inicia la animación
setTimeout(typeLetter, 500);
}

window.Script11 = function()
{
  // Animación estilo máquina de escribir con desplazamiento automático para la variable textFinal
// Texto que se mostrará
const fullText = `High-Impact Gamified Experience Unlocked! 🏆\n\nAnybody can add points and badges to a course. But designing a true gamified experience that drives performance requires a systematic approach.\n\nPlaycraft Assistant is my proprietary 7-phase methodology. You just saw a glimpse of the initial alignment.\n\nThe core magic—economy design, progression systems, and loop mechanics—happens in phases 4 to 7.\n\nLet’s discuss how I can apply all 7 phases to your team's training challenges during my first 30 days!`;

// Variable donde se mostrará el texto
const targetVar = 'textFinal';

// Limpia el contenido inicial
setVar(targetVar, '');

// Configuración
const typingSpeed = 50; // Milisegundos por caracter
const paragraphPause = 1000; // Pausa entre párrafos en ms
let currentCharIndex = 0;
let currentParagraphIndex = 0;

// Divide el texto en párrafos
const paragraphs = fullText.split('\n\n');

// Función para escribir carácter por carácter
function typeLetter() {
  const currentText = getVar(targetVar);

  if (currentCharIndex < paragraphs[currentParagraphIndex].length) {
    // Añade el siguiente carácter al texto actual
    setVar(targetVar, currentText + paragraphs[currentParagraphIndex][currentCharIndex]);
    currentCharIndex++;

    // Desplazamiento automático
    const textBoxElement = document.querySelector('[aria-label="textFinal"]');
    if (textBoxElement) {
      textBoxElement.scrollTop = textBoxElement.scrollHeight; // Desplaza hacia el final del contenido
    }

    setTimeout(typeLetter, typingSpeed);
  } else if (currentParagraphIndex < paragraphs.length - 1) {
    // Si el párrafo actual terminó, pasa al siguiente después de una pausa
    currentParagraphIndex++;
    currentCharIndex = 0;
    setTimeout(() => {
      setVar(targetVar, getVar(targetVar) + '\n\n'); // Añade salto de línea entre párrafos
      typeLetter();
    }, paragraphPause);
  }
}

// Inicia la animación
typeLetter();
}

};
