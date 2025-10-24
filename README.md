<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Zep Swipe — Campus Wallet (Student-first)</title>

<!-- Tailwind (CDN) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root{
    --glass: rgba(255,255,255,0.06);
    --accent-1: #00f0ff;
    --accent-2: #ff00d4;
    --accent-3: #ff69b4;
  }

  html,body { height:100%; }
  body{
    margin:0;
    font-family:'Inter',sans-serif;
    background: linear-gradient(135deg,#0f1630 0%, #1b1940 45%, #201a3a 100%);
    color: #ecf0ff;
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
  }

  h1,h2,h3 { font-family:'Orbitron', sans-serif; letter-spacing: -0.5px; }

  /* Neon text */
  .neon-text {
    background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(0,240,255,0.15), 0 0 20px rgba(255,0,212,0.08);
  }

  /* Light glass card */
  .glass {
    background: var(--glass);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
  }

  /* Floating card animation */
  .float-y {
    transform: translateZ(0);
    transition: transform 0.45s cubic-bezier(.2,.9,.2,1), box-shadow 0.3s ease;
  }
  .float-y:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.45); }

  /* Glowing border on hover for CTA */
  .glow-hover { transition: box-shadow .22s ease, border-color .22s ease; }
  .glow-hover:hover { box-shadow: 0 0 28px rgba(0,240,255,0.12), 0 0 54px rgba(255,0,212,0.06); border-color: rgba(255,255,255,0.12); }

  /* Particle canvas */
  #particle-canvas { position: fixed; inset:0; z-index:0; pointer-events:none; }

  /* Ensure sections sit above canvas */
  section, nav, footer, .modal { position: relative; z-index: 5; }

  /* Subtle image overlay for accessibility */
  .img-overlay { background: linear-gradient(180deg, rgba(10,10,10,0.1), rgba(10,10,10,0.18)); }

  /* Small helper to emphasize token */
  .token-pill {
    display:inline-flex;
    gap:.5rem;
    align-items:center;
    background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
    padding:.45rem .65rem;
    border-radius:999px;
    border:1px solid rgba(255,255,255,0.06);
    font-weight:600;
    font-size:.92rem;
  }

  /* Mobile modal tweaks */
  .modal { transition: transform .24s cubic-bezier(.2,.9,.2,1); }
  .modal-backdrop { background: rgba(6,6,10,0.6); backdrop-filter: blur(4px); }

  /* Testimonials small card */
  .quote { font-style: italic; color: #d9e8ffcc; }

  /* Responsive tweaks for hero image on mobile */
  @media (max-width:640px){
    .hero-cta { width:100%; flex-direction:column; gap:0.75rem; }
    nav { padding-left: 1rem; padding-right:1rem; }
  }
</style>
</head>
<body>

<!-- Particle Canvas (neon orbs) -->
<canvas id="particle-canvas"></canvas>

<!-- Navbar -->
<nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl flex items-center justify-between px-4 py-3 glass shadow-sm z-50">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/6">
      <!-- university/campus logo (placeholder) -->
      <img src="https://source.unsplash.com/80x80/?campus,students" alt="logo" class="w-full h-full object-cover">
    </div>
    <a href="#top" class="text-xl font-bold neon-text">Zep Swipe</a>
    <div class="ml-3 hidden sm:flex items-center gap-2">
      <span class="text-xs text-gray-300">Powered by</span>
      <span class="token-pill">
        <strong class="text-white">$ZAC</strong>
        <span class="text-[12px] text-gray-300">+ USDT</span>
      </span>
    </div>
  </div>

  <div class="flex items-center gap-3">
    <button id="connectBtn" class="px-4 py-2 rounded-lg gradient-to-r bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black font-semibold shadow-sm hover:scale-[1.02] transition-transform">Connect Wallet</button>

    <div class="relative group">
      <button class="px-3 py-2 text-sm rounded-md glass glow-hover">Menu ▾</button>
      <div class="absolute right-0 mt-2 w-44 glass rounded-lg hidden group-hover:block border border-purple-500/20">
        <a href="#learn-earn" class="block px-4 py-2 hover:bg-purple-500 hover:text-black transition">Learn</a>
        <a href="#wishlist" class="block px-4 py-2 hover:bg-purple-500 hover:text-black transition">Wishlist</a>
        <a href="#how-it-works" class="block px-4 py-2 hover:bg-purple-500 hover:text-black transition">How it works</a>
      </div>
    </div>
  </div>
</nav>

<!-- Top banner (campus vibes) -->
<header class="pt-28 pb-6">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <!-- Left: hero content -->
      <div class="space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold neon-text leading-tight">Zep Swipe — Campus Wallet for Students</h1>
        <p class="text-gray-300 max-w-xl">
          Simple. Fast. Social. Earn $ZAC through micro-quizzes and student tasks, hold it in your wallet, and spend at campus vendors — borderless and light-weight.
        </p>

        <div class="flex flex-wrap gap-3 hero-cta mt-3">
          <button id="connectBtnHero" class="px-6 py-3 gradient-btn text-black rounded-lg font-semibold float-y glow-hover">Connect Wallet</button>
          <a href="#learn-earn" class="px-5 py-3 border-2 border-purple-400 text-purple-300 rounded-lg font-semibold glass transition-colors hover:bg-purple-600 hover:text-white float-y">Learn & Earn</a>
          <a href="#wishlist" class="px-5 py-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-black rounded-lg font-semibold shadow float-y">Get Early Access — Free ZAC</a>
        </div>

        <!-- Token highlight ribbon -->
        <div class="mt-4 inline-flex items-center gap-3 glass px-3 py-2 rounded-full">
          <img src="https://source.unsplash.com/40x40/?token,crypto" alt="token" class="w-8 h-8 rounded-full object-cover ring-1 ring-white/8">
          <div>
            <div class="text-xs text-gray-300">Token</div>
            <div class="font-semibold neon-text">$ZAC • Utility + Rewards</div>
          </div>
        </div>

        <!-- Small testimonial -->
        <div class="mt-4 glass px-4 py-3 rounded-lg flex gap-3 items-center">
          <img src="https://source.unsplash.com/60x60/?african-student,smile" alt="student" class="w-12 h-12 rounded-full object-cover ring-1 ring-white/6">
          <div>
            <div class="text-sm quote">“I earned ZAC after a quick quiz and used it to buy coffee at campus — zero hassle.”</div>
            <div class="text-xs text-gray-300 mt-1">— Amina, University of Lagos</div>
          </div>
        </div>
      </div>

      <!-- Right: bright campus image with floating card -->
      <div class="relative">
        <div class="rounded-xl overflow-hidden img-overlay shadow-xl">
          <!-- Unsplash dynamic campus image; replace with curated photography for production -->
          <img src="https://source.unsplash.com/900x600/?african-students,campus" alt="Campus students" class="w-full h-[360px] object-cover md:h-[460px]">
        </div>

        <!-- Floating card on top of image -->
        <div class="absolute bottom-6 left-6 glass p-4 rounded-xl max-w-sm float-y w-[85%] md:w-80">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-300">Quick Win</div>
              <div class="font-semibold neon-text">Take a 2-min Quiz → Earn ZAC</div>
            </div>
            <div class="text-right">
              <div class="text-xs text-gray-300">Balance</div>
              <div class="font-bold">$ZAC <span class="text-sm text-gray-300">+ USDT</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- How Students Earn (simplified steps) -->
<section id="how-it-works" class="py-12">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold neon-text mb-4">How students earn</h2>
    <p class="text-gray-300 mb-8">Simple flow — built for campus life.</p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <!-- Step 1 -->
      <div class="glass p-4 rounded-xl text-left float-y hover:shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">1</div>
          <div class="font-semibold">Quiz</div>
        </div>
        <div class="text-sm text-gray-300">Quick micro-quiz on campus deals or course topics.</div>
      </div>

      <!-- Step 2 -->
      <div class="glass p-4 rounded-xl text-left float-y hover:shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">2</div>
          <div class="font-semibold">Reward</div>
        </div>
        <div class="text-sm text-gray-300">Earn $ZAC tokens instantly for correct answers or participation.</div>
      </div>

      <!-- Step 3 -->
      <div class="glass p-4 rounded-xl text-left float-y hover:shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">3</div>
          <div class="font-semibold">Wallet</div>
        </div>
        <div class="text-sm text-gray-300">Hold in your mobile wallet, convert, or save for later.</div>
      </div>

      <!-- Step 4 -->
      <div class="glass p-4 rounded-xl text-left float-y hover:shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">4</div>
          <div class="font-semibold">Vendor</div>
        </div>
        <div class="text-sm text-gray-300">Spend $ZAC at participating campus vendors or refill with USDT.</div>
      </div>
    </div>
  </div>
</section>

<!-- Learn & Earn CTA -->
<section id="learn-earn" class="py-8 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.01)]">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <div class="glass p-6 rounded-xl inline-block text-left w-full">
      <div class="md:flex md:items-center md:justify-between gap-4">
        <div>
          <h3 class="text-2xl font-bold neon-text">Learn & Earn — Start now</h3>
          <p class="text-gray-300 mt-2">Take short lessons and micro-quizzes. Earn ZAC that’s spendable on campus.</p>
        </div>
        <div class="mt-4 md:mt-0 flex gap-3 items-center">
          <a href="#" class="px-5 py-3 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black rounded-lg font-semibold">Start Quiz</a>
          <a href="#" class="px-5 py-3 border border-white/8 rounded-lg text-sm">View Rewards</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Wishlist / Early Access w/ incentive -->
<section id="wishlist" class="py-12">
  <div class="max-w-3xl mx-auto px-4">
    <div class="glass p-6 rounded-xl text-center">
      <h2 class="text-2xl font-bold neon-text">Wishlist — Early Access</h2>
      <p class="text-gray-300 mt-2">Sign up early and get <strong class="neon-text">$5 ZAC</strong> credited when we launch campus pilots.</p>

      <form id="wishlistForm" class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input name="name" required placeholder="Your name" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-pink-500 focus:outline-none">
        <input name="email" type="email" required placeholder="Email address" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-pink-500 focus:outline-none">
        <button type="submit" class="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-black rounded-lg font-semibold shadow">Get Free ZAC — Join</button>
      </form>

      <p id="wishMsg" class="text-sm text-green-200 mt-3 hidden">Thanks — we’ll add you to early access and credit your ZAC after verification.</p>
    </div>
  </div>
</section>

<!-- Testimonials (simple slider) -->
<section class="py-10">
  <div class="max-w-5xl mx-auto px-4">
    <h3 class="text-2xl font-bold neon-text text-center mb-6">Student Stories</h3>

    <div class="relative">
      <div id="testimonials" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="glass p-4 rounded-xl float-y">
          <div class="flex items-center gap-3 mb-3">
            <img src="https://source.unsplash.com/80x80/?african-student,portrait" alt="T" class="w-12 h-12 rounded-full object-cover ring-1 ring-white/6">
            <div>
              <div class="font-semibold">Thabo • Cape Town</div>
              <div class="text-xs text-gray-300">Computer Science</div>
            </div>
          </div>
          <div class="quote text-sm">“The quiz rewards made me try a new study group. Redeemed ZAC for lunch at campus — so convenient.”</div>
        </div>

        <div class="glass p-4 rounded-xl float-y">
          <div class="flex items-center gap-3 mb-3">
            <img src="https://source.unsplash.com/80x80/?african-woman,student" alt="A" class="w-12 h-12 rounded-full object-cover ring-1 ring-white/6">
            <div>
              <div class="font-semibold">Amina • Lagos</div>
              <div class="text-xs text-gray-300">Economics</div>
            </div>
          </div>
          <div class="quote text-sm">“I love earning small ZAC bonuses — it paid for a transport ride home one week.”</div>
        </div>

        <div class="glass p-4 rounded-xl float-y">
          <div class="flex items-center gap-3 mb-3">
            <img src="https://source.unsplash.com/80x80/?student,smile,africa" alt="K" class="w-12 h-12 rounded-full object-cover ring-1 ring-white/6">
            <div>
              <div class="font-semibold">Kofi • Accra</div>
              <div class="text-xs text-gray-300">Design</div>
            </div>
          </div>
          <div class="quote text-sm">“Super easy mobile wallet flow — connected on my phone in seconds.”</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-8 text-center text-gray-300 text-sm border-t border-purple-500/10">
  © 2025 Zep Swipe — Built for Africa’s campus innovators. Powered by $ZAC + USDT.
</footer>

<!-- Mobile-first Connect Wallet Modal (hidden by default) -->
<div id="walletModal" class="fixed inset-0 hidden items-end sm:items-center justify-center z-60">
  <div class="absolute inset-0 modal-backdrop" id="modalCloseBackdrop"></div>

  <div class="modal w-full sm:w-[420px] glass rounded-t-xl sm:rounded-xl p-4 transform transition-all">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h4 class="font-bold text-lg neon-text">Connect Wallet</h4>
        <div class="text-xs text-gray-300">Optimized for mobile — pick your wallet or scan QR.</div>
      </div>
      <button id="closeModal" class="text-gray-300">✕</button>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-3">
      <!-- Mobile-first large buttons -->
      <a href="#" class="p-3 rounded-lg bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black text-center font-semibold">Open Mobile Wallet App</a>
      <a href="#" class="p-3 rounded-lg border border-white/8 text-center glass">Connect via WalletConnect</a>
      <button id="showQR" class="p-3 rounded-lg bg-white/6 text-center">Show QR Code</button>
    </div>

    <!-- QR placeholder -->
    <div id="qrArea" class="mt-4 hidden text-center">
      <div class="inline-block p-4 glass rounded-lg">
        <img src="https://source.unsplash.com/200x200/?qr,code" alt="QR placeholder" class="w-40 h-40 object-cover rounded-sm mx-auto">
        <div class="text-xs text-gray-300 mt-2">Scan with your wallet app</div>
      </div>
    </div>

    <div class="mt-4 text-xs text-gray-400">
      Tip: On mobile, tap "Open Mobile Wallet App" to deep-link. On desktop, use WalletConnect.
    </div>
  </div>
</div>

<!-- Minimal JS: particles, modal, wishlist, small animations -->
<script>
/* ---------- Particle orbs (lightweight) ---------- */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let DPR = Math.max(1, window.devicePixelRatio || 1);
let parts = [];

function resizeCanvas(){
  DPR = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = Math.floor(window.innerWidth * DPR);
  canvas.height = Math.floor(window.innerHeight * DPR);
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
window.addEventListener('resize', resizeCanvas, { passive: true });
resizeCanvas();

function rand(min, max){ return Math.random()*(max-min)+min; }

function initParticles(){
  parts = [];
  const count = Math.min(120, Math.round((window.innerWidth/10)));
  for(let i=0;i<count;i++){
    parts.push({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      r: rand(0.9, 3.2),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.15, 0.15),
      hue: rand(180,320),
      alpha: rand(0.08, 0.35),
      pulse: rand(0.002, 0.008),
      phase: rand(0, Math.PI*2)
    });
  }
}
initParticles();

let mouse = { x: -9999, y: -9999 };
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener('touchmove', e => { if(e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; } }, {passive:true});
window.addEventListener('touchend', ()=> { mouse.x=-9999; mouse.y=-9999; });

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(const p of parts){
    // motion
    p.x += p.vx;
    p.y += p.vy;
    p.phase += p.pulse;
    const r = p.r + Math.sin(p.phase)*0.6;

    // bounce edges
    if(p.x < -50) p.x = window.innerWidth + 10;
    if(p.x > window.innerWidth + 50) p.x = -10;
    if(p.y < -50) p.y = window.innerHeight + 10;
    if(p.y > window.innerHeight + 50) p.y = -10;

    // subtle attraction to mouse
    if(mouse.x > -9000){
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const d2 = dx*dx + dy*dy;
      if(d2 < 40000){
        const f = (1 - Math.sqrt(d2)/200) * 0.08;
        p.vx -= dx * f * 0.0008;
        p.vy -= dy * f * 0.0008;
      }
    }

    // draw glow circle
    const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r*8);
    const color = `hsla(${Math.floor(p.hue)}, 85%, 62%, ${p.alpha})`;
    grd.addColorStop(0, color);
    grd.addColorStop(0.3, `hsla(${Math.floor(p.hue)},85%,62%,${p.alpha*0.55})`);
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(p.x, p.y, r*8, 0, Math.PI*2);
    ctx.fill();

    // solid center
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${Math.floor(p.hue)}, 85%, 72%, ${Math.min(1, p.alpha+0.2)})`;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}
draw();

/* ---------- Simple fade-up on scroll ---------- */
const fadeEls = document.querySelectorAll('.float-y, .glass, .neon-text, .quote, .glass p, .hero-cta');
const io = new IntersectionObserver(entries => {
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('appear');
  });
},{threshold:0.12});
fadeEls.forEach(el => io.observe(el));

/* ---------- Connect Wallet modal & mobile improvements ---------- */
const connectBtns = document.querySelectorAll('#connectBtn, #connectBtnHero');
const modal = document.getElementById('walletModal');
const closeModal = document.getElementById('closeModal');
const modalBackdrop = document.getElementById('modalCloseBackdrop');
const showQR = document.getElementById('showQR');
const qrArea = document.getElementById('qrArea');

connectBtns.forEach(b=> b.addEventListener('click', openModal));
closeModal.addEventListener('click', closeModalFn);
modalBackdrop.addEventListener('click', closeModalFn);
showQR.addEventListener('click', ()=> qrArea.classList.toggle('hidden'));

function openModal(e){
  e.preventDefault();
  // simple mobile detection to show hint
  modal.classList.remove('hidden');
  // animate from bottom on small screens
  if(window.innerWidth < 640){
    document.getElementById('walletModal').style.display = 'flex';
  } else {
    document.getElementById('walletModal').style.display = 'flex';
  }
  // focus trap simple
}
function closeModalFn(){
  modal.classList.add('hidden');
  qrArea.classList.add('hidden');
  document.getElementById('walletModal').style.display = 'none';
}

/* ---------- Wishlist form submit (mock) ---------- */
const wishlistForm = document.getElementById('wishlistForm');
const wishMsg = document.getElementById('wishMsg');
wishlistForm.addEventListener('submit', e=>{
  e.preventDefault();
  // In production: send to your API or Google Form. Here we simulate success.
  wishMsg.classList.remove('hidden');
  wishlistForm.reset();
});

/* ---------- Lightweight testimonial "rotation" (optional) ---------- */
let tIndex = 0;
const testContainer = document.getElementById('testimonials');
if(testContainer){
  setInterval(()=> {
    // rotate children by moving first child to end (visual simple rotation)
    const first = testContainer.children[0];
    testContainer.appendChild(first.cloneNode(true));
    testContainer.removeChild(first);
  }, 6000);
}

/* ---------- Accessibility: prefer-reduced-motion ---------- */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(prefersReduced){
  // stop animations
  parts = [];
}
</script>

</body>
</html>