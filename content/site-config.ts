// ============================================================
// site-config.ts — single source of truth for all copy + brand
// Velocity Racing — professional Formula / open-wheel racing team
// ============================================================

export const siteConfig = {
  company: {
    name: "Velocity Racing",
    tagline: "Engineered to win",
    description:
      "Velocity Racing is a professional open-wheel team competing on the world's greatest circuits — fusing aerodynamic precision, powertrain engineering and relentless data to put cars on the podium.",
    email: "team@velocityracing.com",
    phone: "+44 20 7946 0212",
    location: "Silverstone, UK · Racing worldwide",
  },

  brand: {
    primary: "#1F3252",
    accent: "#1F3252",
    bg: "#FAF6EE",
    ink: "#0E1C33",
    surface: "#E8DFCF",
  },

  typography: {
    display: "Archivo Black",
    body: "Inter",
    mono: "ui-monospace",
  },

  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://velocityracing.com",
    locale: "en_GB",
    htmlLang: "en",
    defaultTitle: "Velocity Racing — Engineered to win",
    defaultDescription:
      "Professional open-wheel racing team. Aerodynamics, powertrain, data and driver development engineered for the podium across the global championship.",
    twitterHandle: "@velocityracing",
    noindexPaths: ["/api"],
  },

  socials: {
    instagram: "https://instagram.com/velocityracing",
    twitter: "https://twitter.com/velocityracing",
    facebook: "",
    linkedin: "https://linkedin.com/company/velocityracing",
    youtube: "https://youtube.com/@velocityracing",
    tiktok: "https://tiktok.com/@velocityracing",
    whatsapp: "",
  },

  hero: {
    h1: [
      { text: "Built for", accent: false },
      { text: "the limit", accent: true },
    ],
  },

  tagline: "Engineered to win",

  // -- Hero scrub chapters (fed inline to HeroScrollText over ScrollCanvas) --
  heroChapters: [
    {
      at: 0,
      eyebrow: "Velocity Racing",
      headlineLines: ["Engineered", "to win"],
      subline:
        "An open-wheel team built around one obsession — finding time the rest of the grid can't.",
    },
    {
      at: 0.34,
      eyebrow: "Aero · Powertrain · Data",
      headlineLines: ["Every gram,", "every degree"],
      subline:
        "Thousands of CFD iterations and dyno hours distilled into a single perfect lap.",
    },
    {
      at: 0.62,
      eyebrow: "Race weekend",
      headlineLines: ["When it", "matters most"],
      subline:
        "Sub-two-second stops, live telemetry and split-second calls under the lights.",
    },
    {
      at: 0.85,
      eyebrow: "Join the team",
      headlineLines: ["Chase the", "apex with us"],
      cta: { label: "Partner with Velocity", href: "/contact" },
    },
  ],

  servicesHeading: "What we engineer",

  services: [
    {
      name: "Race Operations",
      slug: "race-operations",
      description:
        "Trackside command of every session — strategy, pit-wall calls and a sub-two-second crew that turns hundredths into positions.",
      highlights: [
        "Live race strategy & undercut modelling",
        "Sub-2.0s choreographed pit stops",
        "Tyre, fuel and degradation management",
        "Global logistics across 20+ circuits",
      ],
    },
    {
      name: "Aerodynamics & Design",
      slug: "aerodynamics",
      description:
        "A wind-tunnel and CFD programme that sculpts downforce from every surface, from front wing endplate to diffuser.",
      highlights: [
        "60% scale wind-tunnel correlation",
        "Thousands of CFD iterations per spec",
        "Floor, diffuser & wing development",
        "Track-specific aero packages",
      ],
    },
    {
      name: "Powertrain Engineering",
      slug: "powertrain",
      description:
        "Hybrid power units optimised on the dyno for peak horsepower, energy recovery and bulletproof reliability over a race distance.",
      highlights: [
        "Hybrid ERS deployment mapping",
        "Combustion & thermal efficiency gains",
        "Endurance-validated reliability",
        "Energy recovery under braking",
      ],
    },
    {
      name: "Driver Development",
      slug: "driver-development",
      description:
        "A junior-to-senior pathway pairing simulator science with human-performance coaching to build complete racing drivers.",
      highlights: [
        "Professional-grade simulator programme",
        "Human performance & G-load training",
        "Race-craft and overtaking analysis",
        "Junior academy to race seat",
      ],
    },
    {
      name: "Data & Telemetry",
      slug: "data-telemetry",
      description:
        "Hundreds of sensors stream a million data points per lap into models that find time no stopwatch ever could.",
      highlights: [
        "300+ on-car sensor channels",
        "Real-time telemetry to the pit wall",
        "Predictive lap-time modelling",
        "Driver feedback correlation loops",
      ],
    },
    {
      name: "Commercial Partnerships",
      slug: "partnerships",
      description:
        "Title, technical and engineering partnerships that put brands on the fastest moving billboard in global sport.",
      highlights: [
        "Title & technical partner programmes",
        "Trackside hospitality & paddock access",
        "Co-branded engineering R&D",
        "Global broadcast exposure",
      ],
    },
  ],

  rooms: [] as Array<unknown>,
  locations: [] as Array<unknown>,
  gallery: [] as Array<unknown>,

  whyUs: {
    heading: "Why Velocity",
    items: [
      {
        title: "Marginal gains, relentlessly",
        description:
          "We treat a tenth of a second like a championship. Every department chases time others leave on the table.",
      },
      {
        title: "One team, one telemetry stream",
        description:
          "Aero, powertrain and strategy work from the same live data — no silos between the tunnel and the pit wall.",
      },
      {
        title: "Engineered for the long game",
        description:
          "Outright pace means nothing without reliability. Our specs are validated to finish, not just to qualify.",
      },
      {
        title: "Built to develop talent",
        description:
          "From junior academy to race seat, we build drivers and engineers the same way we build cars — deliberately.",
      },
    ],
  },

  process: [
    {
      step: 1,
      title: "Analyse",
      description:
        "Strip every circuit and session to its data — corners, kerbs, temps and degradation — before a wheel turns.",
    },
    {
      step: 2,
      title: "Engineer",
      description:
        "Set up car, aero package and power-unit maps to the track, then validate it all in the simulator.",
    },
    {
      step: 3,
      title: "Execute",
      description:
        "Run the weekend on the pit wall — strategy, stops and live calls that convert preparation into positions.",
    },
    {
      step: 4,
      title: "Iterate",
      description:
        "Debrief every lap, feed the learning back into the next spec, and arrive at the next round quicker.",
    },
  ],

  aboutHeading: "A team measured in tenths",
  aboutStory:
    "Velocity Racing was founded on a simple belief — that races are won in the details nobody else bothers to chase. From a Silverstone technical base, our engineers, strategists and mechanics operate as a single instrument, taking the car from the wind tunnel to the grid and back again every fortnight. We've turned that obsession with marginal gains into podiums on five continents, and we're only just reaching the apex.",
  manifesto:
    "Speed is not given. It is engineered, lap after lap, until the limit moves.",
  values: [
    {
      title: "Precision",
      description:
        "Every component, call and corner is measured. If it can't be measured, we find a way to measure it.",
    },
    {
      title: "Courage",
      description:
        "Championships reward the bold. We commit to the brave strategy when the data backs it.",
    },
    {
      title: "Craft",
      description:
        "A racing car is built by hand and mind together. We hold the bar where pride lives, not where rules end.",
    },
    {
      title: "Unity",
      description:
        "Forty people, one lap time. The driver is only ever as fast as the team behind the wall.",
    },
  ],

  work: [] as Array<{
    title: string;
    client: string;
    service: string;
    result: string;
  }>,

  stats: [
    { value: "48", label: "Podiums" },
    { value: "19", label: "Race wins" },
    { value: "23", label: "Pole positions" },
    { value: "3", label: "Championships" },
    { value: "1.9s", label: "Fastest pit stop" },
    { value: "352", label: "Top speed km/h" },
    { value: "11", label: "Lap records" },
    { value: "140", label: "Grands prix" },
    { value: "6", label: "Car projects" },
    { value: "40", label: "Team members" },
  ],

  features: [
    {
      title: "The car is the sum of its data.",
      description:
        "A million data points a lap turn instinct into evidence. We engineer the machine, then let the numbers find the last tenth.",
    },
    {
      title: "Wind-tunnel correlation",
      description:
        "60% scale models validated against the real car so the downforce we design is the downforce we get.",
    },
    {
      title: "Hybrid power, deployed",
      description:
        "Energy recovery and deployment mapped corner by corner for maximum punch out of every apex.",
    },
    {
      title: "Pit wall to apex",
      description:
        "Live telemetry links the strategists and the driver into one decision-making loop at 300 km/h.",
    },
  ],

  sectionThemeWord: "Velocity",

  narrative: [] as Array<{ speaker: string; text: string }>,

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "The Outcome",
    accentLine: "Speed is not given. It is engineered.",
  },

  cta: {
    primary: "Partner with us",
    secondary: "Explore the team",
  },

  ctaBlock: {
    heading: "Let's chase the apex.",
    description:
      "Whether you're a brand seeking the fastest billboard in sport or a driver chasing a seat, the conversation starts here.",
  },

  trustBar: [
    "20+ circuits",
    "5 continents",
    "FIA-grade engineering",
    "Carbon-neutral freight",
  ],

  scrollHero: {
    archetype: "G" as const,
    gRenderMode: "scrub-cinematic" as const,
    styleId: "S-motorsport-editorial",
    assetMode: "live-generate" as "live-generate" | "prompt-only",
    imageUrl: "",
    frameCount: 1,
    scrollDistance: 6,
    framePattern: "/frames/frame-{NNNN}.jpg",
    loadingLabel: "Warming the tyres",
    loadingVariant: "L1" as const,
  },

  headerVariant: "pill-floating" as const,
  footerVariant: "FT2" as const,
  sceneVariant: "SC2" as const,
  loadingVariant: "L1" as const,

  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "high" as "low" | "medium" | "high",
  },
} as const;

export type SiteConfig = typeof siteConfig;
