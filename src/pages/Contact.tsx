import { motion } from "motion/react";
import { Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "27724562350"; // South Africa country code + number without leading 0
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-sm font-bold text-[#76b07d] uppercase tracking-[0.4em] mb-6">Contact Us</h1>
              <p className="text-5xl font-black text-gray-900 mb-10 leading-tight">
                Get in touch with our <br/> engineering experts.
              </p>
              <p className="text-gray-600 text-xl mb-12 max-w-md leading-relaxed">
                We are ready to discuss your next project and provide the technical expertise you need.
              </p>
              
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#76b07d", color: "#ffffff" }}
                    className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-xl"
                  >
                    <Phone className="w-7 h-7 text-[#76b07d] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Call Us Now</div>
                    <div className="text-2xl font-bold tracking-wider group-hover:text-[#76b07d] transition-colors">072 456 2350</div>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#25D366", color: "#ffffff" }}
                    className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-xl"
                  >
                    <MessageCircle className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">WhatsApp Us</div>
                    <div className="text-2xl font-bold tracking-wider group-hover:text-[#25D366] transition-colors">072 456 2350</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-8 group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#76b07d", color: "#ffffff" }}
                    className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-xl"
                  >
                    <Mail className="w-7 h-7 text-[#76b07d] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-bold group-hover:text-[#76b07d] transition-colors break-all">pnxumalo@ndwandwe-engineering.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-8 group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#76b07d", color: "#ffffff" }}
                    className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-xl"
                  >
                    <MapPin className="w-7 h-7 text-[#76b07d] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Our Location</div>
                    <div className="text-xl font-bold group-hover:text-[#76b07d] transition-colors">56 Hythe Avenue, Mulbarton, JHB</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-12 rounded-sm border border-gray-100 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full -z-0 translate-x-32 -translate-y-32"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-10 text-gray-900">Send us a message</h2>
                <form className="grid gap-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Full Name</label>
                      <input type="text" className="w-full bg-white border border-gray-200 p-5 rounded-sm focus:outline-none focus:border-[#76b07d] transition-colors shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email Address</label>
                      <input type="email" className="w-full bg-white border border-gray-200 p-5 rounded-sm focus:outline-none focus:border-[#76b07d] transition-colors shadow-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Subject</label>
                    <input type="text" className="w-full bg-white border border-gray-200 p-5 rounded-sm focus:outline-none focus:border-[#76b07d] transition-colors shadow-sm" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Message</label>
                    <textarea rows={6} className="w-full bg-white border border-gray-200 p-5 rounded-sm focus:outline-none focus:border-[#76b07d] transition-colors shadow-sm" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button className="w-full py-6 bg-[#1a1a1a] text-white font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-2xl shadow-gray-900/20 group flex items-center justify-center gap-4">
                    Send Inquiry
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Google Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] rounded-sm overflow-hidden shadow-2xl border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3576.967812345678!2d28.045678!3d-26.278901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f1a2b3c4d5e%3A0x1234567890abcdef!2s56%20Hythe%20Ave%2C%20Mulbarton%2C%20Johannesburg%2C%202058%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1711950000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ndwandwe Engineering Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
