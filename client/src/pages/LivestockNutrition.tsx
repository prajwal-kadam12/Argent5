import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Beaker, ShieldCheck, Zap, Heart, Microscope, Factory, Shield, Activity, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const ADVANTAGES = [
  "Significant enhancement in milk yield",
  "Improved fat and SNF content",
  "Superior skeletal health",
  "Higher conception rates",
  "Metabolic disorder prevention",
  "Chelated mineral absorption",
  "Bypass protein efficiency",
  "Balanced electrolyte delivery"
];

const DIFFERENCES = [
  { icon: Beaker, title: "Chelated Mineral Tech", desc: "Superior bioavailability and absorption" },
  { icon: Zap, title: "Custom Solutions", desc: "Formulated for regional soil deficiencies" },
  { icon: ShieldCheck, title: "Safety Assured", desc: "Strict ISO and FSSAI compliance" }
];

const products = [
  { 
    name: "MilkBoost Plus", 
    usage: "Dairy cattle yield enhancement", 
    rate: "2kg/MT", 
    packing: "25kg Bag",
    image: "/images/milk-and-dairy.jpg",
    color: "bg-blue-600"
  },
  { 
    name: "MineralMix Forte", 
    usage: "Chelated trace minerals", 
    rate: "1kg/MT", 
    packing: "25kg Bag",
    image: "/images/livestock-nutrition.jpg",
    color: "bg-emerald-600"
  },
  { 
    name: "MetaGuard Livestock", 
    usage: "Metabolic support premix", 
    rate: "1kg/MT", 
    packing: "10kg Drum",
    image: "/images/sanitization-kit.jpg",
    color: "bg-purple-600"
  },
  { 
    name: "ReproMax", 
    usage: "Reproductive health formula", 
    rate: "500g/MT", 
    packing: "5kg Bag",
    image: "/images/livestock-nutrition.jpg",
    color: "bg-amber-600"
  }
];

export default function LivestockNutrition() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <PageHeader 
        title="Livestock Nutrition" 
        description="Peak productivity and holistic health solutions for cattle and sheep."
        image="/images/livestock-nutrition.jpg"
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto flex flex-col items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="absolute -inset-4 bg-emerald-600/5 rounded-[3rem] rotate-3 blur-2xl"></div>
              <div className="relative space-y-8 w-full">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-6">
                    <Droplets className="h-4 w-4" />
                    <span>Holistic Ruminant Care</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight text-balance">
                    Maximizing Yield Through <span className="text-emerald-600">Metabolic Precision</span>
                  </h2>
                </div>
                
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 text-center lg:text-left">
                  <p className="text-balance">
                    For high-performance livestock, fortification involves enriching diets with chelated minerals and metabolic catalysts that natural fodder cannot provide.
                  </p>
                  <p className="text-balance">
                    Dairy cattle and small ruminants face metabolic challenges during peak production cycles. Our precision fortification supports body condition while maximizing yield and fertility.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-600 font-semibold text-slate-900 mx-auto lg:mx-0">
                    "Addressing regional soil deficiencies through fortified feed is the foundation of modern sustainable livestock farming."
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Award className="h-6 w-6 text-emerald-600" />
                  Key Advantages
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                  {ADVANTAGES.map((adv, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                  <Activity className="h-6 w-6 text-emerald-400" />
                  Performance Guarantee
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Precision fortification ensures consistent SNF and fat levels regardless of seasonal variations, preventing metabolic disorders and ensuring long-term herd health.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Livestock Solutions</h2>
              <p className="text-slate-500 font-medium">Advanced nutritional premixes designed for modern commercial dairy and sheep farms.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 rounded-[2rem] group">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-5 h-full">
                        <div className="lg:col-span-2 relative overflow-hidden min-h-[200px]">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className={cn("absolute top-6 left-6 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest", product.color)}>
                            Livestock Grade
                          </div>
                        </div>
                        <div className="lg:col-span-3 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-6"></div>
                            
                            <div className="space-y-4">
                              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application</span>
                                <span className="text-sm font-bold text-slate-700">{product.usage}</span>
                              </div>
                              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mixing Rate</span>
                                <span className="text-sm font-bold text-slate-700">{product.rate}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Packaging</span>
                                <span className="text-sm font-bold text-slate-700">{product.packing}</span>
                              </div>
                            </div>
                          </div>

                          <Link href="/contact">
                            <Button className="w-full h-12 rounded-xl bg-slate-900 hover:bg-emerald-600 transition-all font-bold group/btn shadow-lg shadow-slate-200">
                              Enquire Now
                              <Zap className="ml-2 h-4 w-4 transition-transform group-hover/btn:scale-125" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-32 py-24 bg-slate-50 rounded-[3rem] border border-slate-100 max-w-6xl mx-auto w-full">
            <div className="container px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">R&D Focused Nutrition</h2>
                <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {DIFFERENCES.map((diff, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                      <diff.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{diff.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}