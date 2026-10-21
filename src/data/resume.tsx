import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Ga4 } from "@/components/ui/svgs/ga4";
import { Gtm } from "@/components/ui/svgs/gtm";
import { Wordpress } from "@/components/ui/svgs/wordpress";
import { Woocommerce } from "@/components/ui/svgs/woocommerce";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { Meta } from "@/components/ui/svgs/meta";
import { Looker } from "@/components/ui/svgs/looker";
import { Gsc } from "@/components/ui/svgs/gsc";

export const DATA = {
  name: "Ashrafur Rahman Aditto",
  initials: "ARA",
  url: "https://ashrafurrahman.cv",
  location: "Kurigram, Rangpur, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Kurigram",
  description:
    "Web Analytics Specialist, Server-Side Tracking & WordPress Consultant. Turning website behavioral data into actionable growth and revenue.",
  summary:
    "I help high-growth companies and eCommerce brands turn website user behavior into revenue. Specializing in **Google Analytics 4 (GA4)**, **Google Tag Manager (GTM)**, **Server-Side Tracking (Cloudflare Workers & Stape)**, and **Meta Conversion API (CAPI)**, I bridge the gap between web architecture and precision analytics pipelines. Previously **Growth Lead at Hive Intelligence**, I architect conversion tracking, eliminate attribution discrepancies, and deliver comprehensive reporting.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Google Analytics 4 (GA4)", icon: Ga4 },
    { name: "Google Tag Manager (GTM)", icon: Gtm },
    { name: "Server-Side Tracking", icon: Cloudflare },
    { name: "Meta Conversion API (CAPI)", icon: Meta },
    { name: "Looker Studio Dashboards", icon: Looker },
    { name: "WordPress", icon: Wordpress },
    { name: "WooCommerce", icon: Woocommerce },
    { name: "Google Search Console", icon: Gsc },
    { name: "Enhanced E-commerce Tracking", icon: Ga4 },
    { name: "Conversion Rate Optimization (CRO)", icon: Gtm },
    { name: "Event & UTM Tracking", icon: Gtm },
    { name: "GDPR Cookie Consent", icon: Ga4 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ashrafurrahmanaditto@gmail.com",
    tel: "+8801612686608",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ashrafurrahmanaditto",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashrafurrahmanaditto",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/8801612686608",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ashrafurrahmanaditto@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hive Intelligence",
      href: "https://github.com/ashrafurrahmanaditto/hive-intelligence-website",
      badges: [],
      location: "United States (Remote)",
      title: "Growth Lead",
      logoUrl: "",
      start: "Jan 2025",
      end: "Jul 2026",
      description:
        "Led a cross-functional team implementing end-to-end GA4 and GTM conversion tracking across client WordPress sites, improving campaign attribution accuracy by 30%. Designed custom event schemas, enhanced eCommerce data layers, and automated client analytics dashboards in Looker Studio.",
    },
    {
      company: "Freelance Technical Specialist",
      href: "https://github.com/ashrafurrahmanaditto",
      badges: [],
      location: "Remote",
      title: "Web Analytics Specialist & Tracking Consultant",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "Designed and deployed server-side tracking pipelines using Cloudflare Workers and Stape, overcoming iOS ITP limitations and ad-blocker signal loss. Implemented Meta CAPI, Google Tag Manager server containers, and GDPR-compliant consent mode for eCommerce stores.",
    },
  ],
  education: [
    {
      school: "Nageshwari Govt. College",
      href: "https://www.google.com/search?q=Nageshwari+Govt.+College",
      degree: "Higher Secondary Certificate (HSC) in Science",
      logoUrl: "",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Server-Side Tracking & Meta CAPI Infrastructure",
      href: "#",
      dates: "2025 - 2026",
      active: true,
      description:
        "Engineered server-side tracking infrastructure using Cloudflare Workers and Stape GTM containers. Bypasses iOS ITP restrictions and ad-blockers, achieving 9.2/10 Event Match Quality score on Meta CAPI and recovering 35%+ lost attribution signals.",
      technologies: [
        "Server-Side GTM",
        "Cloudflare Workers",
        "Meta CAPI",
        "GA4",
        "Stape",
        "Cookie Consent",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "eCommerce DataLayer & Full-Funnel Tracking",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Architected complete data layer architecture for high-volume WooCommerce and Shopify stores. Accurately tracks view_item, add_to_cart, begin_checkout, and purchase events with dynamic currency conversion and transaction deduplication.",
      technologies: [
        "Google Tag Manager",
        "WooCommerce",
        "GA4",
        "DataLayer",
        "Meta Pixel",
        "TikTok Pixel",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Automated Looker Studio Executive Dashboard",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "Consolidated multi-platform marketing and sales metrics (GA4, Google Ads, Meta Ads, and Search Console) into a centralized, auto-refreshing Looker Studio business intelligence dashboard for stakeholders.",
      technologies: [
        "Looker Studio",
        "GA4",
        "Google Search Console",
        "Meta Ads",
        "Data Studio",
        "KPIs",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "WordPress Performance & Conversion Rate Optimization",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "Comprehensive site architecture and page speed audit achieving 95+ mobile Core Web Vitals scores, integrated Microsoft Clarity behavioral heatmaps, and streamlined single-page checkout flow.",
      technologies: [
        "WordPress",
        "Core Web Vitals",
        "Technical SEO",
        "A/B Testing",
        "Microsoft Clarity",
        "CRO",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Server-Side Tracking & Meta CAPI Infrastructure",
      dates: "2025 - 2026",
      location: "Cloudflare & Stape Ecosystem",
      description:
        "Architected server-side tracking pipelines through custom Cloudflare Worker adapters and Stape GTM containers. Bypassed browser ITP cookie restrictions, achieving near 100% event delivery match rates for Meta Conversion API.",
      image: "",
      links: [],
    },
    {
      title: "30% Attribution Accuracy Boost at Hive Intelligence",
      dates: "2025",
      location: "United States (Remote)",
      description:
        "Audited and restructured multi-channel campaign attribution, establishing unified cross-domain GA4 measurement and eliminating 30%+ in untracked conversions across WordPress marketing sites.",
      image: "",
      links: [],
    },
    {
      title: "Enhanced eCommerce & DataLayer Architecture",
      dates: "2024 - 2026",
      location: "WooCommerce & Shopify",
      description:
        "Engineered full-funnel eCommerce tracking schemas capturing Item View, Add to Cart, Begin Checkout, and Purchase events with dynamic currency and deduplication.",
      image: "",
      links: [],
    },
  ],
} as const;
