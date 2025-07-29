import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "NEWS", href: "#news" },
  { name: "RECOGNITION", href: "#recognition" },
  { name: "STUDENT LIFE", href: "#student-life" },
  { name: "SPORT", href: "#sport" },
  { name: "OPINION", href: "#opinion" },
];

export function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="WISersWrite" className="h-10 w-10" />
          <div className="font-bold text-xl">
            <span className="text-news-red">WISers</span>
            <span className="text-foreground">Write</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-8 gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search */}
          <div className="hidden sm:flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search articles..."
                  className="w-64"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Submit Story Button */}
          <Button variant="default" size="sm" className="hidden sm:flex">
            SUBMIT YOUR STORY
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="default" className="mt-4">
                  SUBMIT YOUR STORY
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}