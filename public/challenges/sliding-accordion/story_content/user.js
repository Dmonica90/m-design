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
  /*
  Interactive HTML Accordion - Custom Design (Side Tabs + Header)
  Slide: 1.1 Acordeon
  Theme: Deep Blue/Purple Gradient Side-Tabs, No Gaps, Clean Tabs
*/

(function () {
  const ROOT_ID = 'stl-faq-accordion-root';
  const mount = document.body;

  const oldRoot = document.getElementById(ROOT_ID);
  if (oldRoot) oldRoot.remove();

  // --- DATOS DEL CONTENIDO ---
  const data = [
    {
      tab: '01. BRAND STORYTELLING',
      title: 'What exactly is Brand Storytelling?',
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
      p1: 'Brand storytelling goes far beyond merely selling a product or listing its technical benefits; it is about forging a genuine emotional connection. It involves sharing your brand\'s core values, mission, and essence through a carefully structured and engaging narrative.',
      p2: 'At its core, it is the strategic art of shifting the spotlight. The brand steps down from the pedestal to make the customer the ultimate hero of the story. In this narrative framework, the brand simply acts as the trusted guide or mentor.'
    },
    {
      tab: '02. STORIES SELL BETTER',
      title: 'Why do stories sell better than data?',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
      p1: 'From a psychological standpoint, the human brain is literally wired to process and crave narratives much more efficiently than raw facts or statistics. When exposed to a compelling story, our brains release oxytocin, which naturally fosters trust.',
      p2: 'While a simple pie chart or percentage might be forgotten within minutes, a well-told story creates a lasting cognitive anchor. People are significantly more likely to remember a brand when that information is tied to a relatable emotional response.'
    },
    {
      tab: '03. KEY ELEMENTS',
      title: 'What are the key elements of a story?',
      img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
      p1: 'Every impactful marketing narrative relies on three fundamental pillars to work effectively: a Hero (your target audience), a Conflict (the specific pain point they face), and a Resolution (the positive transformation).',
      p2: 'The magic happens in how these elements interact. A great story vividly illustrates the heavy cost of not solving the conflict, making the hero\'s struggle feel real before positioning your product as the clear, inevitable bridge to the resolution.'
    },
    {
      tab: '04. REAL CAMPAIGN',
      title: 'How do I apply this to a campaign?',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
      p1: 'The most critical factor in applying storytelling to your marketing efforts is authenticity. You must begin by deeply understanding your specific audience. Map out their daily struggles and craft messaging to show genuine empathy for their conflict.',
      p2: 'Once that connection is established, ensure your execution is consistent across all touchpoints. Take the user on a seamless journey from frustration to success, reinforcing how your brand aligns with their personal values.'
    }
  ];

  // --- CONTENEDOR PRINCIPAL ---
  const root = document.createElement('div');
  root.id = ROOT_ID;
  
  root.innerHTML = `
    <div class="stry-container">
      
      <div class="stry-header">
        <div class="stry-kicker">Interactive Module</div>
        <h1 class="stry-main-title">FAQs: How Do Brands Communicate Through Stories?</h1>
      </div>

      <div class="stry-accordion">
        ${data.map((item, i) => `
          <div class="stry-panel ${i === 0 ? 'is-active' : ''}" data-index="${i}">
            
            <div class="stry-tab">
              <span class="stry-tab-text">${item.tab}</span>
            </div>

            <div class="stry-content">
              <div class="stry-bg" style="background-image: url('${item.img}')"></div>
              <div class="stry-overlay"></div>
              
              <div class="stry-inner">
                <h2>${item.title}</h2>
                <div class="stry-text-block">
                  <div class="stry-icon">❖</div>
                  <p>${item.p1}</p>
                </div>
                <div class="stry-text-block">
                  <div class="stry-icon">❖</div>
                  <p>${item.p2}</p>
                </div>
              </div>
            </div>

          </div>
        `).join('')}
      </div>
    </div>
  `;

  // --- ESTILOS CSS ---
  const style = document.createElement('style');
  style.textContent = `
    #${ROOT_ID} {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(20px, 4vw, 50px);
      background: #0f172a;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      box-sizing: border-box;
    }
    #${ROOT_ID} * { box-sizing: border-box; }

    .stry-container {
      width: 100%;
      max-width: 1200px;
      height: min(700px, calc(100vh - 40px));
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
      background: #1e293b;
      display: flex;
      flex-direction: column; /* Para apilar cabecera y acordeón */
    }

    /* ESTILOS DE LA CABECERA */
    .stry-header {
      padding: 30px 40px 20px 40px;
      background: #020617;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .stry-kicker {
      color: #A78BFA;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .stry-main-title {
      color: #ffffff;
      font-size: clamp(22px, 2.5vw, 32px);
      font-weight: 900;
      margin: 0;
      letter-spacing: -0.01em;
    }

    /* ESTILOS DEL ACORDEÓN */
    .stry-accordion {
      display: flex;
      width: 100%;
      flex: 1; /* Toma el espacio sobrante debajo de la cabecera */
      gap: 0;
    }

    .stry-panel {
      display: flex;
      flex: 1;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      transition: flex 0.7s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .stry-panel.is-active {
      flex: 12;
      cursor: default;
    }

    .stry-tab {
      width: 70px;
      flex-shrink: 0;
      background: linear-gradient(180deg, #3B82F6 0%, #8B5CF6 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 10;
    }

    .stry-tab-text {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      color: #ffffff;
      font-weight: 800;
      font-size: 15px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      white-space: nowrap;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .stry-content {
      flex-grow: 1;
      min-width: 0;
      position: relative;
      background: #020617;
    }

    .stry-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      opacity: 0.4;
      transition: opacity 0.7s ease, transform 0.7s ease;
      transform: scale(1.05);
    }

    .stry-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.6) 50%, rgba(2,6,23,0.2) 100%);
    }

    .stry-inner {
      position: absolute;
      inset: 0;
      padding: clamp(20px, 4vw, 50px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      transform: translateX(20px);
      transition: opacity 0.4s ease, transform 0.5s ease;
      pointer-events: none;
      width: min(800px, 100%);
    }

    .stry-panel.is-active .stry-inner {
      opacity: 1;
      transform: translateX(0);
      transition-delay: 0.2s;
      pointer-events: auto;
    }
    
    .stry-panel.is-active .stry-bg {
      opacity: 0.6;
      transform: scale(1);
    }

    .stry-inner h2 {
      margin: 0 0 30px 0;
      font-size: clamp(28px, 3vw, 42px);
      font-weight: 900;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      line-height: 1.1;
      text-shadow: 0 4px 12px rgba(0,0,0,0.5);
    }

    .stry-text-block {
      display: flex;
      gap: 15px;
      margin-bottom: 25px;
    }

    .stry-icon {
      color: #A78BFA;
      font-size: 24px;
      line-height: 1.2;
    }

    .stry-text-block p {
      margin: 0;
      color: rgba(241, 245, 249, 0.9);
      font-size: clamp(15px, 1.2vw, 18px);
      line-height: 1.6;
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
    }
    
    .stry-panel:not(.is-active):hover .stry-tab {
      filter: brightness(1.2);
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(root);

  // --- INTERACTIVIDAD ---
  const panels = document.querySelectorAll('.stry-panel');
  
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      panels.forEach(p => p.classList.remove('is-active'));
      panel.classList.add('is-active');
    });
  });

})();
}

};
