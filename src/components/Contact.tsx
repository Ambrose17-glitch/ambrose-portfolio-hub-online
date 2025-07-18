import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/256708685310", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:ssekyanziambrose17@gmail.com", "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ssekyanziambrose17@gmail.com",
      action: handleEmailClick
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+256 708 685 310",
      action: handleWhatsAppClick
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kampala, Uganda",
      action: () => {}
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ambrose",
      color: "hover:bg-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/ambrose-ssekyanzi",
      color: "hover:bg-blue-600"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/256708685310",
      color: "hover:bg-green-600"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-up space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you need a web application, 
                consultation on medical technology, or want to explore business automation, 
                I'd love to hear from you.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 card-professional cursor-pointer"
                  onClick={item.action}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={social.label}
                    onClick={() => window.open(social.url, "_blank")}
                    className={`w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center transition-all duration-300 hover:text-white ${social.color} hover:scale-110 hover:shadow-[var(--shadow-medium)]`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="animate-scale-in">
            <div className="card-professional p-8 space-y-6 text-center">
              <div className="w-20 h-20 primary-gradient rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Ready to Start?</h3>
                <p className="text-muted-foreground">
                  Let's discuss your project and see how I can help you achieve your goals.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </Button>
                
                <Button 
                  variant="professional" 
                  size="lg"
                  onClick={handleEmailClick}
                  className="w-full"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;