import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true, threshold: 0.2 });



  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ahmadharmoush-1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmad-harmoush-029806264/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ahmadharmoush74@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={elementRef}
      className={`bg-foreground text-background py-12 transition-all duration-800 ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <button 
              onClick={scrollToTop}
              className="font-heading font-semibold text-2xl hover:text-primary transition-all duration-300 hover-scale hover-glow"
            >
              Ahmad Harmoush
            </button>
            <p className="text-background/70 mt-2">
              Full-Stack Developer
            </p>
          </div>

         <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale hover-glow"
                aria-label={social.label}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="border-t border-background/20 pt-8 w-full animate-fade-in animate-delay-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* <p className="text-background/70 text-sm flex items-center gap-1">
                Made with <Heart size={16} className="text-red-400 animate-pulse" /> by Alex Johnson
              </p> */}
              <p className="text-background/70 text-sm">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;