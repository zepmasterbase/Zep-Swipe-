<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Zep Swipe — Campus Wallet (Student-first)</title>

<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root{
    --bg-a:#0f1630;
    --bg-b:#201a3a;
    --accent-1:#00f0ff;
    --accent-2:#ff00d4;
    --accent-3:#ff69b4;
  }
  html,body{height:100%;}
  body{
    margin:0;
    font-family:'Inter',system-ui,Arial;
    background: linear-gradient(135deg,var(--bg-a) 0%, #15102b 50%, var(--bg-b) 100%);
    color:#eaf2ff;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }

  h1,h2,h3{ font-family:'Orbitron',sans-serif; }

  /* Neon heading style */
  .neon-text {
    background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(0,240,255,0.12), 0 0 20px rgba(255,0,212,0.06);
  }

  /* glass */
  .glass {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
  }

  /* CTA */
  .cta-main {
    background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3));
    color: #000;
  }
  .cta-main:hover { transform: translateY(-3px); box-shadow:0 12px 30px rgba(0,0,0,0.45); }

  /* subtle floating card */
  .float-card{ transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .25s; }
  .float-card:hover{ transform: translateY(-8px); box-shadow: 0 18px 40px rgba(5,6,12,0.6); }

  /* small token pill */
  .token-pill {
    display:inline-flex; gap:.5rem; align-items:center;
    padding: .35rem .6rem; border-radius:999px; font-weight:600; font-size:.92rem;
    background: linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    border:1px solid rgba(255,255,255,0.04);
  }

  /* particle canvas */
  #particle-canvas { position:fixed; inset:0; z-index:0; pointer-events:none; }

  /* make sure content is above canvas */
  header, section, footer, .modal { position:relative; z-index:5; }

  /* image placeholder styles */
  .img-fallback {
    display:flex; align-items:center; justify-content:center;
    background: linear-gradient(135deg,#2b2145,#2d234e); color:#cfeeff; font-weight:600;
  }

  /* responsive header layout tweaks */
  @media (max-width: 768px){
    .header-center { display:none; } /* hide token in center on small screens */
  }
</style>
</head>
<body>

<!-- Particle canvas -->
<canvas id="particle-canvas"></canvas>

<!-- Header: sleek flow -->
<header class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl flex items-center justify-between px-4 py-2 glass shadow z-50">
  <!-- Left: neon title (no image beside it) -->
  <div class="flex items-center gap-4">
    <a href="#top" class="text-xl font-bold neon-text" aria-label="Zep Swipe home">Zep Swipe</a>
    <span class="hidden sm:inline text-sm text-gray-300">Campus Wallet • Student Rewards</span>
  </div>

  <!-- Center (desktop only): token badge -->
  <div class="header-center token-pill hidden md:inline-flex">
    <strong class="text-white">$ZAC</strong>
    <span class="text-xs text-gray-300">+ USDT</span>
  </div>

  <!-- Right: connect + menu -->
  <nav class="flex items-center gap-3">
    <button id="connectHeader" class="px-4 py-2 rounded-lg cta-main font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300">Connect Wallet</button>

    <div class="relative">
      <button id="menuBtn" class="px-3 py-2 rounded-md glass text-sm">Menu ▾</button>
      <div id="menuDrop" class="absolute right-0 mt-2 w-44 glass rounded-lg hidden border border-white/5">
        <a href="#earn-steps" class="block px-4 py-2 hover:bg-purple-600/30">How it works</a>
        <a href="#learn-earn" class="block px-4 py-2 hover:bg-purple-600/30">Learn & Earn</a>
        <a href="#wishlist" class="block px-4 py-2 hover:bg-purple-600/30">Early Access</a>
      </div>
    </div>
  </nav>
</header>

<!-- Spacer so header doesn't overlap content -->
<div class="h-20"></div>

<!-- Hero -->
<section id="top" class="max-w-6xl mx-auto px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <!-- Left content -->
    <div class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-bold neon-text">Zep Swipe — Campus Wallet for Students</h1>
      <p class="text-gray-300 max-w-xl">Earn <span class="neon-text">$ZAC</span> by taking quick quizzes, sync to your mobile wallet, and spend at campus vendors — simple, social, and student-first.</p>

      <div class="flex flex-wrap gap-3 mt-4">
        <button id="connectHero" class="px-5 py-3 rounded-lg cta-main font-semibold float-card">Connect Wallet</button>
        <a href="https://forms.gle/7Pr7gLySfroWMptC9" target="_blank" class="px-5 py-3 rounded-lg border border-white/8 glass float-card">Start Quiz</a>
        <a href="#wishlist" class="px-4 py-3 rounded-lg bg-yellow-400 text-black font-semibold float-card">Join Early — Get free ZAC</a>
      </div>

      <!-- quick token ribbon -->
      <div class="mt-4 token-pill inline-flex gap-2">
        <span class="text-xs text-gray-300">Powered by</span>
        <strong>$ZAC</strong>
        <span class="text-xs text-gray-300">+ USDT</span>
      </div>
    </div>

    <!-- Right: hero image (lighter photo + robust fallback) -->
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        alt="African students studying on campus"
        class="w-full h-72 md:h-96 object-cover"
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=70"
        onerror="this.onerror=null;this.style.objectFit='cover';this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%232a1f45%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2232%22 fill=%22%23dbeeff%22 font-family=%22Arial,Helvetica,sans-serif%22>Student imagery unavailable</text></svg>';"
      />
    </div>
  </div>
</section>

<!-- How students earn (simplified) -->
<section id="earn-steps" class="py-12 px-4">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl font-bold neon-text mb-4">How students earn</h2>
    <p class="text-gray-300 mb-6">Fast flow — Quiz → Reward → Wallet → Vendor</p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div class="glass p-4 rounded-lg float-card">
        <div class="text-xl font-semibold mb-2">1. Quiz</div>
        <div class="text-sm text-gray-300">Short micro-quiz you can do between classes.</div>
      </div>
      <div class="glass p-4 rounded-lg float-card">
        <div class="text-xl font-semibold mb-2">2. Reward</div>
        <div class="text-sm text-gray-300">Earn $ZAC instantly for participation.</div>
      </div>
      <div class="glass p-4 rounded-lg float-card">
        <div class="text-xl font-semibold mb-2">3. Wallet</div>
        <div class="text-sm text-gray-300">Rewards sync to your mobile or web wallet.</div>
      </div>
      <div class="glass p-4 rounded-lg float-card">
        <div class="text-xl font-semibold mb-2">4. Vendor</div>
        <div class="text-sm text-gray-300">Spend at cafés, stores, or convert to USDT.</div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials with safe image fallbacks -->
<section class="py-12 px-4">
  <div class="max-w-5xl mx-auto">
    <h3 class="text-2xl font-bold neon-text text-center mb-6">Student Stories</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="glass p-4 rounded-lg float-card text-center">
        <img alt="Student Ama" class="w-20 h-20 mx-auto rounded-full object-cover mb-3" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%232a1f45%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2214%22 fill=%22%23dbeeff%22>Ama</text></svg>';">
        <p class="text-gray-300 italic">“Quizzes gave me ZAC for printing and coffee.”</p>
        <div class="mt-2 font-semibold text-pink-300">— Ama, Ghana</div>
      </div>

      <div class="glass p-4 rounded-lg float-card text-center">
        <img alt="Student Sanele" class="w-20 h-20 mx-auto rounded-full object-cover mb-3" src="https://images.unsplash.com/photo-1531123414780-fdb0c2f6f0b7?auto=format&fit=crop&w=400&q=60" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%232a1f45%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2214%22 fill=%22%23dbeeff%22>Sanele</text></svg>';">
        <p class="text-gray-300 italic">“Instant rewards into my wallet — super handy.”</p>
        <div class="mt-2 font-semibold text-pink-300">— Sanele, South Africa</div>
      </div>

      <div class="glass p-4 rounded-lg float-card text-center">
        <img alt="Student Kofi" class="w-20 h-20 mx-auto rounded-full object-cover mb-3" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=60" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%232a1f45%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2214%22 fill=%22%23dbeeff%22>Kofi</text></svg>';">
        <p class="text-gray-300 italic">“Paid for lunch on campus with ZAC — love it.”</p>
        <div class="mt-2 font-semibold text-pink-300">— Kofi, Ghana</div>
      </div>
    </div>
  </div>
</section>

<!-- Wishlist / Early Access -->
<section id="wishlist" class="py-12 px-4">
  <div class="max-w-3xl mx-auto glass p-6 rounded-lg text-center">
    <h3 class="text-2xl font-bold neon-text mb-2">Join Early Access — Get Free ZAC</h3>
    <p class="text-gray-300 mb-4">Sign up and get credited when we launch campus pilots.</p>

    <form action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" target="_blank" class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input type="text" name="name" required placeholder="Your name" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none">
      <input type="email" name="email" required placeholder="Email address" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none">
      <button type="submit" class="p-3 rounded-lg cta-main font-semibold">Sign up & get ZAC</button>
    </form>
  </div>
</section>

<!-- Footer -->
<footer class="py-8 text-center text-gray-300 text-sm border-t border-white/6">
  © 2025 Zep Swipe — Made for Africa’s Students • Powered by $ZAC + USDT
</footer>

<!-- Tiny JS: particles + menu + modal placeholder -->
<script>
/* ---------- particles (lightweight) ---------- */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [], W=innerWidth, H=innerHeight;

function resize(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight; canvas.style.width = innerWidth+'px'; canvas.style.height = innerHeight+'px'; }
window.addEventListener('resize', resize); resize();

function initParts(){
  particles = [];
  const count = Math.min(90, Math.round(innerWidth/12));
  for(let i=0;i<count;i++){
    particles.push({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*2 + 0.7,
      vx: (Math.random()-0.5)*0.25,
      vy: (Math.random()-0.5)*0.25,
      a: Math.random()*0.25 + 0.05,
      hue: Math.random()*120 + 180
    });
  }
}
initParts();

function step(){
  ctx.clearRect(0,0,W,H);
  for(const p of particles){
    p.x += p.vx; p.y += p.vy;
    if(p.x < -50) p.x = W+10;
    if(p.x > W+50) p.x = -10;
    if(p.y < -50) p.y = H+10;
    if(p.y > H+50) p.y = -10;

    // glow
    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*8);
    g.addColorStop(0, `hsla(${p.hue},80%,60%,${p.a})`);
    g.addColorStop(0.4, `hsla(${p.hue},80%,60%,${p.a*0.45})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r*6,0,Math.PI*2); ctx.fill();

    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = `hsla(${p.hue},80%,70%,${Math.min(1,p.a+0.12)})`;
    ctx.fill();
  }
  requestAnimationFrame(step);
}
step();

/* ---------- header menu toggle ---------- */
const menuBtn = document.getElementById('menuBtn');
const menuDrop = document.getElementById('menuDrop');
menuBtn.addEventListener('click', ()=> menuDrop.classList.toggle('hidden'));

/* ---------- Connect Wallet placeholders: header & hero ---------- */
const connectHeader = document.getElementById('connectHeader');
const connectHero = document.getElementById('connectHero');

function openWalletMock(){
  // placeholder UX: you should integrate WalletConnect / Web3Modal on production
  alert('Connect Wallet (mock). For production connect, integrate WalletConnect or your chosen SDK.');
}
connectHeader.addEventListener('click', openWalletMock);
connectHero.addEventListener('click', openWalletMock);

/* ---------- improve accessibility: close menu on outside click ---------- */
document.addEventListener('click', (e)=>{
  if(!menuBtn.contains(e.target) && !menuDrop.contains(e.target)) menuDrop.classList.add('hidden');
});

/* ---------- prefers-reduced-motion support ---------- */
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  // stop particle animation
  particles = [];
  cancelAnimationFrame(step);
}
</script>
</body>
</html>