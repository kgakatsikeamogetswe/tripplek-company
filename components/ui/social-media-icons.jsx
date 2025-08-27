import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

export function SocialMediaIcons({ className = "", size = "md", variant = "outline" }) {
  const sizeClasses = {
    sm: "w-8 h-8 p-0",
    md: "w-10 h-10 p-0",
    lg: "w-12 h-12 p-0",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/triplekelectrical",
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/triple-k-electrical",
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/triplekelectrical",
      color: "hover:text-pink-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/triplekelectric",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <div className={`flex space-x-3 ${className}`}>
      {socialLinks.map((social) => (
        <button
          key={social.name}
          size="sm"
          variant={variant}
          className={`${sizeClasses[size]} bg-transparent transition-all duration-300 ${social.color} hover:scale-110`}
          asChild
        >
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.name}`}>
            <social.icon className={iconSizes[size]} />
          </a>
        </button>
      ))}
    </div>
  )
}
