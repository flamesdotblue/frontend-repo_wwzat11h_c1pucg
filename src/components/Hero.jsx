import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChefHat, Truck, Users, Sparkles, PanelRight, Smartphone } from 'lucide-react';
// Spline is available. Share a scene URL to enable it instantly.
// import Spline from '@splinetool/react-spline';

const ACCENT = '#C9A86A';
const CHARCOAL = '#2C2C2C';

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-60, 60], [10, -10]);
  const rotateY = useTransform(mx, [-60, 60], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(x / 6);
    my.set(y / 6);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,#E7DCC7_0%,transparent_55%),radial-gradient(900px_500px_at_85%_15%,rgba(201,168,106,0.22)_0%,transparent_60%)]" />
      {/* Vignette + glass shimmer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F5]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:flex lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E7DCC7]/70 bg-white/60 px-3 py-1 text-sm text-neutral-700 backdrop-blur">
            <Sparkles size={16} color={ACCENT} />
            <span className="font-medium">Luxurious • Modern • Seamless</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-[var(--charcoal,#2C2C2C)] sm:text-5xl lg:text-6xl">
            Catering Reimagined — For Every Occasion.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-600">
            A digital ecosystem that connects caterers, individuals, and corporate clients in one luxurious experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#order" className="inline-flex items-center justify-center rounded-xl bg-[var(--charcoal,#2C2C2C)] px-6 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition hover:opacity-90">
              Order Now
            </a>
            <a href="#partner" className="inline-flex items-center justify-center rounded-xl border border-[#E7DCC7] bg-white/70 px-6 py-3 text-[var(--charcoal,#2C2C2C)] backdrop-blur transition hover:bg-white">
              Join as Caterer
            </a>
          </div>
        </div>

        {/* Isometric 3D board */}
        <motion.div
          onMouseMove={handleMouseMove}
          style={{ perspective: 1200 }}
          className="relative mt-14 h-[460px] flex-1 rounded-3xl bg-white/40 p-2 backdrop-blur-md ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_24px_70px_rgba(0,0,0,0.08)] lg:mt-0"
        >
          {/* Optional Spline scene */}
          {/* <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Spline scene="https://prod.spline.design/your-scene/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div> */}

          <motion.div style={{ rotateX, rotateY }} className="relative h-full w-full rounded-2xl bg-gradient-to-br from-white/85 to-[#F5F5F5]/70">
            {/* Isometric base plane */}
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_25%_30%,rgba(201,168,106,0.14),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(231,220,199,0.45),transparent_50%)]" />

            {/* Animated connection lines */}
            <div className="pointer-events-none absolute inset-0">
              <GlowLine className="left-10 top-24 w-1/3 rotate-[12deg]" />
              <GlowLine className="right-10 bottom-24 w-1/3 -rotate-[8deg]" />
              <GlowLine className="left-1/2 top-1/2 w-1/2 -translate-x-1/2 -rotate-[18deg]" />
            </div>

            {/* Role badges */}
            <motion.div initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="absolute left-10 top-10">
              <Badge icon={<Users className="text-[var(--charcoal,#2C2C2C)]" size={18} />} label="Individuals" />
            </motion.div>
            <motion.div initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="absolute right-10 top-12">
              <Badge icon={<Truck className="text-[var(--charcoal,#2C2C2C)]" size={18} />} label="Corporate" />
            </motion.div>
            <motion.div initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge icon={<ChefHat className="text-[var(--charcoal,#2C2C2C)]" size={18} />} label="Caterers" />
            </motion.div>

            {/* Floating holo-panels */}
            <Float z={60} delay={0} className="right-8 top-8">
              <HoloCard>
                <IconShell Icon={PanelRight} />
                <p className="mt-2 text-sm text-neutral-700">Live Orders</p>
              </HoloCard>
            </Float>

            <Float z={80} delay={0.2} className="left-8 bottom-9">
              <HoloCard>
                <IconShell Icon={Smartphone} />
                <p className="mt-2 text-sm text-neutral-700">On‑device Control</p>
              </HoloCard>
            </Float>

            <Float z={100} delay={0.35} className="right-1/4 bottom-10">
              <HoloCard>
                <IconShell Icon={ChefHat} />
                <p className="mt-2 text-sm text-neutral-700">Menu Studio</p>
              </HoloCard>
            </Float>
          </motion.div>
        </motion.div>
      </div>

      {/* Sub-hero about band with isometric tokens */}
      <div className="relative mx-auto max-w-7xl px-6 pb-8">
        <div className="mt-8 grid gap-6 rounded-3xl bg-white/60 p-6 backdrop-blur ring-1 ring-white/60 md:grid-cols-3">
          <IsoToken title="Individuals" desc="Book family dinners, parties, and milestones with curated menus." />
          <IsoToken title="Corporate" desc="Host refined, on-brand events — reliable, punctual, and polished." />
          <IsoToken title="Caterers" desc="Manage orders, delivery, and payouts from a single dashboard." />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#E7DCC7]/70 bg-white/70 px-3 py-1 backdrop-blur">
      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#E7DCC7]/60 to-white flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-[var(--charcoal,#2C2C2C)]">{label}</span>
    </div>
  );
}

function Float({ children, className = '', delay = 0, z = 40 }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: [0, -8, 0], opacity: 1 }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="[transform:translateZ(var(--z,0px))]" style={{ ['--z']: `${z}px` }}>
        {children}
      </div>
    </motion.div>
  );
}

function HoloCard({ children }) {
  return (
    <div className="w-[180px] rounded-2xl border border-white/70 bg-white/60 p-4 text-center shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur">
      {children}
    </div>
  );
}

function IconShell({ Icon }) {
  return (
    <div className="relative mx-auto h-12 w-12">
      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,106,0.45),transparent_60%)] blur-md" />
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-white to-[#F5F5F5] text-[var(--charcoal,#2C2C2C)] ring-1 ring-white/60">
        <Icon size={22} />
      </div>
    </div>
  );
}

function GlowLine({ className = '' }) {
  return (
    <div className={`absolute h-px bg-gradient-to-r from-transparent via-[${ACCENT}] to-transparent opacity-70 ${className}`}>
      <motion.div
        className="h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{ x: ['-20%', '120%'] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function IsoToken({ title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[conic-gradient(from_90deg,rgba(201,168,106,0.4),transparent_60%)] blur-2xl" />
      <h4 className="text-[var(--charcoal,#2C2C2C)] font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}
