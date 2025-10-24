<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Zep Swipe — Campus Wallet for Africa</title>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: #fff;
    overflow-x: hidden;
  }
  h1, h2, h3 { font-family: 'Orbitron', sans-serif; }

  .neon-text {
    background: linear-gradient(90deg, #00f0ff, #ff00d4, #ff69b4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 12px rgba(0,255,255,0.4);
  }

  .glass {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1rem;
  }

  .gradient-btn {
    background: linear-gradient(90deg, #00ffff, #ff00d4, #ff69b4);
    transition: transform 0.2s ease, box-shadow 0.3s ease;
  }
  .gradient-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(0,255,255,0.5), 0 0 30px rgba(255,0,212,0.4);
  }

  .glow-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(0,255,255,0.25);
  }

  /* Canvas background */
  #particle-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  section { position: relative; z-index: 1; }

</style>
</head>
<body>

<canvas id="particle-canvas"></canvas>

<!-- Navbar -->
<nav class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 glass z-50">
  <a href="#top" class="text-2xl font-bold neon-text hover:scale-105 transition-transform">Zep Swipe</a>
  <div class="hidden md:flex gap-6">
    <a href="#learn-earn" class="hover:text-pink-400">Learn</a>
    <a href="#earn-steps" class="hover:text-pink-400">Earn</a>
    <a href="#wishlist" class="hover:text-pink-400">Join</a>
  </div>
</nav>

<!-- Hero -->
<section id="top" class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
  <h1 class="text-5xl md:text-6xl font-bold neon-text mb-6">Zep Swipe</h1>
  <p class="max-w-xl mx-auto text-gray-300 mb-8 text-lg">Africa’s first campus-ready checkout & borderless digital wallet — where students meet innovation.</p>
  <div class="flex flex-col md:flex-row gap-4 justify-center">
    <button class="px-6 py-3 gradient-btn text-black font-semibold rounded-lg">Connect Wallet</button>
    <button class="px-6 py-3 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-black transition">Continue with Mobile</button>
  </div>
  <p class="mt-6 text-sm text-gray-400">Powered by <span class="neon-text">$ZAC</span> + <span class="neon-text">USDT</span></p>
</section>

<!-- Student Imagery Banner -->
<section class="relative py-16">
  <img src="https://images.unsplash.com/photo-1590080875839-1a6f37e39b74?auto=format&fit=crop&w=1600&q=60" class="w-full h-72 object-cover opacity-80 rounded-lg shadow-lg" alt="African students on campus">
  <div class="absolute inset-0 flex items-center justify-center">
    <h2 class="text-3xl md:text-4xl font-bold neon-text bg-black/40 px-6 py-3 rounded-lg">Built for Students. Built for Africa.</h2>
  </div>
</section>

<!-- How to Earn Section -->
<section id="earn-steps" class="py-20 px-6 text-center max-w-6xl mx-auto">
  <h2 class="text-4xl font-bold neon-text mb-8">How Students Earn</h2>
  <div class="grid md:grid-cols-4 gap-6">
    <div class="glass glow-card p-6 rounded-xl">
      <h3 class="font-bold mb-3 text-xl">1️⃣ Take Quiz</h3>
      <p class="text-gray-300 mb-4">Answer short blockchain quizzes & earn instant rewards.</p>
      <a href="https://forms.gle/7Pr7gLySfroWMptC9" target="_blank" class="gradient-btn px-4 py-2 rounded-lg text-black font-semibold inline-block">Start Quiz</a>
    </div>
    <div class="glass glow-card p-6 rounded-xl">
      <h3 class="font-bold mb-3 text-xl">2️⃣ Earn ZAC</h3>
      <p class="text-gray-300">Every correct answer gives you <span class="neon-text">$ZAC</span> tokens.</p>
    </div>
    <div class="glass glow-card p-6 rounded-xl">
      <h3 class="font-bold mb-3 text-xl">3️⃣ Wallet Sync</h3>
      <p class="text-gray-300">Your rewards sync directly to your mobile or web wallet.</p>
    </div>
    <div class="glass glow-card p-6 rounded-xl">
      <h3 class="font-bold mb-3 text-xl">4️⃣ Spend & Grow</h3>
      <p class="text-gray-300">Use tokens at partner vendors — from cafés to campus stores.</p>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section id="testimonials" class="py-20 px-6 text-center max-w-5xl mx-auto">
  <h2 class="text-3xl font-bold neon-text mb-8">Student Stories</h2>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="glass glow-card p-6 rounded-xl">
      <img src="https://images.unsplash.com/photo-1620778769651-cd04cc15d703?auto=format&fit=crop&w=600&q=60" class="w-24 h-24 mx-auto rounded-full mb-4 object-cover">
      <p class="text-gray-300 italic">“Zep Swipe helped me pay for printing and earn crypto — right from my dorm.”</p>
      <p class="text-pink-400 mt-2 font-semibold">— Ama, Ghana</p>
    </div>
    <div class="glass glow-card p-6 rounded-xl">
      <img src="https://images.unsplash.com/photo-1611659939868-9b75bbf0c2eb?auto=format&fit=crop&w=600&q=60" class="w-24 h-24 mx-auto rounded-full mb-4 object-cover">
      <p class="text-gray-300 italic">“The quizzes are fun, and the ZAC rewards actually go to my wallet instantly.”</p>
      <p class="text-pink-400 mt-2 font-semibold">— Sanele, South Africa</p>
    </div>
    <div class="glass glow-card p-6 rounded-xl">
      <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=600&q=60" class="w-24 h-24 mx-auto rounded-full mb-4 object-cover">
      <p class="text-gray-300 italic">“It feels like the future of campus payments — no cash, no stress.”</p>
      <p class="text-pink-400 mt-2 font-semibold">— Ayo, Nigeria</p>
    </div>
  </div>
</section>

<!-- Wishlist / Early Access -->
<section id="wishlist" class="py-20 px-6 max-w-2xl mx-auto text-center glass">
  <h2 class="text-3xl font-bold neon-text mb-4">Join the Early Access</h2>
  <p class="text-gray-300 mb-6">Be one of the first students to try Zep Swipe and <span class="neon-text">get free $ZAC rewards</span> when you sign up early!</p>
  <form action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" target="_blank" class="flex flex-col gap-3">
    <input type="text" placeholder="University Name" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-pink-500 focus:outline-none">
    <input type="email" placeholder="Email Address" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-pink-500 focus:outline-none">
    <select class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-pink-500 focus:outline-none">
      <option value="">Country of Origin</option>
      <option>South Africa</option>
      <option>Ghana</option>
      <option>Kenya</option>
      <option>Nigeria</option>
      <option>Uganda</option>
    </select>
    <button type="submit" class="px-6 py-3 gradient-btn text-black font-semibold rounded-lg">Sign Up & Get ZAC</button>
  </form>
</section>

<!-- Footer -->
<footer class="py-8 text-center text-gray-400 text-sm border-t border-purple-500/20">
  © 2025 Zep Swipe — Made for Africa’s Students. Powered by <span class="neon-text">$ZAC</span>.
</footer>

<!-- Particles -->
<script>
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function initCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: `rgba(${100 + Math.random()*155},${Math.random()*255},255,0.2)`
      });
    }
  }

  function animate() {
    ctx.clearRect(0,0,w,h);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if(p.x < 0 || p.x > w) p.dx *= -1;
      if(p.y < 0 || p.y > h) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', initCanvas);
  initCanvas();
  animate();
</script>

</body>
</html>