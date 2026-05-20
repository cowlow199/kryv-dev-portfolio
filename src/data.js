import {
  Briefcase,
  Code2,
  Cpu,
  Globe,
  LayoutGrid,
  Layers3,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stackItems = [
  { label: "React", icon: Code2, tone: "lime" },
  { label: "Next.js", icon: Globe, tone: "blue" },
  { label: "Tailwind", icon: LayoutGrid, tone: "white" },
  { label: "TypeScript", icon: Layers3, tone: "blue" },
  { label: "Framer Motion", icon: Sparkles, tone: "lime" },
  { label: "Cloudflare", icon: Zap, tone: "white" },
  { label: "Node.js", icon: Cpu, tone: "blue" },
];

export const projects = [
  {
    title: "Velocity OS",
    category: "SaaS Product Design",
    year: "2026",
    summary:
      "A sleek command-center experience for product teams with dense analytics, crisp motion, and a brutalist information hierarchy.",
    metrics: ["0.9s LCP", "88% retention", "14 modules"],
    accent: "linear-gradient(135deg, #0A36FF 0%, #081b8e 45%, #020816 100%)",
  },
  {
    title: "Signal Studio",
    category: "Creative Agency Site",
    year: "2026",
    summary:
      "An editorial landing page for a digital studio combining oversized type, cinematic spacing, and premium interaction states.",
    metrics: ["2x conversion", "8 sections", "Motion-led"],
    accent: "linear-gradient(135deg, #111111 0%, #1c1c1c 42%, #D9FF00 120%)",
  },
  {
    title: "Orbit Commerce",
    category: "Web3 Commerce",
    year: "2025",
    summary:
      "A futuristic storefront that blends sharp UI cards with atmospheric gradients, magnetic interactions, and clear purchase flows.",
    metrics: ["24ms hover", "3 flows", "Mobile-first"],
    accent: "linear-gradient(135deg, #D9FF00 0%, #a2bf00 38%, #071029 100%)",
  },
];

export const services = [
  {
    title: "Product Frontend",
    icon: LayoutGrid,
    description:
      "Design systems, landing pages, dashboards, and marketing surfaces that feel precise and premium.",
  },
  {
    title: "Motion UI",
    icon: Sparkles,
    description:
      "Scroll reveals, layered transitions, and interactive details that make the experience feel alive.",
  },
  {
    title: "Performance",
    icon: Zap,
    description:
      "Lean implementation, fast builds, responsive layouts, and production-ready delivery with minimal overhead.",
  },
  {
    title: "Web Presence",
    icon: Globe,
    description:
      "Portfolio sites and launch pages for brands that want a distinctive digital identity with lasting impression.",
  },
];

export const experience = [
  {
    period: "2026 — Present",
    title: "Senior Frontend Developer",
    org: "Independent / Kryv",
    note: "Builds motion-first interfaces, design systems, and conversion-focused web experiences.",
  },
  {
    period: "2024 — 2026",
    title: "UI Engineer",
    org: "Product teams and startups",
    note: "Led product landing pages, MVP dashboards, and visual refreshes for launch cycles.",
  },
  {
    period: "2022 — 2024",
    title: "Frontend Builder",
    org: "Agency work",
    note: "Implemented responsive interfaces, component libraries, and content-rich marketing pages.",
  },
];

export const testimonials = [
  {
    quote:
      "The portfolio feels like a premium product launch, not a template. The visual rhythm is sharp and memorable.",
    name: "Alya R.",
    role: "Product Designer",
  },
  {
    quote:
      "The motion and spacing make the whole site feel expensive. It communicates taste before the copy even lands.",
    name: "Rizky T.",
    role: "Creative Director",
  },
  {
    quote:
      "Clean, futuristic, and extremely polished. The structure reads fast on mobile and still feels cinematic on desktop.",
    name: "Mika S.",
    role: "Founder",
  },
];

export const stats = [
  { label: "Launches", value: "28+" },
  { label: "Design systems", value: "12" },
  { label: "Avg build speed", value: "Fast" },
];

export const contactLinks = [
  { label: "Email", href: "mailto:hello@kryv.dev", icon: Mail },
  { label: "GitHub", href: "https://github.com/cowlow199/kryv-dev-portfolio", icon: Code2 },
];
