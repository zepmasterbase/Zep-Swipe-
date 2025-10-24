<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zep Swipe — Africa's Checkout Button</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Roboto:wght@400;500&display=swap"
    rel="stylesheet"
  />

  <style>
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Roboto', sans-serif;
      background: linear-gradient(to bottom right, #000814, #001f3f, #003366);
      color: #fff;
    }
    h1, h2, h3 {
      font-family: 'Orbitron', sans-serif;
    }
    .neon-text {
      color: #00ffff;
      text-shadow: 0 0 5px #00ffff, 0 0 10px #00e5ff, 0 0 20px #00e5ff;
    }
    .gradient-btn {
      background: linear-gradient(90deg, #00ffff, #00b4ff, #00ff99);
      background-size: 200% auto;
      transition: background-position 0.4s, transform 0.2s;
    }
    .gradient-btn:hover {
      background-position: right center;
      transform: translateY(-3px);
      box-shadow: 0 0 20px rgba(0,255,255,0.4);
    }
    nav a:hover {
      color: #00ffff;
    }
  </style>
</head>

<body class="min-h-screen">

  <!-- Navbar -->
  <nav class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
    <!-- Left: Logo linked to top -->
    <a href="#top" class="flex items-center">
      <img
        src="https://files.oaiusercontent.com/file-uC4v4sTgA9STTsvDkNlyBbiR?se=2025-10-24T23%3A59%3A59Z&sp=r&sv=2022-11-02&sr=b&rscd=inline%3B%20filename%3Dzep_logo.png"
        alt="Zep Swipe Logo"
        class="w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-105 transition-transform duration-300"
      />
    </a>

    <!-- Right: Dropdown Menu -->
    <div class="relative group">
      <button class="px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg">
        Menu ▼
      </button>
      <div
        class="absolute right-0 mt-2 w-48 bg-[#001f3f] rounded-lg shadow-lg hidden group-hover:block z-50"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form"
          target="_blank"
          class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition"
          >Learn</a
        >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBjWItPmUzfEDcz4FrOS8-9vnuLC31q6cfxQKihW-FmhCO_Q/viewform?usp=send_form"
          target="_blank"
          class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition"
          >Earn</a
        >
        <a
          href="#wishlist"
          class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition"
          >Join Wishlist</a
        >
        <a
          href="https://zepmasterbase.github.io/Zep-Swipe-/#roadmap-1"
          target="_blank"
          class="block px-4 py-2 hover:bg-cyan-400 hover:text-black transition"
          >Roadmap</a
        >
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="top" class="flex flex-col items-center justify-center text-center mt-16 px-6">
    <img
      src="https://files.oaiusercontent.com/file-uC4v4sTgA9STTsvDkNlyBbiR?se=2025-10-24T23%3A59%3A59Z&sp=r&sv=2022-11-02&sr=b&rscd=inline%3B%20filename%3Dzep_logo.png"
      alt="Zep Swipe Logo"
      class="w-32 h-32 rounded-full shadow-lg mb-6 animate-pulse"
    />
    <h1 class="text-5xl md:text-6xl font-bold neon-text mb-4">Zep Swipe</h1>
    <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
      Africa's futuristic checkout button & borderless digital wallet.
      Fast, secure, and ready for the future.
    </p>
    <div class="flex flex-col md:flex-row gap-6">
      <button
        class="px-8 py-4 gradient-btn text-black font-semibold rounded-xl shadow transition"
      >
        Connect Wallet
      </button>
      <button
        class="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl shadow hover:bg-cyan-400 hover:text-black transition"
      >
        Continue with Mobile Number
      </button>
    </div>
    <p class="mt-6 text-sm text-gray-400">
      Secure by blockchain. Powered by $ZAC.
    </p>
  </section>

  <!-- Learn & Earn Section -->
  <section id="learn-earn" class="mt-24 px-6 max-w-6xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-bold neon-text mb-6">Learn & Earn</h2>
    <p class="text-gray-300 mb-6">
      Get rewarded for learning about Zep Swipe and blockchain!
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
  <section
    id="wishlist"
    class="mt-24 px-6 max-w-3xl mx-auto bg-[#001f3f]/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-cyan-700"
  >
    <h2 class="text-3xl font-bold neon-text mb-6 text-center">Join Wishlist</h2>
    <p class="text-gray-300 mb-6 text-center">
      Provide your details to be among the first to get updates and rewards.
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
      <button
        type="submit"
        class="px-6 py-3 gradient-btn text-black font-semibold rounded-xl shadow mt-2"
      >
        Submit
      </button>
    </form>
  </section>

  <!-- Features Section -->
  <section id="features" class="mt-24 px-6 max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold text-center neon-text mb-12">
      Features
    </h2>
    <div class="grid md:grid-cols-3 gap-12">
      <div
        class="bg-[#001f3f]/70 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <h3 class="text-2xl font-bold mb-4">Instant Checkout</h3>
        <p class="text-gray-300">
          Complete payments in a single swipe without delays.
        </p>
      </div>
      <div
        class="bg-[#001f3f]/70 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <h3 class="text-2xl font-bold mb-4">Borderless Wallet</h3>
        <p class="text-gray-300">
          Send and receive money across Africa seamlessly.
        </p>
      </div>
      <div
        class="bg-[#001f3f]/70 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <h3 class="text-2xl font-bold mb-4">Blockchain Security</h3>
        <p class="text-gray-300">
          Your transactions are secured on a decentralized ledger.
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="mt-32 py-8 text-center text-gray-400 text-sm">
    © 2025 Zep Swipe. Built for students. Powered by blockchain.
  </footer>
</body>
</html>