import { motion } from 'framer-motion';
import { Users, Briefcase, ChefHat } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'Individuals',
    headline: 'Home celebrations with fine detail.',
    desc: 'Warm lighting, refined table décor, and curated trays — effortlessly booked.',
    accent: 'from-[#E7DCC7] to-white',
  },
  {
    icon: Briefcase,
    title: 'Corporate',
    headline: 'Conference‑ready, on‑brand service.',
    desc: 'Sleek stands, punctual delivery, and polished presentation for every meeting.',
    accent: 'from-[#C9A86A] to-[#F5F5F5]',
  },
  {
    icon: ChefHat,
    title: 'Caterers',
    headline: 'A smart kitchen command center.',
    desc: 'Digital orders, live tracking, and menu management — all in one place.',
    accent: 'from-white to-[#E7DCC7]',
  },
];

export default function UserStories() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-[#2C2C2C] sm:text-4xl">A 3D World for Every Role</h2>
        <p className="mt-3 text-neutral-600">Isometric scenes that portray how each user thrives in the ecosystem.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur"
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} opacity-60 blur-2xl`} />
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-white to-[#F5F5F5] p-3 text-[#2C2C2C] ring-1 ring-white/60">
                <c.icon size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-[#2C2C2C]">{c.title}</h3>
                <p className="mt-1 text-lg font-medium text-[#2C2C2C]">{c.headline}</p>
                <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
              </div>
            </div>

            {/* Faux isometric mini-scene */}
            <div className="mt-6 h-44 rounded-2xl bg-gradient-to-br from-white/70 to-[#F5F5F5]/60 p-3 ring-1 ring-white/60">
              <div className="h-full w-full rounded-xl bg-[linear-gradient(120deg,rgba(201,168,106,0.18)_0%,transparent_40%),radial-gradient(circle_at_70%_30%,rgba(231,220,199,0.55),transparent_55%)] shadow-inner transition-transform duration-300 group-hover:rotate-1 group-hover:scale-[1.02]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
