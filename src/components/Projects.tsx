import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import schoolManagementImage from "@/assets/school-management.jpg";
import portfolioWebsitesImage from "@/assets/portfolio-websites.jpg";
import tradingRobotsImage from "@/assets/trading-robots.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "School Management System",
      description: "A comprehensive web application for managing student records, grades, attendance, and administrative tasks. Features include automated report generation, parent-teacher communication, and real-time analytics.",
      image: schoolManagementImage,
      techStack: ["Python", "Django", "PostgreSQL", "React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Portfolio Websites",
      description: "Professional portfolio websites for businesses and individuals. Responsive designs with modern UI/UX, SEO optimization, and content management systems tailored to client needs.",
      image: portfolioWebsitesImage,
      techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Business Automation Systems",
      description: "Advanced automation systems for business operations using intelligent algorithms and data analysis. Features process optimization, real-time monitoring, and customizable workflow management for enhanced productivity.",
      image: tradingRobotsImage,
      techStack: ["Python", "TensorFlow", "Pandas", "API Integration", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            system design, and innovative problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-professional overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  
                  <Button 
                    variant="professional" 
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;