import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar } from "lucide-react";

// Sample articles data
const articles = [
  {
    id: 1,
    title: "Charlie and the Chocolate Factory: The Musical Comes to Wellspring",
    excerpt: "An exciting look at our school's upcoming theatrical production featuring talented students from across all grade levels.",
    category: "Student Life",
    date: "Jan 25, 2025",
    author: "Emma Chen",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Playboi Carti's MUSIC: A Chaotic Return That Fails to Evolve",
    excerpt: "Five years after Whole Lotta Red, Playboi Carti returns with MUSIC – a 30-track behemoth that promises to push boundaries.",
    category: "Opinion",
    date: "Jan 24, 2025",
    author: "Alex Rodriguez",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop"
  },
  {
    id: 3,
    title: "The Rollercoaster of Puberty: Navigating Emotional Changes",
    excerpt: "Life's one big long process of growth. Puberty is an essential part of growing up, and a particularly rough part of it.",
    category: "Student Life",
    date: "Jan 23, 2025",
    author: "Dr. Sarah Johnson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop"
  },
  {
    id: 4,
    title: "AI Art is an Oxymoron: A Critical Look at Generative AI",
    excerpt: "The recent Studio Ghibli art trend on social media has reignited the conversation about AI-generated content and its impact on creativity.",
    category: "Opinion",
    date: "Jan 22, 2025",
    author: "Marcus Kim",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
  },
  {
    id: 5,
    title: "WTV 24-25: Breaking News and Student Updates",
    excerpt: "Your weekly dose of school news, upcoming events, and student achievements from around campus.",
    category: "Broadcasts",
    date: "Jan 21, 2025",
    author: "WTV Team",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&h=300&fit=crop"
  },
  {
    id: 6,
    title: "On Training An Alpha: A Short Story",
    excerpt: "A compelling short story by Joshua Lawrence Durkin exploring themes of leadership and personal growth.",
    category: "Recognition",
    date: "Jan 20, 2025",
    author: "Joshua Lawrence Durkin",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=300&fit=crop"
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Main Content */}
      <main className="container py-12">
        {/* Trending Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <div className="bg-card rounded-lg p-6 border shadow-card">
            <div className="flex items-center gap-4 text-muted-foreground mb-3">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Tuesday, Jul 29, 2025 - 6:47 AM</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Latest School Updates</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stay informed with the latest happenings around Wellspring Saigon. From academic achievements 
              to upcoming events, we've got you covered with real-time updates.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <CategoryFilter onCategoryChange={setSelectedCategory} />

        {/* Articles Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                author={article.author}
                readTime={article.readTime}
                image={article.image}
                featured={article.featured}
              />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-hero text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
          <p className="text-lg mb-6 text-white/90">
            Join our community of student journalists and share your unique perspective with the school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Submit Your Story
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Join Our Team
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}