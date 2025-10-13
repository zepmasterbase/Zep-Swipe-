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
}