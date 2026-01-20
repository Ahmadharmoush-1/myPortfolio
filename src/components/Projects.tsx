import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["All", "E-Commerce", "Corporate", "Healthcare", "Portfolio"];

const projects = [
  {
    id: 1,
    title: "Luxe Commerce",
    subtitle: "Premium E-Commerce Platform",
    description: "A sophisticated online marketplace with seamless checkout and personalized shopping experiences.",
    category: "E-Commerce",
    image: project1,
    link: "https://shopify.com",
    year: "2024",
  },
  {
    id: 2,
    title: "DataVision Pro",
    subtitle: "Enterprise Analytics Suite",
    description: "Corporate intelligence dashboard with real-time analytics and executive reporting.",
    category: "Corporate",
    image: project2,
    link: "https://tableau.com",
    year: "2024",
  },
  {
    id: 3,
    title: "Gastronome",
    subtitle: "Fine Dining Experience",
    description: "Elegant restaurant platform with table reservations and curated menu presentations.",
    category: "Portfolio",
    image: project3,
    link: "https://opentable.com",
    year: "2023",
  },
  {
    id: 4,
    title: "Prime Estates",
    subtitle: "Luxury Real Estate",
    description: "High-end property platform with immersive virtual tours and premium listings.",
    category: "Corporate",
    image: project4,
    link: "https://zillow.com",
    year: "2023",
  },
  {
    id: 5,
    title: "MedCare Plus",
    subtitle: "Healthcare Excellence",
    description: "Patient-centric medical portal with appointment scheduling and telehealth integration.",
    category: "Healthcare",
    image: project5,
    link: "https://zocdoc.com",
    year: "2024",
  },
  {
    id: 6,
    title: "Artistry Studio",
    subtitle: "Creative Agency Portfolio",
    description: "Award-winning creative showcase with immersive project presentations.",
    category: "Portfolio",
    image: project6,
    link: "https://dribbble.com",
    year: "2024",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Discover our collection of meticulously crafted digital experiences
            that have helped businesses achieve remarkable success.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                activeCategory === category
                  ? "bg-foreground text-background shadow-xl"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group luxury-card cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                opacity: 0,
                animation: `fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                animationDelay: `${index * 100}ms` 
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  {project.year}
                </div>

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-blue">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <p className="text-background/90 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of our work?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            Let's discuss your project
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
