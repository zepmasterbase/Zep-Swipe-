import { useState } from 'react';

export default function LandingPage() { const [email, setEmail] = useState(''); const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => { e.preventDefault(); if(email) { localStorage.setItem('zepSwipeEmail', email); setSubmitted(true); } };

return ( <div className="min-h-screen bg-gradient-to-br from-[#001f3f] via-[#002b5c] to-[#004080] text-white flex flex-col font-sans"> {/* Hero Section */} <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-36"> <h1 className="text-4xl md:text-6xl font-extrabold mb-4 neon-text">Zep Swipe — Learn, Earn & Connect Across Africa</h1> <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-xl">Empowering students and vendors through borderless payments and learning.</p> <div className="flex flex-col md:flex-row gap-4"> <a href="https://forms.gle/7Pr7gLySfroWMptC9" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neonBlue text-[#001f3f] font-semibold rounded-xl shadow hover:bg-neonCyan transition"> Join Learn & Earn Program </a> <button onClick={() => setSubmitted(false)} className="px-6 py-3 border border-neonBlue font-semibold rounded-xl shadow hover:bg-neonBlue transition"> Add to Wishlist </button> </div>

{/* Email input overlay for wishlist */}
    {!submitted && (
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row gap-2 items-center justify-center">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="px-4 py-2 rounded-lg text-black focus:outline-none" 
          required
        />
        <button type="submit" className="px-4 py-2 bg-neonBlue font-semibold rounded-lg hover:bg-neonCyan transition">
          Save
        </button>
      </form>
    )}
    {submitted && <p className="mt-4 text-neonCyan">Thank you! Your interest has been saved.</p>}
  </section>

  {/* About Section */}
  <section className="px-6 py-16 md:py-24 bg-[#001f3f] text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">About Zep Swipe</h2>
    <p class

