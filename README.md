<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Zep Swipe — Campus Wallet (Student-first)</title>

<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root{
    --accent-1: #00f0ff;
    --accent-2: #ff00d4;
    --accent-3: #ff69b4;
  }
  html,body { height:100%; }
  body{
    margin:0;
    font-family:'Inter',sans-serif;
    background: linear-gradient(135deg,#0f1630 0%, #1b1940 45%, #201a3a 100%);
    color: #eef6ff;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  h1,h2,h3 { font-family:'Orbitron',sans-serif; }

  .neon-text {
    background: linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(0,240,255,0.12);
  }

  .glass {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 12px;
  }

  .gradient-btn {
    background: linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));
    transition: transform .18s ease, box-shadow .25s ease;
  }
  .gradient-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.45); }

  .float-y { transition: transform .35s cubic-bezier(.2,.9,.2,1), box-shadow .25s ease; }
  .float-y:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(0,0,0,0.45); }

  #particle-canvas { position: fixed; inset:0; z-index:0; pointer-events:none; }

  section, nav, footer, .modal { position: relative; z-index: 5; }

  /* lighter image overlay for readability */
  .img-overlay::after{
    content:'';
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(20,20,30,0.08), rgba(10,8,20,0.18));
    pointer-events:none;
  }

  /* modal styles */
  .modal-backdrop { background: rgba(5,5,10,0.6); backdrop-filter: blur(3px); }
  .token-pill { display:inline-flex; gap:.5rem; align-items:center; padding:.35rem .6rem; border-radius:999px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.04); font-weight:600; }

  @media (max-width:640px){
    .nav-actions { gap:.5rem; }
  }
</style>
</head>
<body>

<!-- Particle canvas -->
<canvas id="particle-canvas"></canvas>

<!-- NAV -->
<nav class="fixed w-full top-4 left-0 flex justify-center z-50">
  <div class="w-[95%] max-w-6xl flex items-center justify-between px-4 py-3 glass">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/6">
        <!-- light logo (picsum seeded) -->
        <img src="https://picsum.photos/seed/logo/80/80" alt="logo" class="w-full h-full object-cover">
      </div>
      <a href="#top" class="text-lg md:text-xl font-bold neon-text">Zep Swipe</a>
      <div class="hidden md:flex items-center gap-3 ml-3">
        <span class="text-xs text-gray-300">Powered by</span>
        <span class="token-pill"><strong>$ZAC</strong><span class="text-xs text-gray-300">+ USDT</span></span>
      </div>
    </div>

    <div class="flex items-center gap-3 nav-actions">
      <!-- Always visible: Connect + Mobile -->
      <button id="connectBtn" class="px-3 py-2 rounded-lg gradient-btn text-black font-semibold text-sm">Connect Wallet</button>
      <button id="mobileBtn" class="px-3 py-2 rounded-lg glass text-sm">Continue with Mobile</button>

      <!-- small menu -->
      <div class="relative">
        <button class="px-3 py-2 text-sm rounded-md glass">Menu ▾</button>
        <div class="absolute right-0 mt-2 w-44 glass rounded-lg hidden group-hover:block border border-white/6">
          <a href="#earn-steps" class="block px-4 py-2 hover:bg-purple-600/30">How to earn</a>
          <a href="#testimonials" class="block px-4 py-2 hover:bg-purple-600/30">Stories</a>
          <a href="#wishlist" class="block px-4 py-2 hover:bg-purple-600/30">Early access</a>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- HERO -->
<header id="top" class="pt-28 pb-8">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold neon-text leading-tight">Zep Swipe — Campus Wallet for Students</h1>
        <p class="text-gray-300 max-w-xl">Earn $ZAC with tiny quizzes and campus tasks, store tokens in your mobile wallet, and spend at campus vendors. Fast, social, and student-first.</p>

        <div class="flex flex-wrap gap-3 mt-4">
          <button id="connectBtnHero" class="px-6 py-3 gradient-btn text-black rounded-lg font-semibold float-y">Connect Wallet</button>
          <a href="https://forms.gle/7Pr7gLySfroWMptC9" target="_blank" class="px-5 py-3 border border-white/10 rounded-lg text-sm glass float-y">Start Quiz</a>
          <a href="#wishlist" class="px-5 py-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-black rounded-lg font-semibold float-y">Get Early Access — Free ZAC</a>
        </div>

        <!-- quick token ribbon -->
        <div class="mt-3 inline-flex items-center gap-3 glass px-3 py-2 rounded-full">
          <img src="https://picsum.photos/seed/token/40/40" alt="$ZAC" class="w-8 h-8 rounded-full object-cover">
          <div>
            <div class="text-xs text-gray-300">Token</div>
            <div class="font-semibold neon-text">$ZAC • Rewards</div>
          </div>
        </div>

        <!-- testimonial inline -->
        <div class="mt-4 glass p-3 rounded-lg flex gap-3 items-center">
          <img src="https://picsum.photos/seed/student1/60/60" alt="student" class="w-12 h-12 rounded-full object-cover">
          <div>
            <div class="text-sm italic text-gray-200">“I earned ZAC after a 2-min quiz and used it for campus coffee — seamless.”</div>
            <div class="text-xs text-gray-300 mt-1">— Amina, University</div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-xl overflow-hidden img-overlay shadow-xl">
          <!-- lighter, bright campus image from picsum -->
          <img src="https://picsum.photos/seed/campus1/900/600" alt="Campus students" class="w-full h-[360px] object-cover md:h-[460px]">
        </div>

        <!-- small floating balance card -->
        <div class="absolute bottom-6 left-6 glass p-4 rounded-xl max-w-sm float-y w-[85%] md:w-80">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-300">Quick Win</div>
              <div class="font-semibold neon-text">Take a 2-min Quiz → Earn ZAC</div>
            </div>
            <div class="text-right">
              <div class="text-xs text-gray-300">Balance</div>
              <div class="font-bold">$ZAC <span class="text-xs text-gray-300">+ USDT</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- HOW TO EARN -->
<section id="earn-steps" class="py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-bold neon-text mb-4">How students earn</h2>
    <p class="text-gray-300 mb-8">Simple flow — quiz, reward, wallet, spend.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div class="glass p-5 rounded-xl float-y">
        <div class="text-xl font-semibold mb-2">1. Quiz</div>
        <div class="text-sm text-gray-300">Take micro-quizzes (2 minutes)</div>
      </div>
      <div class="glass p-5 rounded-xl float-y">
        <div class="text-xl font-semibold mb-2">2. Reward</div>
        <div class="text-sm text-gray-300">Earn instant $ZAC tokens</div>
      </div>
      <div class="glass p-5 rounded-xl float-y">
        <div class="text-xl font-semibold mb-2">3. Wallet</div>
        <div class="text-sm text-gray-300">Tokens delivered to your mobile wallet</div>
      </div>
      <div class="glass p-5 rounded-xl float-y">
        <div class="text-xl font-semibold mb-2">4. Vendor</div>
        <div class="text-sm text-gray-300">Spend at campus cafés & shops</div>
      </div>
    </div>
  </div>
</section>

<!-- STUDENT STORIES -->
<section id="testimonials" class="py-12 px-4">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl font-bold neon-text mb-6">Student Stories</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="glass p-5 rounded-xl float-y">
        <img src="https://picsum.photos/seed/stu1/200/200" alt="student 1" class="w-20 h-20 rounded-full mx-auto object-cover mb-4">
        <p class="text-sm text-gray-300 italic">"Zep Swipe makes campus life easy — quick rewards for learning."</p>
        <div class="text-pink-300 mt-3 font-semibold">— Ama, Ghana</div>
      </div>
      <div class="glass p-5 rounded-xl float-y">
        <img src="https://picsum.photos/seed/stu2/200/200" alt="student 2" class="w-20 h-20 rounded-full mx-auto object-cover mb-4">
        <p class="text-sm text-gray-300 italic">"Connected on mobile in seconds. Redeemed ZAC for lunch."</p>
        <div class="text-pink-300 mt-3 font-semibold">— Sanele, RSA</div>
      </div>
      <div class="glass p-5 rounded-xl float-y">
        <img src="https://picsum.photos/seed/stu3/200/200" alt="student 3" class="w-20 h-20 rounded-full mx-auto object-cover mb-4">
        <p class="text-sm text-gray-300 italic">"Micro-quizzes are fun and actually pay out — love it."</p>
        <div class="text-pink-300 mt-3 font-semibold">— Kofi, Ghana</div>
      </div>
    </div>
  </div>
</section>

<!-- WISHLIST / EARLY ACCESS -->
<section id="wishlist" class="py-12 px-4">
  <div class="max-w-3xl mx-auto">
    <div class="glass p-6 rounded-xl text-center">
      <h3 class="text-2xl font-bold neon-text mb-2">Join Early Access — Get Free ZAC</h3>
      <p class="text-gray-300 mb-4">Sign up early and receive an introductory $ZAC credit when we launch campus pilots.</p>

      <form action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" target="_blank" class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input type="text" placeholder="Full name" required class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none">
        <input type="email" placeholder="Email address" required class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none">
        <button type="submit" class="px-4 py-3 gradient-btn text-black rounded-lg font-semibold">Sign Up & Get ZAC</button>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="py-8 text-center text-gray-300 text-sm border-t border-white/6">
  © 2025 Zep Swipe — Built for Africa’s Students. Powered by $ZAC + USDT.
</footer>

<!-- CONNECT WALLET MODAL -->
<div id="walletModal" class="fixed inset-0 hidden items-end sm:items-center justify-center z-60">
  <div id="modalBackdrop" class="absolute inset-0 modal-backdrop"></div>
  <div class="modal w-full sm:w-[420px] glass rounded-t-xl sm:rounded-xl p-4">
    <div class="flex items-start justify-between">
      <div>
        <h4 class="font-bold text-lg neon-text">Connect Wallet</h4>
        <div class="text-xs text-gray-300">Mobile-first options included</div>
      </div>
      <button id="closeModal" class="text-gray-300">✕</button>
    </div>

    <div class="mt-4 grid gap-3">
      <a href="#" class="p-3 rounded-lg gradient-btn text-black text-center font-semibold">Open Mobile Wallet App</a>
      <a href="#" class="p-3 rounded-lg glass text-center border border-white/6">Connect via WalletConnect</a>
      <button id="showQR" class="p-3 rounded-lg border border-white/6">Show QR Code</button>
    </div>

    <div id="qrArea" class="mt-4 hidden text-center">
      <div class="inline-block p-4 glass rounded-lg">
        <img src="https://picsum.photos/seed/qr/200/200" alt="QR placeholder" class="w-40 h-40 object-cover rounded-sm mx-auto">
        <div class="text-xs text-gray-300 mt-2">Scan with your wallet app</div>
      </div>
    </div>

    <div class="mt-4 text-xs text-gray-400">
      Tip: On mobile, tap "Open Mobile Wallet App" to deep-link. On desktop, use WalletConnect.
    </div>
  </div>
</div>

<!-- SCRIPTS: particles + modal + simple UI -->
<script>
/* Particles (lightweight) */
const canvas = document.getElementById('particle-canvas'), ctx = canvas.getContext('2d');
let w, h, parts = [];
function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; canvas.style.width = innerWidth+'px'; canvas.style.height = innerHeight+'px'; init(); }
function rand(a,b){ return Math.random()*(b-a)+a; }
function init(){
  parts = []; const count = Math.min(100, Math.round(innerWidth/12));
  for(let i=0;i<count;i++){
    parts.push({ x:rand(0,w), y:rand(0,h), r:rand(0.8,3.2), vx:rand(-0.25,0.25), vy:rand(-0.15,0.15), hue:rand(190,320), a:rand(0.06,0.28) });
  }
}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(const p of parts){
    p.x += p.vx; p.y += p.vy;
    if(p.x < -50) p.x = w+10; if(p.x > w+50) p.x = -10;
    if(p.y < -50) p.y = h+10; if(p.y > h+50) p.y = -10;
    const g = ctx.createRadialGradient(p.x,p.y,p.r/2,p.x,p.y,p.r*6);
    g.addColorStop(0, `hsla(${p.hue},85%,68%,${p.a})`);
    g.addColorStop(0.3, `hsla(${p.hue},85%,68%,${p.a*0.55})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r*6,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle = `hsla(${p.hue},85%,78%,${p.a+0.12})`; ctx.fill();
  }
  requestAnimationFrame(draw);
}
window.addEventListener('resize', resize);
resize(); draw();

/* Modal logic */
const connectBtns = document.querySelectorAll('#connectBtn, #connectBtnHero, #mobileBtn');
const modal = document.getElementById('walletModal');
const closeBtn = document.getElementById('closeModal');
const backdrop = document.getElementById('modalBackdrop');
const showQR = document.getElementById('showQR');
const qrArea = document.getElementById('qrArea');

connectBtns.forEach(b => b && b.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); }));
function openModal(){ modal.classList.remove('hidden'); modal.style.display='flex'; }
function closeModal(){ modal.classList.add('hidden'); modal.style.display='none'; qrArea.classList.add('hidden'); }
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
showQR.addEventListener('click', ()=> qrArea.classList.toggle('hidden'));

/* Wishlist form: basic success UI handled by google form target (no JS needed) */

/* Accessibility: disable particles on reduced motion */
if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){ parts = []; }
</script>

</body>
</html>