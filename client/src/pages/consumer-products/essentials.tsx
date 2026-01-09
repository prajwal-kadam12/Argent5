import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Shield, CheckCircle2, Award, Beaker, Globe, Clock, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const ADVANTAGES = [
  "High cleaning power",
  "Gentle on surfaces",
  "Value-driven pricing",
  "Compact and convenient",
  "Safe for daily use",
  "Trusted formulations"
];

const DIFFERENCES = [
  { icon: Beaker, title: "Optimized Formulas", desc: "Perfectly balanced for everyday home use" },
  { icon: Shield, title: "Household Safety", desc: "Non-toxic and safe around children and pets" },
  { icon: Globe, title: "Responsible Packaging", desc: "Recyclable materials and reduced plastic waste" }
];

const products = [
  { 
    name: "BUBBZ Dish Soap", 
    usage: "Everyday hand dishwashing", 
    rate: "2-3 drops per sponge", 
    packing: "750ml Bottle",
    image: "/images/dish-washer.jpg",
    color: "bg-blue-600"
  },
  { 
    name: "FOMY Liquid Soap", 
    usage: "Daily hand hygiene", 
    rate: "Single pump use", 
    packing: "500ml Bottle",
    image: "/images/handwash.jpg",
    color: "bg-teal-600"
  },
  { 
    name: "Essentials Multi-Clean", 
    usage: "General surface cleaning", 
    rate: "Ready to use spray", 
    packing: "500ml Bottle",
    image: "/images/sanitization-kit.jpg",
    color: "bg-indigo-600"
  },
  { 
    name: "BUBBZ Glass Glow", 
    usage: "Window and mirror shine", 
    rate: "Ready to use spray", 
    packing: "500ml Bottle",
    image: "/images/dish-washer.jpg",
    color: "bg-cyan-600"
  }
];

export default function EssentialsKit() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHeader 
        title="Essentials Kit"
        description="The perfect selection of high-quality cleaning products for every home."
        image="/images/handwash.jpg"
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] rotate-3 blur-2xl"></div>
              <div className="relative space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
                    <Droplets className="h-4 w-4" />
                    <span>Home Staples</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                    Everyday Clean, <span className="text-blue-600">Every Day</span>
                  </h2>
                </div>
                
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
                  <p>
                    Our Essentials Kit brings professional cleaning technology into the home in an accessible and convenient way.
                  </p>
                  <p>
                    We've selected the most important products needed for a healthy household, ensuring you have the right tools for every task.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 font-semibold text-slate-900">
                    "Trusted cleaning power that's safe for your home and family."
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
                  <Award className="h-6 w-6 text-blue-600" />
                  Product Focus
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                  {ADVANTAGES.map((adv, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                  <Shield className="h-6 w-6 text-blue-400" />
                  Household Safety
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Our formulations are non-toxic and meticulously tested to be safe around children and pets while delivering professional results.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">The Essentials Range</h2>
              <p className="text-slate-500 font-medium">Reliable solutions for a sparkling home.</p>
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
                  <Card className="overflow-hidden border-none shadow-2xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 rounded-[2rem] group h-full">
                    <CardContent className="p-0 h-full">
                      <div className="grid lg:grid-cols-5 h-full">
                        <div className="lg:col-span-2 relative overflow-hidden min-h-[200px]">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className={cn("absolute top-6 left-6 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest", product.color)}>
                            Essential Grade
                          </div>
                        </div>
                        <div className="lg:col-span-3 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                            <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>
                            
                            <div className="space-y-4">
                              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Usage</span>
                                <span className="text-sm font-bold text-slate-700">{product.usage}</span>
                              </div>
                              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application</span>
                                <span className="text-sm font-bold text-slate-700">{product.rate}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Size</span>
                                <span className="text-sm font-bold text-slate-700">{product.packing}</span>
                              </div>
                            </div>
                          </div>

                          <Link href="/contact">
                            <Button className="w-full h-12 rounded-xl bg-slate-900 hover:bg-blue-600 transition-all font-bold group/btn shadow-lg shadow-slate-200">
                              Enquire Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
