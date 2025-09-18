import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
    const [isScrolling, setIsScrolling] = useState(true);

    const partners = [
        {
            name: "Formula 1",
            logo: "🏎️",
            description: "Official Partner"
        },
        {
            name: "NASCAR",
            logo: "🏁",
            description: "Racing Series"
        },
        {
            name: "Le Mans",
            logo: "🏆",
            description: "Endurance Racing"
        },
        {
            name: "IndyCar",
            logo: "🏎️",
            description: "Open Wheel Racing"
        },
        {
            name: "WRC",
            logo: "🌲",
            description: "Rally Championship"
        },
        {
            name: "GT Racing",
            logo: "🏎️",
            description: "GT Championship"
        },
        {
            name: "Esports",
            logo: "🎮",
            description: "Gaming League"
        },
        {
            name: "Sim Racing",
            logo: "🏁",
            description: "Simulation Racing"
        }
    ];

    // Duplicate partners for seamless loop
    const duplicatedPartners = [...partners, ...partners];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsScrolling(prev => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Trusted by <span className="text-gradient-racing">Racing Champions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our equipment is used by professional racing teams, esports champions, and racing enthusiasts worldwide.
                    </p>
                </div>

                {/* Partners Carousel */}
                <div className="relative overflow-hidden">
                    <div
                        className={`flex space-x-8 transition-transform duration-1000 ease-in-out ${isScrolling ? 'translate-x-0' : '-translate-x-1/2'
                            }`}
                        style={{
                            width: `${duplicatedPartners.length * 200}px`
                        }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <Card
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 w-48 h-32 group hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {partner.logo}
                                    </div>
                                    <h3 className="font-bold text-lg text-foreground mb-1">
                                        {partner.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground text-center">
                                        {partner.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Racing Teams</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-sm text-muted-foreground">Professional Drivers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">25+</div>
                        <div className="text-sm text-muted-foreground">Racing Series</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                        <div className="text-sm text-muted-foreground">Esports Players</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
