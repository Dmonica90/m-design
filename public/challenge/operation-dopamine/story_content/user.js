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
window.Script3 = function()
{
  const clickableObject = object('5bN7z4N1DeK');
if (clickableObject) {
    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Animación de Latido + Glow Alpha
    clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.08)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });
}
}

window.Script4 = function()
{
  const clickableObject = object('6j9Yo9jdha5');
if (clickableObject) {
    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Animación de Latido + Glow Alpha
    clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.08)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });
}



}

window.Script5 = function()
{
  const clickableObject = object('65Jb1EpJuOi');

if (clickableObject) {

    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Guardamos la animación en una variable llamada "animacionLatido"
    const animacionLatido = clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.08)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });

    // 3. Agregamos el evento de CLIC para detener la animación
    clickableObject.addEventListener('click', function() {
        // Detiene y elimina la animación por completo
        animacionLatido.cancel(); 
        
        // Nos aseguramos de que el objeto regrese a su estado original visualmente
        clickableObject.style.transform = 'scale(1)'; 
        clickableObject.style.filter = 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))'; 
    });

}


}

window.Script6 = function()
{
  const clickableObject = object('6dZI6QIEgmz');
if (clickableObject) {
    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Animación de Latido + Glow Alpha
    clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.02)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });
}


}

window.Script7 = function()
{
  const clickableObject =  object('68fS60zsBpx');
if (clickableObject) {
    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Animación de Latido + Glow Alpha
    clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.02)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });
}



}

window.Script8 = function()
{
  const clickableObject = object('5jdnIeDp2L5');

if (clickableObject) {
    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Animación de Latido + Glow Alpha
    clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.02)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });
}





}

window.Script9 = function()
{
  const clickableObject = object('5Ug2As9x7yJ');
if (clickableObject) {
    // 1. Configuraciones iniciales
    clickableObject.style.transformOrigin = "center center";
    clickableObject.style.opacity = "1"; // El objeto siempre es visible

    // 2. Animación de Latido + Glow Alpha
    clickableObject.animate([
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        },
        { 
            transform: 'scale(1.02)', // El objeto crece un 8%
            filter: 'drop-shadow(0px 0px 20px rgba(47, 145, 47, 1))', // Glow intenso
            offset: 0.5 
        },
        { 
            transform: 'scale(1)', 
            filter: 'drop-shadow(0px 0px 0px rgba(47, 145, 47, 0))' 
        }
    ], {
        duration: 1500,      // Velocidad del latido
        iterations: Infinity, 
        easing: 'ease-in-out'
    });
}




}

window.Script10 = function()
{
  const objectsToAnimate = [
  object('5hLLzbGB3Nz'), // Rectángulo 1
  object('6NI0saeOYcS'), // Imagen 1
  object('6E3Ifn63KUL'), // Imagen 2
  object('6XRLKSCi0oI'), // Cuadro de texto 1
  object('5khD63xre2J'), // Imagen 10
  object('6VrgAKbUk7n'), // Punto caliente 1
];

objectsToAnimate.forEach(obj => {
  const initialY = obj.y + 100;
  obj.style.opacity = 0;
  obj.animate([
    { opacity: 0, translate: `0 ${initialY}px` },
    { opacity: 1, translate: `0 ${obj.y - initialY}px`, easing: 'ease-out' },
    { opacity: 1, translate: '0 0', easing: 'cubic-bezier(0.26, 1.54, 0.42, 1)' } // Rebote
  ], { duration: 1000, fill: 'forwards' });
});

addToTimeline(objectsToAnimate);
}

};
