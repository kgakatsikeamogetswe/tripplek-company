import { Network, Home, Building2, Zap, Wrench, Star } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description:
      "Complete home electrical services including wiring, panel upgrades, and smart home installations.",
    features: ["Panel Upgrades", "Smart Home Setup", "Outlet Installation", "Lighting Design"],
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description: "Professional commercial electrical solutions for businesses of all sizes.",
    features: ["Office Wiring", "Emergency Systems", "Code Compliance", "Maintenance"],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Advanced networking solutions for seamless connectivity and optimal performance.",
    features: ["Fiber Optic", "Wireless Setup", "Network Security", "Cable Management"],
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency electrical services when you need them most.",
    features: ["Power Outages", "Electrical Faults", "Safety Inspections", "Rapid Response"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Preventive maintenance and expert repairs to keep your systems running smoothly.",
    features: ["Regular Inspections", "Troubleshooting", "Component Replacement", "System Optimization"],
  },
  {
    icon: Star,
    title: "Consultation & Design",
    description: "Expert consultation and custom design solutions for your unique requirements.",
    features: ["System Design", "Energy Efficiency", "Cost Analysis", "Project Planning"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div variant="secondary" className="mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Complete Electrical & Networking Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential wiring to enterprise networking, we deliver professional solutions that power your
            success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="p-6 group-hover:bg-white" style={{ backgroundColor: "var(--border)" }}>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}