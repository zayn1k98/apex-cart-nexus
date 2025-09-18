import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Award, Zap } from "lucide-react";
import racingWheelImg from "@/assets/products/racing-wheel.jpg";
import racingSeatImg from "@/assets/products/racing-seat.jpg";
import monitorStandImg from "@/assets/products/monitor-stand.jpg";
import pedalSetImg from "@/assets/products/pedal-set.jpg";

const Categories = () => {
    const categories = [
        {
            id: "wheels",
            name: "Racing Wheels",
            description: "High-precision steering wheels with force feedback technology for the most realistic driving experience.",
            image: racingWheelImg,
            productCount: 12,
            featured: true,
            features: ["Force Feedback", "Adjustable Rotation", "Premium Materials"],
            stats: { rating: 4.8, reviews: 1240 }
        },
        {
            id: "seats",
            name: "Racing Seats",
            description: "Ergonomic racing seats designed for comfort during long gaming sessions with adjustable lumbar support.",
            image: racingSeatImg,
            productCount: 8,
            featured: true,
            features: ["Ergonomic Design", "Adjustable Lumbar", "Premium Upholstery"],
            stats: { rating: 4.9, reviews: 890 }
        },
        {
            id: "pedals",
            name: "Pedal Sets",
            description: "Professional-grade pedal sets with load cell technology for realistic brake and throttle feel.",
            image: pedalSetImg,
            productCount: 15,
            featured: false,
            features: ["Load Cell Technology", "Adjustable Resistance", "Metal Construction"],
            stats: { rating: 4.7, reviews: 2030 }
        },
        {
            id: "accessories",
            name: "Accessories",
            description: "Essential accessories including monitor stands, shifters, gloves, and other racing essentials.",
            image: monitorStandImg,
            productCount: 25,
            featured: false,
            features: ["Monitor Stands", "Shifters", "Racing Gloves"],
            stats: { rating: 4.6, reviews: 1560 }
        },
        {
            id: "cockpits",
            name: "Racing Cockpits",
            description: "Complete racing cockpit solutions for the ultimate immersive racing experience.",
            image: racingSeatImg, // Placeholder
            productCount: 6,
            featured: true,
            features: ["Complete Setup", "Modular Design", "Easy Assembly"],
            stats: { rating: 4.9, reviews: 340 }
        },
        {
            id: "monitors",
            name: "Racing Monitors",
            description: "Ultra-wide and curved monitors optimized for racing simulation with high refresh rates.",
            image: monitorStandImg, // Placeholder
            productCount: 10,
            featured: false,
            features: ["Ultra-wide", "High Refresh Rate", "Curved Display"],
            stats: { rating: 4.5, reviews: 720 }
        }
    ];

    const featuredCategories = categories.filter(cat => cat.featured);
    const regularCategories = categories.filter(cat => !cat.featured);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Product Categories</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Explore our comprehensive range of racing simulator equipment,
                    carefully curated for professional racers and enthusiasts alike.
                </p>
            </div>

            {/* Featured Categories */}
            <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-foreground">Featured Categories</h2>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                    </Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredCategories.map((category) => (
                        <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="relative">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                    <p className="text-sm opacity-90 mb-3">{category.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                                <span className="text-sm">{category.stats.rating}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="h-4 w-4 mr-1" />
                                                <span className="text-sm">{category.stats.reviews} reviews</span>
                                            </div>
                                        </div>
                                        <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                                            Explore
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* All Categories Grid */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-8">All Categories</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularCategories.map((category) => (
                        <Card key={category.id} className="group hover:shadow-lg transition-all duration-300">
                            <CardHeader className="p-0">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="secondary" className="bg-background/80">
                                            {category.productCount} products
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                                <CardDescription className="mb-4">{category.description}</CardDescription>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                            <span>{category.stats.rating}</span>
                                            <span className="text-muted-foreground ml-1">
                                                ({category.stats.reviews} reviews)
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.features.map((feature, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                            <div className="px-6 pb-6">
                                <Button className="w-full group-hover:bg-primary/90">
                                    View Products
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-muted/50 rounded-lg p-8 mb-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Why Choose 9T7 Racing Simulator?</h2>
                    <p className="text-muted-foreground">
                        Trusted by professional racers and gaming enthusiasts worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Award className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Professional Grade</h3>
                        <p className="text-muted-foreground">
                            Equipment used by professional racing teams and esports champions
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Zap className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Cutting Edge Technology</h3>
                        <p className="text-muted-foreground">
                            Latest force feedback and precision technologies for ultimate realism
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                        <p className="text-muted-foreground">
                            Dedicated customer support from racing simulation experts
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Build Your Racing Setup?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Browse our complete catalog and find the perfect equipment for your racing simulator.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                        Start Shopping
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg">
                        Contact Expert
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Categories;
