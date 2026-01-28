import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, ChevronDown, Bird, Dog, Fish, Activity, Zap, ShieldCheck, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SUBTYPES = [
  "Edible Oil",
  "Milk & Dairy",
  "Rice / FRK",
  "Flour",
  "Salt",
  "Bread, Biscuit & Bakery",
  "Breakfast Cereals"
];

const ANIMAL_CATEGORIES = [
  {
    id: "poultry",
    label: "Poultry Nutrition",
    icon: Bird,
    focus: [
      { label: "Gut Health", icon: Activity },
      { label: "Immunity & Stress", icon: ShieldCheck },
      { label: "Bone Strength & Egg Quality", icon: Zap },
      { label: "Feed Efficiency", icon: Activity },
      { label: "Water Sanitation", icon: Droplets }
    ],
    products: ["ULTRAMIX Poultry", "NutriLayer Premium", "AquaSan Feed"],
    description: "Advanced micronutrient solutions for optimized poultry growth and egg production."
  },
  {
    id: "livestock",
    label: "Livestock Nutrition",
    icon: Dog,
    focus: [
      { label: "Milk Yield Enhancement", icon: Droplets },
      { label: "Mineral & Bone Health", icon: Zap },
      { label: "Metabolic Support", icon: Activity },
      { label: "Electrolyte Balance", icon: Droplets }
    ],
    products: ["MilkBoost Plus", "MineralMix Forte", "MetaGuard Livestock"],
    description: "Maximizing yield and metabolic health through precision nutrition."
  },
  {
    id: "aquaculture",
    label: "Aquaculture Nutrition",
    icon: Fish,
    focus: [
      { label: "Digestive Efficiency", icon: Activity },
      { label: "Stress Resistance", icon: ShieldCheck },
      { label: "Mineral Absorption", icon: Droplets },
      { label: "Disease Prevention", icon: ShieldCheck }
    ],
    products: ["AquaDigestion Max", "StressFree Aqua", "MineralAqua Plus"],
    description: "Specialized formulas for resilient and high-growth aquatic species."
  }
];

const ANIMAL_SUBTYPES = [
  "Poultry Nutrition",
  "Livestock Nutrition",
  "Aquaculture Nutrition"
];

const CONSUMER_SUBTYPES = [
  "ULTIMATE Bundle 9 Products",
  "Essentials Kit 4 Products",
  "BUBBZ Dish & Crystal Wash",
  "FOMY Alcohol Sanitizer",
  "FOMY Foaming Handwash"
];

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Human Nutrition", href: "/human-nutrition", hasSubmenu: true, isMega: false },
  { label: "Animal Nutrition", href: "/animal-nutrition", hasSubmenu: true, isMega: false },
  { label: "Consumer Products", href: "/consumer-products", hasSubmenu: true, isMega: false },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(ANIMAL_CATEGORIES[0]);
  const [location, setLocation] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          megaRef.current && !megaRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const handleSubmenuClick = (href: string, subtype: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set("subtype", subtype);
    setLocation(`${href}?${searchParams.toString()}`);
    // close any open menus after navigation
    setActiveSubmenu(null);
    setIsOpen(false);
  };

  const isContactPage = location === "/contact";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        (scrolled || isContactPage) ? "glass-nav py-3 shadow-lg border-b border-slate-200/50 bg-white/80 backdrop-blur-md" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-4 shrink-0 pr-12">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all">
              <span className="text-white font-display font-bold text-2xl">N</span>
            </div>
            <span className={cn(
              "font-display font-bold text-2xl tracking-tight transition-colors ml-1",
              scrolled || isContactPage ? "text-slate-900" : "text-slate-900 lg:text-white"
            )}>
              NUTRIFORK
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="static lg:relative group/menu"
                onMouseEnter={() => { if(item.isMega || item.hasSubmenu) setActiveSubmenu(item.label) }}
                onMouseLeave={() => { if(item.isMega || item.hasSubmenu) setActiveSubmenu(null) }}
              >
                {item.hasSubmenu || item.isMega ? (
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
                    className={cn(
                      "flex items-center gap-1.5 text-base font-bold transition-colors hover:text-blue-500 py-2",
                      location === item.href || (location.startsWith(item.href) && item.href !== '/')
                        ? "text-blue-600"
                        : scrolled || isContactPage ? "text-slate-700" : "text-slate-900 lg:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeSubmenu === item.label && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-bold transition-colors hover:text-blue-500 py-2",
                      location === item.href
                        ? "text-blue-600"
                        : scrolled || isContactPage ? "text-slate-700" : "text-slate-900 lg:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasSubmenu && activeSubmenu === item.label && !item.isMega && (
                  <div 
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-4 overflow-hidden animate-in fade-in slide-in-from-top-2"
                  >
                    {(item.label === "Animal Nutrition" 
                      ? ANIMAL_SUBTYPES 
                      : item.label === "Consumer Products" 
                        ? CONSUMER_SUBTYPES 
                        : SUBTYPES).map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          if (item.label === "Animal Nutrition") {
                            const id = type.split(' ')[0].toLowerCase();
                            setLocation(`/animal-nutrition/${id}`);
                            setActiveSubmenu(null);
                            setIsOpen(false);
                          } else if (item.label === "Consumer Products") {
                            const id = type.split(' ')[0].toLowerCase();
                            setLocation(`/consumer-products/${id}`);
                            setActiveSubmenu(null);
                            setIsOpen(false);
                          } else {
                            handleSubmenuClick(item.href, type);
                          }
                        }}
                        className="w-full text-left px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}

                {item.isMega && activeSubmenu === item.label && (
                  <div 
                    ref={megaRef}
                    className="fixed left-0 right-0 top-[100%] bg-white border-b shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300"
                  >
                    <div className="container mx-auto px-8 py-12">
                      <div className="grid grid-cols-12 gap-12">
                        {/* Left Column: Categories */}
                        <div className="col-span-3 space-y-3 border-r pr-8">
                          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Categories</h3>
                          {ANIMAL_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/animal-nutrition/${cat.id}`}
                              onMouseEnter={() => setActiveCategory(cat)}
                              className={cn(
                                "w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left",
                                activeCategory.id === cat.id ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-600 hover:bg-slate-50"
                              )}
                            >
                              <cat.icon className={cn("h-6 w-6", activeCategory.id === cat.id ? "text-white" : "text-blue-500")} />
                              <span className="font-bold text-lg">{cat.label}</span>
                            </Link>
                          ))}
                        </div>

                        {/* Middle Column: Dynamic Focus Areas */}
                        <div className="col-span-5 space-y-8">
                          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Nutrition Focus</h3>
                          <div className="grid grid-cols-2 gap-5">
                            {activeCategory.focus.map((f, i) => (
                              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-md group/focus">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover/focus:scale-110 transition-transform">
                                  <f.icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-bold text-slate-700">{f.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Solution Preview */}
                        <div className="col-span-4 bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl">
                          <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Solution Preview</h3>
                          <p className="text-sm text-slate-300 mb-8 leading-relaxed font-medium">
                            {activeCategory.description}
                          </p>
                          <div className="space-y-4 mb-10">
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Recommended Products</h4>
                            {activeCategory.products.map((p, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm font-bold">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                {p}
                              </div>
                            ))}
                          </div>
                          <Link href={`/animal-nutrition?category=${activeCategory.id}`}>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 rounded-xl font-bold text-lg group">
                              Explore Solutions
                              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <a href="https://www.shopify.com/in?gad_source=1" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
            <Button className={cn(
              "ml-6 h-12 px-6 min-w-[170px] rounded-xl font-bold text-lg",
              scrolled || isContactPage ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
            )}>
              Shop Now
            </Button>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              (scrolled || isContactPage) ? "text-slate-900 hover:bg-slate-100" : "text-slate-900 lg:text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[70px] bg-white border-b shadow-2xl transition-all duration-500 ease-in-out origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="container px-6 py-8 space-y-6 max-h-[85vh] overflow-y-auto pb-12">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="space-y-3">
              {item.hasSubmenu || item.isMega ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 text-slate-900 text-xl font-bold border-b border-slate-100">
                    {item.label}
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {item.isMega ? (
                      ANIMAL_CATEGORIES.map((cat) => (
                        <Link 
                          key={cat.id} 
                          href={`/animal-nutrition?category=${cat.id}`}
                          className="flex items-center gap-3 py-3 px-4 rounded-xl text-slate-600 font-bold hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          <cat.icon className="h-5 w-5 text-blue-500" />
                          {cat.label}
                        </Link>
                      ))
                    ) : (
                      SUBTYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleSubmenuClick(item.href, type)}
                          className="text-left py-3 px-4 rounded-xl text-slate-600 font-bold hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          {type}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between py-4 px-2 text-xl font-bold transition-all border-b border-slate-50",
                    location === item.href ? "text-blue-600" : "text-slate-900"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-5 w-5 text-slate-300" />
                </Link>
              )}
            </div>
          ))}
            <Link href="/contact" className="lg:hidden">
              <Button className="w-full rounded-2xl h-16 text-xl font-black bg-blue-700 hover:bg-blue-800 shadow-xl shadow-blue-500/30">
                Get Started
              </Button>
            </Link>
              <a href="https://www.shopify.com/in?gad_source=1" target="_blank" rel="noopener noreferrer" className="lg:hidden block">
                <Button className="w-full rounded-2xl h-16 text-xl font-black bg-blue-600 hover:bg-blue-700 shadow-xl">
                  Shop Now
                </Button>
              </a>
        </div>
      </div>
    </nav>
  );
}
