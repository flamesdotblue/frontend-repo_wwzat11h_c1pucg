import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChefHat, Truck, Users, MapPin, Sparkles } from 'lucide-react';
// If you later provide a Spline scene URL, you can uncomment the import and component usage below.
// import Spline from '@splinetool/react-spline';

const gold = '#C6A664';

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [10, -10]);
  const rotateY = useTransform(mx, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(x / 6);
    my.set(y / 6);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with subtle gold shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_0%,#E8DCC7_0%,transparent_50%),radial-gradient(800px_500px_at_80%_20%,rgba(198,166,100,0.18)_0%,transparent_50%)]" />
      {/* Soft noise / vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F8F8]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:flex lg:items-center lg:gap-12">        
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DCC7]/60 bg-white/50 px-3 py-1 text-sm text-neutral-700 backdrop-blur">
            <Sparkles size={16} color={gold} />
            <span className="font-medium">Premium • Trustworthy • Effortless</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-[#1C1C1C] sm:text-5xl lg:text-6xl">
            Catering Made Effortless — For Every Occasion.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-600">
            Discover, book, and manage catering seamlessly — whether it’s a family event, office gathering, or full-scale corporate celebration.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#order" className="inline-flex items-center justify-center rounded-xl bg-[#1C1C1C] px-6 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition hover:opacity-90">
              Get Started
            </a>
            <a href="#partner" className="inline-flex items-center justify-center rounded-xl border border-[#E8DCC7] bg-white/60 px-6 py-3 text-[#1C1C1C] backdrop-blur transition hover:bg-white">
              Join as Caterer
            </a>
          </div>
        </div>

        {/* 3D-ish interactive visual */}
        <motion.div
          onMouseMove={handleMouseMove}
          style={{ perspective: 1200 }}
          className="relative mt-14 h-[420px] flex-1 rounded-3xl bg-white/40 p-2 backdrop-blur-md ring-1 ring-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_60px_rgba(0,0,0,0.08)] lg:mt-0"
        >
          {/* Optional Spline scene - add your URL to enable */}
          {/* <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div> */}

          <motion.div
            style={{ rotateX, rotateY }}
            className="relative h-full w-full rounded-2xl bg-gradient-to-br from-white/80 to-[#F8F8F8]/60"
          >
            {/* Map plane */}
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_30%,rgba(198,166,100,0.10),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(198,166,100,0.10),transparent_45%)]" />

            {/* Floating nodes */}
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="absolute left-10 top-10">
              <Badge icon={<Users className="text-[#1C1C1C]" size={18} />} label="Individuals" />
            </motion.div>
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="absolute right-10 top-14">
              <Badge icon={<Truck className="text-[#1C1C1C]" size={18} />} label="Corporate" />
            </motion.div>
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge icon={<ChefHat className="text-[#1C1C1C]" size={18} />} label="Caterers" />
            </motion.div>

            {/* Floating 3D cards */}
            <Float z={40} delay={0} className="right-8 top-8">
              <Card3D>
                <IconWithGlow Icon={ChefHat} />
                <p className="mt-2 text-sm text-neutral-700">Premium Menus</p>
              </Card3D>
            </Float>

            <Float z={60} delay={0.15} className="left-8 bottom-8">
              <Card3D>
                <IconWithGlow Icon={MapPin} />
                <p className="mt-2 text-sm text-neutral-700">Local & On‑site</p>
              </Card3D>
            </Float>

            <Float z={80} delay={0.3} className="right-1/4 bottom-10">
              <Card3D>
                <IconWithGlow Icon={Truck} />
                <p className="mt-2 text-sm text-neutral-700">Real‑time Tracking</p>
              </Card3D>
            </Float>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#E8DCC7]/70 bg-white/70 px-3 py-1 backdrop-blur">
      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#E8DCC7]/60 to-white flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-[#1C1C1C]">{label}</span>
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

function Card3D({ children }) {
  return (
    <div className="w-[170px] rounded-2xl border border-white/70 bg-white/60 p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
      {children}
    </div>
  );
}

function IconWithGlow({ Icon }) {
  return (
    <div className="relative mx-auto h-12 w-12">
      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(198,166,100,0.45),transparent_60%)] blur-md" />
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-white to-[#F8F8F8] text-[#1C1C1C] ring-1 ring-white/60">
        <Icon size={22} />
      </div>
    </div>
  );
}
