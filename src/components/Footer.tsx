import { Github, Twitter, Linkedin } from 'lucide-react'
import { Logo } from '@/components/Logo'

const footerLinks = {
  solutions: [
    { name: 'Unified Scanning', href: '#services' },
    { name: 'CI/CD Integration', href: '#services' },
    { name: 'Unified Intelligence', href: '#services' },
    { name: 'Compliance Automation', href: '#services' },
    { name: 'Multi-Language Support', href: '#services' },
    { name: 'Web3 DevSecOps Consulting', href: '#services' },
  ],
  products: [
    { name: 'BlockSecOps Platform', href: 'https://blocksecops.com' },
    { name: 'SolidityDefend', href: 'https://github.com/soliditydefend' },
    { name: 'SolidityBOM', href: 'https://github.com/soliditybom' },
  ],
  resources: [
    { name: 'Documentation', href: 'https://blocksecops.com/docs' },
    { name: 'API Reference', href: 'https://blocksecops.com/api-reference' },
    { name: 'Security Best Practices', href: 'https://advancedblockchainsecurity.com/wiki' },
    { name: 'Integration Guides', href: 'https://blocksecops.com/docs' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partners', href: '#partners' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security Policy', href: '#security-policy' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/advanced-blockchain-security/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/BlockSecOps/' },
  { name: 'X', icon: Twitter, href: 'https://x.com/blocksecops' },
]

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold font-display">
                Advanced Blockchain Security
              </span>
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-md">
              Leading provider of enterprise-grade blockchain DevSecOps solutions.
              Protecting Web3 projects with comprehensive auditing, tools, platform support, and expert SSDLC consulting services.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-primary-400 transition-all duration-200 hover:shadow-glow"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 mt-8">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © 2025 Advanced Blockchain Security. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-white/40 text-sm">
                Enterprise DevSecOps platform and consulting services you can trust
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
