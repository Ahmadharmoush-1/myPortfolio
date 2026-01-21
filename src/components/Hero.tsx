import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/beirutweb-logo.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-beirut-blue-light z-10" />
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] animate-float-slow animation-delay-500" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-foreground/5 backdrop-blur-sm border border-border/50 text-sm font-medium mb-10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">Premium Web Development Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-8 animate-fade-in-up">
            We Craft{" "}
            <span className="text-gradient">Digital</span>
            <br />
            <span className="font-serif italic font-normal">Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            Beirut Web delivers world-class websites and digital solutions
            that elevate brands and drive exceptional business results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up animation-delay-300">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group btn-glow min-w-[200px]"
            >
              View Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="min-w-[200px]"
            >
              Start a Project
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 lg:mt-24 animate-fade-in-up animation-delay-400">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 opacity-60">
              {["Startup", "Enterprise", "E-Commerce", "Healthcare", "Finance"].map((client, i) => (
                <div 
                  key={client}
                  className="text-foreground/40 font-display font-semibold text-lg tracking-wide hover:text-foreground/60 transition-colors duration-300"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 lg:gap-16 max-w-2xl mx-auto mt-20 lg:mt-24 animate-fade-in-up animation-delay-500">
            {[
              { value: "20+", label: "Projects Delivered" },
              { value: "15+", label: "Happy Clients" },
              { value: "2+", label: "Years Excellence" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection("#about")}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
