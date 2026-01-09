import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Beaker, ShieldCheck, Zap, Heart, Microscope, Factory, Shield, Activity, Droplets, Fish } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const ADVANTAGES = [
  "High survival rates in intensive systems",
  "Improved growth and shorter cycles",
  "Enhanced disease resistance",
  "Superior feed water-stability",
  "Optimized mineral bioavailability",
  "Reduced nutrient leaching",
  "Stress management in handling",
  "Better pond water quality"
];

const DIFFERENCES = [
  { icon: Beaker, title: "Water-Stable Tech", desc: "Prevents nutrient leaching in aquatic environments" },
  { icon: Zap, title: "Stress Resistance", desc: "Specialized blends for high-density farming" },
  { icon: ShieldCheck, title: "Safe Ingredients", desc: "Contaminant-free and globally compliant" }
];

const products = [
  { 
    name: "AquaDigestion Max", 
    usage: "Digestive enzyme-mineral blend", 
    rate: "1.5kg/MT", 
    packing: "25kg Bag",
    image: "/images/poultry-nutrition.avif",
    color: "bg-cyan-600"
  },
  { 
    name: "StressFree Aqua", 
    usage: "Vitamins and electrolyte rich", 
    rate: "1kg/MT", 
    packing: "10kg Drum",
    image: "/images/poultry-nutrition.avif",
    color: "bg-blue-600"
  },
  { 
    name: "MineralAqua Plus", 
    usage: "High-bioavailability minerals", 
    rate: "2kg/MT", 
    packing: "25kg Bag",
    image: "/images/poultry-nutrition.avif",
    color: "bg-teal-600"
  },
  { 
    name: "ProbioticAqua", 
    usage: "Water quality and gut health", 
    rate: "500g/MT", 
    packing: "5kg Drum",
    image: "/images/poultry-nutrition.avif",
    color: "bg-indigo-600"
  }
];

export default function AquacultureNutrition() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <PageHeader 
        title="Aquaculture Nutrition" 
        description="Advanced nutritional systems for resilient and high-growth aquatic species."
        image="/images/poultry-nutrition.avif"
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
              <div className="absolute -inset-4 bg-cyan-600/5 rounded-[3rem] rotate-3 blur-2xl"></div>
              <div className="relative space-y-8 w-full">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-bold mb-6">
                    <Fish className="h-4 w-4" />
                    <span>Aquatic Health Systems</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight text-balance">
                    Resilient Growth Through <span className="text-cyan-600">Advanced Stability</span>
                  </h2>
                </div>
                
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 text-center lg:text-left">
                  <p className="text-balance">
                    Aquaculture fortification focuses on delivering stable micronutrients that can withstand the aquatic environment without leaching, ensuring they reach the intended species.
                  </p>
                  <p className="text-balance">
                    Intensive pond and tank systems place immense pressure on fish and shrimp health. Precision fortification provides the trace minerals and probiotics required to thrive under high-density conditions.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-cyan-600 font-semibold text-slate-900 mx-auto lg:mx-0">
                    "Water stability and bioavailability are the two pillars of our advanced aquatic nutritional solutions."
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
                  <Award className="h-6 w-6 text-cyan-600" />
                  Pond Management Success
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                  {ADVANTAGES.map((adv, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                  <Droplets className="h-6 w-6 text-cyan-400" />
                  Water Stability Tech
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Natural pond life often lacks critical trace minerals for molting and growth. Our technology ensures rapid development and high survival rates in commercial farming.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Aquatic Solutions</h2>
              <p className="text-slate-500 font-medium">Specialized formulas engineered for intensive fish and shrimp cultivation.</p>
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
                            Aqua Grade
                          </div>
                        </div>
                        <div className="lg:col-span-3 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                            <div className="w-12 h-1 bg-cyan-600 rounded-full mb-6"></div>
                            
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
                            <Button className="w-full h-12 rounded-xl bg-slate-900 hover:bg-cyan-600 transition-all font-bold group/btn shadow-lg shadow-slate-200">
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
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Waterfront Engineering</h2>
                <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {DIFFERENCES.map((diff, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                      <diff.icon className="h-8 w-8 text-cyan-600" />
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