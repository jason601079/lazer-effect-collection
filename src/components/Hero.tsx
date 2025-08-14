import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
      
      {/* Content */}
      <div className="relative z-10 container text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              LAZER EFFECT
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
            Premium skull caps with cutting-edge laser designs. 
            Where streetwear meets the future.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <Link to="/products">Shop Now</Link>
          </Button>
          <Button asChild variant="glow" size="xl" className="w-full sm:w-auto">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
        
        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            Limited Edition Designs • Premium Quality • Free Shipping
          </p>
        </div>
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-pulse" />
    </section>
  );
};

export default Hero;