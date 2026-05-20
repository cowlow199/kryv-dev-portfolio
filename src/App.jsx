import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  Cpu,
  Globe,
  LayoutGrid,
  Mail,
  Menu,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  contactLinks,
  experience,
  navItems,
  projects,
  services,
  stackItems,
  stats,
  testimonials,
} from "./data";

const motionEase = [0.22, 1, 0.36, 1];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroDrift = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const heroGlow = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";

    const timer = window.setTimeout(() => setLoaded(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-white antialiased">
      <Decorations heroDrift={heroDrift} heroGlow={heroGlow} />

      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Projects />
      <Services />
      <Experience />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}

function Decorations({ heroDrift, heroGlow }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: heroGlow }}
        className="absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,255,0,0.24)_0%,rgba(10,54,255,0.08)_35%,transparent_70%)] blur-3xl"
      />
      <motion.div
        style={{ y: heroDrift }}
        className="absolute right-[-8rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(10,54,255,0.42)_0%,transparent_70%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <div className="grain-overlay absolute inset-0 opacity-[0.22]" />
    </div>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
      className="fixed inset-0 z-[80] grid place-items-center bg-[var(--bg)]"
    >
      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          className="grid size-16 place-items-center rounded-full border border-[rgba(217,255,0,0.45)] bg-[rgba(217,255,0,0.08)]"
        >
          <Sparkles className="text-[var(--lime)]" size={22} />
        </motion.div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--lime)]">Loading Kryv</p>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Building a futuristic portfolio surface.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Navbar({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(4,10,32,0.72)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#hero" onClick={closeMenu} className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center border border-[rgba(217,255,0,0.4)] bg-[rgba(217,255,0,0.09)] text-sm font-black text-[var(--lime)]">
            K
          </span>
          <div className="leading-none">
            <p className="text-sm font-bold">Kryv</p>
            <p className="text-[11px] uppercase tracking-[0.26em] text-white/45">Frontend Web Developer</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/72 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-white/14 bg-white px-4 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[var(--lime)] md:inline-flex"
        >
          Let&apos;s build <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center border border-white/12 bg-white/5 text-white md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: motionEase }}
            className="border-t border-white/10 bg-[rgba(2,6,23,0.96)] px-5 py-4 md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} className="text-[var(--lime)]" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden border border-white/10 bg-[rgba(4,9,31,0.68)] px-5 py-8 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,255,0,0.1),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(10,54,255,0.3),transparent_26%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: motionEase }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 border border-white/12 bg-white/[0.06] px-3 py-2 text-[11px] uppercase tracking-[0.26em] text-[var(--lime)]">
              <Sparkles size={13} />
              Motion-first creative portfolio
            </div>

            <div className="mt-8 space-y-3">
              <p className="max-w-4xl text-5xl font-black uppercase leading-[0.92] sm:text-7xl lg:text-[6.6rem] xl:text-[7.5rem]">
                Building Digital Experiences
              </p>
              <p className="max-w-4xl text-5xl font-black uppercase leading-[0.92] text-[var(--lime)] sm:text-7xl lg:text-[6.6rem] xl:text-[7.5rem]">
                Creative Frontend Developer
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              I design premium interfaces for brands, startups, and ambitious products. The
              work blends brutalist structure, editorial rhythm, and futuristic motion into a
              sharp online presence that feels closer to an art-directed launch than a generic
              portfolio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-white/14 bg-white px-6 py-4 text-sm font-black text-black transition hover:bg-[var(--lime)]"
              >
                View featured work <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-[rgba(217,255,0,0.35)] bg-[rgba(217,255,0,0.09)] px-6 py-4 text-sm font-black text-white transition hover:border-[var(--lime)] hover:bg-[rgba(217,255,0,0.15)]"
              >
                Book a project
              </motion.a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="border border-white/12 bg-black/30 px-4 py-4">
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: motionEase, delay: 0.08 }}
            className="relative"
          >
            <div className="relative min-h-[580px] overflow-hidden border border-white/12 bg-[linear-gradient(180deg,rgba(10,54,255,0.4)_0%,rgba(3,7,20,0.95)_48%,rgba(0,0,0,0.95)_100%)] p-4 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(217,255,0,0.16),transparent_22%),radial-gradient(circle_at_70%_75%,rgba(255,255,255,0.1),transparent_24%)]" />
              <div className="absolute left-0 top-12 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(217,255,0,0.8),transparent)]" />
              <div className="absolute right-8 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.2),transparent)]" />

              <div className="relative flex h-full flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 border border-white/12 bg-white/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/65">
                    <Code2 size={13} />
                    Kryv portfolio OS
                  </div>
                  <div className="inline-flex items-center gap-2 border border-[rgba(217,255,0,0.28)] bg-[rgba(217,255,0,0.08)] px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--lime)]">
                    Live / premium mode
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative overflow-hidden border border-white/14 bg-[rgba(255,255,255,0.05)] p-5 shadow-[0_0_0_1px_rgba(217,255,0,0.12),0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/45">Selected signal</p>
                      <motion.span
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[var(--lime)]"
                      >
                        ↗
                      </motion.span>
                    </div>
                    <p className="max-w-sm text-3xl font-black uppercase leading-[0.95]">
                      Brutalism
                      <br />
                      meets
                      <br />
                      web3 motion
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <MiniCard label="Layered UI" value="09" />
                      <MiniCard label="Hover states" value="24" />
                    </div>
                  </motion.div>

                  <div className="grid gap-4">
                    <FloatingBadge title="Creative director" text="Shaping the visual language" />
                    <FloatingBadge title="Frontend craft" text="React / Tailwind / Motion" accent />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                    className="border border-white/12 bg-black/45 px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Services</p>
                    <p className="mt-4 text-lg font-black">Product UI</p>
                    <p className="mt-2 text-sm text-white/64">Portfolio, SaaS, launch pages.</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="border border-white/12 bg-white/[0.05] px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Motion</p>
                    <p className="mt-4 text-lg font-black">Framer tuned</p>
                    <p className="mt-2 text-sm text-white/64">Smooth, deliberate, minimal.</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                    className="border border-[rgba(217,255,0,0.28)] bg-[rgba(217,255,0,0.08)] px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--lime)]">Deliverable</p>
                    <p className="mt-4 text-lg font-black text-white">Pages-ready</p>
                    <p className="mt-2 text-sm text-white/64">Optimized for deployment.</p>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 hidden border border-white/12 bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:block"
            >
              <span className="mr-3 text-[var(--lime)]">/</span>
              Sharp, editorial, motion-led.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MiniCard({ label, value }) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
    </div>
  );
}

function FloatingBadge({ title, text, accent = false }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: accent ? 5.2 : 4.2, repeat: Infinity, ease: "easeInOut" }}
      className={`border px-4 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] ${
        accent
          ? "border-[rgba(217,255,0,0.32)] bg-[rgba(217,255,0,0.08)]"
          : "border-white/12 bg-white/[0.05]"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.28em] text-white/45">{title}</p>
      <p className="mt-3 text-lg font-black">{text}</p>
    </motion.div>
  );
}

function Marquee() {
  const line = [
    "AWARD-WINNING FRONTEND",
    "NEO BRUTALISM",
    "EDITORIAL TYPOGRAPHY",
    "WEB3 LANDING PAGES",
    "FRAMER MOTION",
    "ACID LIME ACCENTS",
  ];

  return (
    <div className="border-y border-white/10 bg-black">
      <div className="overflow-hidden">
        <motion.div
          className="flex w-[200%] items-center py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...line, ...line].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center whitespace-nowrap px-8">
              <span className="text-2xl font-black uppercase text-white sm:text-3xl">{item}</span>
              <span className="ml-8 text-[var(--lime)]">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function About() {
  return (
    <SectionShell id="about" tone="blue">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About Me"
          title="A frontend portfolio built like a premium launch page."
          description="Kryv is the visual identity. The work centers on interfaces that are fast, expressive, and product-minded. The style mixes confidence from brutalism, polish from SaaS design, and an art-directed feel from modern creative studios."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <RevealCard className="border-white/12 bg-black/35 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--lime)]">Approach</p>
            <p className="mt-4 text-2xl font-black uppercase leading-[0.95]">
              Clear systems.
              <br />
              High contrast.
              <br />
              No filler.
            </p>
          </RevealCard>
          <RevealCard className="border-white/12 bg-[rgba(255,255,255,0.05)] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Principles</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
              <p>Design for the first impression and the second glance.</p>
              <p>Use motion to clarify, not distract.</p>
              <p>Keep the layout bold enough to be remembered.</p>
            </div>
          </RevealCard>
          <RevealCard className="sm:col-span-2 border-white/12 bg-[linear-gradient(135deg,rgba(10,54,255,0.24),rgba(217,255,0,0.1))] p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Focus</p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                  Landing pages, portfolios, dashboards, and motion systems that make a product
                  feel premium from the first scroll.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 border border-white/12 bg-black/35 px-4 py-3 text-sm font-bold">
                <ArrowRight size={16} className="text-[var(--lime)]" />
                Motion-first delivery
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </SectionShell>
  );
}

function Stack() {
  return (
    <SectionShell id="stack" tone="black">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Animated stack cards with a clean production-ready composition."
        description="The stack is shown as a bento grid to keep the page active and editorial. Each item is framed as a premium pill-card rather than a flat tag."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <RevealCard
              key={item.label}
              delay={index * 0.06}
              className="group border-white/12 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-[rgba(217,255,0,0.36)] hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`grid size-12 place-items-center border ${
                    item.tone === "lime"
                      ? "border-[rgba(217,255,0,0.36)] bg-[rgba(217,255,0,0.12)] text-[var(--lime)]"
                      : item.tone === "blue"
                      ? "border-white/12 bg-[rgba(10,54,255,0.16)] text-white"
                      : "border-white/12 bg-white/8 text-white"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span className="text-xs uppercase tracking-[0.26em] text-white/40">Stack</span>
              </div>
              <p className="mt-8 text-2xl font-black">{item.label}</p>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Motion-friendly, scalable, and ready for real product work.
              </p>
            </RevealCard>
          );
        })}
      </div>
    </SectionShell>
  );
}

function Projects() {
  return (
    <SectionShell id="projects" tone="blue">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Brutalist cards, cinematic thumbnails, and bold transitions."
        description="The project area is intentionally large and asymmetrical so it reads like a studio showcase rather than a template gallery."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        {projects.map((project, index) => {
          const isLarge = index === 0;
          return (
            <RevealCard
              key={project.title}
              delay={index * 0.08}
              className={`overflow-hidden border-white/14 bg-black/40 ${isLarge ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: motionEase }}
                className="group h-full"
              >
                <div
                  className={`relative h-72 overflow-hidden border-b border-white/10 sm:h-80`}
                  style={{ background: project.accent }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_35%,rgba(0,0,0,0.4))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 border border-white/16 bg-black/35 px-3 py-2 text-xs uppercase tracking-[0.26em] text-white/70">
                    {project.category}
                  </div>
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-6 top-8 border border-white/12 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.26em] text-white backdrop-blur-xl"
                  >
                    {project.year}
                  </motion.div>
                  <div className="absolute bottom-6 left-6 max-w-md">
                    <p className="text-4xl font-black uppercase leading-[0.92] sm:text-5xl">
                      {project.title}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
                    transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-6 grid size-20 place-items-center border border-white/18 bg-black/30 text-white"
                  >
                    <ArrowUpRight size={24} className="text-[var(--lime)]" />
                  </motion.div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="max-w-3xl text-base leading-8 text-white/74">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="border border-white/12 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/60"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </RevealCard>
          );
        })}
      </div>
    </SectionShell>
  );
}

function Services() {
  return (
    <SectionShell id="services" tone="black">
      <SectionHeading
        eyebrow="Services"
        title="Productized offers for brands that need a strong digital presence."
        description="The service cards stay rough and graphic, but the structure is still organized enough for quick scanning."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <RevealCard
              key={service.title}
              delay={index * 0.07}
              className="border-white/12 bg-[rgba(255,255,255,0.05)] p-6 transition hover:-translate-y-1 hover:border-[rgba(217,255,0,0.32)]"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center border border-white/14 bg-black/40 text-[var(--lime)]">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black uppercase">{service.title}</p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/68">{service.description}</p>
                </div>
              </div>
            </RevealCard>
          );
        })}
      </div>
    </SectionShell>
  );
}

function Experience() {
  return (
    <SectionShell id="experience" tone="blue">
      <SectionHeading
        eyebrow="Experience Timeline"
        title="A simple chronology that still feels visual and premium."
        description="The timeline uses strong contrast and a vertical rhythm so the content feels deliberate rather than list-like."
      />

      <div className="mt-10 grid gap-4">
        {experience.map((item, index) => (
          <RevealCard
            key={item.title}
            delay={index * 0.08}
            className="relative overflow-hidden border-white/12 bg-black/40 p-6"
          >
            <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-[linear-gradient(180deg,transparent,rgba(217,255,0,0.8),transparent)]" />
            <div className="grid gap-5 pl-6 sm:grid-cols-[0.28fr_0.72fr] sm:pl-10">
              <p className="text-sm uppercase tracking-[0.26em] text-[var(--lime)]">{item.period}</p>
              <div>
                <p className="text-2xl font-black uppercase">{item.title}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/45">{item.org}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">{item.note}</p>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </SectionShell>
  );
}

function Testimonials() {
  return (
    <SectionShell id="testimonials" tone="black">
      <SectionHeading
        eyebrow="Testimonials"
        title="Compact quotes with editorial balance."
        description="The testimonial cards are intentionally restrained so the typography and contrast do the heavy lifting."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <RevealCard
            key={item.name}
            delay={index * 0.07}
            className="border-white/12 bg-[rgba(255,255,255,0.05)] p-6"
          >
            <p className="text-[var(--lime)]">
              <Sparkles size={18} />
            </p>
            <p className="mt-6 text-lg leading-8 text-white/82">“{item.quote}”</p>
            <div className="mt-8 border-t border-white/10 pt-4">
              <p className="text-sm font-black uppercase">{item.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/42">{item.role}</p>
            </div>
          </RevealCard>
        ))}
      </div>
    </SectionShell>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: motionEase }}
        className="relative overflow-hidden border border-white/12 bg-[linear-gradient(135deg,#0A36FF_0%,#04103f_55%,#000_100%)] px-6 py-10 sm:px-10 sm:py-12 lg:px-12"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        <div className="absolute right-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(217,255,0,0.25)_0%,transparent_70%)] blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--lime)]">Contact CTA</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.92] sm:text-7xl lg:text-[6rem]">
              Let&apos;s make the next launch feel expensive.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78">
              If you need a portfolio, landing page, or frontend system with a sharper point of
              view, Kryv is ready to build it.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href={link.href}
                    className="inline-flex flex-1 items-center justify-center gap-2 border border-white/12 bg-white px-5 py-4 text-sm font-black text-black transition hover:bg-[var(--lime)]"
                  >
                    <Icon size={16} />
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
            <div className="border border-white/12 bg-black/35 px-5 py-4 text-sm text-white/72">
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">Response style</p>
              <p className="mt-2">
                Direct, production-focused, and scoped for clean handoff.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-bold text-white">Kryv</p>
        <p>Premium futuristic frontend portfolio</p>
      </div>
    </footer>
  );
}

function SectionShell({ id, tone, children }) {
  const bgClass =
    tone === "black"
      ? "bg-black/80"
      : "bg-[linear-gradient(180deg,rgba(4,11,33,0.92),rgba(4,8,22,0.92))]";

  return (
    <section id={id} className={`${bgClass} border-t border-white/10`}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">{children}</div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--lime)]">{eyebrow}</p>
      <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.96] sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function RevealCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.72, ease: motionEase, delay }}
      className={`rounded-[1.25rem] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function _IconFallback() {
  return null;
}

export default App;
