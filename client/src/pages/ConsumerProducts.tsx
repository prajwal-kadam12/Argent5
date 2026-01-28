import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Shield } from "lucide-react";
import { Link } from "wouter";

export default function ConsumerProducts() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Unsplash: Water glass or hygiene */}
      <PageHeader 
        title="Consumer Products" 
        description="Ensuring safety and hygiene in every home with advanced water purification and sanitation solutions."
        image="/images/poultry-nutrition.avif"
      />

      <section className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Safe Water, Safe Lives</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              With 70% of households facing contaminated water issues, our mission is to provide affordable and effective purification solutions that protect families from water-borne diseases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-blue-50 p-8 rounded-2xl flex gap-6 items-start">
              <div className="bg-white p-3 rounded-full shadow-md text-blue-600">
                <Droplets className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Water Purification</h3>
                <p className="text-slate-600">
                  Chlorine tablets and liquid solutions that effectively eliminate bacteria and viruses from drinking water.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl flex gap-6 items-start">
              <div className="bg-white p-3 rounded-full shadow-md text-blue-600">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hygiene & Sanitation</h3>
                <p className="text-slate-600">
                  Disinfectants and surface cleaners designed for hospitals, homes, and public spaces.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Product Range</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-slate-100 relative">
                  {/* Placeholder for Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <span className="font-bold text-lg">Pack Shot {i}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">Water Care</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">PureDrop Tablets {i}</h3>
                  <p className="text-slate-500 text-sm mb-4">
                    Effervescent water purification tablets for safe drinking water anywhere.
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 py-24 bg-slate-50 rounded-[3rem] border border-slate-100 max-w-6xl mx-auto w-full">
            <div className="container px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Quality & Reliability</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                <div className="group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Pure Safety</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Certified water purification solutions for clinical and domestic use.</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Proven Hygiene</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">99.9% effectiveness against water-borne pathogens and bacteria.</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Global Standards</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Compliant with WHO and international health safety regulations.</p>
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
