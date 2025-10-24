<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zep Swipe — Students of the Future</title>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: #fff;
    overflow-x: hidden;
    position: relative;
  }

  h1,h2,h3 { font-family: 'Orbitron', sans-serif; }

  .neon-text {
    background: linear-gradient(90deg, #00f0ff, #ff00d4, #ff69b4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px rgba(0,255,255,0.4), 0 0 25px rgba(255,0,212,0.3);
  }

  .glass {
    background: rgba(255,255,255,0.06);
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

  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  #particle-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  section { position: relative; z-index: 1; }
</style>
</head>
<body id="top">

<!-- Background Particles -->
<canvas id="particle-canvas"></canvas>

<!-- Navbar -->
<nav class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 glass z-50">
  <a href="#top" class="text-2xl font-bold neon-text">Zep Swipe</a>
  <button class="md:hidden text-sm bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 px-3 py-1 rounded-md">Menu</button>
  <div class="hidden md:flex gap-6 text-gray-300">
    <a href="#learn-earn" class="hover:text-cyan-400">Learn</a>
    <a href="#how-it-works" class="hover:text-cyan-400">How It Works</a>
    <a href="#stories" class="hover:text-cyan-400">Stories</a>
    <a href="#wishlist" class="hover:text-cyan-400">Join</a>
  </div>
</nav>

<!-- Banner -->
<div class="w-full text-center py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold mt-16">
  🚀 Powered by <span class="text-white">$ZAC</span> + <span class="text-white">USDT</span>
</div>

<!-- Hero Section -->
<section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-12">
  <div class="fade-up">
    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
         alt="Students on campus" class="rounded-2xl shadow-2xl mb-8 w-full max-w-3xl object-cover">
    <h1 class="text-5xl md:text-6xl font-bold neon-text mb-4">Zep Swipe</h1>
    <p class="max-w-xl mx-auto text-gray-300 mb-8 text-lg">
      The student wallet of the future — learn, earn crypto, and pay anywhere. 
      Join the campus wave of digital empowerment.
    </p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <button class="px-6 py-3 gradient-btn text-black font-semibold rounded-lg w-full md:w-auto">
        Connect Wallet
      </button>
      <button class="px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-black transition w-full md:w-auto">
        Continue with Mobile
      </button>
    </div>
    <p class="mt-4 text-sm text-gray-400">Secure by blockchain. Powered by $ZAC.</p>
  </div>
</section>

<!-- Learn & Earn -->
<section id="learn-earn" class="fade-up py-20 px-6 text-center max-w-4xl mx-auto">
  <h2 class="text-4xl font-bold neon-text mb-4">Learn & Earn</h2>
  <p class="text-gray-300 mb-8">Take fun blockchain quizzes, earn $ZAC, and discover real-world crypto skills.</p>
  <a href="#" class="px-8 py-3 gradient-btn text-black font-semibold rounded-lg">Start Learning</a>
</section>

<!-- How It Works -->
<section id="how-it-works" class="fade-up py-20 px-6 text-center bg-[#141226]/60 backdrop-blur-xl">
  <h2 class="text-4xl font-bold neon-text mb-12">How It Works</h2>
  <div class="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
    <div class="glass p-6 rounded-xl">
      <h3 class="font-bold text-lg mb-2">🎯 1. Quiz</h3>
      <p class="text-gray-300 text-sm">Answer short Web3 challenges built for students.</p>
    </div>
    <div class="glass p-6 rounded-xl">
      <h3 class="font-bold text-lg mb-2">💰 2. Earn</h3>
      <p class="text-gray-300 text-sm">Get instant crypto rewards in $ZAC & USDT.</p>
    </div>
    <div class="glass p-6 rounded-xl">
      <h3 class="font-bold text-lg mb-2">👛 3. Wallet</h3>
      <p class="text-gray-300 text-sm">Your secure Zep Wallet stores and tracks your tokens.</p>
    </div>
    <div class="glass p-6 rounded-xl">
      <h3 class="font-bold text-lg mb-2">🛒 4. Spend</h3>
      <p class="text-gray-300 text-sm">Use your balance with campus vendors & online stores.</p>
    </div>
  </div>
</section>

<!-- Student Stories -->
<section id="stories" class="fade-up py-20 px-6 max-w-5xl mx-auto text-center">
  <h2 class="text-4xl font-bold neon-text mb-8">Student Stories</h2>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="glass p-6 rounded-xl">
      <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=500&q=80" 
           alt="Student testimonial" class="rounded-xl mb-4">
      <p class="italic text-gray-300">“I learned crypto basics and earned my first $ZAC — now I pay my cafe tab with it!”</p>
      <h4 class="mt-3 text-sm font-semibold text-cyan-400">— Ama, Ghana</h4>
    </div>
    <div class="glass p-6 rounded-xl">
      <img src="https://images.unsplash.com/photo-1596496050642-3b1c57e4aa1a?auto=format&fit=crop&w=500&q=80" 
           alt="Student testimonial" class="rounded-xl mb-4">
      <p class="italic text-gray-300">“It’s like earning pocket money for learning — $ZAC feels like the future!”</p>
      <h4 class="mt-3 text-sm font-semibold text-cyan-400">— Neo, South Africa</h4>
    </div>
    <div class="glass p-6 rounded-xl">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" 
           alt="Student testimonial" class="rounded-xl mb-4">
      <p class="italic text-gray-300">“Zep Swipe made crypto simple. I even helped my classmates sign up!”</p>
      <h4 class="mt-3 text-sm font-semibold text-cyan-400">— Wanjiku, Kenya</h4>
    </div>
  </div>
</section>

<!-- Wishlist / Early Access -->
<section id="wishlist" class="fade-up py-20 px-6 max-w-2xl mx-auto text-center glass">
  <h2 class="text-3xl font-bold neon-text mb-4">Join Early Access</h2>
  <p class="text-gray-300 mb-6">Sign up early and get a free <span class="text-pink-400 font-bold">$ZAC reward</span> for your wallet!</p>
  <form class="flex flex-col gap-3">
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
    <button type="submit" class="px-6 py-3 gradient-btn text-black font-semibold rounded-lg">Claim My Free $ZAC</button>
  </form>
</section>

<!-- Footer -->
<footer class="py-8 text-center text-gray-400 text-sm border-t border-purple-500/20">
  © 2025 Zep Swipe — Built for students. Powered by blockchain. Driven by $ZAC.
</footer>

<!-- Fade-Up Animation -->
<script>
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
</script>

<!-- Lightweight Particle Background -->
<script>
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function initCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: `hsla(${Math.random()*360}, 80%, 60%, 0.25)`
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