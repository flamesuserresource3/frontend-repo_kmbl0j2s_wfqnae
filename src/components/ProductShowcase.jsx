import React, { useEffect, useRef, useState } from 'react';

const groups = [
  {
    id: 'automation',
    title: 'Automation Suite',
    tagline: 'Reduce busywork with smart workflows',
    products: [
      { name: 'Flow Builder', desc: 'Visual automations that connect your stack.' },
      { name: 'Scheduler', desc: 'Time-based triggers and recurring jobs.' },
      { name: 'Rules Engine', desc: 'If-this-then-that with guardrails.' },
      { name: 'Webhooks', desc: 'Respond to events across services.' },
      { name: 'Actions', desc: 'Reusable tasks for common ops.' },
      { name: 'Monitors', desc: 'Observe state and anomalies.' },
    ],
  },
  {
    id: 'insights',
    title: 'Insight Hub',
    tagline: 'Turn data into decisions',
    products: [
      { name: 'Dashboards', desc: 'Build live views for every team.' },
      { name: 'Segments', desc: 'Slice users and usage in seconds.' },
      { name: 'Cohorts', desc: 'Track behavior over time.' },
      { name: 'Reports', desc: 'Export-ready summaries on demand.' },
      { name: 'Alerts', desc: 'Proactive notifications when it matters.' },
      { name: 'Experiments', desc: 'Test ideas and measure impact.' },
    ],
  },
  {
    id: 'collaboration',
    title: 'Collaboration Cloud',
    tagline: 'Keep work moving together',
    products: [
      { name: 'Spaces', desc: 'Shared work areas with permissions.' },
      { name: 'Comments', desc: 'Discuss in context with mentions.' },
      { name: 'Approvals', desc: 'Structured reviews with SLAs.' },
      { name: 'Templates', desc: 'Best-practice starters for teams.' },
      { name: 'Presence', desc: 'See updates as they happen.' },
      { name: 'Roles', desc: 'Granular access for every scenario.' },
    ],
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(groups[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.55 }
    );

    groups.forEach((g) => {
      const el = document.getElementById(g.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="showcase" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-[220px_1fr]">
        <aside className="sticky top-24 h-max self-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur">
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => scrollTo(g.id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition hover:bg-white/5 ${
                  active === g.id ? 'bg-white/10 text-white' : 'text-white/70'
                }`}
              >
                {g.title}
                <div className="mt-0.5 text-[11px] font-normal text-white/50">{g.tagline}</div>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-24">
          {groups.map((g) => (
            <section
              key={g.id}
              id={g.id}
              ref={(el) => (sectionRefs.current[g.id] = el)}
              className="scroll-mt-28"
            >
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-1 text-white/70">{g.tagline}</p>
                </div>
                <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300">Explore</a>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.products.map((p) => (
                  <div
                    key={p.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-emerald-500/20 blur-2xl transition group-hover:bg-emerald-400/25" />
                    <div className="mb-3 h-36 w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
                    <h4 className="text-base font-semibold">{p.name}</h4>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">New</span>
                      <span>v1.0</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
