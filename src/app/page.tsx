"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const scenes = [
  {
    eyebrow: "About LIKHA",
    title: "A cinematic marketplace for measurable influence.",
    body: "LIKHA brings brands and creators into one premium campaign ecosystem, built around trust, taste, and performance.",
  },
  {
    eyebrow: "For Brands",
    title: "Launch campaigns that feel authored, not advertised.",
    body: "Discover aligned creators, shape the brief, track every signal, and turn cultural relevance into measurable growth.",
  },
  {
    eyebrow: "For Creators",
    title: "A stage for creators who move audiences.",
    body: "Find premium partnerships, protect your voice, and collaborate with brands that value craft as much as conversion.",
  },
];

const steps = ["Create the brief", "Match with creators", "Ship the story", "Measure the momentum"];
const benefits = ["Curated creator discovery", "Performance-led campaign rooms", "Premium brand storytelling", "Transparent collaboration flow"];
const campaigns = ["Ember Supply", "Northline Rituals", "Atelier Mora"];

function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yFog = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 1.12]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050403]">
      <motion.div style={{ scale }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_86%,rgba(236,133,45,0.42),transparent_28%),radial-gradient(circle_at_70%_30%,rgba(177,117,57,0.18),transparent_28%),linear-gradient(180deg,#070707_0%,#12100e_48%,#050403_100%)]" />
      <motion.div style={{ y: yMountains }} className="absolute inset-x-[-10%] bottom-[-8vh] h-[58vh] bg-[linear-gradient(145deg,transparent_0_28%,rgba(13,12,11,0.96)_28%_44%,transparent_44%),linear-gradient(35deg,transparent_0_33%,rgba(24,22,20,0.92)_33%_58%,transparent_58%),linear-gradient(155deg,transparent_0_46%,rgba(7,7,7,1)_46%_75%,transparent_75%)] opacity-95" />
      <motion.div style={{ y: yFog }} className="mist-layer absolute inset-x-[-25%] top-[18vh] h-[46vh] opacity-60" />
      <div className="particle-field absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55),transparent_35%,rgba(0,0,0,0.5)),radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.42)_72%)]" />
    </div>
  );
}

function Scene({ eyebrow, title, body, reverse = false }: (typeof scenes)[number] & { reverse?: boolean }) {
  return (
    <section className="scene-grid mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:py-36">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-18%" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className={reverse ? "lg:order-2" : ""}>
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.52em] text-amber-200/70">{eyebrow}</p>
        <h2 className="font-editorial text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.86] tracking-[-0.06em] text-white">{title}</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(239,161,74,0.34),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.12),transparent_45%)]" />
        <motion.div animate={{ y: [-18, 18, -18], rotate: [-2, 2, -2] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-2xl" />
        <div className="relative flex h-full min-h-[360px] flex-col justify-end">
          <p className="max-w-md text-xl leading-8 text-stone-200/78">{body}</p>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-stone-50">
      <CinematicBackground />
      <Navbar />

      <section id="hero" className="relative flex min-h-screen items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:items-center lg:pb-0">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-5 text-[11px] font-semibold uppercase tracking-[0.55em] text-amber-200/70">Creator Marketing Reimagined</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 70, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }} className="font-editorial max-w-6xl text-[clamp(5.6rem,15vw,11rem)] font-semibold leading-[0.78] tracking-[-0.075em] text-white drop-shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
            LIKHA
            <span className="mt-4 block max-w-5xl text-[clamp(3.6rem,8.7vw,8.8rem)]">Build the Future of Creator Marketing</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1 }} className="mt-9 flex max-w-3xl flex-col gap-7 lg:ml-auto lg:mt-12">
            <p className="text-lg leading-8 text-stone-200/78 sm:text-xl">A premium marketplace where brands and creators collaborate through performance-driven campaigns.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#about" className="group rounded-full bg-amber-200 px-7 py-4 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_0_40px_rgba(251,191,36,0.18)] transition duration-500 hover:scale-[1.03] hover:bg-white">Explore Platform</a>
              <a href="#creators" className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-xl transition duration-500 hover:scale-[1.03] hover:border-amber-200/45 hover:bg-white/12">Become a Creator</a>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="about"><Scene {...scenes[0]} /></div>
      <section id="how" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40"><motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-editorial max-w-4xl text-[clamp(3.4rem,9vw,8rem)] leading-[0.86] tracking-[-0.06em]">How it moves.</motion.h2><div className="mt-16 grid gap-4 md:grid-cols-4">{steps.map((step, i)=><motion.div key={step} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12,duration:.8}} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"><span className="text-amber-200/60">0{i+1}</span><p className="mt-16 text-2xl font-medium text-white">{step}</p></motion.div>)}</div></section>
      <div id="brands"><Scene {...scenes[1]} reverse /></div>
      <div id="creators"><Scene {...scenes[2]} /></div>
      <section id="campaigns" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40"><p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.52em] text-amber-200/70">Featured Campaigns</p>{campaigns.map((item)=><motion.div key={item} initial={{opacity:.35}} whileInView={{opacity:1}} viewport={{once:false, amount:.7}} className="border-t border-white/10 py-9 last:border-b"><h3 className="font-editorial text-[clamp(3rem,8vw,7rem)] leading-none tracking-[-0.06em] text-white transition hover:translate-x-3 hover:text-amber-100">{item}</h3></motion.div>)}</section>
      <section id="benefits" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><h2 className="font-editorial text-[clamp(3.5rem,8vw,7rem)] leading-[.86] tracking-[-.06em]">Built for resonance.</h2><div className="grid gap-4 sm:grid-cols-2">{benefits.map((benefit)=><div key={benefit} className="rounded-[1.5rem] bg-white/[0.045] p-7 text-xl text-stone-100 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">{benefit}</div>)}</div></div></section>
      <section id="contact" className="flex min-h-[80vh] items-center px-5 py-28 text-center sm:px-8"><motion.div initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="mx-auto max-w-5xl"><p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.52em] text-amber-200/70">Final Call</p><h2 className="font-editorial text-[clamp(4rem,11vw,10rem)] leading-[.8] tracking-[-.075em]">Create what the market remembers.</h2><a href="mailto:hello@likha.studio" className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-black transition hover:scale-105 hover:bg-amber-100">Start a Campaign</a></motion.div></section>
      <Footer />
    </main>
  );
}
