import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Let’s collaborate</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Open to research, strategy development, and tooling work around market microstructure, liquidity, and execution.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow-lg transition hover:shadow-xl"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:border-white/40"
          >
            <Globe className="h-4 w-4" />
            Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
