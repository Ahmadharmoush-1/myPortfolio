import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Users, TrendingUp, Instagram, MessageCircle, Play, MapPin } from 'lucide-react';
import ProductModal from '@/components/ProductModal';
import CartModal from '@/components/CartModal';

const Index = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, { ...product, id: Date.now() }]);
    setIsProductModalOpen(false);
    setIsCartModalOpen(true);
  };

  const testimonials = [
    {
      name: "Michael Jordan",
      quote: "Excellence isn't a skill, it's an attitude. Train your lungs like you train your game.",
      sport: "Basketball Legend"
    },
    {
      name: "Serena Williams",
      quote: "Champions train when nobody's watching. Every breath counts.",
      sport: "Tennis Champion"
    },
    {
      name: "Usain Bolt",
      quote: "Speed is not just in your legs, it's in your lungs. Train them both.",
      sport: "Sprint Legend"
    }
  ];

  const reviews = [
    {
      name: "Ahmad Jokhadar.",
      rating: 5,
      review: "Product super raw3a , quality top , waam le2e kteer tahason men wara .",
      sport: "Athlete"
    },
    {
      name: "Joe Hakim",
      rating: 5,
      review: "Min wa2ta ma balasget estaamela wla2et kteer tahason bel stamina . Aanjad bensa7 lkel yjareba .",
      sport: "Football"
    },
    {
      name: "Omar Itani",
      rating: 5,
      review: "Quality Stop wkteer sahle lal este3mel.",
      sport: "Football"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/photos/backgroundimage.png')`
        }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 w-full z-50 p-6">
          <div className="container mx-auto flex justify-between items-center">
           <img
  src="/public/photos/logo.png"
  alt="BREATHEX Logo"
  className="h-16 w-16 rounded-full animate-fade-in"
/>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartModalOpen(true)}
                className="bg-transparent border-red-500 text-white hover:bg-red-500 hover-scale"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart ({cartItems.length})
              </Button>
              <a 
                href="https://www.instagram.com/breathex_lb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors hover-scale"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
              TRAIN YOUR LUNGS with BREATHEX
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Professional Endurance Trainer for The Lebanese Elite Athletes
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Badge className="bg-red-500 text-white text-lg px-4 py-2">
                Only $15 USD
              </Badge>
              <Badge className="bg-green-500 text-white text-lg px-4 py-2 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Free Delivery - Lebanon
              </Badge>
            </div>
            <Button 
              onClick={() => setIsProductModalOpen(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white animate-fade-in">
              SEE IT IN ACTION
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Watch how professional athletes use BREATHEX to enhance their Performance and build unstoppable endurance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="relative group">
 <div className="relative group">
  <div className="bg-white rounded-lg aspect-video overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100">
    <video
      className="w-full h-full object-cover"
      controls
      src="/videos/video1.mp4"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</div>

  {/* <div className="text-center mt-4">
    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
      <Play className="w-8 h-8 text-white ml-1" />
    </div>
    <p className="text-black font-semibold">Training Demo Video</p>
    <p className="text-gray-600 text-sm">See the proper technique</p>
  </div> */}
</div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Proper Breathing Technique</h3>
                  <p className="text-gray-300">Learn the correct way to use your BREATHEX trainer for maximum results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Progressive Training</h3>
                  <p className="text-gray-300">Start with light resistance and gradually increase as your lung capacity improves.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Track Your Progress</h3>
                  <p className="text-gray-300">Monitor your improvement and see measurable results in your athletic performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-white">
                ENDURANCE TRAINER
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Scientifically designed to increase lung capacity and enhance athletic performance. 
                Used by professional athletes worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 hover-scale">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Performance</div>
                    <div className="text-sm text-gray-400">+40% Improvement</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover-scale">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Trusted</div>
                    <div className="text-sm text-gray-400">By Pro Athletes</div>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setIsProductModalOpen(true)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 hover-scale"
              >
                View Product Details
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="\photos\breathingtrainer.png" 
                alt="Endurance Trainer Product" 
                className="w-full h-auto rounded-lg shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

    <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative">
            <img 
              src="\public\photos\background2.jpg" 
              alt="Athletic Performance" 
              className="w-full h-auto rounded-lg shadow-2xl animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-center">
                {/* <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  RUN, RISE, REPEAT
                </h2>
                <p className="text-xl md:text-2xl text-red-500 font-bold mb-6 animate-fade-in">
                  "DOMINATE THE FIELD WITH EVERY BREATH."
                </p> */}
                <Button 
                  onClick={() => setIsProductModalOpen(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold hover-scale"
                >
                  Unlock Your Potential
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in">
            REAL RESULTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-black border-gray-800 hover-scale animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{review.review}"</p>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <Badge variant="outline" className="text-red-500 border-red-500">
                      {review.sport}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-red-500">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Elevate Your Performance?
          </h2>
          <p className="text-xl mb-4 text-red-100">
            Join thousands of athletes who trust BREAT2EX
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge className="bg-white text-red-500 text-lg px-4 py-2">
              Only $15 USD
            </Badge>
            <Badge className="bg-green-600 text-white text-lg px-4 py-2 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Free Delivery Across Lebanon
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => setIsProductModalOpen(true)}
              className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-scale"
            >
              Order Now
            </Button>
            <a 
              href="https://wa.me/96178841832" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 text-lg font-semibold hover-scale"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <img 
            src="\public\photos\logo.png" 
            alt="BREATHEX Logo" 
            className="h-8 w-auto mx-auto mb-4 animate-fade-in"
          />
          <p className="text-gray-400 mb-4">
            Professional Athletic Equipment for Champions - Proudly Made in Lebanon
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/breathex_lb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors hover-scale"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/96178841832" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors hover-scale"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            © 2024 BREATHEX. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <ProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={addToCart}
      />
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default Index;
