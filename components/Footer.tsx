import React from 'react';
import { HeartPulse, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white mb-4">
              <HeartPulse size={32} />
              <span className="text-2xl font-bold">VitalCare</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing compassionate, continuous, and affordable primary health care services to our community. Your health is our priority.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#appointment" className="hover:text-teal-400 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">General Outpatient</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pediatrics</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Women's Health</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Chronic Disease Mgmt</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Vaccinations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-teal-500" size={18} />
                <span>123 Wellness Blvd, Suite 100<br />Healthy City, HC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-teal-500" size={18} />
                <span>(555) 019-2834</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-teal-500" size={18} />
                <span>contact@vitalcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} VitalCare Primary Health. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;