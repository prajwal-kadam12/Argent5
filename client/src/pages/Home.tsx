import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Beaker,
  Zap,
  BarChart3,
  Users2,
  Trophy,
  Mail,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import generated assets
import blurredLabBg from '@assets/generated_images/blurred_laboratory_background_with_scientific_equipment..png';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* 1. HERO SECTION - REDESIGNED WITH BLURRED BG AND LEFT-ALIGNED TEXT */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
        {/* Blurred Background with Services Imagery */}
        <div className="absolute inset-0 z-0">
          <img
            src={blurredLabBg}
            alt="Scientific Services"
            className="w-full h-full object-cover"
          />
          {/* Black wash with much lower opacity to make the background image clearly visible */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          {/* Subtle gradient overlay from the left to ensure text is still readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="text-left w-full"
            >
              <motion.div variants={FADE_UP} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 backdrop-blur-md">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-100 text-[9px] md:text-[10px] font-extrabold tracking-[0.2em] uppercase">Est. 1997 • Scientific Excellence</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight text-balance">
                Quality That <br /><span className="text-blue-400">Transforms</span> Life.
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-sm md:text-lg text-slate-200 mb-10 leading-relaxed font-medium opacity-90 max-w-xl text-balance">
                A legacy of 28 years in manufacturing world-class Human Nutrition, Animal Nutrition, and Consumer Products.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="rounded-full px-10 h-14 text-base bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 font-bold transition-all hover:-translate-y-1">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-10 h-14 text-base text-white border-white/30 hover:bg-white/10 backdrop-blur-md font-bold transition-all hover:-translate-y-1">
                    Watch Story <Play className="ml-2 h-4 w-4 fill-current text-blue-400" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={FADE_UP} className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white/20 bg-slate-800 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Partner" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-white/80 tracking-wide">
                  <span className="text-white text-lg">50K+</span> <br />
                  <span className="text-xs uppercase tracking-widest text-blue-400">Trusted Partners</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-600/10 to-transparent pointer-events-none" />
      </section>

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: "Speed to Market", val: "24h", desc: "Response Time" },
              { icon: BarChart3, label: "Efficiency Boost", val: "40%", desc: "Improved Yields" },
              { icon: Users2, label: "Partner Network", val: "9.8K", desc: "Global Clients" },
              { icon: Trophy, label: "Certifications", val: "10+", desc: "World Standards" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 mb-2">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold tracking-tight">{item.val}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES GRID */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Uncompromising Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Why Partner With Us?</h3>
            <p className="text-lg text-slate-500 font-medium">Innovation driven by science, delivered with absolute integrity.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Innovation",
                icon: Beaker,
                items: ["Microencapsulation Tech", "Custom Formulations", "Bioavailability Focused"]
              },
              {
                title: "Global Assurance",
                icon: ShieldCheck,
                highlight: true,
                items: ["WHO-FAO & FSSAI Compliant", "ISO 22000 Certified", "HALAL & KOSHER"]
              },
              {
                title: "Reliable Excellence",
                icon: HeartHandshake,
                items: ["Consistent Quality", "On-Time Global Delivery", "Technical Support"]
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-8 rounded-2xl border transition-all duration-300",
                  card.highlight ? "bg-white border-blue-100 shadow-xl shadow-blue-500/5" : "bg-white border-slate-100 shadow-sm"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                  card.highlight ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                )}>
                  <card.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-6 tracking-tight">{card.title}</h4>
                <ul className="space-y-4">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-semibold text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/images/poultry-nutrition.avif"
                alt="Product Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering Solutions for Global Nutritional Needs</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                We bridge the gap between scientific advancement and everyday needs, addressing deficiencies and enhancing life quality through precision manufacturing.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced microencapsulation for maximum stability",
                  "Customized solutions for unique market demands",
                  "Rigorous multi-stage quality control protocols",
                  "Sustainable sourcing and ethical production"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="rounded-full px-8 h-12 bg-slate-900 hover:bg-slate-800 font-bold transition-all hover:translate-x-1">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ANIMAL NUTRITION SECTION */}
      <section className="py-24 bg-slate-50/50" id="animal-nutrition">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Animal Nutrition</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Poultry Nutrition",
                desc: "Optimized growth and gut health for poultry.",
                href: "/animal-nutrition/poultry",
                img: "/images/poultry-nutrition.avif"
              },
              {
                title: "Livestock Nutrition",
                desc: "Peak productivity and health for cattle and sheep.",
                href: "/animal-nutrition/livestock",
                img: "/images/livestock-nutrition.jpg"
              },
              {
                title: "Aquaculture Nutrition",
                desc: "Resilient growth for fish and shrimp species.",
                href: "/animal-nutrition/aquaculture",
                img: "/images/poultry-nutrition.avif"
              }
            ].map((div, i) => (
              <Link key={i} href={div.href} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block">
                <img src={div.img} alt={div.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">{div.title}</h4>
                  <p className="text-slate-300 font-semibold mb-6 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    {div.desc}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                    View Solutions <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">Ready to Partner with a Global Leader?</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Join our network of thousands of satisfied partners and experience the difference that precision quality makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="rounded-full px-10 h-14 text-base bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-xl transition-all hover:-translate-y-1">
                    Get In Touch
                  </Button>
                </Link>
                <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white font-bold text-sm cursor-pointer hover:bg-white/10 transition-colors">
                  <Mail className="h-4 w-4 text-blue-400" />
                  sales@nutrifork.global
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
