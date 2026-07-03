// ============================================================
// TIME CAPSULE — APP LOGIC (v2)
// ============================================================

let currentTab = 'movies';
let currentData = null;

// ── CAMERA GEAR DATA (per era) ───────────────────────────────
const CAMERA_GEAR = {
  before1995: [
    { era: "THE CLASSIC", name: "Canon AE-1 Program", desc: "The definitive 35mm SLR. Manual focus, metal body, pure photographic craft. You loaded film by hand." },
    { era: "FOR EVERYONE", name: "Kodak Disposable", desc: "24 frames of pure hope. You'd buy one at a chemist, shoot everything, and wait days for prints." },
    { era: "INSTANT MAGIC", name: "Polaroid OneStep", desc: "The original instant camera — shake it and watch your memory emerge, warm and slightly blurred." },
    { era: "HOME MOVIES", name: "Super 8 Film Camera", desc: "Families recorded life on small reels of film, projected on living room walls." }
  ],
  around2002: [
    { era: "FILM KING", name: "Canon EOS 3000", desc: "India's favourite film SLR in the early 2000s. Affordable, sharp, and deeply satisfying to use." },
    { era: "EVERYDAY MAGIC", name: "Kodak FunSaver Disposable", desc: "Available at every photo studio for ₹80. Used at weddings, picnics, birthday parties. 27 exposures of joy." },
    { era: "EARLY DIGITAL", name: "Canon PowerShot A60", desc: "2 megapixels. A tiny LCD screen. You'd hold your breath hoping the photo turned out okay." },
    { era: "THE CLASSIC", name: "Nikon FM2", desc: "The photographer's camera. Fully mechanical, all-metal. Shot every major photojournalistic story of the era." },
    { era: "INSTANT", name: "Fujifilm Instax Mini", desc: "Just beginning its rise to fame. Tiny credit-card-sized prints, chemical magic in your hands." },
    { era: "STREET", name: "Lomography LC-A", desc: "The cult camera of art students — unpredictable, dreamy, beautifully imperfect exposures." }
  ],
  around2008: [
    { era: "DIGITAL REVOLUTION", name: "Canon EOS 400D / Rebel XTi", desc: "India's first affordable DSLR. Film was finally dying. 10 megapixels and instant previews." },
    { era: "COMPACT", name: "Sony Cybershot T100", desc: "Slim, stylish, and perfect for carrying everywhere. The camera everyone wanted in college." },
    { era: "FILM REVIVAL", name: "Holga 120N", desc: "Medium format film camera beloved by art students for its light leaks and dream-like images." },
    { era: "INSTANT", name: "Fujifilm Instax Wide", desc: "The bigger, bolder instant camera. Weddings and parties adopted it as their official camera." }
  ],
  around2012: [
    { era: "PRO DSLR", name: "Canon EOS 600D", desc: "The camera that launched a thousand photography careers in India. Articulating screen, HD video, brilliant." },
    { era: "MIRRORLESS ERA", name: "Sony NEX-5", desc: "The future was here — mirrorless cameras, smaller bodies, interchangeable lenses." },
    { era: "FILM NOSTALGIA", name: "Lomography Diana F+", desc: "Film was becoming retro. Young photographers were choosing grain and imperfection over pixels." },
    { era: "COMPACT", name: "Canon PowerShot G15", desc: "The serious compact. Journalists, bloggers, travellers — everyone's go-to before smartphones took over." }
  ]
};

function getCameraGear(year) {
  if (year <= 1995) return CAMERA_GEAR.before1995;
  if (year <= 2005) return CAMERA_GEAR.around2002;
  if (year <= 2010) return CAMERA_GEAR.around2008;
  return CAMERA_GEAR.around2012;
}

// ── ENTRY POINT ──────────────────────────────────────────────
function startJourney() {
  const day = parseInt(document.getElementById('day-input').value) || 4;
  const month = parseInt(document.getElementById('month-input').value) || 7;
  const year = parseInt(document.getElementById('year-input').value) || 2002;
  const name = document.getElementById('name-input').value.trim() || null;

  if (year < 1990 || year > 2015) {
    shakeElement(document.getElementById('year-input'));
    return;
  }

  const overlay = document.getElementById('transition-overlay');
  document.getElementById('portal-year-display').textContent = year;
  overlay.classList.add('active');

  setTimeout(() => {
    buildCapsule(day, month, year, name);
    document.getElementById('landing').style.display = 'none';
    document.getElementById('capsule-page').classList.remove('hidden');
    overlay.classList.remove('active');
    window.scrollTo(0, 0);
    setupScrollAnimations();
  }, 2800);
}

function goBack() {
  document.getElementById('landing').style.display = 'flex';
  document.getElementById('capsule-page').classList.add('hidden');
  window.scrollTo(0, 0);
}

// ── BUILD CAPSULE ─────────────────────────────────────────────
function buildCapsule(day, month, year, name) {
  const closestYear = getClosestYear(year);
  currentData = YEAR_DATA[closestYear];

  const dateStr = `${ordinal(day)} ${MONTH_NAMES[month]}, ${year}`;
  const displayName = name || 'She';
  const pronoun = name ? name : 'she';

  // Hero
  document.getElementById('hero-date-display').textContent = dateStr;
  document.getElementById('paper-date-bar').innerHTML = `THE WORLD ON — <span>${dateStr}</span>`;
  document.getElementById('hero-name-display').textContent = displayName;
  document.getElementById('hero-deck').textContent =
    `On this extraordinary day, the universe paused to welcome a new soul. Here is everything the world held in its arms as ${pronoun.toLowerCase() === 'she' ? 'she' : pronoun} took her very first breath.`;

  document.getElementById('headlines-year').textContent = year;
  document.getElementById('famous-year').textContent = year;
  document.getElementById('pop-number').textContent = currentData.world.population;
  document.getElementById('pop-births').textContent = currentData.world.birthsPerDay;

  document.getElementById('love-title').textContent = name ? `Dear ${name},` : 'Dear Beautiful Soul,';
  document.getElementById('love-text').textContent =
    `The world was already beautiful — but it became extraordinary the moment you arrived on ${dateStr}. Every headline, every song, every film of that year now carries a secret meaning. Because somewhere in all the colour and noise, the universe was quietly, perfectly preparing for you. 🌟`;

  // Build sections
  buildSnapshotGrid(currentData.world.snapshot);
  buildIndiaCards(currentData.india);
  buildHeadlines(currentData.world.headlines);
  buildCultureContent('movies', currentData.world.movies);
  buildPrices(currentData.world.prices);
  buildTech(currentData.world.techExisted, currentData.world.techNotYet);
  buildLostGrid(currentData.world.lost);
  buildCameraGear(year);
  buildFamous(currentData.world.famous);
}

// ── SECTION BUILDERS ─────────────────────────────────────────

function buildSnapshotGrid(items) {
  document.getElementById('snapshot-grid').innerHTML = items.map((item, i) =>
    `<div class="snapshot-card fade-in-up" style="transition-delay:${i*60}ms">
      <span class="snap-icon">${item.icon}</span>
      <span class="snap-label">${item.label}</span>
      <span class="snap-value">${item.value}</span>
      <span class="snap-sub">${item.sub}</span>
    </div>`
  ).join('');
}

function buildIndiaCards(items) {
  document.getElementById('india-cards').innerHTML = items.map((item, i) =>
    `<div class="india-card fade-in-up" style="transition-delay:${i*80}ms">
      <div class="india-card-icon">${item.icon}</div>
      <div class="india-card-title">${item.title}</div>
      <div class="india-card-body">${item.body}</div>
    </div>`
  ).join('');
}

function buildHeadlines(items) {
  document.getElementById('headlines-grid').innerHTML = items.map((item, i) =>
    `<div class="headline-item fade-in-left" style="transition-delay:${i*80}ms">
      <div class="headline-num">0${i+1}</div>
      <div class="headline-content">
        <span class="headline-tag">${item.tag}</span>
        <div class="headline-text">${item.text}</div>
        <div class="headline-desc">${item.desc}</div>
      </div>
    </div>`
  ).join('');
}

function buildCultureContent(tab, items) {
  document.getElementById('culture-content').innerHTML =
    `<div class="culture-cards">${items.map((item, i) =>
      `<div class="culture-card fade-in-up" style="transition-delay:${i*70}ms">
        <div class="culture-card-top">${item.emoji}</div>
        <div class="culture-card-body">
          <div class="culture-card-title">${item.title}</div>
          <div class="culture-card-sub">${item.sub}</div>
        </div>
      </div>`
    ).join('')}</div>`;
}

function switchTab(tab, event) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  const map = { movies: currentData.world.movies, music: currentData.world.music, tv: currentData.world.tv };
  buildCultureContent(tab, map[tab]);

  setTimeout(() => {
    document.querySelectorAll('#culture-content .fade-in-up').forEach(el => el.classList.add('visible'));
  }, 60);
}

function buildPrices(items) {
  document.getElementById('prices-grid').innerHTML =
    `<table class="prices-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Then</th>
          <th style="text-align:center"></th>
          <th style="text-align:right">Now</th>
        </tr>
      </thead>
      <tbody>${items.map((item, i) =>
        `<tr class="fade-in-up" style="transition-delay:${i*60}ms">
          <td>
            <div class="price-item-cell">
              <span class="price-icon-sm">${item.icon}</span>
              <span class="price-name-main">${item.name}</span>
            </div>
          </td>
          <td class="price-then-cell">${item.then}</td>
          <td class="price-change-cell">${item.arrow}</td>
          <td class="price-now-cell">
            <span class="price-now-label-sm">Today</span>
            ${item.now}
          </td>
        </tr>`
      ).join('')}</tbody>
    </table>`;
}

function buildTech(existed, notYet) {
  document.getElementById('tech-existed').innerHTML = existed.map((item, i) =>
    `<div class="tech-item fade-in-up" style="transition-delay:${i*70}ms">
      <span class="tech-item-icon">${item.icon}</span>
      <span class="tech-item-text">${item.name}<span class="tech-item-year">${item.year}</span></span>
    </div>`
  ).join('');

  document.getElementById('tech-notyet').innerHTML = notYet.map((item, i) =>
    `<div class="tech-item fade-in-up" style="transition-delay:${i*70}ms">
      <span class="tech-item-icon">${item.icon}</span>
      <span class="tech-item-text">${item.name}<span class="tech-item-year">${item.year}</span></span>
    </div>`
  ).join('');
}

function buildLostGrid(items) {
  document.getElementById('lost-grid').innerHTML = items.map((item, i) =>
    `<div class="lost-card fade-in-up" style="transition-delay:${i*80}ms">
      <span class="lost-icon">${item.icon}</span>
      <div class="lost-name">${item.name}</div>
      <div class="lost-desc">${item.desc}</div>
    </div>`
  ).join('');
}

function buildCameraGear(year) {
  const gear = getCameraGear(year);
  const el = document.getElementById('camera-gear-grid');
  if (!el) return;
  el.innerHTML = gear.map((item, i) =>
    `<div class="camera-gear-card fade-in-up" style="transition-delay:${i*80}ms">
      <span class="gear-era">${item.era}</span>
      <div class="gear-name">${item.name}</div>
      <div class="gear-desc">${item.desc}</div>
    </div>`
  ).join('');
}

function buildFamous(items) {
  document.getElementById('famous-grid').innerHTML = items.map((item, i) =>
    `<div class="famous-card fade-in-up" style="transition-delay:${i*80}ms">
      <span class="famous-avatar">${item.avatar}</span>
      <div class="famous-name">${item.name}</div>
      <div class="famous-known">${item.known}</div>
    </div>`
  ).join('');
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in-up, .fade-in-left').forEach(el => observer.observe(el));
}

// ── SHAKE ─────────────────────────────────────────────────────
function shakeElement(el) {
  el.style.animation = 'shake 0.4s ease';
  el.style.borderBottomColor = '#b5324a';
  setTimeout(() => { el.style.animation = ''; el.style.borderBottomColor = ''; }, 500);
}
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}`;
document.head.appendChild(shakeStyle);

// ── STARS ─────────────────────────────────────────────────────
(function generateStars() {
  const bg = document.querySelector('.stars-bg');
  if (!bg) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const s = document.createElement('div');
    const size = Math.random() * 2 + 0.5;
    s.style.cssText = `
      position:absolute;width:${size}px;height:${size}px;
      background:rgba(255,255,255,${Math.random()*0.7+0.15});
      border-radius:50%;
      top:${Math.random()*100}%;left:${Math.random()*100}%;
      animation:twinkle ${Math.random()*4+3}s ease-in-out infinite alternate;
      animation-delay:${Math.random()*6}s;
    `;
    frag.appendChild(s);
  }
  bg.appendChild(frag);
  const st = document.createElement('style');
  st.textContent = `@keyframes twinkle{from{opacity:0.1;}to{opacity:0.9;}}`;
  document.head.appendChild(st);
})();

// ── KEYBOARD ─────────────────────────────────────────────────
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && document.getElementById('landing').style.display !== 'none') {
    startJourney();
  }
});

// ── DEFAULT VALUES ────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('day-input').value = '4';
  document.getElementById('month-input').value = '7';
  document.getElementById('year-input').value = '2002';
});
