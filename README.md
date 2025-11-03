<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Zep Swipe — Neon Campus Wallet</title>

<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
:root{
  --bg-a:#0a0a1a;
  --bg-b:#1c1242;
  --accent-1:#00f0ff;
  --accent-2:#ff00d4;
  --accent-3:#ff69b4;
}
body{
  margin:0; font-family:'Inter',system-ui,Arial;
  background:radial-gradient(circle at top right,var(--bg-b),var(--bg-a));
  color:#eaf2ff; overflow-x:hidden;
}
h1,h2,h3{font-family:'Orbitron',sans-serif;}
.neon-text{
  background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  text-shadow:0 0 8px rgba(0,240,255,.4),0 0 15px rgba(255,0,212,.3);
}
.glass{
  background:rgba(255,255,255,0.06);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:16px;
  transition:transform .3s, box-shadow .3s;
}
.glass:hover{transform:translateY(-6px);box-shadow:0 0 20px rgba(0,240,255,0.2),0 0 30px rgba(255,0,212,0.15);}
.cta-main{
  background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));
  color:#000;transition:transform .25s, box-shadow .25s;
}
.cta-main:hover{transform:translateY(-3px);box-shadow:0 0 20px rgba(0,240,255,0.4),0 0 30px rgba(255,0,212,0.3);}
.token-pill{display:inline-flex;gap:.5rem;align-items:center;padding:.35rem .6rem;border-radius:999px;font-weight:600;font-size:.92rem;background:rgba(255,255,255,0.05);}
#lines-canvas{position:fixed;inset:0;z-index:0;pointer-events:none;}
/* Glowing modal */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,0.7);display:none;align-items:center;justify-content:center;z-index:1000;}
.modal-content{
  position:relative;
  background:#0e0f2a;
  padding:2rem;
  border-radius:16px;
  border:2px solid transparent;
  background-clip:padding-box;
  animation:pulseBorder 2.5s infinite alternate;
  box-shadow:0 0 25px rgba(0,240,255,0.25),0 0 35px rgba(255,0,212,0.25);
  max-width:400px;width:90%;
}
@keyframes pulseBorder{
  from{box-shadow:0 0 20px rgba(0,240,255,0.25),0 0 30px rgba(255,0,212,0.25);}
  to{box-shadow:0 0 35px rgba(0,240,255,0.5),0 0 45px rgba(255,0,212,0.45);}
}
.modal-content input{width:100%;padding:.75rem;border-radius:8px;margin-bottom:1rem;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);color:#fff;}
.modal-close{position:absolute;top:10px;right:14px;font-size:22px;cursor:pointer;color:var(--accent-3);}
.icon-neon svg{filter:drop-shadow(0 0 6px var(--accent-1));}
.timeline::before{
  content:"";position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(var(--accent-1),var(--accent-2));
  transform:translateX(-50%);
}
.timeline-step{
  position:relative;
  padding:2rem 1.5rem;
  max-width:380px;
  margin:2rem auto;
}
.timeline-step::before{
  content:"";position:absolute;left:50%;top:1.2rem;width:18px;height:18px;
  border-radius:50%;background:linear-gradient(90deg,var(--accent-1),var(--accent-2));
  transform:translateX(-50%);
  box-shadow:0 0 20px rgba(0,240,255,0.4);
}
@media(max-width:768px){.header-center{display:none;}}
</style>
</head>
<body>

<canvas id="lines-canvas"></canvas>

<header class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl flex items-center justify-between px-4 py-2 glass z-50">
  <div class="flex items-center gap-4">
    <a href="#top" class="text-xl font-bold neon-text">Zep Swipe</a>
    <span class="hidden sm:inline text-sm text-gray-300">Campus Wallet • Web3 Rewards</span>
  </div>
  <div class="token-pill hidden md:inline-flex">
    <strong>$ZAC</strong><span class="text-xs text-gray-300">+ USDT</span>
  </div>
  <nav class="flex items-center gap-3">
    <button id="connectHeader" class="px-4 py-2 rounded-lg cta-main font-semibold">Connect Wallet</button>
  </nav>
</header>

<div class="h-20"></div>

<!-- HERO -->
<section id="top" class="max-w-6xl mx-auto px-4 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-bold neon-text">Zep Swipe — Neon Campus Wallet</h1>
      <p class="text-gray-300 max-w-xl">Earn <span class="neon-text">$ZAC</span> for learning and engagement. Redeem, spend, or stake with friends — your Web3 wallet built for African students.</p>
      <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
        <button id="connectHero" class="px-5 py-3 rounded-lg cta-main font-semibold">Connect Wallet</button>
        <button id="connectMobileBtn" class="px-5 py-3 rounded-lg border border-white/20 glass">Connect with Mobile Number</button>
        <a href="https://forms.gle/7Pr7gLySfroWMptC9" target="_blank" class="px-5 py-3 rounded-lg glass border border-white/10">Start Quiz</a>
        <a href="#wishlist" class="px-4 py-3 rounded-lg bg-yellow-400 text-black font-semibold">Join Early — Get free ZAC</a>
      </div>
      <div class="mt-4 token-pill inline-flex gap-2">
        <span class="text-xs text-gray-300">Powered by</span>
        <strong>$ZAC</strong><span class="text-xs text-gray-300">+ USDT</span>
      </div>
    </div>
    <div class="rounded-xl flex items-center justify-center bg-gradient-to-br from-[#1a1033] to-[#0f0c29] h-80 md:h-96 glass">
      <svg viewBox="0 0 400 400" class="w-4/5 h-4/5">
        <defs><linearGradient id="grad" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#00f0ff"/><stop offset="100%" stop-color="#ff00d4"/></linearGradient></defs>
        <circle cx="200" cy="200" r="160" stroke="url(#grad)" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="200" cy="200" r="120" stroke="url(#grad)" stroke-width="1.5" fill="none" opacity="0.2"/>
        <path d="M80 200 L200 80 L320 200 L200 320 Z" fill="none" stroke="url(#grad)" stroke-width="3"/>
        <circle cx="200" cy="200" r="8" fill="url(#grad)"/>
        <text x="50%" y="50%" text-anchor="middle" fill="url(#grad)" dy=".4em" font-size="24" font-family="Orbitron">WEB3</text>
      </svg>
    </div>
  </div>
</section>

<!-- Modal -->
<div id="mobileModal" class="modal-bg">
  <div class="modal-content">
    <span id="modalClose" class="modal-close">&times;</span>
    <h3 class="text-xl font-bold neon-text mb-4 text-center">Connect with Mobile</h3>
    <input type="tel" placeholder="+234 801 234 5678">
    <button class="w-full py-3 cta-main rounded-lg font-semibold">Connect</button>
  </div>
</div>

<!-- HOW IT WORKS -->
<section id="earn-steps" class="py-12 px-4 text-center">
  <h2 class="text-3xl font-bold neon-text mb-6">How Students Earn</h2>
  <div class="grid sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
    <div class="glass p-6 rounded-lg">
      <div class="icon-neon mb-3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 15l4-8 4 8"/></svg>
      </div>
      <h4 class="font-semibold text-xl mb-1">1. Quiz</h4>
      <p class="text-gray-300 text-sm">Complete micro-quizzes and challenges.</p>
    </div>
    <div class="glass p-6 rounded-lg">
      <div class="icon-neon mb-3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9a4 4 0 0 0 0 8h6a4 4 0 1 1 0 8H6"/></svg>
      </div>
      <h4 class="font-semibold text-xl mb-1">2. Reward</h4>
      <p class="text-gray-300 text-sm">Earn $ZAC instantly for participation.</p>
    </div>
    <div class="glass p-6 rounded-lg">
      <div class="icon-neon mb-3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/></svg>
      </div>
      <h4 class="font-semibold text-xl mb-1">3. Wallet</h4>
      <p class="text-gray-300 text-sm">Store your ZAC in your campus wallet.</p>
    </div>
    <div class="glass p-6 rounded-lg">
      <div class="icon-neon mb-3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.68 8.39a2 2 0 0 1-2 .61l-8.32-2.1a2 2 0 0 1-1.32-1.89V6z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
      </div>
      <h4 class="font-semibold text-xl mb-1">4. Vendor</h4>
      <p class="text-gray-300 text-sm">Spend ZAC with campus partners.</p>
    </div>
  </div>
</section>

<!-- ROADMAP -->
<section id="roadmap" class="relative py-16 px-4">
  <h2 class="text-3xl font-bold neon-text text-center mb-12">Roadmap</h2>
  <div class="timeline relative max-w-4xl mx-auto">
    <div class="timeline-step glass">
      <h4 class="font-bold neon-text mb-2">Phase 1 — Beta Launch</h4>
      <p class="text-gray-300 text-sm">Student signups, early wallet integration, and quiz pilot.</p>
    </div>
    <div class="timeline-step glass">
      <h4 class="font-bold neon-text mb-2">Phase 2 — Vendor Onboarding</h4>
      <p class="text-gray-300 text-sm">Partner with campus cafés, bookshops, and service providers.</p>
    </div>
    <div class="timeline-step glass">
      <h4 class="font-bold neon-text mb-2">Phase 3 — ZAC Marketplace</h4>
      <p class="text-gray-300 text-sm">Students can trade and redeem ZAC tokens for utilities.</p>
    </div>
    <div class="timeline-step glass">
      <h4 class="font-bold neon-text mb-2">Phase 4 — Multi-Campus Expansion</h4>
      <p class="text-gray-300 text-sm">Launch across universities in Ghana, Nigeria, and South Africa.</p>
    </div>
  </div>
</section>

<!-- WISHLIST -->
<section id="wishlist" class="py-12 px-4">
  <div class="max-w-3xl mx-auto glass p-6 rounded-lg text-center">
    <h3 class="text-2xl font-bold neon-text mb-2">Join Early Access — Get Free ZAC</h3>
    <p class="text-gray-300 mb-4">Be part of the first student beta. Earn ZAC just for signing up!</p>
    <form target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" class="grid sm:grid-cols-3 gap-3">
      <input required placeholder="Your name" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none">
      <input required type="email" placeholder="Email address" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none">
      <button class="p-3 rounded-lg cta-main font-semibold">Sign up & get ZAC</button>
    </form>
  </div>
</section>

<footer class="py-8 text-center text-gray-300 text-sm border-t border-white/6">
  © 2025 Zep Swipe — Web3 Campus Wallet • Powered by $ZAC + USDT
</footer>

<script>
// animated neon lines
const canvas=document.getElementById('lines-canvas'),ctx=canvas.getContext('2d');
let lines=[],W=innerWidth,H=innerHeight;canvas.width=W;canvas.height=H;
for(let i=0;i<70;i++)lines.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.6,vy:(Math.random()-0.5)*0.6,length:Math.random()*70+30});
function animateLines(){
  ctx.clearRect(0,0,W,H);
  lines.forEach(l=>{
    l.x+=l.vx;l.y+=l.vy;
    if(l.x<0)l.x=W;if(l.x>W)l.x=0;if(l.y<0)l.y=H;if(l.y>H)l.y=0;
    ctx.strokeStyle='rgba(0,240,255,0.1)';
    ctx.beginPath();
    ctx.moveTo(l.x,l.y);
    ctx.lineTo(l.x+l.length/3,l.y+l.length/3);
    ctx.stroke();
  });
  requestAnimationFrame(animateLines);
}
animateLines();
window.addEventListener('resize',()=>{W=canvas.width=innerWidth;H=canvas.height=innerHeight;});

// Wallet connect
async function connectWallet(){
  if(window.ethereum){
    try{
      const