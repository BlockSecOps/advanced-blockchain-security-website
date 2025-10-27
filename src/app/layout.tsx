import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Advanced Blockchain Security - DevSecOps for Web3',
    template: '%s | Advanced Blockchain Security'
  },
  description: 'Enterprise blockchain DevSecOps platform. Unified scanning with 25+ tools, AI-powered intelligence, CI/CD integration, and expert consulting for smart contracts.',
  keywords: ['blockchain DevSecOps', 'smart contract security', 'unified scanning', 'CI/CD integration', 'Web3 security platform', 'automated security', 'BlockSecOps', 'Solidity security', 'enterprise blockchain', 'security intelligence', 'SSDLC consulting', 'Web3 DevSecOps consulting', 'blockchain security consulting', 'smart contract consulting'],
  authors: [{ name: 'Advanced Blockchain Security' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://advancedblockchainsecurity.com',
    title: 'Advanced Blockchain Security - Enterprise Smart Contract DevSecOps Platform',
    description: 'Leading provider of enterprise-grade blockchain DevSecOps solutions and expert consulting services. Unified scanning, CI/CD integration, and unified intelligence for Web3 projects.',
    siteName: 'Advanced Blockchain Security',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Blockchain Security',
    description: 'Enterprise Smart Contract DevSecOps Platform & Consulting Services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FRHFYNW3P9"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FRHFYNW3P9');
          `}
        </Script>
      </head>
      <body className="font-sans bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
