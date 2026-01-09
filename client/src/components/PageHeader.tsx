import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
      {/* Thumbnail for quick confirmation of the background image (visible for debugging) */}
      <div className="absolute right-6 bottom-6 z-20 hidden md:block">
        <div className="w-40 h-24 rounded-xl overflow-hidden border-2 border-white shadow-lg">
          <img src={image} alt={`${title} thumbnail`} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
