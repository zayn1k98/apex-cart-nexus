import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Award,
    Users,
    Zap,
    Shield,
    Truck,
    Headphones,
    Star,
    Target,
    Globe,
    Heart
} from "lucide-react";

const About = () => {
    const stats = [
        { label: "Happy Customers", value: "10,000+", icon: Users },
        { label: "Products Sold", value: "50,000+", icon: Award },
        { label: "Countries Served", value: "45+", icon: Globe },
        { label: "Years Experience", value: "8+", icon: Star }
    ];

    const values = [
        {
            icon: Target,
            title: "Precision",
            description: "Every product is engineered with precision to deliver the most realistic racing experience possible."
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "We continuously push the boundaries of racing simulation technology with cutting-edge innovations."
        },
        {
            icon: Heart,
            title: "Passion",
            description: "Our team shares the same passion for racing as our customers, driving us to create exceptional products."
        },
        {
            icon: Shield,
            title: "Quality",
            description: "We never compromise on quality, ensuring every product meets the highest standards of durability and performance."
        }
    ];

    const team = [
        {
            name: "Alex Chen",
            role: "Founder & CEO",
            description: "Former professional racing driver with 15+ years in motorsports",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
        },
        {
            name: "Sarah Johnson",
            role: "Head of Engineering",
            description: "Expert in force feedback technology and precision mechanics",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
        },
        {
            name: "Mike Rodriguez",
            role: "Product Manager",
            description: "Gaming industry veteran with deep knowledge of racing simulation",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
        },
        {
            name: "Emma Thompson",
            role: "Customer Success",
            description: "Dedicated to ensuring every customer has the best possible experience",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
        }
    ];

    const timeline = [
        {
            year: "2016",
            title: "Company Founded",
            description: "Started with a vision to bring professional-grade racing simulation to everyone"
        },
        {
            year: "2018",
            title: "First Product Launch",
            description: "Launched our flagship racing wheel with revolutionary force feedback technology"
        },
        {
            year: "2020",
            title: "Global Expansion",
            description: "Expanded to serve customers in over 30 countries worldwide"
        },
        {
            year: "2022",
            title: "Professional Partnerships",
            description: "Partnered with major esports teams and professional racing organizations"
        },
        {
            year: "2024",
            title: "Innovation Lab",
            description: "Opened our state-of-the-art innovation lab for next-generation products"
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    About 9T7 Racing Simulator
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    We're passionate about bringing the thrill of professional racing to your home.
                    Our mission is to create the most realistic and immersive racing simulation experience possible.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="secondary" className="px-4 py-2 text-sm">
                        <Award className="h-4 w-4 mr-2" />
                        Industry Leader
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 text-sm">
                        <Star className="h-4 w-4 mr-2" />
                        Award Winning
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2 text-sm">
                        <Globe className="h-4 w-4 mr-2" />
                        Global Reach
                    </Badge>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                    <Card key={index} className="text-center">
                        <CardContent className="p-6">
                            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Mission Section */}
            <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            At 9T7 Racing Simulator, we believe that everyone deserves access to professional-grade racing simulation equipment.
                            Whether you're a casual gamer or a serious racing enthusiast, our products are designed to provide
                            the most authentic and immersive racing experience possible.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            We combine cutting-edge technology with meticulous attention to detail, ensuring that every product
                            we create meets the highest standards of quality and performance. Our team of engineers, designers,
                            and racing enthusiasts work tirelessly to push the boundaries of what's possible in racing simulation.
                        </p>
                        <Button size="lg">
                            Explore Our Products
                        </Button>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0" />
                                <span>Professional-grade force feedback technology</span>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0" />
                                <span>Rigorous testing with professional drivers</span>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0" />
                                <span>Premium materials and construction</span>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0" />
                                <span>Comprehensive warranty and support</span>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0" />
                                <span>Continuous innovation and updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-2">{member.role}</p>
                                <p className="text-sm text-muted-foreground">{member.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Timeline Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
                    <div className="space-y-8">
                        {timeline.map((event, index) => (
                            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                                    <div className="w-4 h-4 bg-white rounded-full" />
                                </div>
                                <div className="w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-muted/50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Experience Professional Racing?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join thousands of satisfied customers who have transformed their racing experience with our products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                        Shop Now
                    </Button>
                    <Button variant="outline" size="lg">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;
