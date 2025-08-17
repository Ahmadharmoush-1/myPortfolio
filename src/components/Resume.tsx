import { Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const experience = [
    {
      title: 'Backend Developer',
      company: 'XpertBot Academy',
      location: 'Remote',
      period: '10/2024 – 03/2025',
      description:
        'Worked on backend development with Laravel, focusing on building and optimizing web applications using MVC architecture, Eloquent ORM, and essential Laravel features.',
      achievements: [
        'Gained experience with Laravel MVC, Eloquent ORM, routing, middleware, authentication, and Blade templating',
        'Developed and tested APIs with Postman',
        'Worked on database management and request validation',
        'Strengthened problem-solving skills through hands-on projects',
      ],
    },
    {
      title: 'Mobile Developer - Flutter',
      company: 'XpertBot Academy',
      location: 'Remote',
      period: '10/2024 – 03/2025',
      description:
        'Focused on Flutter development, building mobile applications with responsive UI/UX and API integration.',
      achievements: [
        'Developed mobile apps using Flutter’s widget-based architecture and Dart',
        'Built responsive UI/UX and managed state with Provider',
        'Integrated APIs and Firebase for authentication and database management',
        'Enhanced problem-solving and cross-platform development skills',
      ],
    },
    {
      title: 'Backend Developer - Laravel',
      company: 'Forward MENA',
      location: 'Remote',
      period: '03/2025 – 05/2025',
      description:
        'Worked on backend systems with Laravel, focusing on real-world project implementation.',
      achievements: [
        'Developed Notera, a secure note-taking app with CRUD functionality',
        'Built a Gym Schedule app for class and workout bookings',
        'Designed RESTful APIs for smooth frontend-backend communication',
        'Integrated MongoDB/PostgreSQL for efficient database management',
        'Implemented user authentication and authorization',
      ],
    },
    {
      title: 'Frontend Developer (Freelance)',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 – Present',
      description:
        'Freelance work focusing on building modern, responsive, and high-performance frontend web applications.',
      achievements: [
        'Developed responsive web applications using React, TypeScript, and Tailwind CSS',
        'Delivered high-performance, cross-browser compatible web interfaces',
        'Collaborated with clients to design intuitive and modern UI/UX',
        'Implemented reusable components and optimized performance',
      ],
    },
    {
      title: 'Operation Coordinator',
      company: 'Majid Al Futtaim',
      location: 'Beirut, Lebanon',
      period: '08/2024 – 09/2024',
      description:
        'Worked in operations, focusing on data analysis, collaboration, and problem-solving.',
      achievements: [
        'Compiled reports and analyzed operational data to support decision-making',
        'Collaborated with different teams for smooth operations',
        'Solved operational challenges with effective solutions',
        'Managed multiple tasks and deadlines in a fast-paced environment',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Beirut Arab University',
      period: '2021 - 2024',
      details: "Summa Cum Laude, Dean's List",
    },
  ];

  const skills = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Laravel', 'REST APIs'],
    Database: ['MySQL'],
    'Tools & Other': ['Git', 'Figma'],
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Resume</h2>
          <p className="body-lg mb-8">
            Download my complete resume or view my professional experience below.
          </p>
          <a
            href="/public/Ahmad-Harmoush-Resume (1).pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-hero">
              <Download size={20} className="mr-2" />
              View / Download Resume
            </Button>
          </a>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="heading-md mb-8">Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="surface-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="heading-sm mb-1">{job.title}</h4>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <span className="font-medium">{job.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar size={14} />
                    <span className="text-sm font-medium">{job.period}</span>
                  </div>
                </div>
                <p className="body-md mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="heading-md mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="surface-elevated p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="heading-sm mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.details}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground mt-2 md:mt-0">
                    <Calendar size={14} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="heading-md mb-8">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="surface-elevated p-6">
                <h4 className="heading-sm mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
