<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zep Swipe — Futuristic Checkout for Africa</title>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    color: #fff;
    background: #0f172a;
    position: relative;
  }

  canvas#bg-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  h1,h2,h3 { font-family: 'Orbitron', sans-serif; }

  .neon-text {
    background: linear-gradient(90deg, #00f0ff, #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 12px rgba(0,255,255,0.4);
  }

  .glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .gradient-btn {
    background: linear-gradient(90deg, #00ffff, #00ff99);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .gradient-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 16px rgba(0,255,255,0.5);
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
</style>
</head>
<body id="top">

<!-- Background Canvas -->
<canvas id="bg-canvas"></canvas>

<!-- Navbar -->
<nav class="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 glass z-50">
  <a href="#top" class="text-2xl font-bold neon-text hover:scale-105 transition-transform">Zep Swipe</a>
  <div class="relative group">
    <button class="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold">Menu ▼</button>
    <div class="absolute right-0 mt-2 w-40 glass rounded-lg hidden group-hover:block border border-cyan-500/30">
      <a href="#learn-earn" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black">Learn</a>
      <a href="#wishlist" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black">Wishlist</a>
      <a href="https://zepmasterbase.github.io/Zep-Swipe-/#roadmap-1" target="_blank" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black">Roadmap</a>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
  <div class="fade-up">
    <h1 class="text-5xl md:text-6xl font-bold neon-text mb-6">Zep Swipe</h1>
    <p class="max-w-xl mx-auto text-gray-300 mb-8 text-lg">Africa’s futuristic checkout & borderless digital wallet — where payments meet innovation.</p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <button class="px-6 py-3 gradient-btn text-black font-semibold rounded-lg">Connect Wallet</button>
      <button class="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition">Continue with Mobile</button>
    </div>
    <p class="mt-4 text-sm text-gray-400">Secure by blockchain. Powered by $ZAC.</p>
  </div>
</section>

<!-- Learn & Earn -->
<section id="learn-earn" class="fade-up py-20 px-6 text-center max-w-4xl mx-auto">
  <h2 class="text-4xl font-bold neon-text mb-4">Learn & Earn</h2>
  <p class="text-gray-300 mb-6">Learn blockchain payments, earn crypto rewards, and grow your Web3 knowledge.</p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" target="_blank" class="px-8 py-3 gradient-btn text-black font-semibold rounded-lg">Start Learning</a>
</section>

<!-- Wishlist -->
<section id="wishlist" class="fade-up py-20 px-6 max-w-2xl mx-auto text-center glass rounded-xl">
  <h2 class="text-3xl font-bold neon-text mb-4">Join Wishlist</h2>
  <p class="text-gray-300 mb-6">Sign up for early access and be part of Africa’s digital payment revolution.</p>
  <form action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" target="_blank" class="flex flex-col gap-3">
    <input type="text" placeholder="University Name" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-cyan-400 focus:outline-none">
    <input type="email" placeholder="Email Address" class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-cyan-400 focus:outline-none">
    <select class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:border-cyan-400 focus:outline-none">
      <option value="">Country of Origin</option>
      <option>South Africa</option>
      <option>Ghana</option>
      <option>Kenya</option>
      <option>Nigeria</option>
      <option>Uganda</option>
    </select>
    <button type="submit" class="px-6 py-3 gradient-btn text-black font-semibold rounded-lg">Submit</button>
  </form>
</section>

<!-- Footer -->
<footer class="py-8 text-center text-gray-400 text-sm border-t border-cyan-500/20">
  © 2025 Zep Swipe. Built for Africa’s innovators. Powered by blockchain.
</footer>

<!-- Scripts -->
<script>
  // Fade-up animation
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));

  // Metaverse particles with trails and links
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 100;
  const maxDistance = 120;

  function random(min, max) { return Math.random() * (max - min) + min; }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = random(0, width);
      this.y = random(0, height);
      this.vx = random(-0.5, 0.5);
      this.vy = random(-0.5, 0.5);
      this.radius = random(1, 3);
      this.alpha = random(0.3, 0.8);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,255,${this.alpha})`;
      ctx.fill();
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
  }

  for(let i=0;i<particleCount;i++) particles.push(new Particle());

  function animate() {
    ctx.fillStyle = 'rgba(15,23,42,0.3)'; // semi-transparent for trail effect
    ctx.fillRect(0,0,width,height);

    // Draw lines
    for(let i=0;i<particles.length;i++){
      const p1 = particles[i];
      p1.update();
      p1.draw();
      for(let j=i+1;j<particles.length;j++){
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < maxDistance){
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,255,255,${0.2*(1-dist/maxDistance)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x,p1.y);
          ctx.lineTo(p2.x,p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
</script>
</body>
</html>