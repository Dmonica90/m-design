function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Omg3WERIC6":
        Script1();
        break;
      case "5yTAXJ9hfGm":
        Script2();
        break;
      case "6KWWfV8xEtW":
        Script3();
        break;
      case "5hMyZNOBh8W":
        Script4();
        break;
      case "5mos7OwGDcK":
        Script5();
        break;
      case "6c6IofHjTcS":
        Script6();
        break;
      case "6ZFB2IQbdbx":
        Script7();
        break;
      case "60LPfiamcjn":
        Script8();
        break;
      case "6hkvBZe8Zs5":
        Script9();
        break;
      case "6B6LVqqIiYh":
        Script10();
        break;
      case "5wWoVthhcdC":
        Script11();
        break;
  }
}

window.InitExecuteScripts = function()
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
  const target = object('6ZNP3xMYW1d');
const duration = 750;
const easing = 'ease-in';
const id = '6ImbQPgTq6i';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6ZNP3xMYW1d');
const duration = 750;
const easing = 'ease-in';
const id = '6ImbQPgTq6i_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5qwzHJugoji');
const duration = 750;
const easing = 'ease-out';
const id = '68Wf43MUoap';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6l6xb0UrA2c');
const duration = 250;
const easing = 'ease-in';
const id = '6HMf12jIOCm';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6l6xb0UrA2c');
const duration = 250;
const easing = 'ease-in';
const id = '6HMf12jIOCm_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
