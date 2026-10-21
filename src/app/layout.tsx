import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Web Analytics Specialist & WordPress Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  alternates: {
    canonical: "https://ashrafurrahman.cv",
  },
  openGraph: {
    title: `${DATA.name} | Web Analytics & Conversion Tracking Consultant`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    description: DATA.description,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
  other: {
    "geo.region": "BD-55",
    "geo.placename": "Kurigram, Rangpur, Bangladesh",
    "geo.position": "25.8072;89.6360",
    "ICBM": "25.8072, 89.6360",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ashrafurrahman.cv/#person",
      name: "Ashrafur Rahman Aditto",
      alternateName: ["Ashrafur Rahman", "Aditto"],
      url: "https://ashrafurrahman.cv",
      image: "https://ashrafurrahman.cv/me.png",
      jobTitle: "Web Analytics Specialist & WordPress Developer",
      description:
        "Web Analytics Specialist, Server-Side Tracking & WordPress Consultant. Specializing in GA4, GTM, Cloudflare Workers, Meta Conversion API, and Looker Studio.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kurigram",
        addressRegion: "Rangpur",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.8072,
        longitude: 89.636,
      },
      knowsAbout: [
        "Google Analytics 4",
        "Google Tag Manager",
        "Server-Side Tracking",
        "Meta Conversion API",
        "WordPress",
        "WooCommerce",
        "Looker Studio",
        "Enhanced E-commerce Tracking",
        "Conversion Rate Optimization",
        "Core Web Vitals",
      ],
      sameAs: [
        "https://github.com/ashrafurrahmanaditto",
        "https://www.linkedin.com/in/ashrafurrahmanaditto",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ashrafurrahman.cv/#service",
      name: "Ashrafur Rahman Aditto - Web Analytics Consulting",
      url: "https://ashrafurrahman.cv",
      provider: {
        "@id": "https://ashrafurrahman.cv/#person",
      },
      areaServed: [
        "Worldwide",
        "United States",
        "United Kingdom",
        "Europe",
        "Bangladesh",
      ],
      serviceType: [
        "Web Analytics Implementation",
        "Server-Side Tracking Setup",
        "Google Analytics 4 Migration",
        "Meta Conversion API Integration",
        "WordPress Speed Optimization",
        "Looker Studio Dashboard Creation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ashrafurrahman.cv/#website",
      url: "https://ashrafurrahman.cv",
      name: "Ashrafur Rahman Aditto | Web Analytics & WordPress Consultant",
      publisher: {
        "@id": "https://ashrafurrahman.cv/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
