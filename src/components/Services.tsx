import {
  Globe,
  Code2,
  Palette,
  Smartphone,
  Search,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Bespoke websites engineered with cutting-edge technologies for unparalleled performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Exquisite interfaces that captivate users and deliver exceptional, intuitive experiences.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Sophisticated applications tailored to your unique business requirements with robust architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Flawless experiences across all devices with our mobile-first development philosophy.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Strategic optimization to dominate search rankings and amplify your digital presence.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Lightning-fast loading speeds optimized for maximum user satisfaction and conversions.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Premium <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Comprehensive digital solutions crafted with precision to elevate
            your brand and accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 lg:p-10 rounded-2xl bg-card border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ 
                opacity: 0,
                animation: `fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                animationDelay: `${index * 100}ms` 
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:shadow-blue-lg transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-muted-foreground mb-6">Ready to transform your digital presence?</p>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
              className="group btn-glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
