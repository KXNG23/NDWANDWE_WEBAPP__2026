import { motion } from "motion/react";
import { 
  Pickaxe, 
  Settings, 
  Drill, 
  HardHat, 
  FileText, 
  Mountain, 
  FlaskConical, 
  Leaf, 
  Waves, 
  Wind, 
  Truck,
  ShieldCheck
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Mine Planning & Design",
      description: "Strategic mine design and scheduling to optimize resource extraction and maximize operational efficiency.",
      icon: <Pickaxe className="w-8 h-8" />,
    },
    {
      title: "Feasibility Studies",
      description: "Comprehensive technical and economic assessments to determine the viability of new mining projects.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Geotechnical Engineering",
      description: "Specialized analysis of rock and soil mechanics to ensure stable excavations and safe working environments.",
      icon: <Mountain className="w-8 h-8" />,
    },
    {
      title: "Mineral Processing & Metallurgy",
      description: "Advanced solutions for ore processing, metal extraction, and refining to improve recovery rates.",
      icon: <FlaskConical className="w-8 h-8" />,
    },
    {
      title: "Environmental & Sustainability",
      description: "Implementing eco-friendly practices and ensuring compliance with environmental regulations throughout the mine life.",
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      title: "Tailings Management",
      description: "Safe and sustainable management of mine waste, including design and monitoring of tailings storage facilities.",
      icon: <Waves className="w-8 h-8" />,
    },
    {
      title: "Ventilation & Safety Systems",
      description: "Design and implementation of robust underground ventilation and emergency safety protocols.",
      icon: <Wind className="w-8 h-8" />,
    },
    {
      title: "Infrastructure & Logistics",
      description: "Planning and construction of essential mine site infrastructure and efficient supply chain management.",
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: "Project Management & EPCM",
      description: "Full-cycle project management, engineering, procurement, and construction management services.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Safety & Compliance",
      description: "Ensuring all operations meet the highest international safety standards and local regulations.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h1 className="text-sm font-bold text-[#76b07d] uppercase tracking-[0.4em] mb-6">Our Expertise</h1>
            <p className="text-5xl font-black text-gray-900 mb-8 leading-tight">Comprehensive Mining Engineering Solutions.</p>
            <div className="h-2 w-24 bg-[#76b07d] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 40px -10px rgb(0 0 0 / 0.1)"
                }}
                className="bg-white p-12 rounded-sm border border-gray-100 shadow-sm transition-all group flex flex-col sm:flex-row gap-10 cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-bl-full -z-0 translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-20 h-20 bg-gray-50 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#76b07d] group-hover:text-white transition-all duration-500 relative z-10"
                >
                  {service.icon}
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#76b07d] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
