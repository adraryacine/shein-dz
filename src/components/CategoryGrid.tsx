import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <section className="py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold">Catégories</h2>
          <p className="text-muted-foreground mt-1">Explorez nos collections</p>
        </div>
        <Link to="/categories" className="text-primary font-medium hover:underline">
          Voir tout
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className={cn(
              "category-card group",
              index === 0 && "md:col-span-2 md:row-span-2"
            )}
          >
            <img
              src={category.imageUrl || '/placeholder.svg'}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4 md:p-6">
              <h3 className="text-white font-display text-lg md:text-2xl font-bold text-center drop-shadow-lg">
                {category.name}
              </h3>
              <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Découvrir →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
