import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X, Star, ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";
import racingWheelImg from "@/assets/products/racing-wheel.jpg";
import racingSeatImg from "@/assets/products/racing-seat.jpg";
import monitorStandImg from "@/assets/products/monitor-stand.jpg";
import pedalSetImg from "@/assets/products/pedal-set.jpg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const allProducts = [
    {
      id: "1",
      name: "Professional Racing Wheel Pro X1",
      price: 299.99,
      originalPrice: 399.99,
      image: racingWheelImg,
      rating: 4.8,
      reviews: 124,
      category: "Racing Wheels",
      isBestseller: true,
      isOnSale: true
    },
    {
      id: "2",
      name: "Elite Simulator Racing Seat",
      price: 599.99,
      originalPrice: 799.99,
      image: racingSeatImg,
      rating: 4.9,
      reviews: 89,
      category: "Racing Seats",
      isOnSale: true
    },
    {
      id: "3",
      name: "Triple Monitor Racing Stand",
      price: 199.99,
      originalPrice: 249.99,
      image: monitorStandImg,
      rating: 4.7,
      reviews: 156,
      category: "Accessories",
      isNew: true,
      isOnSale: true
    },
    {
      id: "4",
      name: "Hydraulic Pedal Set Pro",
      price: 149.99,
      originalPrice: 199.99,
      image: pedalSetImg,
      rating: 4.6,
      reviews: 203,
      category: "Pedals",
      isBestseller: true,
      isOnSale: true
    },
    {
      id: "5",
      name: "Racing Gloves Pro",
      price: 29.99,
      originalPrice: 39.99,
      image: racingWheelImg,
      rating: 4.5,
      reviews: 67,
      category: "Accessories",
      isOnSale: true
    },
    {
      id: "6",
      name: "H-Pattern Shifter Assembly",
      price: 89.99,
      originalPrice: 119.99,
      image: racingSeatImg,
      rating: 4.4,
      reviews: 45,
      category: "Accessories",
      isOnSale: true
    }
  ];

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timeoutId = setTimeout(() => {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleClose = () => {
    setSearchTerm("");
    setSearchResults([]);
    onClose();
  };

  const popularSearches = [
    "Racing Wheel",
    "Racing Seat",
    "Pedal Set",
    "Monitor Stand",
    "Racing Gloves",
    "Shifter"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for racing equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Search Results */}
          {searchTerm && (
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-muted-foreground mt-2">Searching...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No products found for "{searchTerm}"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try different keywords or check the spelling
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Popular Searches */}
          {!searchTerm && (
            <div className="space-y-4">
              <h3 className="font-semibold">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchTerm(search)}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {!searchTerm && (
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Browse All Products</div>
                    <div className="text-sm text-muted-foreground">View our complete catalog</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Featured Products</div>
                    <div className="text-sm text-muted-foreground">See our bestsellers</div>
                  </div>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
