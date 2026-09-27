export interface ShowcaseItem {
  id: string;
  number: string;
  title: string;
  category: string;
  industryType?: string;
  role?: string;
  subtitle: string;
  tagline: string;
  description: string;
  statusText: string;
  activePulse?: boolean;
  metricValue?: string;
  metricLabel?: string;
  metricDetail?: string;
  styleDescription: string;
  deliverables: string[];
  tools: string[];
  clients: string[];
  heroImage: string;
  gridImages?: string[];
  aspectRatio: string;
  ctaText: string;
  specCode: string;
  youtubeVideoId?: string;
  reels?: ReelSubItem[];
}

export interface ReelSubItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  thumbnail: string;
  youtubeVideoId?: string;
  tag?: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  number: string;
  featuredColor: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  categoryTag: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  description: string;
}

export interface ToolItem {
  name: string;
  category: string;
  level?: string;
  iconType: string;
}

export const PORTFOLIO_INFO = {
  name: "Prasad Bhangane",
  brandName: "Prasad in Post",
  eyebrow: "VIDEO EDITOR • MOTION DESIGNER",
  heroHeading: "Turning Ideas Into Visual Stories.",
  heroSubheading: "The Story Takes Shape in Post.",
  heroBio:
    "I’m Prasad Bhangane, a Video Editor and Motion Designer creating commercial content, social media videos, brand films, and visual experiences through thoughtful editing and post-production.",
  title: "Video Editor & Motion Designer",
  specialties: "Commercial Editing • Social Content • Motion Design • VFX",
  aboutHeading: "A Visual Mind, Built in Post.",
  aboutBioParagraphs: [
    "I’m Prasad Bhangane, a Video Editor and Motion Designer with experience working across commercial content, real estate, social media, events, and brand communication.",
    "My work combines editing, motion graphics, sound, colour, and visual problem-solving to transform raw footage and creative ideas into purposeful content.",
    "Whether it’s a short-form campaign, a commercial edit, or a complex visual composition, I focus on creating work that communicates clearly and holds attention.",
  ],
  aboutShort:
    "Video Editor & Motion Designer focused on commercial storytelling, social content, motion graphics, and visual post-production.",
  experienceYears: "3+",
  email: "prasadbhangane.edit@gmail.com",
  whatsappUrl:
    "https://wa.me/?text=Hi%20Prasad%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20love%20to%20discuss%20bringing%20it%20to%20life.",
  socials: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  contactHeading: "Let's Create Something Meaningful.",
  contactTagline: "Have footage? Have an idea? Let's build something.",
  contactCopy:
    "Have a project, campaign, or creative idea in mind? Share the details, and let's discuss how I can help bring it to life through editing and post-production.",
  contactButton: "Start a Project",
};

export const FEATURED_BRANDS: ClientBrand[] = [
  { id: "croma", name: "CROMA", number: "01", featuredColor: "#f34100" },
  { id: "arihant", name: "ARIHANT", number: "02", featuredColor: "#5f5e5e" },
  { id: "dsp", name: "DSP PROPERTIES", number: "03", featuredColor: "#f34100" },
  { id: "vastushree", name: "VASTUSHREE", number: "04", featuredColor: "#5f5e5e" },
  { id: "aarambh", name: "AARAMBH", number: "05", featuredColor: "#5f5e5e" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "commercial-editing",
    number: "01",
    title: "Commercial Editing",
    description:
      "Product films, advertisements, and promotional videos shaped through purposeful editing, pacing, and visual storytelling.",
    categoryTag: "Commercial / Brand Ads",
  },
  {
    id: "social-media-content",
    number: "02",
    title: "Social Media Content",
    description:
      "Short-form videos, talking-head edits, and promotional content designed for clarity, rhythm, and audience attention.",
    categoryTag: "Short-Form / Reels",
  },
  {
    id: "motion-design-vfx",
    number: "03",
    title: "Motion Design & VFX",
    description:
      "Motion graphics, compositing, tracking, and visual enhancements that add depth and meaning to footage.",
    categoryTag: "After Effects / VFX",
  },
  {
    id: "corporate-content",
    number: "04",
    title: "Corporate Content",
    description:
      "Professional videos for brands, businesses, internal communication, and corporate storytelling.",
    categoryTag: "Corporate / Brand Films",
  },
  {
    id: "real-estate-visuals",
    number: "05",
    title: "Real Estate Visuals",
    description:
      "Property films, drone-based storytelling, development showcases, and visual content for real estate brands.",
    categoryTag: "Real Estate / Drone",
  },
  {
    id: "event-films",
    number: "06",
    title: "Event Films",
    description:
      "Event recaps, promotional edits, and cinematic highlights that capture atmosphere, energy, and memorable moments.",
    categoryTag: "Event Recaps / Summits",
  },
  {
    id: "talking-head-service",
    number: "07",
    title: "Talking Head",
    description:
      "High-retention talking-head videos, interviews, and vertical reels shaped through clear narrative flow, kinetic typography, and engaging pacing.",
    categoryTag: "Talking Head / Reels",
  },
];

export const SELECTED_PROJECTS: ShowcaseItem[] = [
  {
    id: "croma-commercial",
    number: "01",
    title: "Croma — Commercial Advertisement",
    category: "Commercial Advertisement",
    industryType: "Commercial Advertisement • Retail Tech",
    role: "Video Editing • Post-Production",
    subtitle: "RETAIL TECH • KITCHEN STORIES",
    tagline: "Commercial Product Presentation",
    description:
      "A commercial edit focused on product presentation, visual pacing, and promotional storytelling.",
    statusText: "Featured Campaign • Digital & Broadcast",
    activePulse: true,
    metricValue: "4.2M+",
    metricLabel: "Campaign Impressions",
    metricDetail: "Across digital pre-roll, organic social cutdowns, and showroom visual displays.",
    styleDescription: "Product presentation, visual pacing, and promotional storytelling.",
    deliverables: [
      "4K Master Commercial Edit (16:9)",
      "High-Retention 9:16 Social Cutdowns",
      "Dynamic Lower-Thirds & Sound Design",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve Studio", "After Effects", "iZotope RX"],
    clients: ["Croma Retail", "Kitchen Appliances Campaign"],
    heroImage: "https://img.youtube.com/vi/VtGwFmzPPxo/maxresdefault.jpg",
    aspectRatio: "16:9 / 9:16",
    ctaText: "Discuss Commercial Edit",
    specCode: "SPEC // 01-CROMA",
    youtubeVideoId: "VtGwFmzPPxo",
  },
  {
    id: "nirvana-progress-display",
    number: "02",
    title: "Nirvana — Progress Display Video",
    category: "Progress Display Video",
    industryType: "Real Estate • Property Development",
    role: "Video Editing • Animation",
    subtitle: "CONSTRUCTION PROGRESS • DISPLAY FILM",
    tagline: "Fast-Paced Visual Storytelling",
    description:
      "A dynamic construction progress display video designed to showcase the transformation of an under-construction development through fast-paced visual storytelling, rapid cuts, speed ramps, and 3D text animation.",
    statusText: "Progress Showcase • 4K Master",
    activePulse: true,
    metricValue: "Dynamic Pacing",
    metricLabel: "Speed Ramps & 3D Animation",
    metricDetail: "Combines rapid cuts, time-remapping, construction footage, and 3D text animation to communicate project progress.",
    styleDescription: "Rapid cuts, time-remapping, speed ramps, and motion-driven 3D text animation.",
    deliverables: [
      "Construction Progress Display Film (16:9)",
      "Speed Ramping & Time Remapping Cuts",
      "3D Text Animation & Motion Graphics",
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    clients: ["Nirvana Development", "Real Estate & Property Development"],
    heroImage: "https://img.youtube.com/vi/qw7p89MyOiA/maxresdefault.jpg",
    aspectRatio: "16:9",
    ctaText: "Discuss Display Edit",
    specCode: "SPEC // 02-NIRVANA",
    youtubeVideoId: "qw7p89MyOiA",
  },
  {
    id: "drone-3d-wayfinding",
    number: "03",
    title: "Drone + 3D Wayfinding",
    category: "Real Estate Visuals",
    industryType: "Real Estate • Architectural Navigation",
    role: "Video Editing • Motion Design • VFX",
    subtitle: "AERIAL CINEMATOGRAPHY • 3D TRACKING",
    tagline: "Location & Spatial Navigation",
    description:
      "A property-focused visual combining drone footage, 3D tracking, and motion graphics to communicate location and navigation.",
    statusText: "Architectural Showcase • 4K Spec",
    activePulse: true,
    metricValue: "3D Tracking",
    metricLabel: "Camera Match & Wayfinding",
    metricDetail: "Seamlessly anchored navigation pins and boundary callouts in motion.",
    styleDescription: "Drone footage integration, 3D camera tracking, and clean graphic callouts.",
    deliverables: [
      "Aerial Master with Integrated 3D Callouts",
      "Key Landmark & Proximity Animation",
      "Smooth Horizon Motion Stabilization",
    ],
    tools: ["After Effects 3D Camera Tracker", "Premiere Pro", "DaVinci Resolve"],
    clients: ["Arihant Real Estate", "DSP Properties", "Township Planners"],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ScdGes8FK3ndX02qk9_-lhS_JcKuJFiKEDMfEg66jfhwBJqsv3lbSgYg8T4UCs_AUxMz_7HV5znRf0xU1i0dhn36Y3N9ocv_SX9pOawhg2oFHhH7_hn5wueaVvJD_ngu5x1xWzQWu3eMQ5e2Vl6BDnCYsXBRkPDOQf2CUKQuoO2GrxwTwFEe-dxD_9CvWgc5YxyIP4tzh3UJxhgVbRh2zCya0cRbhjUlv7X8u50MUUoMgYMz77dlW2mj8j7exrHhzA",
    aspectRatio: "16:9",
    ctaText: "Discuss Drone Project",
    specCode: "SPEC // 03-AERIAL",
  },
  {
    id: "display-teaser-launch",
    number: "04",
    title: "Display — Teaser Launch",
    category: "Project Launch Teaser",
    industryType: "Real Estate • Project Launch",
    role: "Sound Design • 3D Animation • Video Editing",
    subtitle: "ARIHANT DOWNTOWN • PREMIUM LAUNCH",
    tagline: "Cinematic & Visually Immersive Presentation",
    description:
      "A premium launch teaser created for Arihant Downtown, designed to build anticipation around the upcoming development through a cinematic and visually immersive presentation.",
    statusText: "Launch Campaign • 4K Master",
    activePulse: true,
    metricValue: "3D Animation",
    metricLabel: "Launch Teaser Experience",
    metricDetail: "Combines 3D animation, motion design, video editing, and dynamic typography.",
    styleDescription: "3D animation, motion design, video editing, and carefully paced visual transitions.",
    deliverables: [
      "Cinematic Project Launch Teaser (16:9)",
      "3D Architecture Animation & Motion Design",
      "Dynamic Typography & Spatial Sound Design",
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    clients: ["Arihant Downtown", "Real Estate & Property Development"],
    heroImage: "https://img.youtube.com/vi/jXdRHswaIIA/maxresdefault.jpg",
    aspectRatio: "16:9",
    ctaText: "Discuss Teaser Launch",
    specCode: "SPEC // 04-LAUNCH",
    youtubeVideoId: "jXdRHswaIIA",
  },
  {
    id: "event-film",
    number: "05",
    title: "Event Film",
    category: "Event Film",
    industryType: "Events & Summits • Cinematic Recap",
    role: "Video Editing • Motion Design • VFX",
    subtitle: "ATMOSPHERIC HIGHLIGHTS • AFTERMOVIE",
    tagline: "Rhythm & Momentum",
    description:
      "An energetic event edit built around rhythm, atmosphere, movement, and memorable moments.",
    statusText: "Festival & Summit Recap",
    activePulse: true,
    metricValue: "48h",
    metricLabel: "Turnaround Delivery",
    metricDetail: "Fast-delivery highlight edit delivered ready for social buzz.",
    styleDescription: "Rhythm, atmosphere, kinetic motion, and emotional peak pacing.",
    deliverables: [
      "Cinematic Event Aftermovie (16:9)",
      "High-Energy 9:16 Social Cutdowns",
      "Spatial Sound Design & Speed Ramps",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    clients: ["Exhibitions & Events", "Summits & Expos", "Brand Conclaves"],
    heroImage: "https://img.youtube.com/vi/anMmemjj1eE/maxresdefault.jpg",
    aspectRatio: "16:9",
    ctaText: "Discuss Event Film",
    specCode: "SPEC // 05-EVT",
    youtubeVideoId: "anMmemjj1eE",
  },
  {
    id: "talking-head",
    number: "06",
    title: "Talking Head",
    category: "Talking Head / Short-Form",
    industryType: "Short-Form Content • Talking Head",
    role: "Video Editing • Post-Production • Typography",
    subtitle: "SHORT-FORM REELS • HOOKS & PACING",
    tagline: "High-Retention Talking Head Storytelling",
    description:
      "A curated collection of high-retention short-form reels and talking-head property showcases, edited with audio-driven rhythm, supporting B-roll, motion graphics, and dynamic visual pacing.",
    statusText: "Short-Form Series • 9:16 Vertical",
    activePulse: true,
    metricValue: "9:16 Format",
    metricLabel: "High-Retention Editing",
    metricDetail: "Audio-driven pacing, supporting B-roll, and talking-head storytelling.",
    styleDescription: "Audio-driven rhythm, kinetic typography, punch-ins, and retention-driven sound design.",
    deliverables: [
      "High-Energy Event Reels (9:16)",
      "Talking-Head Real Estate Walkthroughs",
      "Motion Graphics, Captions & B-Roll Overlays",
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    clients: ["DSP Properties", "HYROX Mumbai", "Creators & Brands"],
    heroImage: "https://img.youtube.com/vi/qyOEJiRKJBA/maxresdefault.jpg",
    reels: [
      {
        id: "reel-hyrox",
        title: "HYROX Mumbai Reel",
        subtitle: "High-Energy Event Highlight",
        description:
          "A high-energy event reel from HYROX Mumbai, edited to highlight the intensity, movement, and atmosphere of the competition through audio-driven pacing and visual rhythm.",
        thumbnail: "https://img.youtube.com/vi/cLnuCnK02RY/maxresdefault.jpg",
        youtubeVideoId: "cLnuCnK02RY",
        tag: "01",
      },
      {
        id: "reel-dsp-broker",
        title: "DSP Properties Broker",
        subtitle: "Talking Head Real Estate",
        description:
          "A talking-head real estate reel where the broker takes viewers through the property, highlighting its key features, amenities, and overall lifestyle offering with clean pacing and motion graphics.",
        thumbnail: "https://img.youtube.com/vi/qyOEJiRKJBA/maxresdefault.jpg",
        youtubeVideoId: "qyOEJiRKJBA",
        tag: "02",
      },
      {
        id: "reel-walkthrough",
        title: "Property Walkthrough",
        subtitle: "Real Estate Showcase",
        description:
          "A talking-head real estate reel where the broker takes viewers through the property, highlighting key amenities and architectural features through clear narrative flow and engaging pacing.",
        thumbnail: "https://img.youtube.com/vi/Q86l6qp78i8/maxresdefault.jpg",
        youtubeVideoId: "Q86l6qp78i8",
        tag: "03",
      },
    ],
    aspectRatio: "9:16",
    ctaText: "Discuss Talking Head",
    specCode: "SPEC // 06-TALK",
    youtubeVideoId: "qyOEJiRKJBA",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "100Billion Tech",
    role: "Video Editor & Graphic Designer",
    description:
      "Creating video content and visual communication assets for a technology business, including promotional content, social media creatives, and brand-focused design.",
  },
  {
    company: "6S Marketers",
    role: "Video Editor",
    description:
      "Editing short-form and promotional content with a focus on pacing, storytelling, visual consistency, and platform-ready delivery.",
  },
  {
    company: "The Blind Whale",
    role: "Video Editor — Contract",
    period: "3-Month Contract",
    description:
      "Edited high-retention real estate showcases and talking-head videos on a 3-month contract engagement, focusing on narrative pacing, visual hooks, and social-first delivery.",
  },
];

export const TOOLS_LIST: ToolItem[] = [
  {
    name: "Adobe Premiere Pro",
    category: "Timeline & Narrative Editing",
    level: "Core Tool",
    iconType: "pr",
  },
  {
    name: "Adobe After Effects",
    category: "Motion Graphics, VFX & 3D Tracking",
    level: "Core Tool",
    iconType: "ae",
  },
  {
    name: "Adobe Photoshop",
    category: "Visual Manipulation & Clean Plates",
    level: "Design & VFX",
    iconType: "ps",
  },
];

// Backwards-compatible alias for existing imports
export const SHOWCASES = SELECTED_PROJECTS;
