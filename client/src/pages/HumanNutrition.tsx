import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Clock, Award, ChevronRight, Beaker, Heart, Microscope, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useSearch } from "wouter";
import { cn } from "@/lib/utils";

const SUBTYPES = [
  "Edible Oil",
  "Milk & Dairy",
  "Rice / FRK",
  "Flour",
  "Salt",
  "Bread, Biscuit & Bakery",
  "Breakfast Cereals"
];

const ADVANTAGES = [
  "Microencapsulation Technology for stability",
  "Controlled & assured nutrient release",
  "Seamless integration into production",
  "100% Vegetarian & Safe (SDS available)",
  "Cost-effective health impact",
  "Brand trust with Fortified Logo"
];

const DIFFERENCES = [
  { icon: Microscope, title: "Precision Science", desc: "Advanced Microencapsulation for maximum stability." },
  { icon: Lightbulb, title: "Pure Quality", desc: "100% Vegetarian, WHO-FAO & FSSAI compliant." },
  { icon: Clock, title: "Reliable Partner", desc: "Nitrogen-based shelf life & on-time delivery." }
];

const SUBTYPE_CONTENT: Record<string, { description: string, need: string, color: string, productImages: string[], heroImage: string }> = {
  "Edible Oil": {
    description: "Fortifying every drop with Vitamin A & D for a healthier nation.",
    need: "Edible oil is an ideal vehicle for fortification as it's used in every household. Fortifying with fat-soluble vitamins helps bridge nutritional gaps efficiently.",
    color: "bg-amber-500",
    productImages: [
      "/images/edible-oile.webp",
      "/images/edible-oile.webp"
    ],
    heroImage: "/images/edible-oile.webp"
  },
  "Milk & Dairy": {
    description: "Nourishing lives through vitamin-enriched dairy solutions.",
    need: "India is the world's largest milk producer. Fortifying milk with Vitamin A & D is a strategic move to address widespread deficiencies in urban and rural populations.",
    color: "bg-blue-500",
    productImages: [
      "/images/milk-and-dairy.jpg",
      "/images/milk-and-dairy.jpg"
    ],
    heroImage: "/images/milk-and-dairy.jpg"
  },
  "Rice / FRK": {
    description: "Enriching staples with essential iron and vitamins.",
    need: "Fortified Rice Kernels (FRK) provide a cost-effective way to deliver iron, folic acid, and Vitamin B12 to millions who rely on rice as their primary starch.",
    color: "bg-emerald-500",
    productImages: [
      "/images/flour.webp",
      "/images/flour.webp"
    ],
    heroImage: "/images/flour.webp"
  },
  "Flour": {
    description: "Precision premixes for nutritionally superior wheat flour.",
    need: "Wheat flour fortification helps combat anemia and neural tube defects by adding iron, folic acid, and B-vitamins during the milling process.",
    color: "bg-orange-500",
    productImages: [
      "/images/flour.webp",
      "/images/flour.webp"
    ],
    heroImage: "/images/flour.webp"
  },
  "Salt": {
    description: "Double fortification for iodine and iron sufficiency.",
    need: "Beyond iodine, double fortified salt (DFS) is a revolutionary tool to provide iron to the masses without changing dietary habits.",
    color: "bg-slate-400",
    productImages: [
      "/images/salt.jpg",
      "/images/salt.jpg"
    ],
    heroImage: "/images/salt.jpg"
  },
  "Bread, Biscuit & Bakery": {
    description: "Enhancing the nutritional value of your favorite baked goods.",
    need: "Bakery products are fast-moving consumer goods. Fortification turns these treats into nutritional assets for busy modern lifestyles.",
    color: "bg-rose-500",
    productImages: [
      "/images/flour.webp",
      "/images/flour.webp"
    ],
    heroImage: "/images/flour.webp"
  },
  "Breakfast Cereals": {
    description: "Starting the day with a complete spectrum of micronutrients.",
    need: "Cereals are the first meal for many children. Fortification ensures they get the vitamins and minerals needed for cognitive and physical growth.",
    color: "bg-purple-500",
    productImages: [
      "/images/flour.webp",
      "/images/flour.webp"
    ],
    heroImage: "/images/flour.webp"
  }
};

export default function HumanNutrition() {
  const searchParams = new URLSearchParams(useSearch());
  const subtypeFromUrl = searchParams.get("subtype");
  const [activeSubtype, setActiveSubtype] = useState(subtypeFromUrl || "Milk & Dairy");

  useEffect(() => {
    if (subtypeFromUrl && subtypeFromUrl !== activeSubtype) {
      setActiveSubtype(subtypeFromUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [subtypeFromUrl]);

  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter(p => p.name.includes(activeSubtype)) || [];
  const content = SUBTYPE_CONTENT[activeSubtype] || SUBTYPE_CONTENT["Edible Oil"];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <PageHeader
        title={`${activeSubtype} Fortification`}
        description={content.description}
        image={content.heroImage}
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              key={`need-${activeSubtype}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={cn("absolute -inset-4 rounded-[3rem] rotate-3 blur-2xl opacity-5", content.color)}></div>
              <div className="relative space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-700 text-sm font-bold mb-6">
                    <Heart className="h-4 w-4 text-rose-500" />
                    <span>Nourishing a Nation</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                    Science-Led <span className="text-blue-600">Fortification</span> for {activeSubtype}
                  </h2>
                </div>

                <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="leading-relaxed">
                    {content.need}
                  </p>
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 font-semibold text-slate-900">
                    "Since these staples are consumed by all, fortification is the most effective strategy to address micronutrient malnutrition." — FSSAI
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`advantages-${activeSubtype}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  Key Advantages
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
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                  Why Nutrifork?
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  With over 28 years of field-proven results, our fortification programs ensure maximum stability, superior bioavailability, and seamless integration without altering taste or appearance.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-32 space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Precision Product Line</h2>
              <p className="text-slate-500 font-medium italic">Advanced solutions for professional food processors.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
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
                              src={content.productImages[idx % content.productImages.length]}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={cn("absolute top-6 left-6 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest", content.color)}>
                              Premium Grade
                            </div>
                          </div>
                          <div className="lg:col-span-3 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                            <div>
                              <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>

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
                              <Button className="w-full h-12 rounded-xl bg-slate-900 hover:bg-blue-600 transition-all font-bold group/btn shadow-lg shadow-slate-200">
                                Enquire Now
                                <Zap className="ml-2 h-4 w-4 transition-transform group-hover/btn:scale-125" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <Beaker className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 font-medium">Coming soon: Specialized {activeSubtype} formulations.</p>
                </div>
              )}
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-3xl border border-blue-100 max-w-2xl mx-auto">
              <p className="text-blue-900 font-bold">
                Customized specifications? <Link href="/contact" className="underline hover:text-blue-700 transition-colors">Talk to our experts</Link> for tailored formulations.
              </p>
            </div>
          </div>

          <div className="mt-32 py-24 bg-slate-50 rounded-[3rem] border border-slate-100 max-w-6xl mx-auto w-full">
            <div className="container px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Quality & Reliability</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {DIFFERENCES.map((diff, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                      <diff.icon className="h-8 w-8 text-blue-600" />
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