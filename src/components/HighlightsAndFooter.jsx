import { motion } from 'framer-motion';
import { Clock, Calendar, CreditCard, LayoutGrid, Star, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react';

const features = [
  { icon: Calendar, title: 'Smart Scheduling', desc: 'Conflict‑free planning, prep buffers, and automated reminders.' },
  { icon: Clock, title: 'Real‑Time Tracking', desc: 'Follow courier routes and kitchen progress with live updates.' },
  { icon: LayoutGrid, title: 'Menu Management', desc: 'Rich catalogs, variants, and seasonal sets with instant edits.' },
  { icon: CreditCard, title: 'Digital Payments', desc: 'Secure checkout, saved methods, and instant invoicing.' },
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
          <h2 className="text-3xl font-semibold text-[#2C2C2C] sm:text-4xl">Feature Highlights</h2>
          <p className="mt-3 text-neutral-600">Glassmorphic cards floating within a calm, luxurious canvas.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-white to-[#F5F5F5] p-3 text-[#2C2C2C] ring-1 ring-white/60">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-[#2C2C2C]">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#E7DCC7]/45" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Star className="text-[#C9A86A]" size={20} />
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
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                {/* 3D avatar token */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E7DCC7] to-white text-[#2C2C2C] ring-1 ring-white/60">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,106,0.45),transparent_60%)] blur-sm" />
                    <MessageCircle size={18} className="relative z-10" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2C2C2C]">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-neutral-700">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Join us */}
      <div id="order" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_50%_0%,rgba(201,168,106,0.28),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <h3 className="text-3xl font-semibold text-[#2C2C2C]">Join our modern hospitality network</h3>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">Order for your next occasion or partner with us to grow your catering brand.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#order" className="rounded-xl bg-[#2C2C2C] px-6 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">Order Catering</a>
            <a id="partner" href="#partner" className="rounded-xl border border-[#E7DCC7] bg-white/70 px-6 py-3 text-[#2C2C2C] backdrop-blur">Become a Partner</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-10 border-t border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#C9A86A] to-[#E7DCC7]" />
            <span className="text-sm font-semibold tracking-wide text-[#2C2C2C]">LuxeCater</span>
          </div>
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} LuxeCater. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#2C2C2C]">
            <a href="#" aria-label="Instagram" className="opacity-80 transition hover:opacity-100"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="opacity-80 transition hover:opacity-100"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 transition hover:opacity-100"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </section>
  );
}
