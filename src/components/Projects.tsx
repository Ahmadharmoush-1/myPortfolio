import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';
const Projects = () => {
  const projects = [
   {
  id: 1,
  title: 'World Of Perfume - Fragrance E-commerce',
  description: 'A complete fragrance e-commerce platform featuring product catalog, advanced filtering, and a modern shopping experience.',
  image: project2,
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://worldofperfume.store/',
  githubUrl: 'https://github.com/Ahmadharmoush-1/WorldofPerfume',
  featured: true
},
{
  id: 2,
  title: 'TheNosh - Restaurant Web App',
  description: 'A restaurant website with online menu display, table reservations, and a seamless user experience.',
  image: project1,
  technologies: ['React Native', 'TypeScript'],
  liveUrl: 'https://www.thenoshrealfood.com/',
  githubUrl: 'https://github.com/Ahmadharmoush-1/TheNosh',
  featured: true
},
{
  id: 3,
  title: 'BabeAndBloom',
  description: 'An elegant e-commerce platform for baby and beauty products, showcasing a clean design and smooth shopping experience.',
  image: project4,
  technologies: ['Vue.js', 'React Native', 'TypeScript'],
  liveUrl: 'https://babeandbloom.netlify.app/',
  githubUrl: 'https://github.com/Ahmadharmoush-1/babeandbloom',
  featured: false
},
{
  id: 4,
  title: 'MagicDesign - Aluminum Portfolio',
  description: 'A professional portfolio website for an aluminum design business, highlighting projects and services in a modern layout.',
  image: project5,
  technologies: ['Vue.js', 'React Native', 'TypeScript'],
  liveUrl: 'https://magicdesignn.netlify.app/',
  githubUrl: 'https://github.com/Ahmadharmoush-1/MagicDesign',
  featured: false
},
{
  id: 5,
  title: 'Padel',
  description: 'A padel court website featuring reservations, club details, and a modern sports design.',
  image: project6,
  technologies: ['Vue.js', 'React Native', 'TypeScript'],
  liveUrl: 'https://padell.netlify.app/',
  githubUrl: 'https://github.com/Ahmadharmoush-1/Padel',
  featured: false
}

  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">Featured Projects</h2>
          <p className="body-lg">
            Here are some of my recent projects that showcase my skills in full-stack 
            development, design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`surface-elevated overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="heading-sm mb-3">{project.title}</h3>
                <p className="body-md mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="btn-hero flex-1"
                    asChild
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="btn-ghost flex-1"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="btn-ghost"
            asChild
          >
            <a 
              href="https://github.com/Ahmadharmoush-1/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;