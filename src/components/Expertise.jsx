import React from 'react';
import { TrendingUp, LineChart, Users, Shield, Globe } from 'lucide-react';

const skills = [
  {
    icon: TrendingUp,
    title: 'Order Flow & Liquidity',
    points: ['Market microstructure', 'Depth/imbalance analytics', 'Liquidity provision & routing'],
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: LineChart,
    title: 'Alpha Research',
    points: ['Event-driven edges', 'Volatility regimes', 'Cross-asset correlations'],
    color: 'from-cyan-500 to-blue-400',
  },
  {
    icon: Users,
    title: 'Market Players',
    points: ['Dealer/hedger behavior', 'MM inventory dynamics', 'Retail vs. pro flow'],
    color: 'from-fuchsia-500 to-pink-400',
  },
  {
    icon: Shield,
    title: 'Risk & Execution',
    points: ['Slippage control', 'Inventory risk', 'Adaptive execution algos'],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Globe,
    title: 'Markets',
    points: ['Crypto perps/options', 'US equities', 'G10 FX'],
    color: 'from-violet-500 to-indigo-400',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Expertise in Trading Market Players</h2>
          <p className="mt-3 text-slate-300">
            I map incentives and constraints of key participants to anticipate flow: market makers, dealers, hedgers,
            funds, and retail. Strategies are built around how these players provide or demand liquidity.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, points, color }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color}`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {points.map((p) => (
                  <li key={p} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/10 to-white/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
