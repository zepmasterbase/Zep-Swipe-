<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zep Swipe — Africa's Checkout Button</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  />

  <style>
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Inter', sans-serif;
      background: radial-gradient(circle at 20% 20%, #001a33, #000814, #000);
      color: #fff;
      overflow-x: hidden;
    }
    h1, h2, h3 {
      font-family: 'Orbitron', sans-serif;
    }
    .neon {
      color: #00faff;
      text-shadow: 0 0 10px #00faff, 0 0 20px #00d9ff, 0 0 30px #00b4ff;
    }
    .gradient-btn {
      background: linear-gradient(90deg, #00ffff, #0078ff, #00ff99);
      background-size: 200% auto;
      transition: background-position 0.5s ease, transform 0.3s ease;
    }
    .gradient-btn:hover {
      background-position: right center;
      transform: translateY(-3px);
      box-shadow: 0 0 20px rgba(0,255,255,0.3);
    }
    .glass {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .fade-up {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>

<body id="top">

  <!-- Navbar -->
  <nav class="fixed top-0 left-0 w-full z-50 glass flex justify-between items-center px-6 py-4 md:px-12 shadow-lg">
    <a href="#top" class="flex items-center space-x-3">
      <img
        src="https://files.oaiusercontent.com/file-uC4v4sTgA9STTsvDkNlyBbiR?se=2025-10-24T23%3A59%3A59Z&sp=r&sv=2022-11-02&sr=b&rscd=inline%3B%20filename%3Dzep_logo.png"
        alt="Zep Swipe Logo"
        class="w-10 h-10 md:w-12 md:h-12 rounded-full hover:scale-105 transition-transform duration-300"
      />
    </a>

    <div class="relative group">
      <button class="px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:scale-105 transition">
        Menu ▼
      </button>
      <div
        class="absolute right-0 mt-2 w-48 bg-[#001f3f] rounded-lg shadow-lg hidden group-hover:block z-50 border border-cyan-500/30"
      >
        <a href="#learn-earn" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition">Learn</a>
        <a href="#learn-earn" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition">Earn</a>
        <a href="#wishlist" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition">Join Wishlist</a>
        <a href="https://zepmasterbase.github.io/Zep-Swipe-/#roadmap-1" target="_blank" class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition">Roadmap</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
    <div class="fade-up">
      <img
        src="https://files.oaiusercontent.com/file-uC4v4sTgA9STTsvDkNlyBbiR?se=2025-10-24T23%3A59%3A59Z&sp=r&sv=2022-11-02&sr=b&rscd=inline%3B%20filename%3Dzep_logo.png"
        alt="Zep Swipe Logo"
        class="w-32 h-32 rounded-full mb-8 animate-pulse"
      />
      <h1 class="text-6xl md:text-7xl font-bold neon mb-6">Zep Swipe</h1>
      <p class="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-8">
        Africa’s futuristic checkout button & borderless digital wallet.  
        Fast, secure, and built for the next generation of online payments.
      </p>
      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <button class="px-8 py-4 gradient-btn text-black font-semibold rounded-xl shadow">
          Connect Wallet
        </button>
        <button class="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl shadow hover:bg-cyan-400 hover:text-black transition">
          Continue with Mobile Number
        </button>
      </div>
      <p class="mt-6 text-sm text-gray-400">Secure by blockchain. Powered by $ZAC.</p>
    </div>
  </section>

  <!-- Learn & Earn Section -->
  <section id="learn-earn" class="fade-up py-24 px-6 text-center max-w-6xl mx-auto">
    <h2 class="text-5xl font-bold neon mb-4">Learn & Earn</h2>
    <p class="text-gray-300 mb-6 max-w-xl mx-auto">
      Earn crypto rewards while learning how Zep Swipe empowers Africa’s digital economy.
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form"
      target="_blank"
      class="px-10 py-4 gradient-btn text-black font-semibold rounded-xl shadow"
    >
      Join Now
    </a>
  </section>

  <!-- Wishlist Section -->
  <section id="wishlist" class="fade-up py-24 px-6 max-w-3xl mx-auto text-center glass rounded-2xl border border-cyan-700/40">
    <h2 class="text-4xl font-bold neon mb-6">Join Wishlist</h2>
    <p class="text-gray-300 mb-8">
      Be first in line for exclusive access and early rewards.
    </p>
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form"
      target="_blank"
      class="flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="University Name"
        class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
      />
      <input
        type="email"
        placeholder="Email Address"
        class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
      />
      <select
        class="p-3 rounded-lg bg-[#0a0a0a] text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
      >
        <option value="">Country of Origin</option>
        <option>South Africa</option>
        <option>Ghana</option>
        <option>Kenya</option>
        <option>Nigeria</option>
        <option>Uganda</option>
      </select>
      <button type="submit" class="px-8 py-3 gradient-btn text-black font-semibold rounded-xl shadow mt-2">
        Submit
      </button>
    </form>
  </section>

  <!-- Features Section -->
  <section id="features" class="fade-up py-24 px-6 max-w-6xl mx-auto">
    <h2 class="text-5xl font-bold text-center neon mb-12">Features</h2>
    <div class="grid md:grid-cols-3 gap-12">
      <div class="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-bold mb-4">Instant Checkout</h3>
        <p class="text-gray-300">Pay in seconds with one seamless swipe.</p>
      </div>
      <div class="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-bold mb-4">Borderless Wallet</h3>
        <p class="text-gray-300">Send and receive funds across Africa with ease.</p>
      </div>
      <div class="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
        <h3 class="text-2xl font-bold mb-4">Blockchain Security</h3>
        <p class="text-gray-300">Protected by transparent, decentralized systems.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 text-center text-gray-400 text-sm border-t border-cyan-500/20">
    © 2025 Zep Swipe. Built for Africa’s innovators. Powered by blockchain.
  </footer>

  <!-- Fade-in Animation Script -->
  <script>
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach((el) => observer.observe(el));
  </script>

</body>
</html>