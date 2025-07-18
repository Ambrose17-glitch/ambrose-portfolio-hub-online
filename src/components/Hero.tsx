import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/256708685310", "_blank");
  };

  const handleHireMe = () => {
    // Scroll to contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hi, I'm{" "}
                <span className="text-gradient">Ambrose Ssekyanzi</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                3rd-Year Medical Student at Kampala International University
              </p>
              <p className="text-lg md:text-xl text-primary font-semibold">
                Software Developer | Founder of Quant Hub
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about building intelligent systems that bridge healthcare and technology. 
              Creating innovative solutions while pursuing my medical degree.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="primary" 
                size="xl"
                onClick={handleHireMe}
                className="animate-slide-up"
              >
                <Download className="w-5 h-5" />
                Hire Me
              </Button>
              
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="animate-slide-up"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="animate-scale-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 primary-gradient rounded-full blur opacity-75"></div>
              <img
                src={profileImage}
                alt="Ambrose Ssekyanzi"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-[var(--shadow-strong)] border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;