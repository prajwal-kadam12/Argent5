import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Zap, Globe, Clock, Heart, Users, Shield, Factory, Microscope, Leaf, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stats = [
    { label: "Years of Experience", value: "28+", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Products in Portfolio", value: "50+", icon: Target, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Quality Certifications", value: "10+", icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Manufacturing Units", value: "2", icon: Factory, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  const coreValues = [
    {
      title: "Scientific Innovation",
      desc: "Our R&D team works tirelessly to develop next-generation formulas that bridge the gap between nutrition and health.",
      icon: Microscope,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Sustainability",
      desc: "Commitment to planet-friendly manufacturing and biodegradable packaging solutions for a greener future.",
      icon: Leaf,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Quality First",
      desc: "Every batch undergoes rigorous 15-point quality checks to ensure purity and effectiveness for our customers.",
      icon: ShieldCheck,
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans" ref={containerRef}>
      <Navbar />

      <PageHeader
        title="Our Story"
        description="Pioneering the intersection of health, nutrition, and hygiene since 1998. A legacy built on trust, quality, and uncompromising standards."
        image="/images/poultry-nutrition.avif"
      />

      {/* Modern Introduction */}
      <section className="py-24 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8"
            >
              <Lightbulb className="h-4 w-4" />
              <span>Innovating for Better Living</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-[1.1] text-balance">
              Redefining Nutrition & Hygiene with <span className="text-blue-600 italic">Precision Science</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] sm:aspect-video rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden group"
            >
              <img
                src="/images/poultry-nutrition.avif"
                alt="Research Laboratory"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-5xl font-black mb-2">1998</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Year Founded</div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                <p className="font-medium text-slate-900">
                  Nutrifork began with a simple yet powerful vision: to bring high-performance nutritional and hygiene solutions within reach of every consumer.
                </p>
                <p>
                  Over nearly three decades, we have evolved into a multi-disciplinary powerhouse, serving three critical verticals: Human Nutrition, Animal Nutrition, and specialized Consumer Products. Our products aren't just formulations; they are results of intense field-testing and rigorous laboratory research.
                </p>
                <p>
                  From fortifying essential staples like milk and flour for better public health to providing military-grade hygiene solutions for extreme environments, Nutrifork stands as a pillar of reliability and excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-sm text-slate-600">To empower lives through science-backed nutrition and hygiene excellence.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-600">To be the global benchmark for safety and effectiveness in health solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8", stat.bg)}>
                  <stat.icon className={cn("h-7 w-7", stat.color)} />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="py-32 bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 italic underline decoration-blue-500/30 decoration-8 underline-offset-8">Core Philosophies</h2>
            <p className="text-lg text-slate-600">
              Our principles aren't just words; they are the ingredients in every product we manufacture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 border border-transparent hover:border-slate-100"
              >
                <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-8 text-white shadow-lg", value.gradient)}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section Placeholder / Visual Break */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container px-4 relative z-10 text-center text-slate-900">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Trusted by Global Organizations</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {/* These would be logos */}
            <div className="text-2xl font-black">FSSAI</div>
            <div className="text-2xl font-black">ISO 9001</div>
            <div className="text-2xl font-black">HACCP</div>
            <div className="text-2xl font-black">GMP</div>
            <div className="text-2xl font-black">HALAL</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 flex justify-center items-center w-full">
        <div className="container px-4 flex justify-center w-full">
          <div className="relative overflow-hidden p-12 lg:p-20 bg-slate-900 rounded-[3rem] text-white text-center max-w-5xl w-full mx-auto">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-white">Ready to transform your health standards?</h2>
              <p className="text-xl text-slate-100 mb-12 max-w-2xl mx-auto font-medium opacity-90">
                Experience the precision of Nutrifork's advanced nutrition and hygiene solutions. Let's build a healthier future together.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-12 h-16 font-black text-xl shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/consumer-products">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 h-16 font-black text-xl backdrop-blur-md">
                    View Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
