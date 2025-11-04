import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-slate-100">
      {/* Simple sticky header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="text-sm font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">TRADING PORTFOLIO</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#expertise" className="text-slate-300 hover:text-white">Expertise</a>
            <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="pt-14">
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Your Name — Focused on market microstructure & trading strategy.
      </footer>
    </div>
  );
}

export default App;
