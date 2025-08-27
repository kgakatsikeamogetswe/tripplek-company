
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Oscar Kekena",
    role: "Homeowner",
    content:
      "Triple K transformed our home's electrical system. Professional, reliable, and the smart home integration is amazing!",
    rating: 5,
  },
  {
    name: "Oscar Kekana",
    role: "Business Owner",
    content:
      "Outstanding network setup for our office. Fast, secure, and they explained everything clearly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Oscar Kekana",
    role: "Property Manager",
    content:
      "Emergency service was incredible. They responded within an hour and fixed our power issue quickly and professionally.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div variant="secondary" className="mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-border/50">
              <div className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
