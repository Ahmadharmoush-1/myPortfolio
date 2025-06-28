import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed (e.g., image, quantity, etc.)
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    notes: ''
  });
  const { toast } = useToast();

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Phone, Address)",
        variant: "destructive"
      });
      return;
    }

    const orderDetails = cartItems.map(item => 
      `• ${item.name} - $${item.price}`
    ).join('\n');

    const message = `🏃‍♂️ *NEW ORDER - BREATHEX*

📦 *Order Details:*
${orderDetails}

💰 *Total: $${totalPrice.toFixed(2)} USD*

👤 *Customer Information:*
• Name: ${customerInfo.name}
• Email: ${customerInfo.email}
• Phone: ${customerInfo.phone}
• Address: ${customerInfo.address}
• City: ${customerInfo.city}
• Country: ${customerInfo.country}

${customerInfo.notes ? `📝 *Notes:* ${customerInfo.notes}` : ''}

Please confirm this order and provide payment details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/96178841832?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Order Sent!",
      description: "You're being redirected to WhatsApp to complete your order.",
      variant: "default"
    });

    // Clear cart and close modal
    setCartItems([]);
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      notes: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-900 border-gray-700 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Your Cart ({cartItems.length} items)
          </DialogTitle>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">Your cart is empty</p>
            <Button onClick={onClose} variant="outline" className="border-gray-600 text-white">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                  <img 
                    src="\photos\breathingtrainer.png" 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-red-500 font-bold">${item.price}</p>
                  </div>
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-white">Total:</span>
                <span className="text-red-500">${totalPrice.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Customer Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-white">City</Label>
                  <Input
                    id="city"
                    value={customerInfo.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="text-white">Address *</Label>
                <Textarea
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Enter your full address"
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-white">Country</Label>
                <Input
                  id="country"
                  value={customerInfo.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Enter your country"
                />
              </div>
              {/* <div>
                <Label htmlFor="notes" className="text-white">Special Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={customerInfo.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Any special instructions or notes"
                  rows={2}
                />
              </div> */}
            </div>

            {/* Checkout Button */}
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Complete Order via WhatsApp
            </Button>

            <p className="text-sm text-gray-400 text-center">
              You'll be redirected to WhatsApp to complete your order with our team.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;