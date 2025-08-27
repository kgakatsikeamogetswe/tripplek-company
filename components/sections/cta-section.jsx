import Link from "next/link"

export function CTASection({
  title = "Ready to Power Your Project?",
  description = "Get a free consultation and quote for your electrical and networking needs. Professional service, competitive pricing, guaranteed satisfaction.",
  primaryButtonText = "Schedule Consultation",
  primaryButtonHref = "/booking",
  secondaryButtonText = "Call Now: (+27) 76-230-5583"
}) {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            asChild
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href={primaryButtonHref}>{primaryButtonText}</Link>
          </button>
          <button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}
