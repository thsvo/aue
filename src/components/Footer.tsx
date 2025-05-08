
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/e96c7547-ba6b-449a-a6f3-5fab9be826b9.png" 
              alt="Experts Technologies Logo" 
              className="h-16" 
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              One of the key players in modern day business models is more mobile apps, web apps, social media apps and machine apps powered by the latest hardware and intelligence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="https://experts-tec.com/" className="text-gray-400 hover:text-white transition-colors text-sm">HOME</a></li>
              <li><a href="https://experts-tec.com/portfolio/" className="text-gray-400 hover:text-white transition-colors text-sm">Our Portfolio</a></li>
              <li><a href="https://experts-tec.com/services/" className="text-gray-400 hover:text-white transition-colors text-sm">SERVICES</a></li>
              <li><a href="https://experts-tec.com/about/" className="text-gray-400 hover:text-white transition-colors text-sm">ABOUT</a></li>
              <li><a href="https://experts-tec.com/contact/" className="text-gray-400 hover:text-white transition-colors text-sm">CONTACT US</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="https://experts-tec.com/services/it-infrastructure/" className="text-gray-400 hover:text-white transition-colors text-sm">IT INFRASTRUCTURE</a></li>
              <li><a href="https://experts-tec.com/services/software-solutions/" className="text-gray-400 hover:text-white transition-colors text-sm">SOFTWARE SOLUTIONS & IOT</a></li>
              <li><a href="https://experts-tec.com/services/cyber-security/" className="text-gray-400 hover:text-white transition-colors text-sm">CYBER SECURITY</a></li>
              <li><a href="https://experts-tec.com/services/content-management/" className="text-gray-400 hover:text-white transition-colors text-sm">CONTENT MANAGEMENT</a></li>
              <li><a href="https://experts-tec.com/services/web-design/" className="text-gray-400 hover:text-white transition-colors text-sm">WEB DESIGN & DEVELOPMENT</a></li>
              <li><a href="https://experts-tec.com/services/it-support/" className="text-gray-400 hover:text-white transition-colors text-sm">IT SUPPORT/MANAGED SERVICES</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>DTEC, Dubai, UAE</span>
              </li>
              <li>
                <a href="mailto:info@experts-tec.com" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@experts-tec.com
                </a>
              </li>
              <li>
                <a href="tel:+971557343600" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +971 55 7343600
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
