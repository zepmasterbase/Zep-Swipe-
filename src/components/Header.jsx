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
}