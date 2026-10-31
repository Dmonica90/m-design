// Ofrenda final: se dibuja en un canvas 1080×1920 (formato historia) con los
// gráficos de assets/1x. El mismo canvas se muestra en pantalla y se descarga.
(function () {
  const W = 1080, H = 1920;
  const SRC = {
    fondo: 'assets/1x/fondo.png', persona: 'assets/1x/portaretrato_persona.png', mascota: 'assets/1x/portaretratop_mascota.png',
    flor: 'assets/1x/Flor.png', vela1: 'assets/1x/vela1.png', vela2: 'assets/1x/vela2.png', pan: 'assets/1x/pan de muerto.png',
    petalo: 'assets/1x/petalo.png', colibri: 'assets/1x/colibri.png', florero: 'assets/1x/florero.png',
    calav1: 'assets/1x/calaveritra1.png', calav2: 'assets/1x/calaverita2.png', calav3: 'assets/1x/calaverita 3.png',
    calav4: 'assets/1x/calaverita4.png', calav5: 'assets/1x/calaverita5.png', calav6: 'assets/1x/calaverita6.png'
  };
  for (let i = 1; i <= 6; i++) SRC[`pp${i}`] = `assets/1x/papelpicado${i}.png`;
  for (let i = 1; i <= 5; i++) SRC[`vuelo${i}`] = `assets/colibri/colibri${i}.png`;

  // Hueco transparente de cada marco, medido sobre los PNG.
  const HOLES = {
    persona: { x: .124, y: .12, w: .757, h: .758, round: false },
    mascota: { x: .177, y: .166, w: .646, h: .667, round: true }
  };

  const STYLES = {
    tradicional: { label: 'Tradicional', top: '#ffe08a', cloth: ['#F7AB11', '#d98400'], ribbon: '#C2257A', papel: [1, 5, 3, 4, 2, 6], archHue: [0, 0, 300], glow: 'rgba(247,171,17,.38)' },
    talavera: { label: 'Talavera', top: '#f4efe2', cloth: ['#2f8fd0', '#174f8a'], ribbon: '#F27A01', papel: [6, 2, 4, 1, 5, 3], archHue: [0, 300], glow: 'rgba(63,193,201,.30)' },
    noche: { label: 'Noche de velas', top: '#d58ae0', cloth: ['#6a1a86', '#36064a'], ribbon: '#F7AB11', papel: [4, 5, 1, 3, 6, 2], archHue: [0, 300, 300], glow: 'rgba(194,37,122,.38)' }
  };

  // Lugares para las fotos extra: primero en los escalones, luego al pie del altar.
  const SLOTS = [
    { x: 330, b: 1010, s: 175 }, { x: 750, b: 1010, s: 175 },
    { x: 215, b: 1290, s: 165 }, { x: 865, b: 1290, s: 165 },
    { x: 255, b: 1665, s: 150 }, { x: 825, b: 1665, s: 150 }
  ];

  const cache = {};
  function load(src) {
    if (!cache[src]) cache[src] = new Promise(res => {
      const img = new Image(); img.onload = () => res(img); img.onerror = () => res(null);
      img.src = src.startsWith('data:') ? src : encodeURI(src);
    });
    return cache[src];
  }
  async function loadAll() {
    const out = {};
    await Promise.all(Object.entries(SRC).map(async ([k, s]) => { out[k] = await load(s); }));
    return out;
  }
  function rng(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

  // Dibuja una imagen apoyada en (cx, bottom) con la altura indicada.
  function stand(ctx, img, cx, bottom, h, opts) {
    if (!img) return;
    const w = h * img.width / img.height;
    ctx.save();
    if (opts && opts.hue) ctx.filter = `hue-rotate(${opts.hue}deg) saturate(1.2)`;
    if (opts && opts.rot) { ctx.translate(cx, bottom - h / 2); ctx.rotate(opts.rot); ctx.drawImage(img, -w / 2, -h / 2, w, h); }
    else ctx.drawImage(img, cx - w / 2, bottom - h, w, h);
    ctx.restore();
  }
  // La luz de cada vela se anima en drawFrame; aquí solo se guarda dónde va.
  let lights = [];
  function candle(ctx, img, cx, bottom, h) {
    stand(ctx, img, cx, bottom, h);
    lights.push({ x: cx, y: bottom - h * .9, r: h * 1.1, phase: lights.length * .37, k: 2 + lights.length % 3 });
  }
  function cover(ctx, img, x, y, w, h) {
    const s = Math.max(w / img.width, h / img.height), iw = img.width * s, ih = img.height * s;
    ctx.drawImage(img, x + (w - iw) / 2, y + (h - ih) / 2, iw, ih);
  }

  // Portarretrato: foto recortada en el hueco y el marco encima.
  function framed(ctx, a, photo, kind, cx, bottom, size) {
    const frame = a[kind] || a.persona, hole = HOLES[kind] || HOLES.persona;
    const x = cx - size / 2, y = bottom - size;
    const hx = x + hole.x * size, hy = y + hole.y * size, hw = hole.w * size, hh = hole.h * size;
    ctx.save();
    ctx.shadowColor = 'rgba(20,0,30,.55)'; ctx.shadowBlur = size * .08; ctx.shadowOffsetY = size * .03;
    ctx.fillStyle = '#360543'; ctx.fillRect(hx, hy, hw, hh);
    ctx.restore();
    ctx.save(); ctx.beginPath();
    if (hole.round) ctx.ellipse(hx + hw / 2, hy + hh / 2, hw / 2, hh / 2, 0, 0, Math.PI * 2); else ctx.rect(hx, hy, hw, hh);
    ctx.clip();
    if (photo) cover(ctx, photo, hx, hy, hw, hh);
    else {
      const g = ctx.createLinearGradient(0, hy, 0, hy + hh); g.addColorStop(0, '#6a2a8c'); g.addColorStop(1, '#360543');
      ctx.fillStyle = g; ctx.fillRect(hx, hy, hw, hh);
      stand(ctx, a.flor, hx + hw / 2, hy + hh * .78, hh * .55);
    }
    ctx.restore();
    if (frame) ctx.drawImage(frame, x, y, size, size);
  }

  function tier(ctx, a, st, x1, x2, top, bottom, papelStart) {
    const depth = 26, r = rng(31 + papelStart);
    ctx.fillStyle = st.top;
    ctx.beginPath(); ctx.moveTo(x1 + depth, top - depth); ctx.lineTo(x2 - depth, top - depth); ctx.lineTo(x2, top); ctx.lineTo(x1, top); ctx.closePath(); ctx.fill();
    const g = ctx.createLinearGradient(0, top, 0, bottom); g.addColorStop(0, st.cloth[0]); g.addColorStop(1, st.cloth[1]);
    ctx.fillStyle = g; ctx.fillRect(x1, top, x2 - x1, bottom - top);
    // Pliegues suaves de la tela.
    for (let x = x1; x < x2; x += 38) {
      const f = ctx.createLinearGradient(x, 0, x + 38, 0);
      f.addColorStop(0, 'rgba(0,0,0,.07)'); f.addColorStop(.5, 'rgba(255,255,255,.10)'); f.addColorStop(1, 'rgba(0,0,0,.07)');
      ctx.fillStyle = f; ctx.fillRect(x, top, Math.min(38, x2 - x), bottom - top);
    }
    // Papel picado colgado de cordeles, con huecos y un poco de movimiento.
    const strings = bottom - top > 200 ? 2 : 1;
    for (let row = 0; row < strings; row++) {
      const y0 = top + 12 + row * 96, sag = 14, yAt = x => { const t = (x - x1) / (x2 - x1); return y0 + 4 * sag * t * (1 - t); };
      ctx.strokeStyle = 'rgba(255,240,215,.9)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x1 + 4, y0); ctx.quadraticCurveTo((x1 + x2) / 2, y0 + sag * 2, x2 - 4, y0); ctx.stroke();
      for (let x = x1 + 62 + row * 54, i = 0; x < x2 - 50; x += 114 + r() * 14, i++) {
        const img = a[`pp${st.papel[(papelStart + i + row * 3) % 6]}`]; if (!img) continue;
        const w = 98 * (.94 + r() * .12);
        ctx.save(); ctx.translate(x, yAt(x) - 1 + r() * 3); ctx.rotate((r() - .5) * .14);
        ctx.shadowColor = 'rgba(20,0,30,.3)'; ctx.shadowBlur = 6; ctx.shadowOffsetY = 4;
        ctx.drawImage(img, -w / 2, 0, w, w / 1.6); ctx.restore();
      }
    }
    ctx.fillStyle = 'rgba(20,0,30,.28)'; ctx.fillRect(x1, bottom - 10, x2 - x1, 10);
    // Guirnalda de cempasúchil en el borde inferior del escalón.
    for (let x = x1 + 16, i = 0; x < x2 - 6; x += 34, i++) stand(ctx, a.flor, x, bottom + 16, 46, { hue: st.archHue[i % st.archHue.length] });
  }

  function arch(ctx, a, st) {
    const cx = W / 2, base = 1290, rx = 400, ry = 980, r = rng(5);
    for (let t = 0, i = 0; t <= Math.PI + .001; t += Math.PI / 26, i++) {
      const x = cx + rx * Math.cos(t), y = base - ry * Math.sin(t);
      stand(ctx, a.flor, x, y + 46, 84 + r() * 18, { hue: st.archHue[i % st.archHue.length], rot: r() * 6 });
    }
    // Hileras de cempasúchil colgando a los lados.
    [70, 1010].forEach((x, side) => {
      for (let y = 120; y < 1380; y += 58) stand(ctx, a.flor, x + Math.sin(y / 90) * 6, y + 28, 54, { hue: (y / 58 + side) % 3 === 0 ? 300 : 0 });
    });
  }

  function petalPath(ctx, a) {
    const r = rng(17);
    for (let i = 0; i < 520; i++) {
      const t = r(), y = 1550 + t * 350, half = 90 + t * 210;
      const x = W / 2 + (r() - .5) * 2 * half;
      ctx.save(); ctx.translate(x, y); ctx.rotate(r() * Math.PI * 2);
      ctx.filter = r() < .18 ? 'hue-rotate(300deg)' : r() < .4 ? 'brightness(1.15)' : 'none';
      if (a.petalo) ctx.drawImage(a.petalo, -9, -18, 18, 36);
      ctx.restore();
    }
  }

  function wrapText(ctx, text, maxW) {
    const words = text.split(/\s+/), lines = []; let line = '';
    words.forEach(w => { const test = line ? `${line} ${w}` : w; if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test; });
    if (line) lines.push(line); return lines;
  }

  // Etiqueta pequeña con el nombre, sobrepuesta al pie del portarretrato.
  function nameTag(ctx, st, name, cx, y, size) {
    if (!name) return;
    ctx.save();
    let font = size; ctx.font = `${font}px Alegreya, Georgia, serif`;
    while (ctx.measureText(name).width > size * 9 && font > size * .7) { font -= 1; ctx.font = `${font}px Alegreya, Georgia, serif`; }
    let text = name; while (ctx.measureText(text).width > size * 9 && text.length > 4) text = text.slice(0, -2);
    if (text !== name) text = text.trimEnd() + '…';
    const w = ctx.measureText(text).width + font * 1.2, h = font * 1.55;
    ctx.shadowColor = 'rgba(20,0,30,.45)'; ctx.shadowBlur = 8; ctx.shadowOffsetY = 3;
    ctx.fillStyle = '#FFF3DC'; roundRect(ctx, cx - w / 2, y - h / 2, w, h, h / 2); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.lineWidth = Math.max(2, font * .1); ctx.strokeStyle = st.ribbon; ctx.stroke();
    ctx.fillStyle = '#360543'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, cx, y + 1);
    ctx.restore();
  }
  function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }

  function phraseBand(ctx, phrase) {
    ctx.save();
    ctx.font = 'italic 54px Alegreya, Georgia, serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const lines = wrapText(ctx, `“${phrase}”`, 900), lh = 62, h = lines.length * lh + 56, y = H - 40 - h;
    const g = ctx.createLinearGradient(0, y - 60, 0, H); g.addColorStop(0, 'rgba(26,2,36,0)'); g.addColorStop(.35, 'rgba(26,2,36,.78)'); g.addColorStop(1, 'rgba(26,2,36,.9)');
    ctx.fillStyle = g; ctx.fillRect(0, y - 60, W, H - y + 60);
    ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 10;
    ctx.fillStyle = '#F7AB11';
    lines.forEach((l, i) => ctx.fillText(l, W / 2, y + 28 + lh / 2 + i * lh));
    ctx.restore();
  }

  // Dibuja todo lo que no se mueve en un canvas base y prepara las capas animadas.
  async function build(state) {
    const a = await loadAll();
    if (document.fonts && document.fonts.load) { try { await Promise.all([document.fonts.load('50px Alegreya'), document.fonts.load('italic 54px Alegreya')]); } catch (e) { } }
    const photo = state.photo ? await load(state.photo) : null;
    const extras = await Promise.all((state.extras || []).slice(0, SLOTS.length).map(async e => ({ img: await load(e.src), frame: e.frame, name: e.name })));
    const st = STYLES[state.style] || STYLES.tradicional;
    const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    lights = [];

    ctx.fillStyle = '#360543'; ctx.fillRect(0, 0, W, H);
    if (a.fondo) cover(ctx, a.fondo, 0, 0, W, H);
    const halo = ctx.createRadialGradient(W / 2, 900, 40, W / 2, 900, 760);
    halo.addColorStop(0, st.glow); halo.addColorStop(1, 'rgba(54,5,67,0)');
    ctx.fillStyle = halo; ctx.fillRect(0, 0, W, H);

    arch(ctx, a, st);

    // Escalón superior: retrato principal con su nombre.
    tier(ctx, a, st, 330, 750, 760, 1010, 0);
    framed(ctx, a, photo, state.frame, W / 2, 768, 310);
    candle(ctx, a.vela1, 375, 768, 120); candle(ctx, a.vela1, 705, 768, 120);
    nameTag(ctx, st, state.name || 'Alguien especial', W / 2, 752, 28);

    // Escalón medio.
    tier(ctx, a, st, 220, 860, 1010, 1290, 2);
    stand(ctx, a.pan, W / 2, 1022, 118);
    stand(ctx, a.calav2, 438, 1018, 82); stand(ctx, a.calav5, 642, 1018, 82);
    // Escalón inferior.
    tier(ctx, a, st, 110, 970, 1290, 1530, 4);
    stand(ctx, a.flor, W / 2, 1300, 110);
    stand(ctx, a.calav1, 420, 1298, 86); stand(ctx, a.calav3, 660, 1298, 86);
    candle(ctx, a.vela2, 340, 1300, 92); candle(ctx, a.vela2, 740, 1300, 92);

    // Fotos agregadas; los lugares vacíos llevan velas o calaveritas.
    SLOTS.forEach((slot, i) => {
      const e = extras[i];
      if (e && e.img) { framed(ctx, a, e.img, e.frame, slot.x, slot.b + 6, slot.s); nameTag(ctx, st, e.name, slot.x, slot.b - 6, 20); }
      else if (i < 4) candle(ctx, i % 2 ? a.vela1 : a.vela2, slot.x, slot.b + 6, 100);
    });

    // Piso: camino de pétalos, velas y flores.
    petalPath(ctx, a);
    [[120, 1720, 'vela1'], [960, 1720, 'vela2'], [400, 1640, 'vela2'], [680, 1640, 'vela1']].forEach(([x, b, k]) => candle(ctx, a[k], x, b, 96));
    stand(ctx, a.florero, 92, 1730, 330); stand(ctx, a.florero, 988, 1730, 330);
    [[190, 1790], [890, 1790]].forEach(([x, b], i) => stand(ctx, a.flor, x, b, 110, { hue: i % 2 ? 300 : 0 }));

    phraseBand(ctx, state.phrase || '');
    return { base: canvas, lights, assets: a, petals: makePetals() };
  }

  // ---------- Animación en bucle de LOOP segundos (t va de 0 a 1) ----------
  const LOOP = 6, TAU = Math.PI * 2;
  let glowSprite = null;
  function getGlow() {
    if (glowSprite) return glowSprite;
    glowSprite = document.createElement('canvas'); glowSprite.width = glowSprite.height = 256;
    const g = glowSprite.getContext('2d'), grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(255,214,120,.9)'); grad.addColorStop(.4, 'rgba(247,171,17,.35)'); grad.addColorStop(1, 'rgba(242,122,1,0)');
    g.fillStyle = grad; g.fillRect(0, 0, 256, 256);
    return glowSprite;
  }
  function makePetals() {
    const r = rng(77), out = [];
    for (let i = 0; i < 46; i++) out.push({ x: r() * W, y: r() * H, laps: 1 + Math.floor(r() * 2), amp: 14 + r() * 30, sway: 1 + Math.floor(r() * 3), ph: r() * TAU, rot: r() * TAU, spin: (r() < .5 ? -1 : 1) * (1 + Math.floor(r() * 2)), size: 26 + r() * 16, pink: r() < .2 });
    return out;
  }
  function drawFrame(ctx, scene, t) {
    const a = scene.assets, glowImg = getGlow();
    ctx.drawImage(scene.base, 0, 0);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    scene.lights.forEach(l => {
      const f = .82 + .12 * Math.sin(TAU * (l.k * t + l.phase)) + .06 * Math.sin(TAU * (l.k * 3 * t + l.phase * 2)), rr = l.r * f;
      ctx.globalAlpha = .55 * f; ctx.drawImage(glowImg, l.x - rr, l.y - rr, rr * 2, rr * 2);
      // Chispitas que suben de la llama.
      for (let s = 0; s < 2; s++) {
        const p = (t * 2 + l.phase + s * .5) % 1;
        ctx.globalAlpha = (1 - p) * .8; ctx.drawImage(glowImg, l.x + Math.sin(TAU * (p + s * .3)) * 8 - 5, l.y - p * 70 - 5, 10, 10);
      }
    });
    ctx.restore();
    // Pétalos cayendo: vueltas completas por ciclo para que el bucle no salte.
    scene.petals.forEach(p => {
      const y = (p.y + p.laps * H * t) % H, x = p.x + p.amp * Math.sin(TAU * p.sway * t + p.ph);
      ctx.save(); ctx.translate(x, y); ctx.rotate(p.rot + TAU * p.spin * t);
      if (p.pink) ctx.filter = 'hue-rotate(300deg)';
      if (a.petalo) ctx.drawImage(a.petalo, -p.size / 4, -p.size / 2, p.size / 2, p.size);
      ctx.restore();
    });
    drawHummingbird(ctx, a, t, glowImg);
  }
  function birdPos(t) { return { x: W / 2 + 330 * Math.sin(TAU * t), y: 520 + 110 * Math.sin(TAU * 2 * t + .6) }; }
  function drawHummingbird(ctx, a, t, glowImg) {
    if (!a.colibri) return;
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let k = 1; k <= 9; k++) {
      const p = birdPos(t - k * .006), s = 18 - k * 1.5;
      ctx.globalAlpha = .5 * (1 - k / 10); ctx.drawImage(glowImg, p.x - s / 2 + (Math.cos(TAU * t) > 0 ? -40 : 40), p.y + 8 - s / 2, s, s);
    }
    ctx.restore();
    // Aleteo con los 5 cuadros de vuelo a 15 cuadros/s (90 por ciclo, cierra exacto el bucle).
    const p = birdPos(t), dir = Math.cos(TAU * t) >= 0 ? 1 : -1;
    const frame = a[`vuelo${1 + Math.floor(t * LOOP * 15) % 5}`] || a.colibri, size = frame === a.colibri ? 130 : 200;
    const w = frame === a.colibri ? size * frame.width / frame.height : size;
    ctx.save(); ctx.translate(p.x, p.y + 4 * Math.sin(TAU * 12 * t));
    ctx.rotate(.18 * Math.cos(TAU * t) * dir); ctx.scale(dir, 1);
    ctx.drawImage(frame, -w / 2, -size / 2, w, size); ctx.restore();
  }

  // Graba el bucle como video (MP4 si el navegador lo permite, si no WebM).
  function record(scene, opts) {
    const fps = (opts && opts.fps) || 30, onProgress = opts && opts.onProgress;
    return new Promise((resolve, reject) => {
      const types = ['video/mp4;codecs=avc1.42E01E', 'video/mp4;codecs=avc1', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'];
      const type = window.MediaRecorder && types.find(t => MediaRecorder.isTypeSupported(t));
      if (!type) { reject(new Error('MediaRecorder no disponible')); return; }
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const ctx = c.getContext('2d'); drawFrame(ctx, scene, 0);
      let stream; try { stream = c.captureStream(fps); } catch (e) { reject(e); return; }
      const rec = new MediaRecorder(stream, { mimeType: type, videoBitsPerSecond: 8e6 }), chunks = [];
      rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
      rec.onerror = e => reject(e.error || e);
      rec.onstop = () => resolve({ blob: new Blob(chunks, { type: type.split(';')[0] }), ext: type.startsWith('video/mp4') ? 'mp4' : 'webm' });
      const total = LOOP * fps; let f = 0;
      rec.start(250);
      const timer = setInterval(() => {
        drawFrame(ctx, scene, f / total); f++;
        if (onProgress) onProgress(f / total);
        if (f >= total) { clearInterval(timer); setTimeout(() => rec.stop(), 150); }
      }, 1000 / fps);
    });
  }

  function toBlob(canvas) {
    return new Promise((res, rej) => {
      try { canvas.toBlob(b => b ? res(b) : rej(new Error('blob')), 'image/png'); } catch (e) { rej(e); }
    });
  }

  window.Ofrenda = { build, drawFrame, record, toBlob, LOOP, STYLES, MAX_EXTRAS: SLOTS.length };
})();
