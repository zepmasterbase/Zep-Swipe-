<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zep Swipe — Africa's Checkout Button</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Roboto', sans-serif; }
    h1, h2, h3 { font-family: 'Orbitron', sans-serif; }
    .neon-text {
      text-shadow: 0 0 5px #00f, 0 0 10px #0ff, 0 0 20px #0ff;
    }
    .button-glow:hover {
      box-shadow: 0 0 20px #0ff, 0 0 30px #0ff inset;
      transform: translateY(-2px);
      transition: all 0.3s ease-in-out;
    }
    .glass-card {
      background: rgba(0, 31, 63, 0.7);
      backdrop-filter: blur(10px);
    }
  </style>
</head>
<body class="bg-gradient-to-br from-[#0a0a0a] via-[#001f3f] to-[#003366] text-white min-h-screen">

  <!-- Navbar -->
  <nav class="flex justify-between items-center p-6 max-w-7xl mx-auto">
    <h1 class="text-2xl md:text-3xl font-bold neon-text">Zep Swipe</h1>
    <div class="space-x-6">
      <a href="#features" class="hover:text-cyan-400 transition">Features</a>
      <a href="#pricing" class="hover:text-cyan-400 transition">Pricing</a>
      <a href="#contact" class="hover:text-cyan-400 transition">Contact</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form" target="_blank" class="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition">Learn & Earn</a>
      <a href="#roadmap" class="px-4 py-2 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">Join Wishlist</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="flex flex-col items-center justify-center text-center mt-16 px-6">
    <img src="https://your-logo-link-here.png" alt="Zep Swipe Logo" class="w-28 h-28 rounded-full shadow-lg mb-6 animate-bounce">
    <h1 class="text-5xl md:text-6xl font-bold neon-text mb-4">Zep Swipe</h1>
    <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">Africa's futuristic checkout button & borderless digital wallet. Fast, secure, and ready for the future.</p>

    <div class="flex flex-col md:flex-row gap-6">
      <button class="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl shadow button-glow transition">
        Connect Wallet
      </button>
      <button class="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl shadow hover:bg-cyan-400 hover:text-black transition">
        Continue with Mobile Number
      </button>
    </div>
    <p class="mt-6 text-sm text-gray-400">Secure by blockchain. Powered by $ZAC.</p>
  </section>

  <!-- Features Section -->
  <section id="features" class="mt-20 px-6 max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold text-center neon-text mb-12">Features</h2>
    <div class="grid md:grid-cols-3 gap-12">
      <div class="glass-card p-6 rounded-xl shadow-lg hover:scale-105 transition">
        <h3 class="text-2xl font-bold mb-4">Instant Checkout</h3>
        <p class="text-gray-300">Complete payments in a single swipe without delays.</p>
      </div>
      <div class="glass-card p-6 rounded-xl shadow-lg hover:scale-105 transition">
        <h3 class="text-2xl font-bold mb-4">Borderless Wallet</h3>
        <p class="text-gray-300">Send and receive money across Africa seamlessly.</p>
      </div>
      <div class="glass-card p-6 rounded-xl shadow-lg hover:scale-105 transition">
        <h3 class="text