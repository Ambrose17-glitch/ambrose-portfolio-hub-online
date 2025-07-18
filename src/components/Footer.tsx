import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-max">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-sm">by Ambrose Ssekyanzi</span>
          </div>
          
          <p className="text-xs text-muted opacity-75">
            © {currentYear} Ambrose Ssekyanzi. All rights reserved.
          </p>
          
          <p className="text-xs text-muted opacity-60">
            Medical Student | Software Developer | Founder of Quant Hub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;