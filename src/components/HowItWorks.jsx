import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, CheckCircle, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'Explore verified caterers and immersive menus tailored to your event.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Customize',
    desc: 'Set cuisine, dietary needs, headcount, schedule, and budget effortlessly.',
  },
  {
    icon: CheckCircle,
    title: 'Confirm',
    desc: 'Transparent pricing, secure checkout, and instant confirmations.',
  },
  {
    icon: PartyPopper,
    title: 'Celebrate',
    desc: 'Track in real time and enjoy seamless day‑of execution.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-[#2C2C2C] sm:text-4xl">How It Works</h2>
        <p className="mt-3 text-neutral-600">An elegant flow from discovery to celebration, visualized with motion.</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 transform bg-gradient-to-r from-transparent via-[#E7DCC7]/60 to-transparent p-px md:block" />
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-3xl border border-white/70 bg-white/60 p-6 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-white to-[#F5F5F5] p-3 text-[#2C2C2C] ring-1 ring-white/60">
                <s.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              {/* Floating shadow for depth */}
              <div className="pointer-events-none absolute inset-x-8 -bottom-5 h-6 rounded-full bg-gradient-to-b from-[#C9A86A]/20 to-transparent blur" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
