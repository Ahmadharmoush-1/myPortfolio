import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, TrendingUp, Users, MapPin } from 'lucide-react';

interface Product {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  specifications: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onAddToCart }) => {
  const product = {
    name: "BREATHEX Endurance Trainer",
    price: 15.00,
    currency: "USD",
    description: "Professional-grade lung capacity trainer designed for elite athletes. Scientifically proven to increase lung capacity by up to 40% and enhance overall athletic performance.",
    features: [
      "Increases lung capacity by up to 40%",
      "Enhances athletic performance",
      "Professional grade materials",
      "Used by professional athletes",
      "Ergonomic design for comfort",
      "Easy to clean and maintain"
    ],
    specifications: [
      "Material: Medical-grade silicone and plastic",
      "Size: Adjustable fit",
      "Weight: 150g",
      "Resistance levels: 3 adjustable levels",
      "Warranty: 2 years"
    ]
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 border-gray-700 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="\public\photos\logo.png" 
              alt="BREATHEX Endurance Trainer" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-gray-400">(127 reviews)</span>
            </div>
            
            <div className="text-3xl font-bold text-red-500 mb-4">
              ${product.price} {product.currency}
            </div>
            
            <p className="text-gray-300 mb-6">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">+40% Performance</div>
                  <div className="text-sm text-gray-400">Proven Results</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Pro Grade</div>
                  <div className="text-sm text-gray-400">Elite Quality</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Specifications:</h3>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-500 text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Free Delivery - Lebanon
                </Badge>
                {/* <Badge variant="outline" className="text-gray-300 border-gray-600">2 Year Warranty</Badge> */}
              </div>
              <p className="text-sm text-gray-400">
                Free delivery across all of Lebanon • Professional support • 
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
