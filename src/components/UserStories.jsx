import { motion } from 'framer-motion';
import { Users, Briefcase, ChefHat } from 'lucide-react';

const stories = [
  {
    icon: Users,
    title: 'Personal celebrations, made memorable.',
    desc: 'From birthdays to intimate dinners — curated menus, seamless bookings, and delightful service.',
    accent: 'from-[#E8DCC7] to-white',
  },
  {
    icon: Briefcase,
    title: 'Elevate your corporate events effortlessly.',
    desc: 'Board meetings, offsites, and launches — reliable partners, punctual service, and polished presentation.',
    accent: 'from-[#C6A664] to-[#F8F8F8]',
  },
  {
    icon: ChefHat,
    title: 'Empower your catering business with technology.',
    desc: 'Smart scheduling, real-time tracking, and effortless payouts to grow your brand.',
    accent: 'from-white to-[#E8DCC7]',
  },
];

export default function UserStories() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-[#1C1C1C] sm:text-4xl">Designed for Every Role</h2>
        <p className="mt-3 text-neutral-600">One connected ecosystem for individuals, corporates, and caterers.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((s, i) => (
          <motion.div
            key={i}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur"
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.accent} opacity-60 blur-2xl`} />
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-white to-[#F8F8F8] p-3 text-[#1C1C1C] ring-1 ring-white/60">
                <s.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C]">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </div>
            </div>

            {/* Tilt on hover illusion */}
            <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-white/70 to-[#F8F8F8]/60 p-3 ring-1 ring-white/50">
              <div className="h-full w-full rounded-xl bg-[linear-gradient(120deg,rgba(198,166,100,0.18)_0%,transparent_40%),radial-gradient(circle_at_70%_30%,rgba(232,220,199,0.55),transparent_50%)] shadow-inner transition-transform duration-300 group-hover:rotate-1 group-hover:scale-[1.02]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
