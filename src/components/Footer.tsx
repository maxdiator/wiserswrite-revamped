import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="WISersWrite" className="h-8 w-8" />
              <div className="font-bold text-lg">
                <span className="text-news-red">WISers</span>
                <span className="text-foreground">Write</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Representing Wellspring Saigon students' voice through quality journalism and storytelling.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Submit Story
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Join Our Team
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Archive
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                News & Events
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Student Life
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Sports
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Opinion
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest news and stories.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button className="w-full" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Wellspring Saigon</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>wiserswrite@wellspring.edu.vn</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 WISersWrite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}