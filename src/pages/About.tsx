import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Shield, Truck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-16 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Lazer Effect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're pioneering the future of streetwear by combining cutting-edge laser technology 
            with premium materials to create skull caps that make a statement.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, Lazer Effect emerged from a simple idea: streetwear should be as 
                innovative as the technology that surrounds us. Our founders, passionate about both 
                fashion and cutting-edge tech, saw an opportunity to merge these worlds.
              </p>
              <p>
                Using state-of-the-art laser etching and holographic techniques, we create designs 
                that aren't just printed on fabric—they're embedded into it, creating patterns that 
                shift and change with light and movement.
              </p>
              <p>
                Each skull cap in our collection represents hours of design work and precision 
                manufacturing, ensuring that every piece meets our high standards for both style and durability.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-glow rounded-full opacity-20 absolute inset-0 blur-3xl" />
            <Card className="relative bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <Zap className="h-16 w-16 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">Innovation First</h3>
                <p className="text-muted-foreground">
                  Every design pushes the boundaries of what's possible with modern manufacturing techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <Shield className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Premium materials and meticulous craftsmanship in every piece.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <Zap className="h-12 w-12 mx-auto text-accent" />
                <h3 className="text-lg font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Pushing boundaries with cutting-edge design technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <Users className="h-12 w-12 mx-auto text-secondary" />
                <h3 className="text-lg font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a community of forward-thinking style enthusiasts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 backdrop-blur border-border/40">
              <CardContent className="p-6 space-y-4">
                <Truck className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-semibold">Service</h3>
                <p className="text-sm text-muted-foreground">
                  Fast, reliable shipping and exceptional customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-16 bg-gradient-dark rounded-2xl">
          <h2 className="text-3xl font-bold">Ready to Experience the Future?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of customers who have already discovered the Lazer Effect difference. 
            Browse our collection and find your perfect skull cap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">Shop Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;