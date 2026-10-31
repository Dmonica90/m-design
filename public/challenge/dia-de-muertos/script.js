// El recorrido conserva el movimiento de plataformas de Phaser y convierte
// cada encuentro en un capítulo de la historia del colibrí.
const pasos = [
  {id:'foto', nombre_en:"The Portrait · The Beginning of the Journey", texto_en:"Little Miss Skeleton wandered near,\nSearching for a face so dear.\nA lovely frame began to glow,\nA memory brought back to show.\n\nA hummingbird flew by and said:\n“Place their portrait where love is spread.\nFor those we love will never part,\nDeath cannot erase them from our hearts.”", nombre:'El retrato · El inicio del camino', sprite:'marco', y:268, texto:'Andaba la Calaquita\nbuscando a quién recordar,\ncon un marco muy bonito\nque hoy vuelve a brillar.\n\nDice el colibrí volando:\n«Pon su rostro en este altar,\nque el amor que le tenemos\nla muerte no ha de borrar».', x:480},
  {id:'copal', nombre_en:"The Copal · The Breath of Life", texto_en:"The bony lady walked along,\nThrough misty paths, both gray and long.\nThen came a sweet and fragrant smoke,\nA gentle scent that seemed to spoke.\n\n“It’s copal,” the little bird explained,\n“A sacred smoke, a gift regained.\nIt cleanses the path, so souls may find\nA peaceful welcome, warm and kind.”", nombre:'El copal · El aliento', sprite:'copal', y:262, texto:'Siguió su ruta la huesuda\npor el caminito gris,\ncuando un aroma de humito\nla sacó de su matriz.\n\n«Es el copal —dice el ave—,\nque purifica el lugar,\npara que el alma querida\nhalle paz al regresar».', x:1050},
  {id:'velas', nombre_en:"The Candles · The Light", texto_en:"As evening fell and skies turned dark,\nThe candle flames began to spark.\nTheir golden glow lit up the way,\nTo guide the souls who've come to stay.\n\nThe hummingbird flew round and round:\n“No soul is ever truly lost or bound,\nAs long as there's a light aglow,\nAnd a loving home to welcome those.”", nombre:'Las velas · La luz', sprite:'vela1', y:272, texto:'Al caer la tarde oscurita\nla flama empieza a temblar,\nson las velas encendidas\nque alumbran el bien llegar.\n\nEl colibrí revolotea\ny le vuelve a recordar:\n«Ninguna alma se nos pierde\nsi hay una luz en el hogar».', x:1620},
  {id:'comida', nombre_en:"Pan de Muerto and Mole · The Flavors", texto_en:"A delicious scent came drifting by,\nLike orange blossoms in the sky.\nIt was Pan de Muerto, soft and sweet,\nAnd mole, a feast no soul could beat!\n\n“With bread adorned with bones so small,\nAnd mole prepared to welcome all,\nWe offer food, we offer cheer,\nWith all our hearts, you're welcome here!”", nombre:'Pan de muerto y mole · Los sabores', sprite:'pan', y:258, texto:'De repente, por el suelo,\nun olor rico sopló:\nera un pan con harto azahar\ny un mole que despertó.\n\n«Con pan de huesitos ricos\ny un buen plato de sazón,\nles damos la bienvenida\ncon todo nuestro corazón».', x:2190},
  {id:'calaverita', nombre_en:"Sugar Skulls and Papel Picado · Color and Sweetness", texto_en:"The papel picado danced in the breeze,\nWith colors swaying through the trees.\nA little sugar skull, so bright,\nBrought sweetness to this festive night.\n\n“Death is not so bitter, you see,\nWhen life is celebrated joyfully.\nLook how the paper dances high,\nAnd brings a smile to souls nearby!”", nombre:'Calaverita y papel picado · El color y la dulzura', sprite:'calav2', y:276, texto:'Bailaba el papel al viento\ncon colores de ilusión,\nmientras una calaverita\nle regalaba un panteón.\n\n«La muerte no es tan amarga\nsi se celebra el vivir;\nmira el papel cómo danza\npara a las almas reír».', x:2760},
  {id:'sal', nombre_en:"The Salt · Purification", texto_en:"The bony lady stumbled down,\nRight where a little white bowl was found.\nIt held the salt, so pure and bright,\nA symbol of protection through the night.\n\n“It guides and guards the spirits here,\nAs they journey far and near.\nA little salt to keep them safe,\nAs they return to their resting place.”", nombre:'La sal · La purificación', sprite:'sal', y:262, texto:'Cae la flaca tropezando\ndonde un cuenco blanco hay:\nes la sal de la concordia\nque cuida el alma en el \'ay\'.\n\n«Sirve de guía y custodia\npara que al ir y venir,\nel espíritu se guarde\nsin corromperse ni huir».', x:3330},
  {id:'flores', nombre_en:"The Marigolds · The Grand Finale", texto_en:"At last, the path smelled just like spring,\nWith golden flowers blossoming.\nIt was the marigolds, bright and bold,\nLighting the way with petals of gold!\n\nThe hummingbird chirped with delight:\n“The house is ready, shining bright!\nCome take your place, the feast is set,\nA celebration we'll never forget!”", nombre:'El cempasúchil · El gran final', sprite:'flor', y:270, texto:'Por fin huele a sol y campo\nel sendero que pisó:\n¡era el cempasúchil tierno\nque el camino iluminó!\n\nDice el colibrí dichoso:\n«Ya está lista la mansión,\npueden pasar a la mesa\na celebrar la unión».', x:3900}
];
// Paleta "Autumn in Mexico": cempasúchil, magenta night, majestic purple y golden yellow.
const PAL={cempa:0xF27A01,magenta:0xC2257A,purple:0x360543,gold:0xF7AB11,cream:0xFFF3DC,turq:0x3FC1C9,lav:0x8A4FB8};
const W=1000,H=440,GROUND=396,WORLD=4450;
const TRAP_X=[370,760,1340,1900,2475,3040,3610];
// Trampas: filas y anchos medidos sobre los PNG de 512×512 (caja abajo,
// esqueleto arriba); bottom es la base de la caja para apoyarla en el suelo.
const TRAPS=[
  {key:'tumba1',frames:11,scale:.2,bottom:478,top:85,boxTop:329,boxW:238,skelW:150},
  {key:'tumba2',frames:9,scale:.2,bottom:474,top:38,boxTop:293,boxW:300,skelW:160}
];

let collected = new Set();
let currentStep = 0;
let photoData = '';
let extraPhotos = [];
// Nombre vacío = "Alguien especial" en el idioma activo. La frase es el índice de una
// de las frases sugeridas (0–2) o el texto propio que escribió la persona.
let dedication = '';
let phraseChoice = 0;
const currentName=()=>dedication||t('defaultName');
const currentPhrase=()=>typeof phraseChoice==='number'?t(`phrase${phraseChoice}`):phraseChoice;
const stepName=step=>lang==='en'?step.nombre_en:step.nombre;
const stepText=step=>lang==='en'?step.texto_en:step.texto;
let frameType = 'persona';
let pendingItem = null;
let player, cursors, items, sceneRef, guide, guideTrail;
let altarStyle='tradicional', renderToken=0, pendingExtra='', ofrendaScene=null, ofrendaRaf=0;
let leftDown=false, rightDown=false, jumpDown=false, jumpReleased=true;
let audioMuted=false;
// Música de fondo en un <audio> (funciona también abierto como archivo). Versión AAC ligera;
// no se descarga hasta que empieza el juego para no competir con las imágenes.
const bgMusic=new Audio('assets/sounds/musica.m4a');bgMusic.loop=true;bgMusic.volume=.35;bgMusic.preload='none';
let nextTrailAt=0, hurtUntil=0, trail=[];
// Ancho visible del mundo: se adapta a la pantalla para llenarla sin recortar.
let viewW=W, gameBackground=null, fallingPetals=null;
// El juego se dibuja a más resolución (zoom de cámara) para que no se vea pixeleado.
let zoom=1;
// En celulares se usa menos resolución y zoom para no agotar la memoria de video.
const isTouch=matchMedia('(hover: none)').matches;
const BAKE_RES=isTouch?1.5:Math.min(2,Math.max(1.5,window.devicePixelRatio||1));
const MAX_ZOOM=isTouch?2:2.5;
let avatarFacing=1;
const isFile=location.protocol==='file:';
const touchQuery=matchMedia('(hover: none)'), portraitQuery=matchMedia('(orientation: portrait)');

const config = {
  // Desde file:// WebGL no acepta las imágenes locales; Canvas sí.
  type: isFile?Phaser.CANVAS:Phaser.AUTO,
  parent: 'game-container',
  width: W, height: H,
  scale: {mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH},
  backgroundColor: '#360543',
  loader: {imageLoadType: 'HTMLImageElement'},
  audio: {disableWebAudio: isFile},
  physics: {default:'arcade', arcade:{gravity:{y:850}, debug:false}},
  scene: {preload, create, update}
};
const game = new Phaser.Game(config);

function preload(){
  const img=(key,path)=>this.load.image(key,encodeURI(path));
  this.load.on('progress',setLoading);this.load.on('complete',()=>setLoading(1));
  // Esqueleto: cuadros recortados y reducidos desde assets/personaje/walk/Skeleton 0N.png.
  // Esqueleto: cuadros de walk/, stay/ y jump/ recortados con la misma caja (285×272, suelo abajo).
  for(let i=1;i<=8;i++)img(`correr${i}`,`assets/personaje/esqueleto/correr${i}.png`);
  for(let i=1;i<=3;i++)img(`quieto${i}`,`assets/personaje/esqueleto/quieto${i}.png`);
  for(let i=1;i<=7;i++)img(`salto${i}`,`assets/personaje/esqueleto/salto${i}.png`);
  img('game-background','assets/Background_all.png');
  for(let i=1;i<=5;i++)img(`colibriFlight${i}`,`assets/colibri/colibri${i}.png`);
  for(let i=1;i<=11;i++)img(`tumba1Frame${i}`,`assets/tumba1/tumbaM${i}.png`);
  for(let i=1;i<=9;i++)img(`tumba2Frame${i}`,`assets/tumba2/tumbaM${i}.png`);
  img('petalo','assets/1x/petalo.png');
  img('vela1','assets/1x/vela1.png');img('vela2','assets/1x/vela2.png');img('flor','assets/1x/Flor.png');
  img('colibri','assets/1x/colibri.png');img('pan','assets/1x/pan de muerto.png');img('marco','assets/1x/retrato.png');img('florero','assets/1x/florero.png');
  for(let i=1;i<=6;i++)img(`pp${i}`,`assets/1x/papelpicado${i}.png`);
  ['calaveritra1','calaverita2','calaverita 3','calaverita4','calaverita5','calaverita6'].forEach((file,i)=>img(`calav${i+1}`,`assets/1x/${file}.png`));
  this.load.audio('pickup','assets/sounds/Diamond.mp3');
}

function create(){
  sceneRef=this;
  this.physics.world.setBounds(0,0,WORLD,H);
  this.cameras.main.setBounds(0,0,WORLD,H);
  this.sound.mute=audioMuted;
  bakeTextures(this);
  // Fondo en capas: cielo fijo, pueblo lejano y calle cercana con papel picado.
  gameBackground=this.add.image(viewW/2,H/2,'game-background').setScrollFactor(0).setDepth(0);
  gameBackground.setScale(Math.max(viewW/gameBackground.width,H/gameBackground.height));
  addLayer(this,'far',0,.25,1);
  addLayer(this,'mid',0,.55,2);
  addPapelFlags(this);
  addLayer(this,'ground',GROUND,1,5);
  const floor=this.add.zone(WORLD/2,GROUND+22,WORLD,44);
  this.physics.add.existing(floor,true);
  addStreetDecor(this);

  createAnimations(this);
  player=this.physics.add.sprite(250,GROUND-140,'correr1').setScale(90/256).setDepth(20);
  // Cuadros de 285×272 con el suelo en la última fila; cuerpo centrado en el esqueleto (x≈118).
  player.body.setSize(70,236).setOffset(83,36);
  player.setCollideWorldBounds(true);
  player.play('idle');
  this.physics.add.collider(player,floor);
  avatarFacing=1;hurtUntil=0;trail=[];

  addTraps(this);
  addItems(this);

  guide=this.add.sprite(player.x+90,player.y-110,'colibriFlight1').setDepth(45);
  guide.setScale(72/guide.width);
  guide.play('colibri-flight');
  // Estela de destellos dorados detrás del colibrí.
  guideTrail=this.add.particles(0,0,'glow',{follow:guide,followOffset:{x:-22,y:8},lifespan:520,speed:{min:4,max:18},scale:{start:.22,end:0},alpha:{start:.85,end:0},frequency:60,blendMode:'ADD'}).setDepth(44);

  // Pétalos que caen sobre toda la escena.
  // Siguen a la cámara (en update) en lugar de fijarse a la pantalla, para que el zoom no los desplace.
  fallingPetals=this.add.particles(0,-20,'petalo',{x:{min:0,max:W},lifespan:11000,speedY:{min:22,max:50},speedX:{min:-24,max:14},rotate:{min:0,max:360},scale:{min:.12,max:.22},alpha:{start:.9,end:.5},frequency:420}).setDepth(60);

  this.cameras.main.startFollow(player,true,.08,.08,-viewW*.12,0);
  cursors=this.input.keyboard.createCursorKeys();
  createMobileControls();
  refreshItemHighlights();
  // Si ya se pulsó "Comenzar" mientras cargaba, el juego sigue sin pausa.
  if(!document.body.classList.contains('playing')||document.querySelector('.modal.open')||needsRotate())this.scene.pause();
  renderProgress();
  fitWorldToScreen();
}

// El mundo mide 440 de alto y su ancho visible sigue la proporción del contenedor
// (680–1000). El canvas se dibuja a la resolución real de la pantalla y la cámara
// hace zoom, así el juego llena el espacio sin recortarse ni pixelearse.
function fitWorldToScreen(){
  // Un resize antes de que Phaser termine de arrancar rompe setGameSize.
  if(!game.isBooted||!game.canvas)return;
  const box=document.getElementById('game-container').getBoundingClientRect();
  if(!box.width||!box.height)return;
  const nextW=Phaser.Math.Clamp(Math.round(H*box.width/box.height),680,W);
  const nextZoom=Phaser.Math.Clamp(Math.round(box.height*(window.devicePixelRatio||1)/H*4)/4,1,MAX_ZOOM);
  const gw=Math.round(nextW*nextZoom),gh=Math.round(H*nextZoom);
  viewW=nextW;zoom=nextZoom;
  if(gw!==game.scale.gameSize.width||gh!==game.scale.gameSize.height)game.scale.setGameSize(gw,gh);
  game.scale.refresh();
  if(!sceneRef||!sceneRef.cameras)return;
  const cam=sceneRef.cameras.main;cam.setSize(gw,gh);cam.setZoom(zoom);cam.setFollowOffset(-viewW*.12,0);
  // Con zoom, lo fijo a la pantalla se escala desde el centro de la cámara.
  if(gameBackground){gameBackground.setPosition(gw/2,gh/2);gameBackground.setScale(Math.max(viewW/gameBackground.width,H/gameBackground.height)*1.02);}
}

function createAnimations(scene){
  if(scene.anims.exists('idle'))return;
  const frames=(name,count)=>Array.from({length:count},(_,i)=>({key:`${name}${i+1}`}));
  scene.anims.create({key:'idle',frames:frames('quieto',3),frameRate:4,yoyo:true,repeat:-1});
  scene.anims.create({key:'walk',frames:frames('correr',8),frameRate:14,repeat:-1});
  scene.anims.create({key:'colibri-flight',frames:frames('colibriFlight',5),frameRate:12,repeat:-1});
  TRAPS.forEach(t=>scene.anims.create({key:`${t.key}-rise`,frames:frames(`${t.key}Frame`,t.frames),frameRate:5,repeat:-1}));
}

function addTraps(scene){
  TRAP_X.forEach((x,i)=>{
    const t=TRAPS[i%2],s=t.scale;
    // Las medidas de TRAPS están en píxeles de un cuadro de 512; se ajusta si el PNG es más chico.
    const frameScale=512/scene.textures.get(`${t.key}Frame1`).getSourceImage().width;
    const sprite=scene.add.sprite(x,GROUND+2,`${t.key}Frame1`).setOrigin(.5,t.bottom/512).setScale(s*frameScale).setDepth(12);
    sprite.play(`${t.key}-rise`);
    const boxH=(t.bottom-t.boxTop)*s,skelTop=GROUND-(t.bottom-t.top)*s;
    const box=scene.add.zone(x,GROUND-boxH/2,t.boxW*s,boxH);
    scene.physics.add.existing(box,true);scene.physics.add.collider(player,box);
    const skel=scene.add.zone(x,(skelTop+GROUND-boxH)/2,t.skelW*s,GROUND-boxH-skelTop);
    scene.physics.add.existing(skel,true);skel.sprite=sprite;
    scene.physics.add.overlap(player,skel,hitTrap);
  });
}

function hitTrap(_player,skel){
  const now=sceneRef.time.now;if(now<hurtUntil)return;
  // En el primer y último cuadro el esqueleto está escondido en la caja.
  const frame=skel.sprite.anims.currentFrame;
  if(frame&&(frame.isFirst||frame.isLast))return;
  hurtUntil=now+650;
  const dir=player.x<skel.x?-1:1;
  player.body.setVelocity(dir*240,-280);
  sceneRef.cameras.main.shake(160,.004);
  sceneRef.tweens.add({targets:player,alpha:.35,duration:80,yoyo:true,repeat:3,onComplete:()=>player.setAlpha(1)});
  sceneRef.tweens.add({targets:skel.sprite,angle:{from:-7,to:7},duration:70,yoyo:true,repeat:3,onComplete:()=>skel.sprite.setAngle(0)});
}

function addItems(scene){
  items=[];
  pasos.forEach((step,i)=>{
    // Los recuerdos flotan alto: se toman saltando, no al pasar caminando por debajo.
    const y=step.y-52;
    const halo=scene.add.circle(step.x,y,34,PAL.gold,.16).setStrokeStyle(2.5,PAL.gold,.85).setDepth(40);
    const img=scene.add.image(step.x,y,step.sprite).setDepth(41);
    img.setScale((step.id==='foto'?58:50)/Math.max(img.width,img.height));
    const number=scene.add.text(step.x+26,y-30,String(i+1),{fontFamily:'Nunito, Arial',fontSize:'12px',fontStyle:'900',color:'#360543',backgroundColor:'#F7AB11',padding:{x:5,y:1},resolution:3}).setOrigin(.5).setDepth(42);
    const parts=[halo,img,number];
    if(step.id==='copal'){
      const smoke=scene.add.particles(step.x,y-20,'humo',{lifespan:1800,speedY:{min:-28,max:-14},speedX:{min:-6,max:6},scale:{start:.25,end:.8},alpha:{start:.45,end:0},frequency:180}).setDepth(40);
      parts.push(smoke);
    }
    // Zona ajustada al objeto: su borde inferior queda arriba de la cabeza al caminar.
    const hit=scene.add.zone(step.x,y,60,70);
    scene.physics.add.existing(hit,true);
    hit.stepIndex=i;hit.parts=parts;items.push(hit);
    scene.tweens.add({targets:[halo,img,number],y:'-=10',duration:1000,yoyo:true,repeat:-1,ease:'Sine.easeInOut'});
    scene.tweens.add({targets:halo,scale:1.15,duration:900,yoyo:true,repeat:-1});
  });
  scene.physics.add.overlap(player,items,collectItem);
}

function refreshItemHighlights(){
  (items||[]).forEach(hit=>{if(hit.active)hit.parts.slice(0,3).forEach(p=>p.setAlpha(hit.stepIndex===currentStep?1:.42));});
}

function addStreetDecor(scene){
  const rand=seeded(7);
  for(let x=60;x<WORLD-40;x+=110+Math.floor(rand()*90)){
    if(TRAP_X.some(t=>Math.abs(t-x)<70))continue;
    const r=rand();
    if(r<.38){
      const key=rand()<.5?'vela1':'vela2';
      const glow=scene.add.image(x,GROUND-20,'glow').setDepth(6).setScale(1.3).setBlendMode(Phaser.BlendModes.ADD);
      scene.add.image(x,GROUND+3,key).setOrigin(.5,1).setScale(30/scene.textures.get(key).getSourceImage().height).setDepth(7);
      scene.tweens.add({targets:glow,alpha:{from:.55,to:1},scale:{from:1.15,to:1.4},duration:600+rand()*500,yoyo:true,repeat:-1});
    }else if(r<.5){
      scene.add.image(x,GROUND+4,'florero').setOrigin(.5,1).setScale(64/scene.textures.get('florero').getSourceImage().height).setDepth(7);
    }else if(r<.8){
      const n=1+Math.floor(rand()*3);
      for(let k=0;k<n;k++)scene.add.image(x+k*22-(n-1)*11,GROUND+6,'flor').setOrigin(.5,1).setScale((26+rand()*14)/scene.textures.get('flor').getSourceImage().width).setDepth(7);
    }else{
      const key=`calav${1+Math.floor(rand()*6)}`;
      scene.add.image(x,GROUND+4,key).setOrigin(.5,1).setScale(30/scene.textures.get(key).getSourceImage().height).setDepth(7);
    }
  }
}

function update(){
  if(!player||!sceneRef)return;
  const now=sceneRef.time.now,hurt=now<hurtUntil;
  const left=cursors.left.isDown||leftDown,right=cursors.right.isDown||rightDown,jump=cursors.up.isDown||cursors.space.isDown||jumpDown;
  const grounded=player.body.blocked.down||player.body.touching.down;
  if(!hurt){
    player.body.setVelocityX(0);
    if(left){player.body.setVelocityX(-245);avatarFacing=-1;}
    else if(right){player.body.setVelocityX(245);avatarFacing=1;}
  }
  if(grounded&&Math.abs(player.body.velocity.x)>1)leavePetal();
  if(!jump)jumpReleased=true;
  if(jump&&jumpReleased&&grounded&&!hurt){player.body.setVelocityY(-540);jumpReleased=false;}
  updateAvatarAnimation(grounded);
  updateGuide(now);
  if(fallingPetals){const v=sceneRef.cameras.main.worldView;fallingPetals.setPosition(v.x,v.y-20);}
}

let wasAirborne=false, landingUntil=0;
function updateAvatarAnimation(grounded){
  player.setFlipX(avatarFacing<0);
  const now=sceneRef.time.now;
  if(!grounded){
    // En el aire el cuadro sigue a la velocidad vertical: impulso (1), punto alto (4) y bajada (6).
    wasAirborne=true;player.anims.stop();
    const vy=Phaser.Math.Clamp(player.body.velocity.y,-540,540);
    player.setTexture(`salto${1+Math.round((vy+540)/1080*5)}`);
    return;
  }
  // Al tocar el suelo se ve la pose de aterrizaje (salto7) un instante.
  if(wasAirborne){wasAirborne=false;landingUntil=now+170;}
  if(now<landingUntil){player.anims.stop();player.setTexture('salto7');return;}
  player.anims.play(Math.abs(player.body.velocity.x)>1?'walk':'idle',true);
}

// El colibrí vuela delante de la Calaquita y se acerca al siguiente recuerdo.
function updateGuide(now){
  if(!guide)return;
  const target=items.find(hit=>hit.active&&hit.stepIndex===currentStep);
  let tx=player.x+90*avatarFacing,ty=player.y-115;
  if(target){
    const dx=target.x-player.x;
    if(Math.abs(dx)<420){tx=target.x-46*Math.sign(dx||1);ty=target.y-72;}
    else{tx=player.x+110*Math.sign(dx);}
  }
  const vx=(tx-guide.x)*.05;
  guide.x+=vx;
  guide.y+=(ty+Math.sin(now/260)*7-guide.y)*.07;
  const look=target?target.x-guide.x:avatarFacing;
  guide.setFlipX(look<0);
  // Se inclina hacia adelante cuando vuela rápido.
  if(!guide.celebrating)guide.rotation+=(Phaser.Math.Clamp(vx*.03,-.35,.35)-guide.rotation)*.15;
  if(guideTrail)guideTrail.followOffset.x=guide.flipX?22:-22;
}
// Vuelta en el aire al conseguir un recuerdo.
function guideCelebrate(){
  if(!guide)return;
  guide.celebrating=true;
  sceneRef.tweens.add({targets:guide,angle:guide.flipX?-360:360,duration:650,ease:'Cubic.easeInOut',onComplete:()=>{guide.setAngle(0);guide.celebrating=false;}});
}

function leavePetal(){
  const now=sceneRef.time.now;if(now<nextTrailAt)return;nextTrailAt=now+110;
  const petal=sceneRef.add.image(player.x-avatarFacing*Phaser.Math.Between(4,16),GROUND+3,'petalo').setRotation(Phaser.Math.FloatBetween(0,Math.PI*2)).setScale(Phaser.Math.FloatBetween(.12,.18)).setAlpha(.92).setDepth(8);
  trail.push(petal);if(trail.length>320)trail.shift().destroy();
}

function collectItem(_player,item){
  if(!item.active||item.stepIndex!==currentStep||pendingItem)return;
  leftDown=false;rightDown=false;jumpDown=false;
  pendingItem=item;player.body.setVelocity(0,0);sceneRef.scene.pause();
  document.getElementById('custom-fields').hidden=true;
  fillStory(item.stepIndex);
  document.getElementById('story-modal').classList.add('open');
  if(sceneRef.cache.audio.exists('pickup'))sceneRef.sound.play('pickup',{volume:.55});
}

// Textos de la ventana de un paso en el idioma activo (también al cambiar de idioma).
function fillStory(index){
  const step=pasos[index];
  document.getElementById('modal-eyebrow').textContent=t('stepEyebrow',{n:['I','II','III','IV','V','VI','VII'][index]});
  document.getElementById('modal-title').textContent=stepName(step);
  const art=document.getElementById('step-art-img');art.src=`assets/pasos/paso${index+1}.jpg`;art.alt=stepName(step);
  document.getElementById('modal-story').textContent=stepText(step);
  const fields=document.getElementById('custom-fields'),optionsToggle=document.getElementById('portrait-options-toggle');
  optionsToggle.hidden=step.id!=='foto';
  optionsToggle.setAttribute('aria-expanded',String(!fields.hidden));
  optionsToggle.textContent=fields.hidden?t('addPhotoName'):t('hideOptions');
  document.getElementById('collect-button').textContent=step.id==='foto'?t('saveContinue'):t('continuePath');
}
function togglePortraitOptions(){
  const fields=document.getElementById('custom-fields'),button=document.getElementById('portrait-options-toggle');
  fields.hidden=!fields.hidden;
  button.setAttribute('aria-expanded',String(!fields.hidden));
  button.textContent=fields.hidden?t('addPhotoName'):t('hideOptions');
  if(!fields.hidden)fields.scrollIntoView({behavior:'smooth',block:'start'});
}

function closeStory(){
  if(!pendingItem)return;
  if(pendingItem.stepIndex===0){
    dedication=document.getElementById('dedication-input').value.trim();
    phraseChoice=document.getElementById('custom-phrase-input').value.trim()||Number(document.querySelector('input[name="phrase"]:checked').value);
    frameType=document.querySelector('input[name="frame"]:checked').value;
  }
  const item=pasos[pendingItem.stepIndex];collected.add(item.id);
  pendingItem.parts.forEach(part=>part.destroy());pendingItem.destroy();pendingItem=null;
  syncDedication();
  document.getElementById('story-modal').classList.remove('open');
  currentStep++;
  renderProgress();
  if(currentStep>=pasos.length){showAltar();return;}
  refreshItemHighlights();
  if(!needsRotate())sceneRef.scene.resume();
  guideCelebrate();
}

function renderProgress(){
  const root=document.getElementById('progress');root.innerHTML='';
  pasos.forEach((step,i)=>{const b=document.createElement('span');b.className='earned-item'+(collected.has(step.id)?' won':'');b.title=stepName(step);b.setAttribute('aria-label',stepName(step)+(collected.has(step.id)?' recolectado':' pendiente'));const flower=document.createElement('img');flower.src='assets/1x/Flor.png';flower.alt='';b.appendChild(flower);root.appendChild(b);});
  document.getElementById('earned-count').textContent=t('hudCount',{n:collected.size,total:pasos.length});
}
function syncDedication(){renderOfrenda();}
// La ofrenda se dibuja aparte y se copia al canvas visible para evitar parpadeos.
async function renderOfrenda(){
  if(document.getElementById('altar-stage').style.display!=='block')return;
  clearReady();
  const token=++renderToken;
  const scene=await Ofrenda.build({name:currentName(),phrase:currentPhrase(),photo:photoData,frame:frameType,extras:extraPhotos,style:altarStyle});
  if(token!==renderToken)return;
  ofrendaScene=scene;
  const canvas=document.getElementById('ofrenda-canvas');canvas.width=scene.base.width;canvas.height=scene.base.height;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)Ofrenda.drawFrame(canvas.getContext('2d'),scene,0);
  else if(!ofrendaRaf)ofrendaRaf=requestAnimationFrame(ofrendaLoop);
  document.querySelectorAll('.style-chip').forEach(chip=>chip.classList.toggle('active',chip.dataset.style===altarStyle));
  const full=extraPhotos.length>=Ofrenda.MAX_EXTRAS,add=document.getElementById('add-photo-button');
  // El botón es un icono: el contador va en el título y la etiqueta accesible.
  document.getElementById('edit-portrait-button').classList.toggle('attention',!photoData);
  const label=full?t('offeringFull'):t('addMorePhotos',{n:extraPhotos.length,max:Ofrenda.MAX_EXTRAS});
  add.disabled=full;add.title=label;add.setAttribute('aria-label',label);
}
// Bucle de animación de la ofrenda mientras la página del altar está visible.
function ofrendaLoop(now){
  if(!ofrendaScene||document.getElementById('altar-stage').style.display!=='block'){ofrendaRaf=0;return;}
  Ofrenda.drawFrame(document.getElementById('ofrenda-canvas').getContext('2d'),ofrendaScene,(now/1000/Ofrenda.LOOP)%1);
  ofrendaRaf=requestAnimationFrame(ofrendaLoop);
}
function setAltarStyle(style){altarStyle=style;renderOfrenda();}
function showAltar(){
  document.body.classList.remove('playing');document.body.classList.add('altar');
  leaveLandscape();
  document.getElementById('journey-stage').style.display='none';
  document.getElementById('altar-stage').style.display='block';
  renderOfrenda();window.scrollTo({top:0,behavior:'smooth'});
}
function resetProgress(){
  collected.clear();currentStep=0;dedication='';phraseChoice=0;photoData='';extraPhotos=[];frameType='persona';altarStyle='tradicional';pendingItem=null;
  document.getElementById('extra-photo-input').value='';document.getElementById('photo-input').value='';
  document.getElementById('dedication-input').value='';
  document.getElementById('custom-phrase-input').value='';document.querySelector('input[name="phrase"]').checked=true;
  document.getElementById('story-modal').classList.remove('open');
  leftDown=false;rightDown=false;jumpDown=false;nextTrailAt=0;renderProgress();
}
function restartJourney(){
  document.body.classList.remove('altar');
  resetProgress();
  document.getElementById('altar-stage').style.display='none';document.getElementById('journey-stage').style.display='block';
  document.getElementById('pantalla-inicio').style.display='flex';
  game.scene.scenes[0].scene.restart();
}
// Reinicio desde el juego: vuelve al inicio del camino y sigue jugando, sin pasar por la portada.
function reiniciarRecorrido(){
  closeRestart(false);
  resetProgress();
  const scene=game.scene.scenes[0];
  scene.events.once('create',()=>{if(!needsRotate())scene.scene.resume();fitWorldToScreen();});
  scene.scene.restart();
}

// Guía de cómo jugar: se abre al comenzar y desde el botón "?" durante el juego.
let guideFromStart=false;
function pauseForModal(){if(sceneRef&&document.body.classList.contains('playing'))sceneRef.scene.pause();}
function resumeAfterModal(){
  if(!sceneRef||!document.body.classList.contains('playing')||pendingItem||needsRotate())return;
  if(document.querySelector('.modal.open'))return;
  sceneRef.scene.resume();
}
function openGuide(){
  guideFromStart=!document.body.classList.contains('playing');
  document.getElementById('guide-start').textContent=guideFromStart?t('letsPlay'):t('keepPlaying');
  pauseForModal();
  document.getElementById('guide-modal').classList.add('open');
}
function closeGuide(){
  document.getElementById('guide-modal').classList.remove('open');
  if(guideFromStart){guideFromStart=false;iniciarJuego();}
  else resumeAfterModal();
}
function openRestart(){pauseForModal();document.getElementById('restart-modal').classList.add('open');}
function closeRestart(resume=true){
  document.getElementById('restart-modal').classList.remove('open');
  if(resume)resumeAfterModal();
}
// Botón "Comenzar" deshabilitado con porcentaje mientras cargan las imágenes del juego.
let loadProgress=0;
function setLoading(p){
  loadProgress=p;
  document.querySelectorAll('[data-start-button]').forEach(btn=>{
    btn.disabled=p<1;btn.textContent=p<1?t('loading',{p:Math.round(p*100)}):t('start');
  });
  if(p>=1&&window.Ofrenda&&Ofrenda.warm)setTimeout(()=>Ofrenda.warm(),1500);
}
function iniciarJuego(){
  document.getElementById('pantalla-inicio').style.display='none';
  document.body.classList.add('playing');
  if(touchQuery.matches)enterLandscape();
  startMusic();
  syncOrientation();
}

// En móvil se juega en horizontal: pantalla completa cuando el navegador lo permite
// y, si no (iOS), el aviso de girar el teléfono pausa la escena.
function needsRotate(){return touchQuery.matches&&portraitQuery.matches;}
async function enterLandscape(){
  try{
    if(!document.fullscreenElement&&document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen({navigationUI:'hide'});
    if(screen.orientation&&screen.orientation.lock)await screen.orientation.lock('landscape');
  }catch(e){}
}
function leaveLandscape(){
  try{if(screen.orientation&&screen.orientation.unlock)screen.orientation.unlock();}catch(e){}
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});
}
function syncOrientation(){
  setTimeout(fitWorldToScreen,250);
  if(!sceneRef||!document.body.classList.contains('playing'))return;
  if(needsRotate())sceneRef.scene.pause();
  else resumeAfterModal();
}
portraitQuery.addEventListener('change',syncOrientation);
window.addEventListener('resize',fitWorldToScreen);

function startMusic(){
  if(audioMuted)return;
  bgMusic.play().catch(()=>{});
}
function stopMusic(){bgMusic.pause();}

async function downloadStory(){
  if(!ofrendaScene)return;
  try{
    const canvas=document.createElement('canvas');canvas.width=ofrendaScene.base.width;canvas.height=ofrendaScene.base.height;
    Ofrenda.drawFrame(canvas.getContext('2d'),ofrendaScene,0);
    await deliver(await Ofrenda.toBlob(canvas),`ofrenda-${ofrendaSlug()}-historia.png`,document.getElementById('image-button'));
  }catch(e){localFileNotice();}
}
async function downloadVideo(){
  const button=document.getElementById('video-button');
  if(!ofrendaScene||button.disabled)return;
  if(readyFiles.has(button))return deliver(...readyFiles.get(button),button);
  button.disabled=true;
  let result=null;
  try{
    button.classList.add('recording');
    const {blob,ext}=await Ofrenda.record(ofrendaScene,{onProgress:p=>{button.dataset.count=`${Math.max(1,Math.ceil(Ofrenda.VIDEO_SECONDS*(1-p)))}s`;}});
    result=[blob,`ofrenda-${ofrendaSlug()}-historia.${ext}`];
  }catch(e){
    if(e&&e.name==='SecurityError')localFileNotice();
    else alert(t('noVideo'));
  }finally{button.disabled=false;button.classList.remove('recording');delete button.dataset.count;}
  // Tras 15 s de grabación el navegador ya no permite abrir el menú de compartir: se pide un toque más.
  if(result){if(canShareFile(...result))markReady(button,result);else saveBlob(...result);}
}
// En el celular, el menú de compartir del sistema ofrece "Guardar en Fotos" / "Guardar en la galería".
const readyFiles=new Map();
function canShareFile(blob,name){
  try{return isTouch&&!!navigator.canShare&&navigator.canShare({files:[new File([blob],name,{type:blob.type})]});}catch(e){return false;}
}
function markReady(button,file){readyFiles.set(button,file);button.classList.add('ready');button.dataset.count=t('tapToSave');}
function clearReady(){readyFiles.forEach((f,b)=>{b.classList.remove('ready');delete b.dataset.count;});readyFiles.clear();}
async function deliver(blob,name,button){
  if(!canShareFile(blob,name))return saveBlob(blob,name);
  try{
    await navigator.share({files:[new File([blob],name,{type:blob.type})]});
    if(button){readyFiles.delete(button);button.classList.remove('ready');delete button.dataset.count;}
  }catch(e){
    if(e&&e.name==='NotAllowedError'&&button)markReady(button,[blob,name]);
    else if(!e||e.name!=='AbortError')saveBlob(blob,name);
  }
}
function saveBlob(blob,name){
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.download=name;a.href=url;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);
}
function ofrendaSlug(){return currentName().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'ofrenda';}
// Abierto como archivo local, el navegador bloquea exportar imágenes del disco.
function localFileNotice(){alert(t('localFile'));}

function createMobileControls(){
  const bindings=[['btn-izq','left'],['btn-der','right'],['btn-salto','jump']];
  bindings.forEach(([id,key])=>{const el=document.getElementById(id);if(el.dataset.bound)return;el.dataset.bound='true';const set=v=>{if(key==='left')leftDown=v;else if(key==='right')rightDown=v;else jumpDown=v;};el.addEventListener('pointerdown',e=>{e.preventDefault();set(true);el.setPointerCapture(e.pointerId);});['pointerup','pointercancel','lostpointercapture'].forEach(ev=>el.addEventListener(ev,()=>set(false)));el.addEventListener('contextmenu',e=>e.preventDefault());});
}
function toggleAudio(){
  audioMuted=!audioMuted;game.sound.mute=audioMuted;
  if(!audioMuted)startMusic();else stopMusic();
  document.getElementById('audio-icon').src=audioMuted?'assets/soun0ff.png':'assets/sound.png';
  // Si el botón conserva el foco, la barra espaciadora (saltar) lo vuelve a pulsar.
  document.getElementById('audio-toggle').blur();
}
// Phaser bloquea la barra espaciadora (salto) en toda la página; al escribir en un campo se libera.
document.addEventListener('focusin',e=>{if(e.target.matches('input,textarea')&&game.input&&game.input.keyboard)game.input.keyboard.preventDefault=false;});
document.addEventListener('focusout',e=>{if(e.target.matches('input,textarea')&&game.input&&game.input.keyboard)game.input.keyboard.preventDefault=true;});
// Mientras se juega, espacio y Enter son controles del juego, no clics en botones.
document.addEventListener('keydown',e=>{
  if(document.body.classList.contains('playing')&&(e.code==='Space'||e.code==='Enter')&&e.target.closest&&e.target.closest('button')&&!e.target.closest('.modal')){e.preventDefault();e.target.blur();}
},true);

// ---------- Texturas dibujadas una sola vez con Canvas 2D ----------
function seeded(seed){let s=seed;return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646;};}
function bake(scene,key,w,h,draw){
  if(scene.textures.exists(key))return;
  const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
  draw(canvas.getContext('2d'),w,h);scene.textures.addCanvas(key,canvas);
}
const LAYER_CHUNK=1600,layerChunks={};
function bakeLayer(scene,key,w,h,draw){
  const count=Math.ceil(w/LAYER_CHUNK);layerChunks[key]=count;
  for(let i=0;i<count;i++){
    const ck=`${key}-${i}`;if(scene.textures.exists(ck))continue;
    const cw=Math.min(LAYER_CHUNK,w-i*LAYER_CHUNK),canvas=document.createElement('canvas');
    canvas.width=Math.ceil(cw*BAKE_RES);canvas.height=Math.ceil(h*BAKE_RES);
    const ctx=canvas.getContext('2d');ctx.scale(BAKE_RES,BAKE_RES);ctx.translate(-i*LAYER_CHUNK,0);
    draw(ctx,w,h);scene.textures.addCanvas(ck,canvas);
  }
}
function addLayer(scene,key,y,scrollFactor,depth){
  for(let i=0;i<layerChunks[key];i++)scene.add.image(i*LAYER_CHUNK,y,`${key}-${i}`).setOrigin(0).setScale(1/BAKE_RES).setScrollFactor(scrollFactor,1).setDepth(depth);
}
function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}

function bakeTextures(scene){
  // Capas anchas a más resolución, en trozos para no pasar el límite de texturas.
  // El margen extra cubre el desplazamiento que agrega el zoom de cámara.
  bakeLayer(scene,'far',Math.ceil(W+(WORLD-W)*.25)+500,H,drawFarTown);
  bakeLayer(scene,'mid',Math.ceil(W+(WORLD-W)*.55)+500,H,drawMidStreet);
  bakeLayer(scene,'ground',WORLD,H-GROUND,(ctx,w,h)=>drawGround(ctx,w,h,0));
  bake(scene,'glow',64,64,(ctx)=>{const g=ctx.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,214,120,.85)');g.addColorStop(.45,'rgba(247,171,17,.35)');g.addColorStop(1,'rgba(242,122,1,0)');ctx.fillStyle=g;ctx.fillRect(0,0,64,64);});
  bake(scene,'humo',32,32,(ctx)=>{const g=ctx.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,'rgba(255,245,235,.9)');g.addColorStop(1,'rgba(255,245,235,0)');ctx.fillStyle=g;ctx.fillRect(0,0,32,32);});
  bake(scene,'copal',120,120,drawCopal);
  bake(scene,'sal',120,120,drawSal);
}

function drawFarTown(ctx,w,h){
  const r=seeded(11),base=338;
  ctx.fillStyle='rgba(122,58,150,.55)';ctx.beginPath();ctx.moveTo(0,h);
  for(let x=0;x<=w;x+=10)ctx.lineTo(x,300+Math.sin(x/190)*20+Math.sin(x/61)*7);
  ctx.lineTo(w,h);ctx.closePath();ctx.fill();
  const body='#542371',win='rgba(247,171,17,.8)';
  for(let x=20;x<w;){
    if((x/600|0)%2===0&&r()<.25){drawChurch(ctx,x,base,body,win);x+=210;continue;}
    const bw=70+r()*70,bh=46+r()*60;
    ctx.fillStyle=body;ctx.fillRect(x,base-bh,bw,bh+10);
    if(r()<.6){ctx.beginPath();ctx.moveTo(x-6,base-bh);ctx.lineTo(x+bw/2,base-bh-22);ctx.lineTo(x+bw+6,base-bh);ctx.fill();}
    ctx.fillStyle=win;for(let k=0;k<1+Math.floor(r()*3);k++)ctx.fillRect(x+10+k*24,base-bh+14,9,12);
    x+=bw+8+r()*30;
  }
  ctx.fillStyle=body;ctx.fillRect(0,base,w,h-base);
}
function drawChurch(ctx,x,base,body,win){
  ctx.fillStyle=body;
  ctx.fillRect(x,base-110,170,120);
  ctx.beginPath();ctx.moveTo(x-8,base-110);ctx.quadraticCurveTo(x+85,base-170,x+178,base-110);ctx.fill();
  ctx.fillRect(x+62,base-200,46,70);ctx.beginPath();ctx.arc(x+85,base-200,23,Math.PI,0);ctx.fill();
  ctx.fillRect(x+83,base-245,4,26);ctx.fillRect(x+75,base-236,20,4);
  ctx.fillStyle=win;ctx.beginPath();ctx.arc(x+85,base-170,8,Math.PI,0);ctx.fill();ctx.fillRect(x+77,base-170,16,12);
  ctx.beginPath();ctx.moveTo(x+65,base+10);ctx.lineTo(x+65,base-30);ctx.arc(x+85,base-30,20,Math.PI,0);ctx.lineTo(x+105,base+10);ctx.fill();
}

function drawMidStreet(ctx,w,h){
  const r=seeded(29),walls=['#5e2678','#6b2d87','#58216f'],roofs=['#9c2f68','#b23a6e','#8a2a63'];
  for(let x=0;x<w;){
    const bw=150+r()*120,bh=110+r()*70,top=GROUND-bh,wall=walls[Math.floor(r()*3)];
    ctx.fillStyle=wall;ctx.fillRect(x,top,bw,bh);
    ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(x,top,8,bh);
    ctx.fillStyle=roofs[Math.floor(r()*3)];ctx.beginPath();ctx.moveTo(x-12,top+4);ctx.lineTo(x+bw*.18,top-26);ctx.lineTo(x+bw*.82,top-26);ctx.lineTo(x+bw+12,top+4);ctx.closePath();ctx.fill();
    // Guirnalda de cempasúchil en el alero.
    for(let fx=x;fx<x+bw;fx+=9){ctx.fillStyle=fx%2?'#F27A01':'#F7AB11';ctx.beginPath();ctx.arc(fx,top+8+Math.sin((fx-x)/bw*Math.PI)*10,4.2,0,Math.PI*2);ctx.fill();}
    // Ventanas iluminadas y puerta en arco.
    ctx.save();ctx.shadowColor='rgba(247,171,17,.9)';ctx.shadowBlur=18;ctx.fillStyle='#ffbf47';
    const wy=top+34;ctx.beginPath();ctx.moveTo(x+24,wy+30);ctx.lineTo(x+24,wy+10);ctx.arc(x+38,wy+10,14,Math.PI,0);ctx.lineTo(x+52,wy+30);ctx.fill();
    if(bw>200){ctx.beginPath();ctx.moveTo(x+bw-56,wy+30);ctx.lineTo(x+bw-56,wy+10);ctx.arc(x+bw-42,wy+10,14,Math.PI,0);ctx.lineTo(x+bw-28,wy+30);ctx.fill();}
    ctx.restore();
    ctx.fillStyle='#2a0b3a';const dx=x+bw/2;ctx.beginPath();ctx.moveTo(dx-18,GROUND);ctx.lineTo(dx-18,GROUND-40);ctx.arc(dx,GROUND-40,18,Math.PI,0);ctx.lineTo(dx+18,GROUND);ctx.fill();
    x+=bw+40+r()*160;
  }
  drawPapelPicado(ctx,w);
}

// Cordeles de papel picado: el cordel y los faroles van horneados en la capa media;
// las banderitas son imágenes aparte (dibujar PNG locales dentro de una textura
// rompe el juego al abrirlo como archivo) y así también se mecen con el viento.
const GARLAND_W=Math.ceil(W+(WORLD-W)*.55)+500;
function garlandPoint(x0,t){
  const row=Math.round((x0+40)/320),x1=x0+320,y0=row%2?58:40,y1=row%2?40:58;
  return {x:x0+(x1-x0)*t,y:y0+(y1-y0)*t+42*4*t*(1-t)};
}
function drawPapelPicado(ctx,w){
  for(let x0=-40;x0<w;x0+=320){
    const x1=x0+320,y1=garlandPoint(x0,1).y;
    ctx.strokeStyle='rgba(255,230,200,.85)';ctx.lineWidth=1.5;ctx.beginPath();
    for(let t=0;t<=1.001;t+=.05){const p=garlandPoint(x0,t);t?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);}ctx.stroke();
    // Farol colgando en cada poste.
    ctx.save();ctx.strokeStyle='rgba(255,230,200,.7)';ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x1,y1+18);ctx.stroke();
    ctx.shadowColor='rgba(247,171,17,1)';ctx.shadowBlur=22;ctx.fillStyle='#C2257A';roundRect(ctx,x1-8,y1+18,16,22,5);ctx.fill();
    ctx.shadowBlur=0;ctx.fillStyle='#F7AB11';ctx.fillRect(x1-5,y1+24,10,10);ctx.restore();
  }
}
function addPapelFlags(scene){
  const rand=seeded(41),order=[1,5,3,6,2,4];
  for(let x0=-40,row=0;x0<GARLAND_W;x0+=320,row++){
    for(let t=.06+rand()*.02,k=0;t<.96;t+=.12+rand()*.015,k++){
      const p=garlandPoint(x0,t),q=garlandPoint(x0,Math.min(1,t+.02));
      const key=`pp${order[(row*2+k)%6]}`,size=46+rand()*8;
      const base=Phaser.Math.RadToDeg(Math.atan2(q.y-p.y,q.x-p.x))*.5+(rand()-.5)*10;
      const flag=scene.add.image(p.x,p.y-1,key).setOrigin(.5,0).setScrollFactor(.55,1).setDepth(3).setAngle(base);
      flag.setScale(size/flag.width);
      scene.tweens.add({targets:flag,angle:{from:base-4,to:base+4},duration:1300+rand()*900,yoyo:true,repeat:-1,ease:'Sine.easeInOut',delay:rand()*800});
    }
  }
}

function drawGround(ctx,w,h,chunk){
  const r=seeded(101+chunk),stones=['#e39a7a','#d9876d','#efb08a','#cf7f6a'];
  ctx.fillStyle='#6b2440';ctx.fillRect(0,0,w,h);
  [[9,11],[22,11],[35,10]].forEach(([y,sh],row)=>{
    for(let x=-(row*13)%40;x<w;){const sw=24+r()*22;ctx.fillStyle=stones[Math.floor(r()*4)];roundRect(ctx,x,y,sw,sh,4);ctx.fill();ctx.fillStyle='rgba(255,240,220,.25)';ctx.fillRect(x+4,y+1,sw-8,2);x+=sw+3;}
  });
  ctx.fillStyle='#F27A01';ctx.fillRect(0,0,w,6);
  const petals=['#F7AB11','#F27A01','#e2580c','#ffc94a'];
  for(let x=0;x<w;x+=6){ctx.fillStyle=petals[Math.floor(r()*4)];ctx.beginPath();ctx.arc(x,3+r()*2,3.4,0,Math.PI*2);ctx.fill();}
}

function drawCopal(ctx){
  ctx.fillStyle='#9E4722';ctx.beginPath();ctx.moveTo(44,112);ctx.lineTo(50,82);ctx.lineTo(70,82);ctx.lineTo(76,112);ctx.closePath();ctx.fill();
  ctx.fillStyle='#C8632F';ctx.beginPath();ctx.moveTo(18,58);ctx.quadraticCurveTo(22,92,60,92);ctx.quadraticCurveTo(98,92,102,58);ctx.closePath();ctx.fill();
  ctx.save();ctx.shadowColor='#ff7a1a';ctx.shadowBlur=14;ctx.fillStyle='#ff9a2e';ctx.beginPath();ctx.ellipse(60,58,40,9,0,0,Math.PI*2);ctx.fill();ctx.restore();
  ctx.fillStyle='#fff3dc';[[34,62],[60,64],[86,62]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y+12,3,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='#fff6e0';[[48,55],[62,52],[72,56]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,4.5,0,Math.PI*2);ctx.fill();});
  ctx.strokeStyle='rgba(255,245,235,.75)';ctx.lineWidth=3;ctx.lineCap='round';
  [[52,0],[66,6]].forEach(([x,o])=>{ctx.beginPath();ctx.moveTo(x,46);ctx.bezierCurveTo(x-12,34-o,x+12,22-o,x,8);ctx.stroke();});
}
function drawSal(ctx){
  ctx.fillStyle='#ffffff';ctx.beginPath();ctx.moveTo(26,62);ctx.quadraticCurveTo(60,18,94,62);ctx.closePath();ctx.fill();
  ctx.fillStyle='#e6e7ef';for(let i=0;i<14;i++){ctx.beginPath();ctx.arc(40+((i*37)%40),44+((i*13)%16),1.4,0,Math.PI*2);ctx.fill();}
  ctx.fillStyle='#F7F7F7';ctx.beginPath();ctx.moveTo(14,62);ctx.quadraticCurveTo(18,104,60,104);ctx.quadraticCurveTo(102,104,106,62);ctx.closePath();ctx.fill();
  ctx.fillStyle='#3FC1C9';ctx.fillRect(18,72,84,8);
  ctx.fillStyle='#C2257A';for(let x=26;x<100;x+=14){ctx.beginPath();ctx.arc(x,90,3,0,Math.PI*2);ctx.fill();}
  ctx.strokeStyle='#d7d9e6';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(60,62,46,7,0,0,Math.PI*2);ctx.stroke();
}

function resizePhoto(file){
  return new Promise(resolve=>{
    const reader=new FileReader();reader.onerror=()=>resolve('');reader.onload=()=>{
      const img=new Image();img.onerror=()=>resolve('');img.onload=()=>{
        const scale=Math.min(1,900/Math.max(img.width,img.height)),canvas=document.createElement('canvas');
        canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);
        canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL('image/jpeg',.9));
      };img.src=reader.result;
    };reader.readAsDataURL(file);
  });
}
// Editar el retrato principal desde la página final (nombre, foto, marco y frase).
let pendingPortrait='';
function openPortraitModal(){
  pendingPortrait=photoData;
  document.getElementById('portrait-name-input').value=dedication;
  document.getElementById('portrait-photo-input').value='';
  const preview=document.getElementById('portrait-preview');preview.src=photoData||'';preview.hidden=!photoData;
  document.querySelector(`input[name="portrait-frame"][value="${frameType}"]`).checked=true;
  const preset=typeof phraseChoice==='number';
  document.querySelector(`input[name="portrait-phrase"][value="${preset?phraseChoice:0}"]`).checked=true;
  document.getElementById('portrait-phrase-input').value=preset?'':phraseChoice;
  document.getElementById('portrait-modal').classList.add('open');
}
function closePortraitModal(){document.getElementById('portrait-modal').classList.remove('open');}
function savePortrait(){
  dedication=document.getElementById('portrait-name-input').value.trim();
  photoData=pendingPortrait;
  frameType=document.querySelector('input[name="portrait-frame"]:checked').value;
  phraseChoice=document.getElementById('portrait-phrase-input').value.trim()||Number(document.querySelector('input[name="portrait-phrase"]:checked').value);
  closePortraitModal();renderOfrenda();
}
document.getElementById('portrait-photo-input').addEventListener('change',async event=>{
  const file=event.target.files&&event.target.files[0];if(!file)return;
  pendingPortrait=await resizePhoto(file);
  const preview=document.getElementById('portrait-preview');preview.src=pendingPortrait;preview.hidden=!pendingPortrait;
});
document.getElementById('photo-input').addEventListener('change',async event=>{
  const file=event.target.files&&event.target.files[0];if(!file)return;
  photoData=await resizePhoto(file);syncDedication();
});

// Fotos extra: se elige marco y foto, y se coloca en el siguiente lugar libre de la ofrenda.
function openPhotoModal(){
  if(extraPhotos.length>=Ofrenda.MAX_EXTRAS)return;
  pendingExtra='';document.getElementById('extra-photo-input').value='';document.getElementById('extra-name-input').value='';
  document.getElementById('extra-preview').hidden=true;document.getElementById('place-photo-button').disabled=true;
  document.getElementById('photo-modal').classList.add('open');
}
function closePhotoModal(){document.getElementById('photo-modal').classList.remove('open');}
function placeExtraPhoto(){
  if(!pendingExtra)return;
  extraPhotos.push({src:pendingExtra,frame:document.querySelector('input[name="extra-frame"]:checked').value,name:document.getElementById('extra-name-input').value.trim()});
  closePhotoModal();renderOfrenda();
}
document.getElementById('extra-photo-input').addEventListener('change',async event=>{
  const file=event.target.files&&event.target.files[0];if(!file)return;
  pendingExtra=await resizePhoto(file);
  const preview=document.getElementById('extra-preview');preview.src=pendingExtra;preview.hidden=!pendingExtra;
  document.getElementById('place-photo-button').disabled=!pendingExtra;
});
// Cambio de idioma: aplica el diccionario y vuelve a pintar lo que esté abierto.
function setLang(next){
  lang=next;
  try{localStorage.setItem('petalos-lang',lang);}catch(e){}
  applyI18n();renderProgress();setLoading(loadProgress);
  if(pendingItem)fillStory(pendingItem.stepIndex);
  if(document.getElementById('guide-modal').classList.contains('open'))document.getElementById('guide-start').textContent=guideFromStart?t('letsPlay'):t('keepPlaying');
  if(document.getElementById('altar-stage').style.display==='block')renderOfrenda();
}
function toggleLang(){setLang(lang==='es'?'en':'es');}
applyI18n();setLoading(loadProgress);
window.toggleLang=toggleLang;window.iniciarJuego=iniciarJuego;window.openPortraitModal=openPortraitModal;window.closePortraitModal=closePortraitModal;window.savePortrait=savePortrait;window.openGuide=openGuide;window.closeGuide=closeGuide;window.openRestart=openRestart;window.closeRestart=closeRestart;window.reiniciarRecorrido=reiniciarRecorrido;window.closeStory=closeStory;window.restartJourney=restartJourney;window.downloadStory=downloadStory;window.downloadVideo=downloadVideo;window.setAltarStyle=setAltarStyle;window.openPhotoModal=openPhotoModal;window.closePhotoModal=closePhotoModal;window.placeExtraPhoto=placeExtraPhoto;window.toggleAudio=toggleAudio;
