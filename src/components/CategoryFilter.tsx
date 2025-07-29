import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "News",
  "Recognition", 
  "Student Life",
  "Sport",
  "Opinion",
  "Broadcasts"
];

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className="transition-all duration-200"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}