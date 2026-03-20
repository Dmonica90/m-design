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
window.Script43 = function()
{
  

var personaje = object('5gxtMtopTYE');

personaje.style.opacity = "0";

const animacion = personaje.animate([
  { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 }
], {
  duration: 1200,
  // 'bounce' no existe en Web Animations API nativo, usamos un equivalente elástico:
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  fill: 'forwards'
});

}

window.Script44 = function()
{
  
// 1. Corregimos la selección del objeto usando el ID correcto
var obj = object('6E0tGVCpR6F');

// 2. Aplicamos la animación (Solo si el objeto existe)
if (obj) {
    // Configuración inicial: invisible y "aplastado"
    gsap.set(obj, { opacity: 0, scaleY: 0.02, filter: "brightness(3)" });

    // Animación de entrada digital
    gsap.to(obj, { 
        duration: 0.5, 
        opacity: 1, 
        scaleY: 1, 
        filter: "brightness(1)", 
        ease: "expo.out" 
    });
}
}

window.Script45 = function()
{
  
// Localizamos el objeto por su ID de accesibilidad
const grupoMensaje = object('6A6qJBsP8er');

if (grupoMensaje) {
  // Aseguramos el estado inicial antes de la animación
  grupoMensaje.style.opacity = '0';
  grupoMensaje.style.transformOrigin = 'center bottom';

  // Ejecutamos la animación directamente
  grupoMensaje.animate([
    { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(-5px) scale(1.02)', offset: 0.7 },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0.62, -0.1, 0.36, 1.5)',
    fill: 'forwards'
  });
}
}

window.Script46 = function()
{
  var personaje = document.querySelectorAll('[data-acc-text="IALA"]');

// 2. Crear la animación con GSAP
gsap.to(personaje, {
  y: "-=30",           // Distancia del flote (30 píxeles hacia arriba)
  duration: 2,         // Tiempo en segundos para completar el trayecto
  repeat: -1,          // El valor -1 crea el bucle (loop) infinito
  yoyo: true,           // Hace que regrese suavemente (sube y baja)
  ease: "sine.inOut",   // Curva de aceleración suave para efecto orgánico
  force3D: true        // Optimiza el uso de la tarjeta gráfica del navegador
});

}

window.Script47 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="6Buq2PZSnwP"]'), 
    document.querySelector('[data-model-id="6HyLtI0tg1m"]'), 
    document.querySelector('[data-model-id="6JKNNLiMnoT"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 0
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "+=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 1,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script48 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="6Buq2PZSnwP"]'), 
    document.querySelector('[data-model-id="6HyLtI0tg1m"]'), 
    document.querySelector('[data-model-id="6JKNNLiMnoT"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 1
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "-=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 0,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script49 = function()
{
  
var book = object('6HxWzcBUwKQ');


// 2. Crear la animación con GSAP
gsap.to(book, {
  y: "-=10",           // Distancia del flote (30 píxeles hacia arriba)
  duration: 2,         // Tiempo en segundos para completar el trayecto
  repeat: -1,          // El valor -1 crea el bucle (loop) infinito
  yoyo: true,           // Hace que regrese suavemente (sube y baja)
  ease: "sine.inOut",   // Curva de aceleración suave para efecto orgánico
  force3D: true        // Optimiza el uso de la tarjeta gráfica del navegador
});
}

window.Script50 = function()
{
  var personaje = object('6pRoPdZ5oWV');

personaje.style.opacity = "0";

const animacion = personaje.animate([
  { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 }
], {
  duration: 1200,
  // 'bounce' no existe en Web Animations API nativo, usamos un equivalente elástico:
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  fill: 'forwards'
});

}

window.Script51 = function()
{
  
// Localizamos el objeto por su ID de accesibilidad
const grupoMensaje = object('6EHTlpvrsle');

if (grupoMensaje) {
  // Aseguramos el estado inicial antes de la animación
  grupoMensaje.style.opacity = '0';
  grupoMensaje.style.transformOrigin = 'center bottom';

  // Ejecutamos la animación directamente
  grupoMensaje.animate([
    { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(-5px) scale(1.02)', offset: 0.7 },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0.62, -0.1, 0.36, 1.5)',
    fill: 'forwards'
  });
}
}

window.Script52 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="5mWvydlScU3"]'), 
    document.querySelector('[data-model-id="5eQKknBBhr7"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 0
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "+=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 1,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script53 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="5mWvydlScU3"]'), 
    document.querySelector('[data-model-id="5eQKknBBhr7"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 1
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "-=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 0,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script54 = function()
{
  

var book = object('6XCf7ziLJEP');


// 2. Crear la animación con GSAP
gsap.to(book, {
  y: "-=10",           // Distancia del flote (30 píxeles hacia arriba)
  duration: 2,         // Tiempo en segundos para completar el trayecto
  repeat: -1,          // El valor -1 crea el bucle (loop) infinito
  yoyo: true,           // Hace que regrese suavemente (sube y baja)
  ease: "sine.inOut",   // Curva de aceleración suave para efecto orgánico
  force3D: true        // Optimiza el uso de la tarjeta gráfica del navegador
});
}

window.Script55 = function()
{
  var personaje = object('6MyX7gdsZ0e');

personaje.style.opacity = "0";

const animacion = personaje.animate([
  { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 }
], {
  duration: 1200,
  // 'bounce' no existe en Web Animations API nativo, usamos un equivalente elástico:
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  fill: 'forwards'
});

}

window.Script56 = function()
{
  
// Localizamos el objeto por su ID de accesibilidad
const grupoMensaje = object('6B9ba5XB5ml');

if (grupoMensaje) {
  // Aseguramos el estado inicial antes de la animación
  grupoMensaje.style.opacity = '0';
  grupoMensaje.style.transformOrigin = 'center bottom';

  // Ejecutamos la animación directamente
  grupoMensaje.animate([
    { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(-5px) scale(1.02)', offset: 0.7 },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0.62, -0.1, 0.36, 1.5)',
    fill: 'forwards'
  });
}
}

window.Script57 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="5kF6vI4svXI"]'), 
    document.querySelector('[data-model-id="62Lo41Woznh"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 0
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "+=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 1,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script58 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="5kF6vI4svXI"]'), 
    document.querySelector('[data-model-id="62Lo41Woznh"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 1
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "-=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 0,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script59 = function()
{
  var book = object('6P2SiVWVpy3');


// 2. Crear la animación con GSAP
gsap.to(book, {
  y: "-=10",           // Distancia del flote (30 píxeles hacia arriba)
  duration: 2,         // Tiempo en segundos para completar el trayecto
  repeat: -1,          // El valor -1 crea el bucle (loop) infinito
  yoyo: true,           // Hace que regrese suavemente (sube y baja)
  ease: "sine.inOut",   // Curva de aceleración suave para efecto orgánico
  force3D: true        // Optimiza el uso de la tarjeta gráfica del navegador
});
}

window.Script60 = function()
{
  var personaje = object('5tkpgWuTklG');

personaje.style.opacity = "0";

const animacion = personaje.animate([
  { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 }
], {
  duration: 1200,
  // 'bounce' no existe en Web Animations API nativo, usamos un equivalente elástico:
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  fill: 'forwards'
});

}

window.Script61 = function()
{
  
// Localizamos el objeto por su ID de accesibilidad
const grupoMensaje = object('6pJTR7XIXyB');

if (grupoMensaje) {
  // Aseguramos el estado inicial antes de la animación
  grupoMensaje.style.opacity = '0';
  grupoMensaje.style.transformOrigin = 'center bottom';

  // Ejecutamos la animación directamente
  grupoMensaje.animate([
    { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(-5px) scale(1.02)', offset: 0.7 },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0.62, -0.1, 0.36, 1.5)',
    fill: 'forwards'
  });
}
}

window.Script62 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="5YVNOLYBtsD"]'), 
    document.querySelector('[data-model-id="68jBWgzAQlj"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 0
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "+=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 1,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script63 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="5YVNOLYBtsD"]'), 
    document.querySelector('[data-model-id="68jBWgzAQlj"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 1
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "-=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 0,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script64 = function()
{
  var personaje = object('5x1VsLmuVxr');

personaje.style.opacity = "0";

const animacion = personaje.animate([
  { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 }
], {
  duration: 1200,
  // 'bounce' no existe en Web Animations API nativo, usamos un equivalente elástico:
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  fill: 'forwards'
});

}

window.Script65 = function()
{
  
// Localizamos el objeto por su ID de accesibilidad
const grupoMensaje = object('5cEkzaaZfwY');

if (grupoMensaje) {
  // Aseguramos el estado inicial antes de la animación
  grupoMensaje.style.opacity = '0';
  grupoMensaje.style.transformOrigin = 'center bottom';

  // Ejecutamos la animación directamente
  grupoMensaje.animate([
    { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(-5px) scale(1.02)', offset: 0.7 },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0.62, -0.1, 0.36, 1.5)',
    fill: 'forwards'
  });
}
}

window.Script66 = function()
{
  var book = object('5VBMCgT5vJg');


// 2. Crear la animación con GSAP
gsap.to(book, {
  y: "-=10",           // Distancia del flote (30 píxeles hacia arriba)
  duration: 2,         // Tiempo en segundos para completar el trayecto
  repeat: -1,          // El valor -1 crea el bucle (loop) infinito
  yoyo: true,           // Hace que regrese suavemente (sube y baja)
  ease: "sine.inOut",   // Curva de aceleración suave para efecto orgánico
  force3D: true        // Optimiza el uso de la tarjeta gráfica del navegador
});
}

window.Script67 = function()
{
  // 1. Identificamos tus 3 objetos exactos
const componentesInterfaz = [
    document.querySelector('[data-model-id="5ajVkCBpBd5"]'), 
    document.querySelector('[data-model-id="6Pk9Si2DZ8C"]'), 
    document.querySelector('[data-model-id="5ZlyS5RdulO"]')  
].filter(obj => obj !== null); 

if (componentesInterfaz.length > 0) {
    
    // 2. PREPARACIÓN: Solo los hacemos invisibles, sin moverlos de su lugar original
    gsap.set(componentesInterfaz, {
        autoAlpha: 1
    });

    // 3. MOVIMIENTO FÍSICO (El secreto está en el "+=")
    // "from" hace que vengan DESDE 100px a la derecha y regresen a su coordenada original intacta
    gsap.from(componentesInterfaz, {
        x: "-=100",          // Magia pura: respeta las coordenadas de Articulate
        duration: 2,
        ease: "power3.out",  
        stagger: 0.3         
    });

    // 4. OPACIDAD FLOTANTE: Se materializan lentamente en su lugar
    gsap.to(componentesInterfaz, {
        autoAlpha: 0,
        duration: 4,         
        ease: "none",        
        stagger: 0.3         
    });
    
} else {
    alert("No se encontraron los objetos.");
}
}

window.Script68 = function()
{
  var personaje = object('6ajJugqc5XY');

personaje.style.opacity = "0";

const animacion = personaje.animate([
  { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
  { transform: 'translateY(0) scale(1)', opacity: 1 }
], {
  duration: 1200,
  // 'bounce' no existe en Web Animations API nativo, usamos un equivalente elástico:
  easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
  fill: 'forwards'
});

}

window.Script69 = function()
{
  
// Localizamos el objeto por su ID de accesibilidad
const grupoMensaje = object('5cCo9tGEeXk');

if (grupoMensaje) {
  // Aseguramos el estado inicial antes de la animación
  grupoMensaje.style.opacity = '0';
  grupoMensaje.style.transformOrigin = 'center bottom';

  // Ejecutamos la animación directamente
  grupoMensaje.animate([
    { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
    { opacity: 1, transform: 'translateY(-5px) scale(1.02)', offset: 0.7 },
    { opacity: 1, transform: 'translateY(0) scale(1)' }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0.62, -0.1, 0.36, 1.5)',
    fill: 'forwards'
  });
}
}

};
