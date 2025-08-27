import { Phone, Mail, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/triple-k-logo.jpeg" alt="Triple K Logo" width={40} height={40} />
              <div>
                <h3 className="font-bold text-primary">Triple K</h3>
                <p className="text-sm text-muted-foreground">Electrical & Networking</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Smart power, seamless connectivity. Your trusted partner for all electrical and networking needs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/owner" className="hover:text-accent transition-colors">
                  Owner
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Residential Electrical</li>
              <li>Commercial Electrical</li>
              <li>Network Infrastructure</li>
              <li>Emergency Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(+27) 76-230-5583</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@triplek.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>chaneng,Robega</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Triple K Electrical and Networking Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}