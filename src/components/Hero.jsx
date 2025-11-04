import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/80" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          Fintech • Trading Strategy • Market Microstructure
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          I analyze market players and build
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent"> trading edges</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200/90 md:text-lg">
          Portfolio focused on understanding order flow, liquidity dynamics, and participant behavior to design robust
          strategies across crypto, equities, and FX.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#expertise" className="group inline-flex items-center rounded-lg bg-white px-5 py-3 text-slate-900 shadow-lg transition hover:shadow-xl">
            Explore Expertise
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center rounded-lg border border-white/30 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:border-white/50">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
