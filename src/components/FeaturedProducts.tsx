import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";
import racingWheelImg from "@/assets/products/racing-wheel.jpg";
import racingSeatImg from "@/assets/products/racing-seat.jpg";
import monitorStandImg from "@/assets/products/monitor-stand.jpg";
import pedalSetImg from "@/assets/products/pedal-set.jpg";

const FeaturedProducts = () => {
  // Mock product data - in a real app, this would come from an API
  const featuredProducts = [
    {
      id: "1",
      name: "Professional Racing Wheel Pro X1",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 142,
      image: racingWheelImg,
      category: "Racing Wheels",
      isBestseller: true,
      isOnSale: true,
    },
    {
      id: "2",
      name: "Elite Simulator Racing Seat",
      price: 599.99,
      rating: 4.9,
      reviews: 89,
      image: racingSeatImg,
      category: "Racing Seats",
      isNew: true,
    },
    {
      id: "3",
      name: "Triple Monitor Racing Stand",
      price: 449.99,
      originalPrice: 529.99,
      rating: 4.7,
      reviews: 67,
      image: monitorStandImg,
      category: "Accessories",
      isOnSale: true,
    },
    {
      id: "4",
      name: "Hydraulic Pedal Set Pro",
      price: 199.99,
      rating: 4.6,
      reviews: 134,
      image: pedalSetImg,
      category: "Pedals",
      isBestseller: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-racing">Featured</span>
            <span className="text-foreground"> Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular racing simulation equipment,
            trusted by professional racers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="racing" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;