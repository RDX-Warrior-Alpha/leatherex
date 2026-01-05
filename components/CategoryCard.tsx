
import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, onClick }) => {
  return (
    <div 
      className="flex flex-col gap-4 group cursor-pointer"
      onClick={onClick}
    >
      <div 
        className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl shadow-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-lg overflow-hidden relative"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <div>
        <p className="text-secondary dark:text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">{title}</p>
        <p className="text-accent dark:text-accent/70 text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
