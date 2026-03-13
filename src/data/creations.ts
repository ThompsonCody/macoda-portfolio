export type Creation = {
  title: string;
  slug: string;
  category: string;
  image: string;
  alt: string;
  excerpt: string;
  featured: boolean;
  year?: string;
  body: string[];
  link?: string;
  gallery?: {
    image: string;
    alt: string;
  }[];
};

export const creations: Creation[] = [
  {
    title: "Power Tree Werx",
    slug: "power-tree-werx",
    category: "Brand Identity",
    image: "/images/power-tree-werx.png",
    alt: "Power Tree Werx branding mockup",
    excerpt:
      "A grounded arborist brand identity and lightweight marketing site built to give a local business a strong online presence.",
    featured: true,
    year: "2026",
    link: "https://treewerx.netlify.app/",
    body: [
      "I originally set out to experiment with building an Astro-based theme, and realized that a friend’s arborist company no longer had a functioning website. Their business directory listing even linked to a dead page. Many local service businesses still generate enough word-of-mouth work that maintaining a traditional website doesn’t always feel worthwhile, especially if it isn’t producing clear returns.",
      "Since I needed a project idea, I decided to build and gift them a simple, no – hassle online presence – essentially a single-page brand site that functions like an enhanced digital business card.",
      "The site was built using Astro and modular components, and is hosted on Netlify to keep it lightweight and cost-free to maintain. The layout is composed of reusable sections (Hero, Services, Gallery, Service Area, and Contact) wrapped in a shared base layout for consistency and maintainability. Images are handled through Astro’s asset pipeline with lazy loading, while the “Recent Work” gallery uses a small custom JavaScript lightbox to allow visitors to view project photos in more detail.",
      "Styling is implemented with modern CSS variables and grid layouts, creating a responsive interface that adapts cleanly across desktop and mobile devices. A Google Maps integration visually communicates the company’s service area across the Shuswap region.",
      "The project emphasizes performance, simplicity, and maintainable component structure for a small local business site.",
      "The site is still being finalized, but will soon be fully deployed and indexed."
    ],
    gallery: [
      {
        image: "/images/power-tree-werx.png",
        alt: "Power Tree Werx branding and website work"
      }
    ]
  },
  {
    title: "Cargo Reliant",
    slug: "cargo-reliant",
    category: "Brand Identity",
    image: "/images/cargo-reliant.jpg",
    alt: "Cargo Reliant truck branding mockup",
    excerpt:
      "Brand identity work for Cargo Reliant, focused on durable visual presence and practical recognition.",
    featured: true,
    year: "2024",
    body: [
      "Cargo Reliant was developed as a brand identity project centered on clarity, dependability, and presence across working vehicles and applied business materials.",
      "The visual direction aimed to balance utility with recognizability, using a mark and typography system that could remain legible and confident across real-world surfaces.",
      "This project reflects my interest in practical branding that still retains a distinct personality."
    ],
    gallery: [
      {
        image: "/images/cargo-reliant.jpg",
        alt: "Cargo Reliant branding on truck"
      }
    ]
  },
  {
    title: "Kahnawake",
    slug: "kahnawake",
    category: "Symbol Design",
    image: "/images/kahnawake.png",
    alt: "Kahnawake symbol design work",
    excerpt:
      "Symbol development work focused on shape language, heritage resonance, and emblematic clarity.",
    featured: true,
    year: "2024",
    body: [
      "Kahnawake was approached as a symbol design exercise where structure, symmetry, and symbolic readability were central concerns.",
      "The project involved refining the mark so that it could function both as a standalone emblem and within broader identity applications.",
      "My symbol work often sits between illustration and identity design, with emphasis on resonance as much as recognition."
    ],
    gallery: [
      {
        image: "/images/kahnawake.png",
        alt: "Kahnawake symbol artwork"
      }
    ]
  },
  {
    title: "Ansuz Om",
    slug: "ansuz-om",
    category: "Symbol Design",
    image: "/images/ansuz-om.jpg",
    alt: "Ansuz Om symbol design artwork",
    excerpt:
      "A symbolic composition blending spiritual sign systems with an ornamental visual language.",
    featured: true,
    year: "2024",
    body: [
      "Ansuz Om combines symbolic motifs into a vertically composed mark intended to feel both sacred and graphic.",
      "The work explores how symbols from different traditions can be arranged into a coherent visual statement without losing their contemplative quality.",
      "This piece sits within my broader interest in symbolic language, synthesis, and spiritually inflected design."
    ],
    gallery: [
      {
        image: "/images/ansuz-om.jpg",
        alt: "Ansuz Om symbol artwork"
      }
    ]
  },
  {
    title: "Panboo Bamboo Treats",
    slug: "panboo-bamboo-treats",
    category: "Brand Identity",
    image: "/images/panboo-bamboo-treats.jpg",
    alt: "Panboo Bamboo Treats design artwork",
    excerpt:
      "A playful brand concept built around charm, recognizability, and a distinctive product-facing visual identity.",
    featured: false,
    year: "2024",
    body: [
      "Panboo Bamboo Treats was approached as a branding exercise focused on character, packaging friendliness, and visual memorability.",
      "The project explores how a softer, more playful tone can still maintain structure and clarity across brand touchpoints.",
      "It sits within the identity side of my portfolio, where concept, naming tone, and visual language are developed together."
    ],
    gallery: [
      {
        image: "/images/panboo-bamboo-treats.jpg",
        alt: "Panboo Bamboo Treats branding artwork"
      }
    ]
  },
  {
    title: "Midnight Sun",
    slug: "midnight-sun",
    category: "Illustration",
    image: "/images/midnight-sun.jpg",
    alt: "Midnight Sun symbolic illustration",
    excerpt:
      "A symbolic illustration exploring atmosphere, mythic landscape, and the tension between darkness and illumination.",
    featured: false,
    year: "2024",
    body: [
      "Midnight Sun explores symbolic landscape and atmosphere through a dreamlike composition of tree, shoreline, moonlight, and animal presence.",
      "The piece draws on mythic and contemplative themes, using environment as an emotional and symbolic field rather than a purely literal setting.",
      "Much of my illustration work is concerned with the unseen dimensions of place, memory, and inner narrative."
    ],
    gallery: [
      {
        image: "/images/midnight-sun.jpg",
        alt: "Midnight Sun illustration detail"
      }
    ]
  },
  {
    title: "Taza Berlin Doner",
    slug: "taza-berlin-doner",
    category: "Brand Identity",
    image: "/images/taza-berlin-doner.png",
    alt: "Taza Berlin Doner branding",
    excerpt:
      "Identity exploration for a food brand, balancing boldness, readability, and commercial personality.",
    featured: false,
    year: "2024",
    body: [
      "Taza Berlin Doner was developed around the need for a memorable food-facing brand expression with strong recognizability and street-level clarity.",
      "The visual direction leans into bold presentation while keeping the brand system usable across signage, print, and promotional contexts.",
      "This kind of project highlights the overlap between applied branding and visual storytelling."
    ],
    gallery: [
      {
        image: "/images/taza-berlin-doner.png",
        alt: "Taza Berlin Doner branding artwork"
      }
    ]
  },
  {
    title: "Houssey Cafe+Kitchen+Lounge",
    slug: "houssey-cafe-kitchen-lounge",
    category: "Brand Identity",
    image: "/images/houssey-cafe-kitchen-lounge.png",
    alt: "Houssey Cafe+Kitchen+Lounge branding",
    excerpt:
      "A hospitality-oriented identity concept designed to feel warm, social, and visually cohesive across applications.",
    featured: false,
    year: "2024",
    body: [
      "Houssey Cafe+Kitchen+Lounge was approached as a hospitality branding project where atmosphere and identity needed to work together.",
      "The design language aimed to support a welcoming, lifestyle-oriented feel while still functioning clearly across practical brand materials.",
      "Projects like this help explore how branding can shape mood as much as recognition."
    ],
    gallery: [
      {
        image: "/images/houssey-cafe-kitchen-lounge.png",
        alt: "Houssey Cafe Kitchen Lounge branding artwork"
      }
    ]
  },
  {
    title: "Truck Hunt",
    slug: "truck-hunt",
    category: "Brand Identity",
    image: "/images/truck-hunt.png",
    alt: "Truck Hunt branding",
    excerpt:
      "A concept-led identity built around utility, recognition, and strong commercial presentation.",
    featured: false,
    year: "2024",
    body: [
      "Truck Hunt explores branding through a more commercial and utilitarian lens, focusing on instant readability and a clear, direct visual tone.",
      "The identity was developed to feel robust and functional while still retaining a specific character.",
      "It forms part of a broader body of work examining how bold applied identities behave across real-world surfaces and formats."
    ],
    gallery: [
      {
        image: "/images/truck-hunt.png",
        alt: "Truck Hunt branding artwork"
      }
    ]
  }
];