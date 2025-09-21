import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Heart, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

// Mock product data - in a real app, this would come from an API
const mockProduct = {
  id: "1",
  name: "Professional Racing Wheel Pro X1",
  category: "Racing Wheels",
  price: 299.99,
  originalPrice: 399.99,
  rating: 4.8,
  reviews: 127,
  images: [
    "/src/assets/products/racing-wheel.jpg",
    "/src/assets/products/racing-seat.jpg",
    "/src/assets/products/pedal-set.jpg",
    "/src/assets/products/monitor-stand.jpg"
  ],
  description: "Experience the ultimate racing simulation with our Professional Racing Wheel Pro X1. Built with precision engineering and premium materials, this wheel delivers authentic force feedback and responsive controls that bring your racing games to life.",
  specifications: {
    "Force Feedback": "Direct Drive Technology",
    "Rotation": "1080° (3 full turns)",
    "Pedals": "3-pedal set included",
    "Compatibility": "PC, PS5, Xbox Series X/S",
    "Weight": "8.5 kg",
    "Dimensions": "35cm x 30cm x 15cm",
    "Warranty": "2 years"
  },
  features: [
    "Direct drive force feedback for realistic racing feel",
    "Premium leather-wrapped wheel with ergonomic design",
    "Hall effect sensors for precise input detection",
    "Quick release system for easy wheel swapping",
    "Adjustable pedal resistance and travel",
    "Compatible with all major racing simulators"
  ]
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // In a real app, fetch product by id
  const product = mockProduct;

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-card border">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Sale Badge */}
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                  -{discountPercentage}% OFF
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                      selectedImageIndex === index
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category & Title */}
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  variant="speed"
                  size="lg"
                  className="flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-primary" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>
              
              <Button
                variant="neon"
                size="lg"
                className="w-full"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <Separator className="my-12" />
        
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          
          <div className="space-y-6">
            {/* Review 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Absolutely incredible wheel! The force feedback is so realistic, it feels like I'm actually driving. 
                  The build quality is top-notch and the setup was straightforward. Highly recommend for serious sim racers."
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Miller</div>
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Great wheel for the price! The pedals feel solid and the wheel has good weight to it. 
                  Only minor complaint is the software setup took a bit of time, but once configured it works perfectly."
                </p>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Rodriguez</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "This wheel transformed my racing experience completely. The direct drive technology makes such a difference 
                  in feel and precision. Worth every penny for serious racing enthusiasts!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
