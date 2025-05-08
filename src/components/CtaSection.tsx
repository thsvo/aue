
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#1A1F2C] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get Your Custom Server Quote
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Tailored server solutions for your business. Request a personalized quote today.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-[#8B0000] hover:bg-[#7B0000] text-white"
          onClick={scrollToContact}
        >
          Get Custom Quote
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
