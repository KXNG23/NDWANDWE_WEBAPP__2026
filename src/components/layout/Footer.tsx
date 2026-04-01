import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://lh3.googleusercontent.com/d/1EVfCt7yLEnHxNX2yxAy4TQ9T7XIUY6bf";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:col-span-4 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="h-20 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in mining engineering and project management excellence across South Africa.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-gray-300 hover:text-[#76b07d] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#76b07d] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#76b07d] transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#76b07d] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <MapPin className="w-5 h-5 text-[#76b07d] shrink-0" />
                </motion.div>
                <span className="text-gray-300 group-hover:text-[#76b07d] transition-colors">56 Hythe Avenue, Mulbarton, JHB</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Phone className="w-5 h-5 text-[#76b07d] shrink-0" />
                </motion.div>
                <span className="text-gray-300 group-hover:text-[#76b07d] transition-colors">072 456 2350</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Mail className="w-5 h-5 text-[#76b07d] shrink-0" />
                </motion.div>
                <span className="text-gray-300 group-hover:text-[#76b07d] transition-colors">pnxumalo@ndwandwe-engineering.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest projects and industry insights.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/10 border-none p-3 text-sm flex-grow focus:ring-1 focus:ring-[#76b07d] outline-none text-white" />
              <button className="bg-[#76b07d] text-white px-4 py-2 text-sm font-bold hover:bg-[#659a6b] transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} Ndwandwe Engineering & Project Management (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-[#76b07d]">Privacy Policy</a>
            <a href="#" className="hover:text-[#76b07d]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
