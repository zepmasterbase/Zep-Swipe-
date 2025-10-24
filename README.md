<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Zep Swipe — Campus Wallet (Web3 Student Edition)</title>

<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
:root{
  --bg-a:#0f1630; --bg-b:#201a3a; --accent-1:#00f0ff; --accent-2:#ff00d4; --accent-3:#ff69b4;
}
body{margin:0;font-family:'Inter',system-ui,Arial;background:linear-gradient(135deg,var(--bg-a) 0%,#15102b 50%,var(--bg-b) 100%);color:#eaf2ff;overflow-x:hidden;}
h1,h2,h3{font-family:'Orbitron',sans-serif;}
.neon-text{background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.glass{background:rgba(255,255,255,0.04);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.05);border-radius:12px;}
.cta-main{background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));color:#000;}
.cta-main:hover{transform:translateY(-3px);}
.float-card{transition:transform .35s,box-shadow .25s;}
.float-card:hover{transform:translateY(-8px);box-shadow:0 18px 40px rgba(5,6,12,0.6);}
.token-pill{display:inline-flex;gap:.5rem;align-items:center;padding:.35rem .6rem;border-radius:999px;font-weight:600;font-size:.92rem;background:rgba(255,255,255,0.05);}
#particle-canvas{position:fixed;inset:0;z-index:0;pointer-events:none;}
@media (max-width:768px){.header-center{display:none;}}
/* Modal */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,0.7);display:none;align-items:center;justify-content:center;z-index:1000;}
.modal-content{background:#11142a;padding:2rem;border-radius:12px;max-width:400px;width:90%;position:relative;}
.modal-content input{width:100%;padding:.75rem;border-radius:8px;margin-bottom:1rem;border:none;outline:none;}
.modal-close{position:absolute;top:10px;right:12px;font-size:20px;cursor:pointer;color:#ff69b4;}
</style>
</head>
<body>

<canvas id="particle-canvas"></canvas>

<header class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl flex items-center justify-between px-4 py-2 glass z-50">
  <div class="flex items-center gap-4">
    <a href="#top" class="text-xl font-bold neon-text">Zep Swipe</a>
    <span class="hidden sm:inline text-sm text-gray-300">Campus Wallet • Web3 Rewards</span>
  </div>
  <div class="header-center token-pill hidden md:inline-flex">
    <strong class="text-white">$ZAC</strong><span class="text-xs text-gray-300">+ USDT</span>
  </div>
  <nav class="flex items-center gap-3">
    <button id="connectHeader" class="px-4 py-2 rounded-lg cta-main font-semibold">Connect Wallet</button>
  </nav>
</header>

<div class="h-20"></div>

<!-- HERO -->
<section id="top" class="max-w-6xl mx-auto px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-bold neon-text">Zep Swipe — Web3 Campus Wallet</h1>
      <p class="text-gray-300 max-w-xl">Earn <span class="neon-text">$ZAC</span> by taking quick quizzes. Redeem, spend, or stake it — all powered by blockchain and built for African students.</p>

      <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
        <button id="connectHero" class="px-5 py-3 rounded-lg cta-main font-semibold float-card">Connect Wallet</button>
        <button id="connectMobileBtn" class="px-5 py-3 rounded-lg border border-white/20 glass float-card">Connect with Mobile Number</button>
        <a href="https://forms.gle/7Pr7gLySfroWMptC9" target="_blank" class="px-5 py-3 rounded-lg border border-white/8 glass float-card">Start Quiz</a>
        <a href="#wishlist" class="px-4 py-3 rounded-lg bg-yellow-400 text-black font-semibold float-card">Join Early — Get free ZAC</a>
      </div>

      <div class="mt-4 token-pill inline-flex gap-2">
        <span class="text-xs text-gray-300">Powered by</span>
        <strong>$ZAC</strong><span class="text-xs text-gray-300">+ USDT</span>
      </div>
    </div>

    <!-- Web3 abstract SVG -->
    <div class="rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-[#221b3a] to-[#181033] h-80 md:h-96 relative">
      <svg viewBox="0 0 400 400" class="w-4/5 h-4/5">
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#00f0ff"/>
            <stop offset="100%" stop-color="#ff00d4"/>
          </linearGradient>
        </defs>
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
    <h3 class="text-xl font-bold neon-text mb-4 text-center">Enter Mobile Number</h3>
    <input type="tel" placeholder="+234 801 234 5678">
    <button class="w-full py-3 cta-main rounded-lg font-semibold">Connect</button>
  </div>
</div>

<!-- HOW IT WORKS -->
<section id="earn-steps" class="py-12 px-4 text-center">
  <h2 class="text-3xl font-bold neon-text mb-4">How Students Earn</h2>
  <p class="text-gray-300 mb-6">Quiz → Reward → Wallet → Vendor</p>
  <div class="grid sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
    <div class="glass p-4 rounded-lg float-card"><div class="font-semibold text-xl mb-2">1. Quiz</div><p class="text-gray-300 text-sm">Take short interactive quizzes.</p></div>
    <div class="glass p-4 rounded-lg float-card"><div class="font-semibold text-xl mb-2">2. Reward</div><p class="text-gray-300 text-sm">Earn $ZAC instantly.</p></div>
    <div class="glass p-4 rounded-lg float-card"><div class="font-semibold text-xl mb-2">3. Wallet</div><p class="text-gray-300 text-sm">Store rewards securely.</p></div>
    <div class="glass p-4 rounded-lg float-card"><div class="font-semibold text-xl mb-2">4. Vendor</div><p class="text-gray-300 text-sm">Spend or swap at partners.</p></div>
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
/* particles */
const c=document.getElementById('particle-canvas'),x=c.getContext('2d');
let p=[],W=innerWidth,H=innerHeight;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;}
window.addEventListener('resize',rs);rs();
for(let i=0;i<100;i++)p.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*.3,vy:(Math.random()-0.5)*.3});
function loop(){x.clearRect(0,0,W,H);p.forEach(a=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0)a.x=W;if(a.x>W)a.x=0;if(a.y<0)a.y=H;if(a.y>H)a.y=0;x.fillStyle='rgba(0,240,255,0.12)';x.beginPath();x.arc(a.x,a.y,2,0,6.28);x.fill();});requestAnimationFrame(loop);}
loop();

/* Wallet Connect (MetaMask/Base) */
async function connectWallet() {
  if(window.ethereum){
    try{
      const accounts = await window.ethereum.request({ method:'eth_requestAccounts' });
      alert('Connected account: ' + accounts[0]);
    }catch(err){alert('Connection rejected');}
  } else {alert('No Web3 wallet detected. Install MetaMask or Base.');}
}
document.getElementById('connectHeader').onclick=connectWallet;
document.getElementById('connectHero').onclick=connectWallet;

/* Mobile modal */
const modal=document.getElementById('mobileModal');
const modalBtn=document.getElementById('connectMobileBtn');
const modalClose=document.getElementById('modalClose');
modalBtn.onclick=()=>modal.style.display='flex';
modalClose.onclick=()=>modal.style.display='none';
window.onclick=(e)=>{if(e.target===modal)modal.style.display='none';}
</script>
