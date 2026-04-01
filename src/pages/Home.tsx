import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, HardHat, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/d/1wNx1xHYTj6X4uS6-fxy4hIY34XZ2DN6r",
  "https://lh3.googleusercontent.com/d/1lcPD8icwfz1zgQRlB4xyMgrclbprA4VM",
  "https://lh3.googleusercontent.com/d/154Zw98U4h4pd6s2KdV2QvU66zjAjfIGW"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={HERO_IMAGES[currentImage]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#76b07d] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Mining Experts
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
                Precision <span className="text-[#76b07d]">Engineering</span> for the Mining Industry.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Ndwandwe Engineering & Project Management (Pty) Ltd provides world-class technical expertise and operational excellence in mining infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-sm hover:bg-black transition-all flex items-center gap-2 group">
                  Get a Consultation
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="px-8 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-sm hover:border-[#76b07d] hover:text-[#76b07d] transition-all">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative z-10 group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImage}
                    src={HERO_IMAGES[currentImage]} 
                    alt="Mining Excellence" 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button 
                    onClick={prevSlide}
                    className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-[#76b07d] hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-[#76b07d] hover:text-white transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${currentImage === i ? "bg-[#76b07d] w-6" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#76b07d] rounded-full -z-10 opacity-20 blur-3xl"></div>
              <div className="absolute top-1/2 -left-12 bg-white p-6 rounded-sm shadow-xl border border-gray-100 z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-green-50 rounded-full cursor-pointer"
                  >
                    <HardHat className="w-6 h-6 text-[#76b07d]" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Safety Record</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#76b07d] uppercase tracking-[0.4em] mb-6">Our Expertise</h2>
              <p className="text-5xl font-black text-gray-900 leading-tight">Engineering Solutions for a Sustainable Future.</p>
            </div>
            <Link to="/services" className="group text-[#76b07d] font-bold flex items-center gap-3 hover:gap-5 transition-all text-lg">
              Explore All Services <ChevronRight className="w-6 h-6" />
            </Link>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Mine Planning & Design", 
                desc: "Strategic mine design and scheduling to optimize resource extraction and operational efficiency.",
                icon: <HardHat className="w-10 h-10 text-[#76b07d]" />
              },
              { 
                title: "Feasibility Studies", 
                desc: "Comprehensive technical and economic assessments to determine project viability and risk profile.",
                icon: <ChevronRight className="w-10 h-10 text-[#76b07d]" />
              },
              { 
                title: "Project Management", 
                desc: "Full-cycle project management, engineering, and construction management for complex infrastructure.",
                icon: <HardHat className="w-10 h-10 text-[#76b07d]" />
              }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-0 translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="mb-8">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-[#76b07d] transition-colors">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-[#76b07d] transition-colors uppercase tracking-widest">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-[#76b07d] uppercase tracking-[0.4em] mb-6">Why Ndwandwe</h2>
              <p className="text-5xl font-black text-gray-900 mb-10 leading-tight">Partnering for Operational Excellence.</p>
              <div className="space-y-8">
                {[
                  { title: "Unmatched Expertise", desc: "Our team consists of highly skilled engineers with decades of combined experience in the mining sector." },
                  { title: "Safety First Culture", desc: "We maintain a 100% safety record by implementing rigorous risk management protocols on every project." },
                  { title: "Innovative Solutions", desc: "We leverage cutting-edge technology and sustainable practices to deliver efficient and future-proof results." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#76b07d] font-bold">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://lh3.googleusercontent.com/d/1wNx1xHYTj6X4uS6-fxy4hIY34XZ2DN6r" 
                  alt="Industrial Excellence" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#76b07d] rounded-full -z-10 opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border-8 border-green-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
