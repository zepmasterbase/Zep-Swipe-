import React, { useState } from "react";
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
}