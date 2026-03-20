function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kcm2sURs8W":
        Script1();
        break;
      case "6RvuqP150oD":
        Script2();
        break;
      case "6iYykaOpcnU":
        Script3();
        break;
      case "6dEsVakajsf":
        Script4();
        break;
      case "6WBUKRLEOQC":
        Script5();
        break;
      case "6Ry1ilFib5p":
        Script6();
        break;
      case "5YnrjP0d7JL":
        Script7();
        break;
      case "6JiXkoH0sb0":
        Script8();
        break;
      case "6LWxV9MlP5B":
        Script9();
        break;
      case "602F7rveQSZ":
        Script10();
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
  const target = object('6TaGfJ31AAR');
const duration = 750;
const easing = 'ease-out';
const id = '5aXOI5bl8TJ';
const growAmount = 0.1;
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
  const target = object('6TaGfJ31AAR');
const duration = 750;
const easing = 'ease-out';
const id = '5aXOI5bl8TJ_reverse';
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
