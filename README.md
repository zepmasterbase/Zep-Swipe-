{
  "name": "zep-swipe-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "firebase": "^9.23.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "web3": "^1.10.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.5.5",
    "vite": "^5.0.0"
  }
}<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Zep Swipe — Landing</title>
  </head>
  <body class="bg-slate-900 text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoginPanel from "./components/LoginPanel";
import Gamify from "./components/Gamify";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Hero />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LoginPanel />
            <Gamify />
          </div>
          <aside className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>📘 ZepShop Masterclass</li>
              <li>🛍 Zep Shop (coming soon)</li>
              <li>🤝 Partner with us</li>
            </ul>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}// Replace the placeholders with your Firebase project config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-cyan-500">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Zep Swipe" onError={(e)=>{e.target.onerror=null; e.target.src='https://via.placeholder.com/48?text=Z';}} className="w-12 h-12 rounded" />
          <div>
            <div className="font-bold text-xl">Zep Swipe</div>
            <div className="text-xs text-indigo-100">Connect the way you live</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-indigo-100">
          <a className="hover:underline" href="#shop">Shop</a>
          <a className="hover:underline" href="#campus">Campus</a>
          <a className="hover:underline" href="#docs">Docs</a>
          <button className="bg-white text-indigo-700 px-3 py-1 rounded">Get Started</button>
        </nav>
      </div>
    </header>
  );
}import React from "react";

export default function Hero() {
  return (
    <section className="bg-slate-800 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-3">Zep Swipe — Africa’s Checkout Button</h1>
          <p className="text-slate-300 mb-4">
            One login. All your wallets. Pay, sell and swap with ZEP & USDT. Built for students and vendors across Africa.
          </p>

          <div className="flex gap-3">
            <a href="#login" className="bg-indigo-500 px-4 py-2 rounded font-semibold">Connect Wallet</a>
            <a href="#login" className="border border-indigo-400 px-4 py-2 rounded text-indigo-200">Continue with Mobile</a>
          </div>
        </div>

        <div className="bg-slate-900 rounded p-4">
          <div className="text-xs text-slate-400 mb-2">Preview</div>
          <div className="bg-gradient-to-b from-indigo-600 to-cyan-500 text-white p-4 rounded">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-sm">Portfolio</div>
                <div className="text-2xl font-bold">$420.00</div>
              </div>
              <div className="text-right">
                <div className="text-xs">ZEP</div>
                <div className="font-semibold">500</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-white text-indigo-700 px-3 py-1 rounded">Send</button>
              <button className="bg-transparent border border-white px-3 py-1 rounded">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}import React, { useState } from "react";
// Firebase imports would be used in real flow
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";

export default function LoginPanel() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [logged, setLogged] = useState(false);
  const [wallet, setWallet] = useState("");

  async function mockSendOtp() {
    // In production implement firebase signInWithPhoneNumber
    alert("OTP sent (mock). Use 123456 to verify.");
  }

  async function mockVerify() {
    if (otp === "123456") {
      setLogged(true);
      alert("Phone verified (mock)");
    } else {
      alert("Invalid OTP (use 123456 in demo)");
    }
  }

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWallet(accounts[0]);
      } catch (e) {
        alert("Wallet connect canceled");
      }
    } else {
      alert("Install MetaMask to connect");
    }
  }

  return (
    <section id="login" className="mt-6 bg-slate-800 p-4 rounded">
      <h3 className="text-lg font-semibold mb-3">Login / Wallet</h3>

      {!logged ? (
        <div className="space-y-3">
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+233 ..." className="w-full p-3 rounded bg-slate-700" />
          <div id="recaptcha-container" />
          <div className="flex gap-3">
            <button onClick={mockSendOtp} className="bg-indigo-500 px-4 py-2 rounded">Send OTP</button>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="OTP" className="p-3 rounded bg-slate-700 flex-1" />
            <button onClick={mockVerify} className="bg-green-500 px-4 py-2 rounded">Verify</button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-slate-300">Logged in as: {phone}</div>
          <div className="flex gap-3">
            <button onClick={connectWallet} className="bg-white text-indigo-700 px-4 py-2 rounded">Connect Wallet</button>
            <button onClick={()=>{navigator.clipboard.writeText(wallet); alert('Copied');}} className="bg-slate-700 px-4 py-2 rounded">Copy Wallet</button>
          </div>
          <div className="text-sm text-slate-400">Wallet: {wallet ? `${wallet.slice(0,6)}...${wallet.slice(-4)}` : "Not connected"}</div>
        </div>
      )}
    </section>
  );
}import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock quiz questions
const quizData = [
  {
    id: 1,
    question: "What is Zep Swipe?",
    options: [
      "A streaming platform",
      "A student & vendor wallet ecosystem",
      "A mobile game",
      "A crypto exchange",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "Which tokens can be used for payments in Zep Swipe?",
    options: ["BTC", "ETH", "USDT and $ZAC", "DOGE"],
    answer: 2,
  },
  {
    id: 3,
    question: "Who can sell digital products on Zep Swipe?",
    options: ["Vendors", "Only students", "Banks", "MTN staff"],
    answer: 1,
  },
  {
    id: 4,
    question: "What is Zep Shop used for?",
    options: [
      "Buying groceries",
      "Listing digital products and student deals",
      "Streaming music",
      "Sending emails",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "Zep Swipe is powered by which core feature?",
    options: [
      "Blockchain and mobile money",
      "VPN and cloud storage",
      "SMS integration",
      "Social media",
    ],
    answer: 0,
  },
];

const Gamify = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index) => {
    const question = quizData[current];
    if (index === question.answer) {
      setScore(score + 10); // +10 $ZAC reward per correct answer
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-300 p-4">
      <Card className="max-w-md w-full rounded-2xl shadow-xl p-6 bg-white">
        <CardContent>
          {!completed ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-indigo-700">
                Learn & Earn 💰
              </h2>
              <p className="text-gray-800 font-semibold mb-2">
                {quizData[current].question}
              </p>
              <div className="space-y-3">
                {quizData[current].options.map((opt, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full"
                    onClick={() => handleAnswer(i)}
                  >
                    {opt}
                  </Button>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Question {current + 1} of {quizData.length}
              </p>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                🎉 Completed!
              </h2>
              <p className="text-gray-700 mb-4">
                You earned <span className="font-semibold">{score} $ZAC</span>
              </p>
              <Button
                onClick={() => {
                  setCurrent(0);
                  setScore(0);
                  setCompleted(false);
                }}
              >
                Retry Quiz
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-4">
      <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} Zep Swipe — Built for students & vendors. Connect the way you live.
      </div>
    </footer>
  );
}@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100%;
}module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}# Zep Swipe — Landing + Login + Gamify (Vite + React + Tailwind)

## Quick start
1. Install deps:
