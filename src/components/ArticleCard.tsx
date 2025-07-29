import { Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  date,
  author,
  readTime,
  image,
  featured = false,
}: ArticleCardProps) {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
      featured ? "md:col-span-2 md:row-span-2" : ""
    }`}>
      <div className="relative overflow-hidden">
        {image && (
          <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Badge 
              className="absolute top-4 left-4 bg-primary hover:bg-primary-hover"
            >
              {category}
            </Badge>
          </div>
        )}
        
        <CardContent className="p-6">
          <h3 className={`font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors ${
            featured ? "text-2xl" : "text-lg"
          }`}>
            {title}
          </h3>
          
          <p className={`text-muted-foreground mb-4 line-clamp-3 ${
            featured ? "text-base" : "text-sm"
          }`}>
            {excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}