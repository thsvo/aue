
import { Shield, Bolt, Wrench, Clock } from "lucide-react";

const features = [
  {
    icon: Bolt,
    title: "Unmatched Speed",
    description: "Powered by the latest Intel Xeon and AMD EPYC processors for peak performance."
  },
  {
    icon: Shield,
    title: "Bulletproof Security",
    description: "End-to-end encryption, compliance-grade security, and proactive threat management."
  },
  {
    icon: Wrench,
    title: "Fully Customizable",
    description: "From startup to enterprise – tailor your server specs to fit your exact demands."
  },
  {
    icon: Clock,
    title: "Elite 24/7 Support",
    description: "Work with dedicated Experts-Tec engineers around the clock."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
