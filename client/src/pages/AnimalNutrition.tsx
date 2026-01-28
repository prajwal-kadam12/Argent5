import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Droplets, Activity, ChevronRight, Beaker, MessageSquare, Award } from "lucide-react";
import { useSearch, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CATEGORY_DATA = {
  poultry: {
    title: "Poultry Nutrition Solutions",
    problem: "The poultry industry faces significant challenges in maintaining gut health and immunity while optimizing feed conversion ratios.",
    whyFortification: "Feed fortification ensures every bird receives precise micronutrients required for skeletal development and peak egg quality, regardless of intake variance.",
    sections: [
      {
        title: "Gut Health & Immunity",
        solutions: [
          { name: "ULTRAMIX Poultry", specs: "Vitamins A, D3, E + B-Complex. Usage: 1kg per 50MT feed." },
          { name: "ImmunoBoost Forte", specs: "High-concentration Zinc and Selenium. Rate: 500g per 100MT." }
        ]
      },
      {
        title: "Egg Quality & Bone Strength",
        solutions: [
          { name: "NutriLayer Premium", specs: "Optimal Vitamin D3 and Biotin mix. Usage: 1kg per 20MT." }
        ]
      }
    ]
  },
  livestock: {
    title: "Livestock Nutrition Solutions",
    problem: "Cattle health directly impacts milk yield and reproduction. Mineral deficiencies lead to metabolic disorders.",
    whyFortification: "Fortified feeds provide the essential trace elements necessary for high-performance dairy cattle and healthy offspring.",
    sections: [
      {
        title: "Milk Yield & Metabolic Support",
        solutions: [
          { name: "MilkBoost Plus", specs: "High-potency minerals and vitamins. Usage: 2kg per MT." },
          { name: "MetaGuard Forte", specs: "Targeted metabolic support premix. Rate: 1kg per MT." }
        ]
      }
    ]
  },
  aquaculture: {
    title: "Aquaculture Nutrition Solutions",
    problem: "Water quality and stress management are critical in intensive aquaculture systems.",
    whyFortification: "Bioavailable minerals in fortified feed improve survival rates and growth speed in shrimp and fish farming.",
    sections: [
      {
        title: "Growth & Stress Resistance",
        solutions: [
          { name: "AquaDigestion Max", specs: "Enhanced enzyme-micronutrient blend. Rate: 1.5kg per MT." },
          { name: "StressFree Aqua", specs: "Vitamin C and Electrolyte rich. Usage: 1kg per MT." }
        ]
      }
    ]
  }
};

export default function AnimalNutrition() {
  const searchParams = new URLSearchParams(useSearch());
  const categoryId = (searchParams.get("category") as keyof typeof CATEGORY_DATA) || "poultry";
  const data = CATEGORY_DATA[categoryId];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <PageHeader 
        title={data.title}
        description="Precision micronutrient solutions for high-performance animal nutrition."
        image="/images/livestock-nutrition.jpg"
      />

      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-bold">
                <Activity className="h-4 w-4" />
                <span>The Problem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight text-balance">
                Addressing Modern Nutritional Challenges
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                {data.problem}
              </p>
              <div className="p-6 md:p-8 bg-blue-600 rounded-2xl md:rounded-3xl text-white shadow-xl shadow-blue-500/20">
                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap /> Why Fortification?
                </h3>
                <p className="text-sm md:text-base text-blue-50 opacity-90 leading-relaxed">
                  {data.whyFortification}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span>Our Solutions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8">
                Targeted Nutrition Programs
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {data.sections.map((section, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-2xl px-6 transition-all data-[state=open]:border-blue-500 data-[state=open]:bg-blue-50/30">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-xl font-bold">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 pt-4 border-t border-blue-100">
                        {section.solutions.map((sol, sIdx) => (
                          <div key={sIdx} className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                            <h4 className="font-bold text-blue-700 mb-1">{sol.name}</h4>
                            <p className="text-sm text-slate-600">{sol.specs}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Quality Section */}
          <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center">
            <Award className="h-16 w-16 text-blue-400 mx-auto mb-8" />
            <h2 className="text-4xl font-display font-bold mb-6">Uncompromising Quality</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
              All our animal nutrition products comply with WHO-FAO and FSSAI standards. We utilize nitrogen-based packaging for extended shelf life.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 h-14 font-bold">
                  Request Technical Data Sheet
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 h-14 font-bold">
                  Consult a Nutritionist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
