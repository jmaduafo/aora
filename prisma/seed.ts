import { PrismaClient } from "@/app/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  const face = await prisma.category.upsert({
    where: { name: "face" },
    update: {},
    create: {
      name: "face",
    },
  });
  const body = await prisma.category.upsert({
    where: { name: "body" },
    update: {},
    create: {
      name: "body",
    },
  });
  const hand = await prisma.category.upsert({
    where: { name: "hand" },
    update: {},
    create: {
      name: "hand",
    },
  });
  const mist = await prisma.category.upsert({
    where: { name: "mist" },
    update: {},
    create: {
      name: "mist",
    },
  });
  const serums = await prisma.category.upsert({
    where: { name: "serums" },
    update: {},
    create: {
      name: "serums",
    },
  });
  const oils = await prisma.category.upsert({
    where: { name: "oils" },
    update: {},
    create: {
      name: "oils",
    },
  });
  const creams = await prisma.category.upsert({
    where: { name: "creams" },
    update: {},
    create: {
      name: "creams",
    },
  });

  const products = [
    {
      name: "Velvet Ember Body Cream",
      prices: [65],
      quantity: [25],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/Round_Amber_Glass_Pump_Bottle_Mockup.png",
      ],
      description:
        "A luxurious body cream that deeply nourishes, improves elasticity, and leaves skin velvety smooth.",
      keyIngredients: [
        "Shea Butter",
        "Cocoa Butter",
        "Vitamin E",
        "Sweet Almond Oil",
      ],
      ingredients: [
        "Water",
        "Shea Butter",
        "Cocoa Butter",
        "Sweet Almond Oil",
        "Vitamin E",
        "Glycerin",
        "Phenoxyethanol",
      ],
      sizes: ["200ml"],
      amountSold: 7,
      warnings: ["For external use only", "Avoid contact with eyes"],
      howToUse: [
        "Apply generously to clean, dry skin",
        "Massage until fully absorbed",
        "Use daily for best results",
      ],
      aromas: ["Warm vanilla", "Soft amber"],
      categories: [body.id, creams.id],
    },
    {
      name: "Crimson Renewal Serum",
      prices: [48, 65],
      quantity: [32, 18],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
      ],
      description:
        "A potent brightening serum formulated to even skin tone, reduce dark spots, and restore luminous clarity.",
      keyIngredients: [
        "Niacinamide",
        "Alpha Arbutin",
        "Licorice Root Extract",
        "Hyaluronic Acid",
      ],
      ingredients: [
        "Water",
        "Niacinamide",
        "Alpha Arbutin",
        "Licorice Root Extract",
        "Hyaluronic Acid",
        "Glycerin",
        "Panthenol",
        "Phenoxyethanol",
      ],
      sizes: ["30ml", "50ml"],
      amountSold: 0,
      warnings: [
        "For external use only",
        "Avoid direct contact with eyes",
        "Discontinue use if irritation occurs",
      ],
      howToUse: [
        "Apply 2-3 drops to clean, dry skin",
        "Gently press into face and neck",
        "Use morning and evening before moisturizer",
      ],
      aromas: ["Soft botanical", "Subtle floral"],
      categories: [serums.id],
    },
    {
      name: "Koi Silk Hydrating Cream",
      prices: [52, 72],
      quantity: [40, 22],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/Cream_Tube.png",
      ],
      description:
        "A rich yet weightless cream that deeply hydrates, smooths texture, and strengthens the skin barrier.",
      keyIngredients: [
        "Ceramides",
        "Shea Butter",
        "Squalane",
        "Green Tea Extract",
      ],
      ingredients: [
        "Water",
        "Shea Butter",
        "Squalane",
        "Ceramide Complex",
        "Green Tea Extract",
        "Glycerin",
        "Vitamin E",
        "Phenoxyethanol",
      ],
      sizes: ["50ml", "100ml"],
      amountSold: 0,
      warnings: ["For external use only", "Patch test before first use"],
      howToUse: [
        "Apply a pea-sized amount to face and neck",
        "Massage gently until absorbed",
        "Use as final step in skincare routine",
      ],
      aromas: ["Creamy vanilla", "Soft jasmine"],
      categories: [face.id, creams.id],
    },
    {
      name: "Amber Glow Facial Oil",
      prices: [45],
      quantity: [27],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/DROPPER_BOTTLE.png",
      ],
      description:
        "A nourishing facial oil that restores radiance, softens fine lines, and delivers a luminous finish.",
      keyIngredients: ["Rosehip Oil", "Jojoba Oil", "Vitamin C", "Marula Oil"],
      ingredients: [
        "Rosehip Oil",
        "Jojoba Oil",
        "Marula Oil",
        "Vitamin C (Ascorbyl Tetraisopalmitate)",
        "Vitamin E",
      ],
      sizes: ["30ml"],
      amountSold: 0,
      warnings: ["For external use only", "Store away from direct sunlight"],
      howToUse: [
        "Warm 2-3 drops between palms",
        "Press gently into skin",
        "Use after serum or mix into moisturizer",
      ],
      aromas: ["Warm amber", "Soft citrus"],
      categories: [face.id, oils.id],
    },
    {
      name: "Lunar Clarity Refining Serum",
      prices: [50, 69],
      quantity: [28, 16],
      images: [],
      description:
        "A refining serum designed to minimize pores, smooth texture, and promote balanced, radiant skin.",
      keyIngredients: [
        "Salicylic Acid",
        "Niacinamide",
        "Green Tea Extract",
        "Hyaluronic Acid",
      ],
      ingredients: [
        "Water",
        "Niacinamide",
        "Salicylic Acid",
        "Green Tea Extract",
        "Hyaluronic Acid",
        "Panthenol",
        "Phenoxyethanol",
      ],
      sizes: ["30ml", "50ml"],
      amountSold: 15,
      warnings: [
        "Use sunscreen during the day",
        "Do not use with other exfoliating acids",
      ],
      howToUse: [
        "Apply 2 drops to clean skin",
        "Focus on areas with visible pores",
        "Use once daily, preferably at night",
      ],
      aromas: ["Fresh herbal", "Light citrus"],
      categories: [face.id, serums.id],
    },
    {
      name: "Mist of Stillness",
      prices: [38],
      quantity: [55],
      images: [],
      description:
        "A calming facial mist that refreshes, tones, and restores hydration throughout the day.",
      keyIngredients: [
        "Rose Water",
        "Aloe Vera",
        "Chamomile Extract",
        "Panthenol",
      ],
      ingredients: [
        "Rose Water",
        "Aloe Vera Juice",
        "Chamomile Extract",
        "Panthenol",
        "Glycerin",
        "Phenoxyethanol",
      ],
      sizes: ["100ml"],
      amountSold: 0,
      warnings: ["Close eyes before spraying", "For external use only"],
      howToUse: [
        "Hold bottle 6 inches from face",
        "Spray lightly onto skin",
        "Use before makeup or throughout the day",
      ],
      aromas: ["Fresh rose", "Light herbal"],
      categories: [mist.id],
    },
    {
      name: "Scarlet Balance Clay Mask",
      prices: [42],
      quantity: [30],
      images: [],
      description:
        "A purifying clay mask that refines pores, controls excess oil, and restores balanced clarity.",
      keyIngredients: [
        "Kaolin Clay",
        "Red Clay",
        "Tea Tree Extract",
        "Zinc PCA",
      ],
      ingredients: [
        "Kaolin Clay",
        "Red Clay",
        "Tea Tree Extract",
        "Zinc PCA",
        "Glycerin",
        "Water",
        "Phenoxyethanol",
      ],
      sizes: ["75ml"],
      amountSold: 0,
      warnings: ["Do not apply to broken skin", "Use 1-2 times weekly"],
      howToUse: [
        "Apply an even layer to clean skin",
        "Leave on for 10-15 minutes",
        "Rinse thoroughly with warm water",
      ],
      aromas: ["Earthy clay", "Fresh herbal"],
      categories: [face.id],
    },
    {
      name: "Silk Barrier Recovery Cream",
      prices: [54, 76],
      quantity: [35, 14],
      images: [],
      description:
        "A restorative face cream that strengthens the skin barrier, reduces dryness, and improves resilience.",
      keyIngredients: [
        "Ceramides",
        "Squalane",
        "Centella Asiatica",
        "Panthenol",
      ],
      ingredients: [
        "Water",
        "Squalane",
        "Ceramide Complex",
        "Centella Asiatica Extract",
        "Panthenol",
        "Glycerin",
        "Vitamin E",
        "Phenoxyethanol",
      ],
      sizes: ["50ml", "100ml"],
      amountSold: 0,
      warnings: ["For external use only", "Patch test recommended"],
      howToUse: [
        "Apply to face and neck",
        "Use morning and evening",
        "Follow with sunscreen during the day",
      ],
      aromas: ["Soft cream", "Subtle botanical"],
      categories: [face.id, creams.id],
    },
  ];

  const createdProducts: Record<string, string> = {};

  for (const product of products) {
    const created = await prisma.product.upsert({
      where: { name: product.name }, // Assuming title is unique for seeding
      update: {},
      create: {
        name: product.name,
        prices: product.prices,
        quantity: product.quantity,
        images: product.images,
        description: product.description,
        keyIngredients: product.keyIngredients,
        ingredients: product.ingredients,
        sizes: product.sizes,
        amountSold: product.amountSold,
        warnings: product.warnings,
        howToUse: product.howToUse,
        aromas: product.aromas,
        categories: {
          // Map the array of CUID strings to the connect format
          connect: product.categories.map((id) => ({ id })),
        },
      },
    });

    // Store name -> id
    createdProducts[product.name] = created.id;
  }

  const review = await prisma.review.upsert({
    where: {
      // You should use a real unique constraint here
      userId_productId: {
        userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
        productId: createdProducts["Velvet Ember Body Cream"],
      },
    },
    update: {},
    create: {
      email: "trina@gmail.com",
      firstName: "Trina",
      lastName: "Withers",
      fullName: "Trina Withers",
      rating: 5,
      title: "Changed my life!",
      comment: "I’ve been using this facial oil for three weeks, and my dry, dull skin is completely transformed! It feels incredibly nourishing but sinks in within seconds, leaving zero greasy residue—just a beautiful, hydrated glow. I love that it’s lightweight enough for morning use under makeup, but hydrating enough for a nightly repair routine. It hasn't caused any breakouts on my acne-prone skin either. A little goes a long way. Already bought a second bottle!",
      age: "AGE_25_34",
      skinTone: "BROWN",
      skinConcern: ["HYPERPIGMENTATION", "DARK_SPOTS"],
      skinType: "COMBINATION",
      userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",

      product: {
        connect: {
          id: createdProducts["Velvet Ember Body Cream"],
        },
      },
    },
  });

  await prisma.review.upsert({
    where: {
      // You should use a real unique constraint here
      userId_productId: {
        userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
        productId: createdProducts["Amber Glow Facial Oil"],
      },
    },
    update: {},
    create: {
      email: "trina@gmail.com",
      firstName: "Trina",
      lastName: "Withers",
      fullName: "Trina Withers",
      rating: 4,
      title: "It did wonders for my skin",
      comment: "This body cream is undeniably thick and creamy, making it perfect for intense hydration on my dry elbows and legs, especially in the winter. My skin feels super soft and silky for hours. I took off one star only because the scent is very intense. It smells lovely (like vanilla), but it is a bit overpowering for sensitive noses and lingers all day. If you don't mind a strong fragrance, this is a 5-star product!",
      age: "AGE_25_34",
      skinTone: "BROWN",
      skinConcern: ["HYPERPIGMENTATION", "DARK_SPOTS"],
      skinType: "COMBINATION",
      userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
      product: {
        connect: {
          id: createdProducts["Amber Glow Facial Oil"],
        },
      },
    },
  });

  await prisma.favorite.upsert({
    where: {
      // You should use a real unique constraint here
      userId_productId: {
        userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
        productId: createdProducts["Amber Glow Facial Oil"],
      },
    },
    update: {},
    create: {
      userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
      product: {
        connect: {
          id: createdProducts["Amber Glow Facial Oil"],
        },
      },
    },
  });
  
  await prisma.favorite.upsert({
    where: {
      // You should use a real unique constraint here
      userId_productId: {
        userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
        productId: createdProducts["Velvet Ember Body Cream"],
      },
    },
    update: {},
    create: {
      userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
      product: {
        connect: {
          id: createdProducts["Velvet Ember Body Cream"],
        },
      },
    },
  });

  await prisma.helpful.upsert({
    where: {
      // You should use a real unique constraint here
      userId_reviewId: {
        userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
        reviewId: review.id,
      },
    },
    update: {},
    create: {
      userId: "e36572d3-3a3e-47de-bccf-8ad682c3c049",
      review: {
        connect: {
          id: review.id,
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
