<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Zep Swipe — Neon Campus Wallet</title>

<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
:root{
  --bg-a:#0c0c18; --bg-b:#1f1b3a;
  --accent-1:#00f0ff; --accent-2:#ff00d4; --accent-3:#ff69b4;
}
body{
  margin:0;font-family:'Inter',system-ui,Arial;
  background:linear-gradient(135deg,var(--bg-a),var(--bg-b));
  color:#eaf2ff;overflow-x:hidden;
}
h1,h2,h3{font-family:'Orbitron',sans-serif;}
.neon-text{
  background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  text-shadow:0 0 6px rgba(0,240,255,.4),0 0 12px rgba(255,0,212,.3);
}
.glass{
  background:rgba(255,255,255,0.06);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:16px;
  transition: transform .3s, box-shadow .3s;
}
.glass:hover{
  transform:translateY(-5px);
  box-shadow:0 0 20px rgba(0,240,255,0.4),0 0 25px rgba(255,0,212,0.3);
}
.cta-main{
  background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));
  color:#000;
  transition: transform .25s, box-shadow .25s;
}
.cta-main:hover{
  transform:translateY(-3px);
  box-shadow:0 0 20px rgba(0,240,255,0.4),0 0 30px rgba(255,0,212,0.3);
}
.float-card{
  transition: transform .35s, box-shadow .25s;
}
.float-card:hover{
  transform:translateY(-8px);
  box-shadow:0 18px 40px rgba(5,6,12,0.5);
}
.token-pill{
  display:inline-flex; gap:.5rem; align-items:center;
  padding:.35rem .6rem; border-radius:999px;
  font-weight:600; font-size:.92rem;
  background:rgba(255,255,255,0.05);
}
#lines-canvas{
  position:fixed; inset:0; z-index:0; pointer-events:none;
}
/* Modal Neon */
.modal-bg{
  position:fixed;inset:0;background:rgba(0,0,0,0.7);
  display:none;align-items:center;justify-content:center;z-index:1000;
}
.modal-content{
  background:rgba(0,0,0,0.95);
  padding:2rem;
  border-radius:12px;
  max-width:400px;width:90%;
  position:relative;
  border:2px solid var(--accent-1);
  box-shadow:0 0 15px var(--accent-1),0 0 30px var(--accent-2),0 0 40px var(--accent-3);
  animation: floatModal 3s ease-in-out infinite;
}
@keyframes floatModal{
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-6px);}
}
.modal-content input{
  width:100%;padding:.75rem;border-radius:8px;margin-bottom:1rem;border:none;outline:none;background:#11142a;color:#fff;
}
.modal-close{
  position:absolute;top:10px;right:12px;font-size:20px;cursor:pointer;color:#ff69b4;
}
/* Neon Icons */
.neon-icon svg{transition: transform .3s;stroke:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));}
.neon-icon:hover svg{transform:translateY(-5px);}
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
      <p class="text-gray-300 max-w-xl">Earn <span class="neon-text">$ZAC</span> by taking quizzes. Store rewards, spend at partners, and level up your Web3 skills.</p>
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
    <!-- Hero SVG -->
    <div class="rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-[#1a1033] to-[#0f0c29] h-80 md:h-96 relative glass">
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

<!-- Mobile Modal -->
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
  <h2 class="text-3xl font-bold neon-text mb-6">How Students Earn</h2>
  <div class="grid sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
    <div class="glass p-6 rounded-lg float-card neon-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="50" height="50" fill="none" stroke="url(#grad)" stroke-width="3" viewBox="0 0 24 24"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
      <div class="font-semibold text-xl mb-1">Quiz</div>
      <p class="text-gray-300 text-sm">Interactive quizzes</p>
    </div>
    <div class="glass p-6 rounded-lg float-card neon-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="50" height="50" fill="none" stroke="url(#grad)" stroke-width="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
      <div class="font-semibold text-xl mb-1">Reward</div>
      <p class="text-gray-300 text-sm">Earn $ZAC instantly</p>
    </div>
    <div class="glass p-6 rounded-lg float-card neon-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="50" height="50" fill="none" stroke="url(#grad)" stroke-width="3" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/></svg>
      <div class="font-semibold text-xl mb-1">Wallet</div>
      <p class="text-gray-300 text-sm">Secure storage</p>
    </div>
    <div class="glass p-6 rounded-lg float-card neon-icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="50" height="50" fill="none" stroke="url(#grad)" stroke-width="3" viewBox="0 0 24 24"><path d="M12 2l7 20H5L12 2z"/></svg>
      <div class="font-semibold text-xl mb-1">Vendor</div>
      <p class="text-gray-300 text-sm">Spend at partners</p>
    </div>
  </div>
</section>

<!-- WISHLIST -->
<section id="wishlist" class="py-12 px-4">
  <div class="max-w-3xl mx-auto glass p-6 rounded-lg text-center">
    <h3 class="text-2xl font-bold neon-text mb-2">Join Early Access — Get Free ZAC</h3>
    <p class="text-gray-300 mb-4">Be part of the first student beta. Earn ZAC just for signing up!</p>
    <form target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8