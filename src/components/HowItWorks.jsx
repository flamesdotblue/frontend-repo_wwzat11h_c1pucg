import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse',
    desc: 'Explore verified caterers and curated menus tailored to your occasion.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Customize',
    desc: 'Set preferences, dietary needs, headcount, and schedule with ease.',
  },
  {
    icon: CreditCard,
    title: 'Book',
    desc: 'Secure payments, live updates, and on-time delivery guaranteed.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-[#1C1C1C] sm:text-4xl">How it Works</h2>
        <p className="mt-3 text-neutral-600">A simple 3‑step flow designed to be fast and delightful.</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 transform bg-gradient-to-r from-transparent via-[#E8DCC7]/50 to-transparent p-px md:block" />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/70 bg-white/50 p-6 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-white to-[#F8F8F8] p-3 text-[#1C1C1C] ring-1 ring-white/60">
                <s.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C]">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>

              {/* Floating shadow for depth */}
              <div className="pointer-events-none absolute inset-x-8 -bottom-5 h-6 rounded-full bg-gradient-to-b from-[#C6A664]/20 to-transparent blur" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
