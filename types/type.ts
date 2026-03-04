export type SpecialText = {
  is_special?: boolean;
  text: string;
};

export type Product = {
  id: string;
  name: string;
  quantity?: number[];
  prices: number[];
  sizes?: string[];
  images: string[];
  categories?: Category[];
  description?: string;
  keyIngredients?: string[];
  ingredients?: string[];
  amountSold?: number;
  warnings?: string[];
  howToUse?: string[];
  aromas?: string[];
  reviews?: Review[];
  updatedAt?: Date | null;
  createdAt: Date;
};

export type Cart = {
  id: string;
  name: string;
  quantity: number;
  productQuantity: number;
  price: number;
  size: string;
  image: string;
  createdAt: Date;
};

export type Category = {
  id?: string;
  name?: string;
  products?: Product[];
  updatedAt?: Date | null;
  createdAt?: Date;
};

export type Review = {
  id: string;
  userId?: string;
  productId: string;
  product?: Product;
  firstName: string;
  lastName?: string;
  fullName: string;
  email: string;
  rating: number;
  title: string;
  comment: string;

  age: Ages;
  skinType: SkinType;
  skinConcern: SkinConcern[];
  skinTone: SkinTone;

  isVerifiedPurchase: boolean;
  helpfuls?: Helpful[];
  status: "PENDING" | "APPROVED" | "DENIED";
  createdAt: Date;
  updatedAt?: Date;
};

type SkinType =
  | "OILY"
  | "DRY"
  | "COMBINATION"
  | "NORMAL"
  | "SENSITIVE"
  | "ACNE_PRONE";

type SkinConcern =
  | "ACNE"
  | "HYPERPIGMENTATION"
  | "DARK_SPOTS"
  | "DARK_CIRCLES"
  | "UNEVEN_TONE"
  | "TEXTURE"
  | "FINE_LINES"
  | "DRYNESS"
  | "OILINESS"
  | "REDNESS"
  | "DULLNESS";

type SkinTone = "VERY_FAIR" | "FAIR" | "MEDIUM" | "OLIVE" | "BROWN" | "DEEP";

type Ages =
  | "AGE_18_24"
  | "AGE_25_34"
  | "AGE_35_44"
  | "AGE_45_54"
  | "AGE_55_64"
  | "AGE_65_PLUS";

export type Helpful = {
  id: string;
  userId: string;
  review: Review;
  reviewId: string;
  createdAt: Date;
};

export type Favorite = {
  id: string;
  userId: string;
  product: Product;
  productId: string;
  createdAt: Date;
};

export type Package = {
  title: string;
  price: number;
  duration: number;
  description: string;
  services?: string[];
  image: string;
};

export type FooterList = {
  title: string;
  href?: string;
};
