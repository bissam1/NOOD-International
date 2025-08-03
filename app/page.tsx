import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/carousel";
import { AnimatedNav } from "@/ui/AnimatedNav";
import { HeroSection } from "@/ui/HeroSection";
import { Preloader } from "@/ui/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <AnimatedNav isVisible={true} />
      <main className="container mx-auto p-4">
        <HeroSection />
        <Card>
          <CardHeader>
            <CardTitle>Welcome to NOOD International Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                    alt="Property 1"
                    className="w-full h-64 object-cover rounded-md"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://images.unsplash.com/photo-1560448204-446b9d3b3d0e"
                    alt="Property 2"
                    className="w-full h-64 object-cover rounded-md"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
