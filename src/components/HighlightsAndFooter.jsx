import { motion } from 'framer-motion';
import { Clock, Calendar, CreditCard, BarChart3, Star, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react';

const features = [
  { icon: Clock, title: 'Real‑time tracking', desc: 'Follow your order and team in motion with live updates.' },
  { icon: Calendar, title: 'Smart scheduling', desc: 'Automated reminders, prep buffers, and conflict-free planning.' },
  { icon: CreditCard, title: 'Easy payments', desc: 'Secure checkout, saved methods, and instant invoices.' },
  { icon: BarChart3, title: 'Event insights', desc: 'Trends, preferences, and ROI reports that matter.' },
];

const testimonials = [
  {
    name: 'Ava Martinez',
    role: 'Operations, Nimbus Corp',
    quote:
      'Polished, on-time, and zero stress. Our quarterly townhall finally felt effortless.',
  },
  {
    name: 'Liam Chen',
    role: 'Founder, Bento & Co. Catering',
    quote:
      'Scheduling and payouts are a breeze — we spend more time delighting clients.',
  },
];

export default function HighlightsAndFooter() {
  return (
    <section className="relative">
      {/* Feature highlights */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-[#1C1C1C] sm:text-4xl">Built for Modern Events</h2>
          <p className="mt-3 text-neutral-600">Elegant tools that elevate every step — from planning to celebration.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-white/70 bg-white/50 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-white to-[#F8F8F8] p-3 text-[#1C1C1C] ring-1 ring-white/60">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1C]">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFF] via-[#F8F8F8] to-[#E8DCC7]/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Star className="text-[#C6A664]" size={20} />
            <p className="text-sm font-medium text-neutral-700">Loved by teams and families alike</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-3xl border border-white/70 bg-white/60 p-6 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E8DCC7] to-white text-[#1C1C1C] ring-1 ring-white/60">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1C1C]">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-neutral-700">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Join section */}
      <div id="order" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(198,166,100,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <h3 className="text-3xl font-semibold text-[#1C1C1C]">Ready to experience premium catering?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">Whether you’re planning a personal celebration or an enterprise event, we make it delightful from start to finish.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#order" className="rounded-xl bg-[#1C1C1C] px-6 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">Order Catering</a>
            <a id="partner" href="#partner" className="rounded-xl border border-[#E8DCC7] bg-white/60 px-6 py-3 text-[#1C1C1C] backdrop-blur">Partner with Us</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-10 border-t border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#C6A664] to-[#E8DCC7]" />
            <span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">LuxeCater</span>
          </div>
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} LuxeCater. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#1C1C1C]">
            <a href="#" aria-label="Instagram" className="opacity-80 transition hover:opacity-100"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="opacity-80 transition hover:opacity-100"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 transition hover:opacity-100"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </section>
  );
}
