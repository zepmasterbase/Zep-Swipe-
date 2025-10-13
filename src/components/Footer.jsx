import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-4">
      <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} Zep Swipe — Built for students & vendors. Connect the way you live.
      </div>
    </footer>
  );
}