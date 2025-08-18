import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/photos/portfolio.jpg')" }}
/>

      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      
      {/* Content */}
       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="heading-xl mb-6 animate-slide-in-up">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
              Ahmad Harmoush
            </span>
          </h1>
          <h2 className="heading-md mb-8 text-muted-foreground animate-slide-in-up animate-delay-200">
            Full-Stack Developer
          </h2>
          <p className="body-lg mb-12 max-w-2xl mx-auto animate-fade-in animate-delay-400">
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Passionate about creating solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in animate-delay-600">
            <Button 
              className="btn-hero btn-animated hover-lift"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              className="btn-ghost btn-animated hover-lift"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          
          {/* Social Links */}
            <div className="flex justify-center gap-6 mb-16 animate-fade-in animate-delay-300">
            <a 
              href="https://github.com/Ahmadharmoush-1/" 
              target="_blank" 
              rel="noopener noreferrer"
               className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale hover-glow"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmad-harmoush-029806264/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale hover-glow animate-delay-100"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ahmadharmoush74@gmail.com"
               className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale hover-glow animate-delay-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('#about')}
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle hover-scale transition-all duration-300"
        >
          <ChevronDown size={24} className="text-muted-foreground hover:text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;