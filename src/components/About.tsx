import { Code, Stethoscope, TrendingUp, Palette } from "lucide-react";

const About = () => {
  const skills = [
    "Python",
    "JavaScript", 
    "Web App Development",
    "School Systems",
    "Automation Systems",
    "UI Design"
  ];

  const highlights = [
    {
      icon: Stethoscope,
      title: "Medical Student",
      description: "3rd-year Bachelor of Medicine and Surgery"
    },
    {
      icon: Code,
      title: "Software Developer", 
      description: "Building intelligent systems and web applications"
    },
    {
      icon: TrendingUp,
      title: "Entrepreneur",
      description: "Founder of Quant Hub - Business Solutions"
    },
    {
      icon: Palette,
      title: "UI Designer",
      description: "Creating intuitive and beautiful user experiences"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-playfair">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="animate-slide-up space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a 3rd-year student of Bachelor of Medicine and Surgery at Kampala International University 
              with a passion for building intelligent systems. I combine my medical knowledge with cutting-edge 
              technology to create innovative solutions that can transform healthcare and business operations.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              As the founder of Quant Hub, I develop automated systems and web applications 
              that help businesses streamline their operations. My goal is to bridge the gap between 
              healthcare and technology through innovative software solutions.
            </p>
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="skill-tag animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="card-premium p-6 text-center space-y-4 animate-rotate-in shimmer-effect"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;