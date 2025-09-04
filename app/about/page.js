import React from "react";
import { Navigation } from "@/components/layout/navigation.jsx"
import { Footer } from "@/components/layout/footer.jsx"

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="space-y-4">
        <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
          Smart Power,
          <br />
          <span className="text-accent">Seamless</span>
          <br />
          Connectivity
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
          Expert electrical installations and cutting-edge networking solutions
          for your home and business. Powering your world with precision and
          reliability.
        </p>
      </div>
      <Footer />
    </div>
  );
}
