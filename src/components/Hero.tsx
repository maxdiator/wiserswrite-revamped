import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, Play } from "lucide-react";
import heroImage from "@/assets/hero-news.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students engaged in journalism"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-news-red">WISers</span>Write
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Your voice in Wellspring Saigon's vibrant community. 
            Where student stories come to life.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              Read Latest Stories
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Submit Your Story
            </Button>
          </div>

          {/* Featured Content Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center gap-4 text-white/80 mb-3">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">Today's Highlights</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Charlie and the Chocolate Factory: The Musical Comes to Wellspring
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              An exclusive behind-the-scenes look at our school's upcoming theatrical production...
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Play className="h-4 w-4 mr-2" />
                Watch Preview
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}