import {
  TrendingUp,
  Share2,
  Youtube,
  Sparkles,
  Megaphone,
  Code2,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Experts", href: "#experts" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Comments", href: "#comments" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};
export const services: Service[] = [
  {
    id: "ai-video-generation",
    title: "AI Video Generation",
    description:
      "Create high-quality AI-generated videos for marketing, business promotion, and social media content.",
    icon: Sparkles,
    link: "https://ai-video-generation-pw41.vercel.app/",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description:
      "Launch high-converting Facebook and Instagram advertising campaigns to maximize ROI.",
    icon: Megaphone,
    link: "https://meta-ads-agency-nine.vercel.app/",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Build your brand and engage your audience across all social media platforms.",
    icon: Share2,
    link: "https://social-promo-ten.vercel.app/",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Develop modern, responsive, SEO-friendly, and high-performance websites using the latest technologies.",
    icon: Code2,
    link: "https://selected-web-development-ocfg.vercel.app/",
  },
  {
    id: "app development",
    title: "app development",
    description:
      "Boost your online presence using data-driven digital marketing strategies.",
    icon: TrendingUp,
    link: "https://app-development-oxos-eight.vercel.app/",
  },
  {
    id: "youtube-automation",
    title: "YouTube Automation",
    description:
      "Professional YouTube automation including niche research, scripting, editing, SEO, thumbnails, and channel management.",
    icon: Youtube,
    link: "https://youtube-automation-oyry.vercel.app/",
  },
];

export const heroFloatingServices = [
  { label: "AI Video Generation", icon: Sparkles },
  { label: "Meta Ads", icon: Megaphone },
  { label: "Social Media Marketing", icon: Share2 },
  { label: "Web Development", icon: Code2 },
  { label: "App Development", icon: TrendingUp },
  { label: "YouTube Automation", icon: Youtube },
];

export const heroHighlights = [
  "Result Driven",
  "Expert Team",
  "24/7 Support",
  "On-Time Delivery",
];

export type TeamMember = {
  name: string;
  position: string;
  photo: string;
  linkedin: string;
  facebook: string;
  email: string;
};

export const team: TeamMember[] = [
  {
    name: "Maryam Zafar",
    position: "Web Developer",
    photo: "/team/maryam.jpg",
    linkedin: "#",
    facebook: "#",
    email: "mailto:maryam@promofusion.agency",
  },
  {
    name: "Ali Fazil",
    position: "Social Media Expert",
    photo: "/team/member-1.jpg",
    linkedin: "#",
    facebook: "#",
    email: "mailto:ali@promofusion.agency",
  },
  {
    name: "Waqar Younis",
    position: "CEO & Founder",
    photo: "/team/member-5.jpg",
    linkedin: "#",
    facebook: "#",
    email: "mailto:waqar@promofusion.agency",
  },
  {
    name: "Qurat ul Ain",
    position: "WordPress Expert",
    photo: "/team/member-6.jpg",
    linkedin: "#",
    facebook: "#",
    email: "mailto:quratulain@promofusion.agency",
  },
  {
    name: "Zain",
    position: "Meta Expert",
    photo: "/team/member-2.jpg",
    linkedin: "#",
    facebook: "#",
    email: "mailto:zain@promofusion.agency",
  },
  {
    name: "Zarnab Awan",
    position: "General Manager",
    photo: "/team/member-7.jpeg",
    linkedin: "#",
    facebook: "#",
    email: "mailto:zarnab@promofusion.agency",
  },
    {
    name: "Misbah Gull",
    position: "Ai video editor",
    photo: "/team/member-8.png",
    linkedin: "#",
    facebook: "#",
    email: "mailto:zarnab@promofusion.agency",
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export type Testimonial = {
  name: string;
  company: string;
  photo: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hassan Raza",
    company: "Founder, Northline Retail",
    photo: "https://i.pravatar.cc/200?img=8",
    rating: 5,
    review:
      "PromoFusion completely transformed our online presence. Their team delivered beyond expectations.",
  },
  {
    name: "Meera Iqbal",
    company: "CEO, Iqbal & Co.",
    photo: "https://i.pravatar.cc/200?img=45",
    rating: 5,
    review:
      "The website is fast, modern, and helped us generate more leads.",
  },
  {
    name: "Omar Farooq",
    company: "Marketing Head, Farooq Textiles",
    photo: "https://i.pravatar.cc/200?img=15",
    rating: 5,
    review:
      "Professional communication, creative ideas, and outstanding support throughout the project.",
  },
];

export const trustedCompanies = [
  "Google",
  "Microsoft",
  "Meta",
  "Amazon",
  "Adobe",
  "Shopify",
  "IBM",
  "Netflix",
  "Stripe",
  "Upwork",
];

export const serviceOptions = services.map((s) => s.title);
