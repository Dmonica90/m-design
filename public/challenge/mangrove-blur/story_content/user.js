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
window.Script1 = function()
{
  var overlay = document.querySelector('[data-acc-text="Dark_overlay"]');
var text2 = object('5aGeV5AHEHx');
var text3 = object('6IMPmiuWDqH');

if(overlay) overlay.style.opacity = 0;
if(text2) text2.style.opacity = 0;
if(text3) text3.style.opacity = 0;
}

window.Script2 = function()
{
  
var player = GetPlayer();
var nivelBlur = player.GetVar("BlurNivel");


var imagenFondo = document.querySelector('[data-acc-text="Mangrove_background"]');
if (imagenFondo) {
    imagenFondo.style.filter = "blur(" + nivelBlur + "px)";
    imagenFondo.style.transition = "filter 0.1s ease";
}


var overlay = document.querySelector('[data-acc-text="Dark_overlay"]');
if (overlay) {
     var calcOpacity = (nivelBlur / 15) * 1; 
    overlay.style.opacity = calcOpacity;
    overlay.style.transition = "opacity 0.1s ease";
}



var text2 = object('5aGeV5AHEHx');
var text3 = object('6IMPmiuWDqH');


if (text2) {
    text2.style.transition = "opacity 0.5s ease"; 
    if (nivelBlur >= 7) {
        text2.style.opacity = 1;
    } else {
        text2.style.opacity = 0;
    }
}


if (text3) {
    text3.style.transition = "opacity 0.5s ease";
    if (nivelBlur >= 14) {
        text3.style.opacity = 1;
    } else {
        text3.style.opacity = 0;
    }
}
}

};
