import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Instagram, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const whatsappNumber = "+96178841832"; // Replace with your actual WhatsApp number
  const email = "ahmadharmoush74@gmail.com"; // Replace with your actual email
  const instagram = "@cedar.webdesign"; // Replace with your Instagram handle

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Alex! I'm interested in getting a professional website for my business. Let's discuss!");
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${instagram.replace('@', '')}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Enhanced background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Online Store Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to take your business online? Contact me anytime and let's create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-gray-700 bg-gray-800 hover:shadow-3xl transition-shadow duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12 text-lg bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12 text-lg bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <Textarea
                      placeholder="Tell me about your business and what type of website you need. What are your main goals?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32 text-lg resize-none bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-2xl border-gray-700 bg-gray-800 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <p className="text-gray-400 mb-4">Quick response, instant quotes</p>
                  <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white border-0 transition-colors">
                    Message on WhatsApp
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">+961 78 841 832</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-gray-700 bg-gray-800 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-400 mb-4">Detailed project discussions</p>
                  <p className="text-sm text-gray-300 break-all">ahmadharmoush74@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-gray-700 bg-gray-800 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                  <p className="text-gray-400 mb-4">Follow my latest work</p>
                  <Button onClick={handleInstagram} className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0 transition-colors">
                    Follow on Instagram
                  </Button>
                  <p className="text-sm text-gray-300 mt-2">{instagram}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
