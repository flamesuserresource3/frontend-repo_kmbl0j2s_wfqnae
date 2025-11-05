import React from 'react';
import { Rocket, Shield, Zap, Users, BarChart3, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Blazing Onboarding',
    desc: 'Get your team set up in minutes with sensible defaults and guided flows.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade Security',
    desc: 'SSO, audit trails, and role-based access baked in from day one.',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Optimized rendering and APIs ensure a buttery-smooth experience.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'Understand adoption and ROI with real-time usage dashboards.',
  },
  {
    icon: Users,
    title: 'Collaboration First',
    desc: 'Comments, mentions, and shared views that keep everyone aligned.',
  },
  {
    icon: Sparkles,
    title: 'AI Assistance',
    desc: 'Automate repetitive work with context-aware suggestions.',
  },
];

const logos = [
  'Acme',
  'Globex',
  'Umbrella',
  'Initech',
  'Stark',
  'Wayne',
  'Wonka',
  'Hooli',
];

export default function FeatureCluster() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Key features that scale with you</h2>
          <p className="mt-3 text-white/70">Everything you need to launch, grow, and keep customers delighted.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/50">Trusted by modern teams</p>
          <div className="grid grid-cols-2 items-center gap-4 opacity-80 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {logos.map((name) => (
              <div key={name} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4 text-sm text-white/70">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
