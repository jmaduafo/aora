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

export const frequent_questions = [
    {
        question: "Do I need to make a reservation in advance?",
        answer: "Yes. We recommend reserving in advance to ensure availability and to allow us to prepare your experience with intention."
    },
    {
        question: "What should I arrive with for my appointment?",
        answer: "Simply arrive a few minutes early and bring yourself. Everything you need for your treatment is provided by AORA."
    },
    {
        question: "Can I customize my treatment or package?",
        answer: "Yes. Our therapists are happy to tailor your experience to your preferences and comfort during your visit."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We kindly ask for at least 24 hours’ notice for cancellations or rescheduling to accommodate other guests."
    },
    {
        question: "Are your products suitable for sensitive skin?",
        answer: "Our products are formulated with gentle, thoughtfully selected ingredients. If you have sensitivities, please let us know in advance."
    },
    {
        question: "Can I purchase products after my treatment?",
        answer: "Yes. Our skincare and wellness products are available to purchase and are designed to extend your AORA experience at home."
    },
    {
        question: "Is AORA suitable for first-time spa guests?",
        answer: "Absolutely. Our space is designed to feel welcoming and restorative, whether it’s your first visit or part of a regular ritual."
    },
]

export const socials = [
    {
        title: "instagram",
        href: "",
    },
    {
        title: "tiktok",
        href: ""
    },
    {
        title: "linkedin",
        href: ""
    },
    {
        title: "facebook",
        href: ""
    },
]

export const legal = [
    {
        title: "terms & conditions",
    },
    {
        title: "privacy policy",
    },
    {
        title: "cookies policy",
    },
    
]

export const contact = [
    {
        title: "123 Hydrate Drive",
    },
    {
        title: "Chicago, Illinois",
    },
    {
        title: "(123) 456 7890",
    },
    
]