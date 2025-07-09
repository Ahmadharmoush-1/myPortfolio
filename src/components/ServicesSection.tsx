import { Card, CardContent } from "@/components/ui/card";
import { Globe, ShoppingCart, MessageCircle, Server } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Clean, responsive design that works on all devices and brings your brand to life"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Integration",
      description: "Product pages, online order forms, WhatsApp cart, and payment processing"
    },
    {
      icon: MessageCircle,
      title: "Google Maps + Contact",
      description: "Let customers easily find you with integrated maps and WhatsApp messaging"
    },
    {
      icon: Server,
      title: "Fast Hosting & Support",
      description: "Your site stays online, secure, and loading fast with ongoing maintenance"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive web solutions designed to elevate your business online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-900 border-gray-700 hover:border-orange-500/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
