import { Package } from "@/types/type";

export const services = [
  {
    name: "Signature Ritual",
    duration: 75,
    services: [
      "Grounding breathing ritual on arrival",

      "Warm botanical oil full-body massage",

      "Slow, rhythmic pressure to calm the nervous system",

      "Heated towel wrap for deep relaxation",

      "Closing moment of stillness with herbal tea",
    ],
  },
  {
    name: "Stillness facial",
    duration: 60,
    services: [
      "Gentle double cleanse with calming botanicals",

      "Light exfoliation to refresh the skin",

      "Hydrating mask with facial massage",

      "Scalp and temple massage",

      "Cooling stone application to reduce tension",
    ],
  },
  {
    name: "Deep release massage",
    duration: 90,
    services: [
      "Personalized pressure consultation",

      "Targeted deep muscle work",

      "Slow stretching to improve mobility",

      "Warm compress on tension areas",

      "Grounding breathwork to close the session",
    ],
  },
  {
    name: "Aora body reset",
    duration: 60,
    services: [
      "Custom essential oil selection",

      "Full-body aromatherapy massage",

      "Focused lymphatic stimulation",

      "Gentle exfoliating mitt application",

      "Rest period wrapped in warm linens",
    ],
  },
  {
    name: "Quiet mind Ritual",
    duration: 45,
    services: [
      "Guided breathing and body awareness",

      "Scalp, neck, and shoulder massage",

      "Aromatic inhalation therapy",

      "Gentle pressure-point work",

      "Silent rest with soft ambient sound",
    ],
  },
];

export const galleryImages: string[] = [];

Array.from({ length: 9 }).forEach((item, i) => {
  galleryImages.push(`/images/home/gallery${i + 1}.jpg`);
});

export const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "shop",
    href: "/shop",
  },
  {
    title: "services",
    href: "/#services",
  },
  {
    title: "gallery",
    href: "/#gallery",
  },
  {
    title: "contact",
    href: "/",
  },
];

const packages = [
  {
    title: "Hikari Ritual",
    price: 92,
    duration: 60,
    description:
      "A brightening facial and gentle massage designed to restore clarity, hydration, and a natural, healthy glow.",
    services: [""],
  },
  {
    title: "Mizu Renewal",
    price: 115,
    duration: 90,
    description:
      "A full-body massage and hydrating facial inspired by water’s calming flow, leaving the body relaxed and refreshed.",
    services: [""],
  },
  {
    title: "Tsuki Restorative",
    price: 189,
    duration: 120,
    description:
      "A deeply calming experience combining massage, facial care, and aromatherapy for complete mind and body restoration.",
    services: [""],
  },
  {
    title: "Kaze Balance",
    price: 168,
    duration: 75,
    description:
      "Light, flowing massage techniques paired with soothing oils to release tension and restore natural balance.",
    services: [""],
  },
];

export const allPackages: Package[] = [];

packages.forEach((item, i) => {
  allPackages.push({ ...item, image: `/images/home/package${i + 1}.jpg` });
});
