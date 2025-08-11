import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Luxury Perfume Store Website",
      category: "World Of Perfume",
      image: "/photos/worldofperfume.png",
      description: "Elegant online store with product catalog, wishlist functionality, WhatsApp ordering, and integrated payment system",
      technologies: ["React", "E-commerce", "WhatsApp", "Mobile-Responsive"],
      achievement: "Increased online orders by 70%",
      liveUrl: "https://worldofperfume.store/?fbclid=PAZXh0bgNhZW0CMTEAAacj5x4EzfFTfMOs9vGesjOC9MPdlHknSUp7Lo6XW2-gBrKppikaOo33Rxj8GQ_aem_cvKd-uiITncQiL2B7PThig" // Replace with your actual project URL
    },
    {
      title: "Kitchen Website", 
      category: "Babe and Bloom",
      image: "/photos/babeandbloom.png",
      description: "Complete grocery platform with real-time inventory, delivery tracking, customer portal, and Google Maps integration",
      technologies: ["Next.js", "Delivery System", "Inventory", "Customer Portal"],
      achievement: "50% faster order processing",
      liveUrl: "https://babeandbloom.netlify.app/" // Replace with your actual project URL
    },
    {
      title: "Aluminum Website ",
      category: "MagicDesign Aluminum Pro",
      image: "/photos/aluminum.png", 
      description: "Sophisticated watch retailer with detailed product showcase, appointment booking system, and customer reviews",
      technologies: ["React", "Booking System", "Product Gallery", "Luxury Design"],
      achievement: "Doubled appointment bookings",
      liveUrl: "https://dashing-dragon-545a05.netlify.app/" // Replace with your actual project URL
    },{
        title: "Restaurant Website",
        category: "TheNosh",
        image: "/photos/thenosh.png",
        description: "Modern and inviting restaurant website featuring online reservations, dynamic menu display, and customer testimonials.",
        technologies: ["React", "Online Reservations", "Menu Showcase", "Responsive Design"],
        achievement: "Increased sales rate by 45%",
        liveUrl: "https://www.thenoshrealfood.com/" // Replace with your actual project URL
      },{
  title: "Padel Website Coming Soon..",
  category: "Padel Club",
  image: "/photos/padel.png",
  description: "A sleek and user-friendly website for a modern padel club, featuring court booking, schedules, and contact information to enhance player experience.",
  technologies: ["React", "Online Reservations", "Schedule Display", "Responsive Design"],
  achievement: "Increased sales rate by 45%",
  liveUrl: "https://padell.netlify.app/" // Replace with your actual project URL
},{
  title: "KSA Academy Coming Soon..",
  category: "Academy Club",
  image: "/photos/ksa.jpg",
  description: "A platform where users can register, view class schedules, and make secure online payments — all in one place..",
  technologies: ["React", "Online Reservations", "Schedule Display", "Responsive Design"],
  // achievement: "Increased sales rate by 45%",
  liveUrl: "https://ksaacademy.netlify.app/" // Replace with your actual project URL
}


  ];

  const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover successful websites I've created for businesses like yours
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-900 border-gray-700 hover:border-orange-500/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      size="sm" 
                      onClick={() => handleViewProject(project.liveUrl)}
                      className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Live <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-green-400">
                    ✅ {project.achievement}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-300 hover:border-orange-500 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button 
                  onClick={() => handleViewProject(project.liveUrl)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 font-semibold"
                >
                  View Website <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
