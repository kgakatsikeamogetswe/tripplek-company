import React from 'react'
import Link from "next/link"


export const Navbar = () => {
  return (
    <div>
    {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/triple-k-logo.jpeg"
                alt="Triple K Electrical and Networking Services"
                width={50}
                height={50}
                className="animate-pulse-glow"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">Triple K</h1>
                <p className="text-sm text-muted-foreground">Electrical & Networking</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-accent font-medium">
                About
              </Link>
              <Link href="/#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/owner" className="text-foreground hover:text-accent transition-colors">
                Owner
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
      </div>
  )
}
