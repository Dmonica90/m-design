// Textos de la interfaz en español e inglés. Los versos de cada paso viven en
// script.js (pasos[].texto / texto_en). Las claves se aplican con data-i18n,
// data-i18n-html y data-i18n-attr="atributo:clave|atributo:clave".
const I18N = {
  es: {
    docTitle: 'El camino de los pétalos | Día de Muertos',
    credit: 'Creado con <span class="heart">🧡</span> por Mónica V. y Nandobango',
    brand: 'El camino de los pétalos<small>Una ofrenda hecha con recuerdos</small>',
    langSwitch: 'Switch to English',
    help: 'Cómo jugar',
    restartJourney: 'Reiniciar el recorrido',
    sound: 'Activar o silenciar sonido',
    hudCount: 'Recuerdos reunidos · {n}/{total}',
    touchControls: 'Controles táctiles',
    walkLeft: 'Caminar a la izquierda',
    walkRight: 'Caminar a la derecha',
    jump: 'Saltar',
    gameHint: '<strong>Controles:</strong> <span class="keyboard-hint">← → para caminar · ↑ o espacio para saltar · </span>sigue al colibrí, salta las calaveras y toca un recuerdo para conocer su historia.',
    close: 'Cerrar',
    cancel: 'Cancelar',

    introTitle: 'El camino de los pétalos',
    introText: 'Acompaña a la Calaquita y al Colibrí mientras reúnen los recuerdos para iluminar una ofrenda. Cada objeto guarda una historia y cada paso deja pétalos dorados en el camino.',
    introText2: 'Puedes dedicar este altar a un ser querido, subir su fotografía, elegir un mensaje desde el corazón y llevarte un recuerdo especial listo para compartir.',
    rotateTip: '📱 Gira tu teléfono en horizontal para jugar.',
    start: 'Comenzar recorrido',
    rotateTitle: 'Gira tu teléfono',
    rotateText: 'El camino de los pétalos se recorre en horizontal. Voltea tu pantalla para seguir jugando.',

    guideEyebrow: 'Antes de empezar',
    guideTitle: 'Cómo jugar',
    guideWalk: 'Camina',
    guideWalkKeys: 'Usa las flechas del teclado o los botones de la pantalla.',
    guideWalkTouch: 'Mantén presionados los botones de la izquierda.',
    guideJump: 'Salta',
    keySpace: 'espacio',
    guideJumpKeys: 'Con la flecha hacia arriba o la barra espaciadora.',
    guideJumpTouch: 'Con el botón de la derecha.',
    guideFollow: 'Sigue al colibrí',
    guideFollowText: 'Te guía hasta el siguiente recuerdo, marcado con su número dorado. Tócalo para descubrir su calaverita.',
    guideSkulls: 'Cuidado con las calaveras',
    guideSkullsText: 'Si el esqueleto está fuera de su caja te empuja hacia atrás. Salta cuando se esconda.',
    guideAltar: 'Arma tu ofrenda',
    guideAltarText: 'Reúne los 7 recuerdos, dedica el altar con un nombre, una foto y una frase, y descárgalo como video o imagen.',
    guideNote: 'Arriba a la derecha puedes ver esta guía, reiniciar el recorrido o silenciar la música.',
    letsPlay: '¡A jugar!',
    keepPlaying: 'Seguir jugando',

    restartEyebrow: 'Reiniciar',
    restartTitle: '¿Volver a empezar?',
    restartText: 'Regresarás al inicio del camino y se borrarán los recuerdos que llevas reunidos.',
    restartConfirm: 'Reiniciar',

    stepEyebrow: 'Calaverita {n} · Un recuerdo te acompaña',
    dedicationLabel: '¿A quién dedicamos la ofrenda?',
    namePlaceholder: 'Escribe un nombre o dedicatoria',
    photoOptional: 'Sube una foto (opcional)',
    frameLabel: 'Elige el marco',
    framePerson: 'Persona',
    framePet: 'Mascota',
    phraseLabel: 'Elige una frase para tu ofrenda',
    phrase0: 'Tu recuerdo florece en cada pétalo.',
    phrase1: 'Mientras te recordemos, siempre encontrarás el camino a casa.',
    phrase2: 'Hoy y siempre, tu luz vive en nosotros.',
    customPhraseLabel: 'O escribe tu propia frase para la postal',
    customPhrasePlaceholder: 'Escribe un mensaje para la postal',
    addPhotoName: '📷 Agregar foto y nombre',
    hideOptions: 'Ocultar opciones',
    saveContinue: 'Guardar y continuar',
    continuePath: 'Continuar el camino',

    extraEyebrow: 'Otro recuerdo para la ofrenda',
    extraTitle: 'Agrega una foto',
    nameLabel: 'Nombre',
    extraNamePlaceholder: '¿Quién aparece en la foto?',
    uploadPhoto: 'Sube la foto',
    preview: 'Vista previa',
    placePhoto: 'Colocar en la ofrenda',

    portraitEyebrow: 'El retrato que nos reúne',
    portraitTitle: 'Edita el retrato principal',
    photoLabel: 'Foto',
    portraitPhotoAlt: 'Foto del retrato',
    offeringPhrase: 'Frase de la ofrenda',
    customPhraseShort: 'O escribe tu propia frase',
    savePortrait: 'Guardar retrato',

    altarTitle: 'Donde vive el recuerdo, el amor no termina',
    altarText: '«Tu ofrenda ha cobrado vida. Has tendido un puente hecho de luz, aromas, memoria y pétalos dorados. Mientras los recuerdes con una sonrisa, mientras pronuncies su nombre y compartas su historia, ellos nunca se habrán ido del todo. Gracias por mantener encendido el corazón de la tradición.»',
    altarCta: '<strong>🌸 Guarda y comparte tu recuerdo:</strong> personaliza el marco de tu ofrenda, elige tu frase dedicada y descarga tu altar interactivo en formato de historia para compartir con el mundo este homenaje hecho con el alma.',
    styleLabel: 'Estilo de la ofrenda',
    styleTraditional: 'Tradicional',
    styleTalavera: 'Talavera',
    styleCandles: 'Noche de velas',
    altarActions: 'Acciones de la ofrenda',
    editPortrait: 'Editar el retrato principal',
    addPhotoBadge: 'Agrega su foto',
    addMorePhotos: 'Agregar más fotos ({n}/{max})',
    offeringFull: 'Ofrenda completa',
    downloadVideo: 'Descargar video',
    downloadImage: 'Descargar imagen',
    walkAgain: 'Volver a recorrer',
    altarCredits: 'Cada familia construye su ofrenda a su manera. Esta experiencia celebra algunas de sus muchas tradiciones.',
    canvasLabel: 'Ofrenda personalizada en formato historia',
    defaultName: 'Alguien especial',

    noVideo: 'Este navegador no puede grabar video. Prueba con Chrome o Safari actualizados, o descarga la imagen.',
    localFile: 'Para descargar tu ofrenda abre el juego desde su página web (http/https), no como archivo local.'
  },
  en: {
    docTitle: 'The Path of Petals | Day of the Dead',
    credit: 'Made with <span class="heart">🧡</span> by Mónica V. and Nandobango',
    brand: 'The Path of Petals<small>An offering made of memories</small>',
    langSwitch: 'Cambiar a español',
    help: 'How to play',
    restartJourney: 'Restart the journey',
    sound: 'Turn sound on or off',
    hudCount: 'Memories gathered · {n}/{total}',
    touchControls: 'Touch controls',
    walkLeft: 'Walk left',
    walkRight: 'Walk right',
    jump: 'Jump',
    gameHint: '<strong>Controls:</strong> <span class="keyboard-hint">← → to walk · ↑ or space to jump · </span>follow the hummingbird, jump over the skeletons and touch a memory to hear its story.',
    close: 'Close',
    cancel: 'Cancel',

    introTitle: 'The Path of Petals',
    introText: 'Walk with Little Miss Skeleton and the Hummingbird as they gather memories to light up an offering. Every object holds a story, and every step leaves golden petals along the path.',
    introText2: 'You can dedicate this altar to a loved one, upload their photo, choose a message from the heart and take home a special keepsake, ready to share.',
    rotateTip: '📱 Turn your phone sideways to play.',
    start: 'Start the journey',
    rotateTitle: 'Turn your phone',
    rotateText: 'The Path of Petals is played in landscape. Turn your screen to keep playing.',

    guideEyebrow: 'Before you begin',
    guideTitle: 'How to play',
    guideWalk: 'Walk',
    guideWalkKeys: 'Use the arrow keys or the on-screen buttons.',
    guideWalkTouch: 'Press and hold the buttons on the left.',
    guideJump: 'Jump',
    keySpace: 'space',
    guideJumpKeys: 'With the up arrow or the space bar.',
    guideJumpTouch: 'With the button on the right.',
    guideFollow: 'Follow the hummingbird',
    guideFollowText: 'It guides you to the next memory, marked with its golden number. Touch it to discover its poem.',
    guideSkulls: 'Watch out for the skeletons',
    guideSkullsText: 'If a skeleton is out of its box, it pushes you back. Jump while it hides.',
    guideAltar: 'Build your offering',
    guideAltarText: 'Gather the 7 memories, dedicate the altar with a name, a photo and a phrase, and download it as a video or an image.',
    guideNote: 'At the top right you can open this guide, restart the journey or mute the music.',
    letsPlay: "Let's play!",
    keepPlaying: 'Keep playing',

    restartEyebrow: 'Restart',
    restartTitle: 'Start over?',
    restartText: "You'll go back to the beginning of the path, and the memories you've gathered will be cleared.",
    restartConfirm: 'Restart',

    stepEyebrow: 'Poem {n} · A memory walks with you',
    dedicationLabel: 'Who is this offering for?',
    namePlaceholder: 'Write a name or a dedication',
    photoOptional: 'Upload a photo (optional)',
    frameLabel: 'Choose the frame',
    framePerson: 'Person',
    framePet: 'Pet',
    phraseLabel: 'Choose a phrase for your offering',
    phrase0: 'Your memory blooms in every petal.',
    phrase1: 'As long as we remember you, you will always find your way home.',
    phrase2: 'Today and always, your light lives on in us.',
    customPhraseLabel: 'Or write your own phrase for the postcard',
    customPhrasePlaceholder: 'Write a message for the postcard',
    addPhotoName: '📷 Add photo and name',
    hideOptions: 'Hide options',
    saveContinue: 'Save and continue',
    continuePath: 'Continue on the path',

    extraEyebrow: 'Another memory for the offering',
    extraTitle: 'Add a photo',
    nameLabel: 'Name',
    extraNamePlaceholder: "Who's in the photo?",
    uploadPhoto: 'Upload the photo',
    preview: 'Preview',
    placePhoto: 'Place it on the offering',

    portraitEyebrow: 'The portrait that brings us together',
    portraitTitle: 'Edit the main portrait',
    photoLabel: 'Photo',
    portraitPhotoAlt: 'Portrait photo',
    offeringPhrase: 'Offering phrase',
    customPhraseShort: 'Or write your own phrase',
    savePortrait: 'Save portrait',

    altarTitle: 'Where memory lives, love never ends',
    altarText: '“Your offering has come to life. You have built a bridge of light, scents, memory and golden petals. As long as you remember them with a smile, say their name and share their story, they will never be truly gone. Thank you for keeping the heart of the tradition alight.”',
    altarCta: '<strong>🌸 Save and share your memory:</strong> customize the frame of your offering, choose your dedicated phrase and download your interactive altar as a story to share this heartfelt tribute with the world.',
    styleLabel: 'Offering style',
    styleTraditional: 'Traditional',
    styleTalavera: 'Talavera',
    styleCandles: 'Candlelit night',
    altarActions: 'Offering actions',
    editPortrait: 'Edit the main portrait',
    addPhotoBadge: 'Add their photo',
    addMorePhotos: 'Add more photos ({n}/{max})',
    offeringFull: 'Offering complete',
    downloadVideo: 'Download video',
    downloadImage: 'Download image',
    walkAgain: 'Walk the path again',
    altarCredits: 'Every family builds its offering in its own way. This experience celebrates some of its many traditions.',
    canvasLabel: 'Personalized offering in story format',
    defaultName: 'Someone special',

    noVideo: "This browser can't record video. Try an up-to-date Chrome or Safari, or download the image.",
    localFile: 'To download your offering, open the game from its web page (http/https), not as a local file.'
  }
};

let lang = (() => {
  try { const saved = localStorage.getItem('petalos-lang'); if (saved === 'es' || saved === 'en') return saved; } catch (e) { }
  return /^en\b/i.test(navigator.language || '') ? 'en' : 'es';
})();

function t(key, vars) {
  let text = (I18N[lang] && I18N[lang][key]) ?? I18N.es[key] ?? key;
  if (vars) text = text.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  return text;
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.title = t('docTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split('|').forEach(pair => { const [attr, key] = pair.split(':'); el.setAttribute(attr, t(key)); });
  });
  document.querySelectorAll('.lang-label').forEach(el => { el.textContent = lang === 'es' ? 'EN' : 'ES'; });
}
