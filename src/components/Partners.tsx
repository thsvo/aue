
import { cn } from "@/lib/utils";

const partners = [
  { name: "HP", logo: "/lovable-uploads/66e02061-2beb-4613-a342-7074c7384a66.png" },
  { name: "IBM", logo: "/lovable-uploads/8376d509-2fb2-42b2-8a5c-8bf9e0378562.png" }
];

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver the highest quality solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-2xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={cn(
                "flex items-center justify-center p-6 rounded-lg", 
                "hover:shadow-lg transition-shadow duration-300",
                "border border-gray-200"
              )}
            >
              <div className="h-24 w-48 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 font-semibold">
            Authorized HP Enterprise Partner and Official IBM Partner
          </p>
          <p className="text-base text-gray-600 mt-2">
            Certified by industry leaders for server infrastructure, storage solutions, and network implementation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
