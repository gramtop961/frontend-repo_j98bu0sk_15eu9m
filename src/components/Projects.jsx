import React from 'react';
import { LineChart, Shield, TrendingUp } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    title: 'Liquidity-Aware Market Making',
    desc: 'Inventory-aware MM with microprice and queue position signals to minimize adverse selection.',
    tags: ['Microstructure', 'Crypto Perps', 'Python'],
    link: '#',
  },
  {
    icon: LineChart,
    title: 'Order Flow Imbalance Radar',
    desc: 'Real-time OFI monitor detecting regime shifts and sweep activity to time entries and exits.',
    tags: ['Order Flow', 'Web App', 'React'],
    link: '#',
  },
  {
    icon: Shield,
    title: 'Execution Cost Simulator',
    desc: 'Simulates slippage across venues and schedules for TWAP/VWAP POV execution.',
    tags: ['Execution', 'Simulation', 'Risk'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Featured Work</h2>
          <p className="mt-3 text-slate-300">
            Selected projects exploring liquidity, execution, and behavior of market participants.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, desc, tags, link }) => (
            <a
              key={title}
              href={link}
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:translate-y-[-2px] hover:border-white/20 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
