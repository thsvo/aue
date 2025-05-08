import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-[#1A1F2C] py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e96c7547-ba6b-449a-a6f3-5fab9be826b9.png" 
            alt="Experts Technologies Logo" 
            className="h-12" 
          />
        </Link>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-blue-600/10 px-3 py-1 rounded-full">
              <Shield className="w-4 h-4 text-blue-500 mr-2 inline" />
              <span className="text-sm text-blue-500 font-medium">Official HP Partner</span>
            </div>
            <a href="https://experts-tec.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-400">
              Our Services
            </a>
          </div>
          <Button 
            variant="secondary" 
            className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
            onClick={scrollToContact}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
