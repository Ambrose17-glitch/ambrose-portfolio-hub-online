import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";
import profileImage from "/lovable-uploads/fa162a60-ca9a-4db8-8a43-e78f2beb9ebb.png";

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
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-playfair">
                Hi, I'm{" "}
                <span className="text-gradient">Ambrose Ssekyanzi</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                3rd-Year Medical Student at Kampala International University
              </p>
              <p className="text-base sm:text-lg md:text-xl text-primary font-semibold">
                Software Developer | Founder of Quant Hub
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about building intelligent systems that bridge healthcare and technology. 
              Creating innovative solutions while pursuing my medical degree.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="primary" 
                size="xl"
                onClick={handleHireMe}
                className="animate-slide-up btn-elegant glow-effect shimmer-effect"
              >
                <Download className="w-5 h-5" />
                Hire Me
              </Button>
              
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="animate-slide-up btn-premium glow-effect"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="animate-scale-in flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Dynamic Animated Background Elements */}
              <div className="absolute -inset-12 animate-pulse-slow">
                <div className="absolute top-0 left-0 w-4 h-4 bg-primary/60 rounded-full floating-element" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-8 right-4 w-3 h-3 elegant-gradient rounded-full floating-element" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute bottom-4 left-8 w-5 h-5 accent-gradient rounded-full floating-element" style={{ animationDelay: '1.4s' }}></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-accent-vibrant/80 rounded-full floating-element" style={{ animationDelay: '2.1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-warning/90 rounded-full floating-element" style={{ animationDelay: '2.8s' }}></div>
                <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-success/80 rounded-full floating-element" style={{ animationDelay: '3.5s' }}></div>
              </div>
              
              {/* Multiple Gradient Rings */}
              <div className="absolute -inset-4 primary-gradient rounded-full blur-sm opacity-40 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 primary-gradient rounded-full blur opacity-75 group-hover:blur-md transition-all duration-300"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-full border-4 border-card shadow-[var(--shadow-premium)] group-hover:shadow-[var(--shadow-gold)] transition-all duration-500 group-hover:scale-105 shimmer-effect">
                <img
                  src={profileImage}
                  alt="Ambrose Ssekyanzi - Medical Student & Software Developer"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay for extra polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Dynamic Floating Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 elegant-gradient text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-[var(--shadow-premium)] floating-element glow-effect animate-pulse-slow">
                Available for Hire! 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;