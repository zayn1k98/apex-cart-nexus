import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import racingWheelImg from "@/assets/products/racing-wheel.jpg";
import racingSeatImg from "@/assets/products/racing-seat.jpg";
import monitorStandImg from "@/assets/products/monitor-stand.jpg";
import pedalSetImg from "@/assets/products/pedal-set.jpg";

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");

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
            image: racingWheelImg, // Placeholder
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
            image: racingSeatImg, // Placeholder
            rating: 4.4,
            reviews: 45,
            category: "Accessories",
            isOnSale: true
        },
        {
            id: "7",
            name: "Racing Cockpit Frame",
            price: 799.99,
            image: monitorStandImg, // Placeholder
            rating: 4.8,
            reviews: 34,
            category: "Cockpits",
            isNew: true
        },
        {
            id: "8",
            name: "Force Feedback Base",
            price: 449.99,
            image: pedalSetImg, // Placeholder
            rating: 4.7,
            reviews: 78,
            category: "Racing Wheels",
            isBestseller: true
        }
    ];

    const categories = [
        { value: "all", label: "All Products" },
        { value: "Racing Wheels", label: "Racing Wheels" },
        { value: "Racing Seats", label: "Racing Seats" },
        { value: "Pedals", label: "Pedal Sets" },
        { value: "Accessories", label: "Accessories" },
        { value: "Cockpits", label: "Cockpits" }
    ];

    const sortOptions = [
        { value: "featured", label: "Featured" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "rating", label: "Highest Rated" },
        { value: "newest", label: "Newest" }
    ];

    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "rating":
                return b.rating - a.rating;
            case "newest":
                return b.id - a.id;
            default:
                return 0;
        }
    });

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Shop Racing Equipment</h1>
                <p className="text-muted-foreground text-lg">
                    Discover our complete range of professional racing simulator equipment
                </p>
            </div>

            {/* Filters and Search */}
            <div className="mb-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Category Filter */}
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                    {category.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            {sortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        Showing {sortedProducts.length} of {allProducts.length} products
                    </p>
                    <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        More Filters
                    </Button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            {/* Load More */}
            {sortedProducts.length > 0 && (
                <div className="text-center mt-12">
                    <Button variant="outline" size="lg">
                        Load More Products
                    </Button>
                </div>
            )}

            {/* No Results */}
            {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">
                        Try adjusting your search or filter criteria
                    </p>
                    <Button onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                    }}>
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Shop;
