import {
  ArrowUpRight,
  Code2,
  GitBranch,
  Layers3,
  Mail,
  Menu,
  Moon,
  Palette,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["About", "Skills", "Projects", "Contact"];

const skills = [
  { name: "React", detail: "Component architecture", icon: Code2 },
  { name: "Tailwind CSS", detail: "Design systems", icon: Palette },
  { name: "Responsive UI", detail: "Mobile-first layouts", icon: Smartphone },
  { name: "Performance", detail: "Fast, smooth delivery", icon: Zap },
  { name: "Interaction", detail: "Micro animation", icon: Sparkles },
  { name: "Frontend Ops", detail: "Build-ready workflow", icon: Layers3 },
];

const projects = [
  {
    title: "Nova Dashboard",
    category: "SaaS Interface",
    description:
      "A focused analytics workspace with compact cards, clear hierarchy, and fast navigation for daily product teams.",
    tags: ["React", "Tailwind", "Charts"],
  },
  {
    title: "Astra Commerce",
    category: "Ecommerce UI",
    description:
      "A premium product storefront designed around sharp content sections, clean browsing, and frictionless mobile checkout.",
    tags: ["Vite", "UX", "Responsive"],
  },
  {
    title: "Linear Portfolio",
    category: "Creative Site",
    description:
      "A minimal personal brand website with polished animation, sharp typography, and memorable project presentation.",
    tags: ["Motion", "Branding", "Frontend"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 text-neutral-100 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.14),transparent_28%),radial-gradient(circle_at_78%_0%,rgba(244,114,182,0.11),transparent_24%),linear-gradient(135deg,#050505_0%,#111111_45%,#06110f_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
      </div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid size-9 place-items-center rounded-md border border-teal-300/40 bg-teal-300/10 text-sm font-bold text-teal-200">
            K
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">Kryv Dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-md px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@kryv.dev"
          className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-teal-200 md:flex"
        >
          Hire Me <ArrowUpRight size={16} />
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-md border border-white/10 text-neutral-200 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm text-neutral-200 transition hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-200">
            <Moon size={14} /> Frontend Web Developer
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Kryv Dev builds refined web experiences for modern brands.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            I craft responsive, accessible, and high-performing interfaces with clean structure, sharp visuals, and purposeful motion.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-white"
            >
              View Projects <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-float-slow">
          <div className="relative rounded-lg border border-white/10 bg-neutral-900/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="size-3 rounded-full bg-rose-400" />
              <span className="size-3 rounded-full bg-amber-300" />
              <span className="size-3 rounded-full bg-teal-300" />
            </div>
            <div className="space-y-4 font-mono text-sm">
              <CodeLine muted text="const developer = {" />
              <CodeLine indent label="brand" text="'Kryv Dev'," />
              <CodeLine indent label="role" text="'Frontend Web Developer'," />
              <CodeLine indent label="focus" text="['React', 'UX', 'Motion']," />
              <CodeLine indent label="status" text="'Available for projects'" />
              <CodeLine muted text="};" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Design", "Build", "Launch"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-center text-xs font-semibold text-neutral-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({ label, text, indent = false, muted = false }) {
  return (
    <div className={`${indent ? "pl-5" : ""} ${muted ? "text-neutral-500" : "text-neutral-200"}`}>
      {label && <span className="text-teal-300">{label}: </span>}
      <span>{text}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionLabel eyebrow="About" title="Frontend work with clarity and discipline." />
        <div className="space-y-6 text-lg leading-8 text-neutral-300">
          <p>
            Kryv Dev is a frontend-focused portfolio for building polished digital products. The approach is simple: clear user flow, precise visual systems, and implementation that is easy to maintain.
          </p>
          <p>
            Every interface is shaped around performance, accessibility, and responsive behavior from the first component to the final deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.03] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionLabel eyebrow="Skills" title="Tools and strengths for production-ready interfaces." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, detail, icon: Icon }) => (
            <div key={name} className="group rounded-lg border border-white/10 bg-neutral-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.06]">
              <Icon className="mb-5 text-teal-300" size={28} />
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 lg:px-8">
      <SectionLabel eyebrow="Projects" title="Selected work with practical polish." />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group rounded-lg border border-white/10 bg-neutral-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">{project.category}</span>
              <ArrowUpRight className="text-neutral-500 transition group-hover:text-white" size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 min-h-28 text-sm leading-7 text-neutral-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 px-3 py-1 text-xs text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-y border-white/10 bg-neutral-900/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <SectionLabel eyebrow="Contact" title="Have a web idea that needs a polished frontend?" />
        <div className="rounded-lg border border-white/10 bg-neutral-950/80 p-6">
          <p className="text-base leading-7 text-neutral-300">
            Send the project brief, timeline, or product goal. I can help turn it into a responsive interface that feels premium without becoming overcomplicated.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:hello@kryv.dev"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-neutral-950 transition hover:bg-teal-200"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://github.com/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <GitBranch size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p>Kryv Dev</p>
      <p>Frontend Web Developer</p>
    </footer>
  );
}

function SectionLabel({ eyebrow, title }) {
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-teal-300">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default App;
