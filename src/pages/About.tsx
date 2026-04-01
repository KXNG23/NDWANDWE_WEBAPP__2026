import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-sm font-bold text-[#76b07d] uppercase tracking-[0.4em] mb-6">About Ndwandwe</h1>
              <p className="text-5xl font-black text-gray-900 mb-10 leading-tight">
                Excellence in Engineering <br/> & Project Management.
              </p>
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
                <p>
                  Ndwandwe Engineering & Project Management (Pty) Ltd is a premier South African firm dedicated to delivering high-impact technical solutions to the mining sector.
                </p>
                <p>
                  With a legacy of handling complex infrastructure projects, we have established ourselves as a benchmark for reliability, safety, and operational innovation.
                </p>
                <p>
                  Our commitment to sustainable mining and cutting-edge engineering ensures that every project we undertake is efficient, responsible, and future-ready.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1wNx1xHYTj6X4uS6-fxy4hIY34XZ2DN6r" 
                alt="Engineering Team" 
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#1a1a1a] p-10 text-white shadow-2xl">
                <div className="text-5xl font-black mb-2 text-[#76b07d]">10+</div>
                <div className="text-xs uppercase font-bold tracking-[0.2em]">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
