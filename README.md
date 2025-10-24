<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student & Vendor SuperApp Wallet</title>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0f172a, #1e293b, #0f172a);
    color: #fff;
    overflow-x: hidden;
  }

  h1, h2, h3 { font-family: 'Orbitron', sans-serif; }

  .neon-text {
    background: linear-gradient(90deg, #00f0ff, #ff6ec7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 12px rgba(0,255,255,0.3);
  }

  .glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15);
  }

  .gradient-btn {
    background: linear-gradient(90deg, #00ffff, #ff6ec7);
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
<body>

<!-- Hero Section -->
<section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
  <div class="fade-up">
    <h1 class="text-5xl md:text-6xl font-bold neon-text mb-6">SuperApp Wallet</h1>
    <p class="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">The ultimate digital wallet for students & vendors. Discover deals, list products, and manage your digital life seamlessly.</p>
    <div class="flex flex-col md:flex-row gap-4 justify-center mb-4">
      <button class="px-8 py-3 gradient-btn text-black font-semibold rounded-xl">Connect Wallet</button>
      <button class="px-8 py-3 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition">Explore Deals</button>
    </div>
    <p class="text-gray-400 text-sm">Secure, fast, and borderless transactions.</p>
  </div>
</section>

<!-- Features Section -->
<section class="fade-up py-24 px-6 max-w-6xl mx-auto">
  <h2 class="text-4xl md:text-5xl font-bold neon-text mb-12 text-center">Features</h2>
  <div class="grid md:grid-cols-3 gap-10">
    <div class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      <h3 class="text-2xl font-bold mb-3">Student Deals</h3>
      <p class="text-gray-300">Access exclusive discounts on digital products and services curated for students.</p>
    </div>
    <div class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      <h3 class="text-2xl font-bold mb-3">Vendor Listings</h3>
      <p class="text-gray-300">List your digital products or services, reach students, and grow your business effortlessly.</p>
    </div>
    <div class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      <h3 class="text-2xl font-bold mb-3">Wallet & Payments</h3>
      <p class="text-gray-300">Seamless wallet management with instant, secure digital transactions.</p>
    </div>
  </div>
</section>

<!-- Digital Products Showcase -->
<section class="fade-up py-24 px-6 max-w-6xl mx-auto text-center">
  <h2 class="text-4xl md:text-5xl font-bold neon-text mb-12">Top Digital Products</h2>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      <h3 class="font-semibold mb-2">Ebook: Learn Blockchain</h3>
      <p class="text-gray-300 mb-4">$10 — Instant Download</p>
      <button class="px-6 py-2 gradient-btn text-black font-semibold rounded-lg">Buy Now</button>
    </div>
    <div class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      <h3 class="font-semibold mb-2">Coding Templates</h3>
      <p class="text-gray-300 mb-4">$15 — Immediate Access</p>
      <button class="px-6 py-2 gradient-btn text-black font-semibold rounded-lg">Buy Now</button>
    </div>
    <div class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      <h3 class="font-semibold mb-2">Design Assets</h3>
      <p class="text-gray-300 mb-4">$12 — Downloadable</p>
      <button class="px-6 py-2 gradient-btn text-black font-semibold rounded-lg">Buy Now</button>
    </div>
  </div>
</section>

<!-- Call-to-Action Section -->
<section class="fade-up py-20 px-6 text-center glass rounded-xl max-w-3xl mx-auto">
  <h2 class="text-3xl md:text-4xl font-bold neon-text mb-4">Get Started Today</h2>
  <p class="text-gray-300 mb-6">Join students and vendors already enjoying borderless transactions and exclusive deals.</p>
  <div class="flex flex-col md:flex-row justify-center gap-4">
    <button class="px-8 py-3 gradient-btn text-black font-semibold rounded-xl">Sign Up</button>
    <button class="px-8 py-3 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition">Learn More</button>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 text-center text-gray-400 text-sm border-t border-pink-500/20">
  © 2025 SuperApp Wallet. Empowering students & vendors across digital marketplaces.
</footer>

<!-- Fade-up animation -->
<script>
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
</script>

</body>
</html>