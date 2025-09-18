import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Award, Trophy, Target } from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex Chen",
            role: "Professional Racing Driver",
            team: "Formula 1 Team",
            rating: 5,
            review: "The 9T7 Racing Simulator equipment has completely transformed my training routine. The force feedback is incredibly realistic, and the precision is unmatched. It's like driving the real thing!",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            verified: true,
            achievement: "3x Championship Winner"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Esports Champion",
            team: "Sim Racing League",
            rating: 5,
            review: "I've tried many racing simulators, but nothing comes close to the quality and realism of 9T7's equipment. The attention to detail is phenomenal, and it shows in my performance.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            verified: true,
            achievement: "World Champion 2023"
        },
        {
            id: 3,
            name: "Mike Rodriguez",
            role: "Racing Enthusiast",
            team: "Home Simulator",
            rating: 5,
            review: "As someone who's been into sim racing for years, I can confidently say that 9T7 Racing Simulator offers the best value for money. The build quality is exceptional, and the customer support is outstanding.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            verified: true,
            achievement: "10+ Years Experience"
        },
        {
            id: 4,
            name: "Emma Thompson",
            role: "Racing Team Manager",
            team: "Professional Team",
            rating: 5,
            review: "We've equipped our entire team with 9T7 Racing Simulator gear, and the results speak for themselves. Our drivers' lap times have improved significantly, and the equipment is incredibly reliable.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            verified: true,
            achievement: "Team Manager"
        },
        {
            id: 5,
            name: "David Kim",
            role: "Sim Racing Content Creator",
            team: "YouTube Channel",
            rating: 5,
            review: "I've reviewed countless racing simulators on my channel, and 9T7 Racing Simulator consistently delivers the best experience. The community support and regular updates make it the clear choice.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
            verified: true,
            achievement: "500K+ Subscribers"
        },
        {
            id: 6,
            name: "Lisa Wang",
            role: "Racing Engineer",
            team: "Technical Team",
            rating: 5,
            review: "The technical specifications and build quality of 9T7's equipment are impressive. As an engineer, I appreciate the attention to detail and the precision engineering that goes into every product.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
            verified: true,
            achievement: "Lead Engineer"
        }
    ];

    const getAchievementIcon = (achievement: string) => {
        if (achievement.includes("Champion") || achievement.includes("Winner")) {
            return <Trophy className="h-4 w-4 text-yellow-500" />;
        } else if (achievement.includes("Manager")) {
            return <Target className="h-4 w-4 text-blue-500" />;
        } else if (achievement.includes("Subscribers")) {
            return <Award className="h-4 w-4 text-purple-500" />;
        } else {
            return <Award className="h-4 w-4 text-green-500" />;
        }
    };

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient-racing">What Our</span>
                        <span className="text-foreground"> Customers Say</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Don't just take our word for it. Hear from professional drivers, esports champions, and racing enthusiasts who trust 9T7 Racing Simulator.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <CardContent className="p-6">
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary/10 rounded-full p-3">
                                        <Quote className="h-6 w-6 text-primary" />
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 fill-primary text-primary"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Review Text */}
                                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                                    "{testimonial.review}"
                                </p>

                                {/* Customer Info */}
                                <div className="text-center">
                                    <div className="flex justify-center mb-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                        />
                                    </div>

                                    <h3 className="font-semibold text-foreground mb-1">
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-2">
                                        {testimonial.role}
                                    </p>

                                    <p className="text-xs text-primary font-medium mb-3">
                                        {testimonial.team}
                                    </p>

                                    {/* Achievement Badge */}
                                    <div className="flex items-center justify-center space-x-2">
                                        {getAchievementIcon(testimonial.achievement)}
                                        <Badge variant="outline" className="text-xs">
                                            {testimonial.achievement}
                                        </Badge>
                                    </div>

                                    {/* Verified Badge */}
                                    {testimonial.verified && (
                                        <div className="mt-2">
                                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                                                ✓ Verified Customer
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Overall Rating */}
                <div className="bg-muted/50 rounded-lg p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-8 w-8 fill-primary text-primary"
                                />
                            ))}
                        </div>
                        <span className="ml-3 text-2xl font-bold text-foreground">4.9/5</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">Average Customer Rating</h3>
                    <p className="text-muted-foreground mb-6">
                        Based on 2,847 verified customer reviews
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">98%</div>
                            <div className="text-sm text-muted-foreground">Would Recommend</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                            <div className="text-sm text-muted-foreground">Overall Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm text-muted-foreground">Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
