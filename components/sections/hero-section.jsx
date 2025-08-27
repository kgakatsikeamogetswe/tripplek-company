import { ArrowRight, Zap, Network } from 'lucide-react'
import Image from "next/image"


export function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 mt-5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-slide-in-left">
            <div variant="secondary" className="w-fit">
              Professional Electrical & Networking Services
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Smart Power,
                <br />
                <span className="text-accent">Seamless</span>
                <br />
                Connectivity
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Expert electrical installations and cutting-edge networking solutions for your home and business.
                Powering your world with precision and reliability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Our Work
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <Image
                src="/professional-electrician-working-on-electrical-pan.jpg"
                alt="Professional electrical and networking services"
                width={400}
                height={100}
                className="rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg animate-pulse-glow">
                <Zap className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg animate-pulse-glow">
                <Network className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
