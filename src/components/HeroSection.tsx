import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 relative overflow-hidden">
      {/* Enhanced animated background with red-orange glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Enhanced Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Professional</span> Websites for Local Stores
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-300">
              Fast, mobile-friendly, and made to grow your business
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              I help perfume shops, food stores, supermarkets, and watch shops build modern websites that bring more customers and simplify orders.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0"
            >
              Get a Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToPortfolio}
              className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0"
            >
              See My Work
            </Button>
          </div>
        </div>
        
        {/* Right side - Enhanced Visual Element */}
        <div className="flex justify-center items-center relative">
          <div className="relative group">
            {/* Enhanced animated laptop with glow effect */}
            <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="w-full h-full bg-gray-900 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 animate-pulse"></div>
                <div className="relative z-10 p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-700 rounded w-3/4 animate-pulse delay-100"></div>
                    <div className="h-2 bg-gray-700 rounded w-1/2 animate-pulse delay-200"></div>
                  </div>
                  <Code className="w-12 h-12 text-orange-400 animate-bounce" />
                </div>
              </div>
            </div>
            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center animate-float">
              <Laptop className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-float delay-1000">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
