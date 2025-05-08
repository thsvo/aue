
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-[600px] bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.8)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')`,
    }}>
      <div className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Enterprise Servers Engineered for Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Built for speed. Secured for trust. Ready for your growth.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-[#8B0000] hover:bg-[#7B0000] text-white"
              onClick={scrollToContact}
            >
              Request Server Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
