import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  category,
  isNew,
  isBestseller,
  isOnSale,
}: ProductCardProps) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:glow-subtle">
      {/* Product Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge variant="secondary" className="bg-neon-green/10 text-neon-green border border-neon-green/30">
            NEW
          </Badge>
        )}
        {isBestseller && (
          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/30">
            BESTSELLER
          </Badge>
        )}
        {isOnSale && (
          <Badge variant="secondary" className="bg-destructive/10 text-destructive border border-destructive/30">
            -{discountPercentage}%
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 hover:bg-background hover:text-primary"
      >
        <Heart className="h-4 w-4" />
      </Button>

      <CardHeader className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button variant="neon" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Quick View
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        {/* Category */}
        <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
          {category}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button variant="speed" className="w-full group">
          <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-racing-pulse" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;