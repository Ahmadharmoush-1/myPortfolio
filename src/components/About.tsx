import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies like React, Node.js, and TypeScript.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful, user-centered designs that enhance the digital experience.',
      technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
      technologies: ['Performance Optimization', 'SEO', 'Analytics', 'Testing']
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects on time and exceed expectations.',
      technologies: ['Agile', 'Project Management', 'Code Review', 'Mentoring']
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">About Me</h2>
          <p className="body-lg">
            I'm a passionate developer and designer with over 2 years of experience creating 
            digital solutions that bridge the gap between design and technology. I believe in 
            building products that not only look great but also solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="surface-elevated p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon size={24} className="text-white" />
              </div>
              <h3 className="heading-sm mb-3">{skill.title}</h3>
              <p className="body-md mb-4 text-sm">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-muted rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="surface-elevated p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="heading-md mb-2">10+</h3>
                <p className="body-md">Projects Completed</p>
              </div>
              <div>
                <h3 className="heading-md mb-2">2</h3>
                <p className="body-md">Years Experience</p>
              </div>
              <div>
                <h3 className="heading-md mb-2">10+</h3>
                <p className="body-md">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;