import { useState } from "react";

export default function ZepSwipeLanding() {
  const [showWishlist, setShowWishlist] = useState(false);
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const handleWishlistSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      localStorage.setItem("zepWishlistEmail", email);
      setSaved(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001f3f] via-[#002b5c] to-[#003b7a] text-white flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Zep Swipe — <span className="text-cyan-400">Learn, Earn & Connect</span> Across Africa
        </h1>
        <p className="text-gray-300 max-w-2xl mb-10 text-lg md:text-xl">
          Empowering students and vendors through borderless payments and learning.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://forms.gle/7Pr7gLySfroWMptC9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-cyan-400 text-[#001f3f] font-semibold rounded-xl shadow hover:bg-cyan-300 transition"
          >
            Join Learn & Earn Program
          </a>

          <button
            onClick={() => setShowWishlist(!showWishlist)}
            className="px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-[#001f3f] transition"
          >
            Add to Wishlist
          </button>
        </div>

        {/* Wishlist Input */}
        {showWishlist && (
          <form
            onSubmit={handleWishlistSubmit}
            className="mt-6 flex flex-col md:flex-row items-center gap-3 bg-[#002b5c]/50 p-4 rounded-xl"
          >
            {!saved ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-lg text-black w-64 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-400 text-[#001f3f] font-semibold rounded-lg hover:bg-cyan-300 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <p className="text-cyan-300 font-medium">✅ Added to wishlist! Thank you.</p>
            )}
          </form>
        )}
      </section>

      {/* About Section */}
      <section className="bg-[#001a33] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">About Zep Swipe</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Zep Swipe is Africa’s student and vendor ecosystem — connecting learners and businesses
          through borderless payments, digital wallets, and skill-based earning. Our mission is to
          empower Africa’s youth and entrepreneurs with tools that make education and commerce
          seamless across borders.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm border-t border-[#003b7a]/40">
        Built for students. Ready for the future. © {new Date().getFullYear()} Zep Swipe
      </footer>
    </div>
  );
}