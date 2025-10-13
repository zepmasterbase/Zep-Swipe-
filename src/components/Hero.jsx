import React from "react";

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
}