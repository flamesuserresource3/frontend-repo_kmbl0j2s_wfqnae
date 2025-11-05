import React from 'react';
import { Check } from 'lucide-react';

export default function CTAFooter() {
  return (
    <section className="w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-emerald-300/90">Why teams choose us</p>
            <h3 className="text-3xl font-semibold">Built for clarity, speed, and scale</h3>
            <p className="mt-3 text-white/70">From onboarding to enterprise controls, every detail is crafted to keep your team focused on outcomes — not overhead.</p>
            <ul className="mt-6 space-y-3">
              {[
                'Fast setup with zero maintenance',
                'Compliant by default (SSO, RBAC, audit logs)',
                'Reliable performance at any scale',
                'Thoughtful design that teams love to use',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
            <h4 className="text-xl font-semibold">Ready to see it in action?</h4>
            <p className="mt-2 text-white/70">Start a free trial or book a live walkthrough with our product specialists.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-xl">
                Start free trial
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Book a demo
              </a>
            </div>
            <p className="mt-3 text-xs text-white/50">No credit card required</p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/60 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-400" />
            <span className="font-semibold text-white">Nova</span>
            <span className="hidden md:inline">—</span>
            <span>Modern SaaS infrastructure</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Products</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
