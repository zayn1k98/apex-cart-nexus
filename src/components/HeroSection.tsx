import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/products/hero-racing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-secondary/20 font-orbitron">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional Racing Simulator Setup"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      {/* Racing Grid Pattern */}
      <div className="absolute inset-0 racing-grid opacity-20 z-10" />

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-speed-lines" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-speed-lines delay-300" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-speed-lines delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 animate-racing-pulse"
          >
            <Zap className="mr-2 h-4 w-4" />
            Professional Racing Gear
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient-racing">RACE</span>
          <span className="text-foreground"> LIKE A </span>
          <span className="text-gradient-racing">PRO</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Experience the ultimate racing simulation with our premium collection of
          professional-grade racing equipment, simulators, and accessories.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button variant="hero" size="xl" className="group">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>

          <Button variant="neon" size="xl" className="group">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-racing mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-racing mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Racers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-racing mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;