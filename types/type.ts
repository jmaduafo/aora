export type SpecialText = {
  is_special?: boolean;
  text: string;
};

export type Product = {
  id: string;
  name: string;
  quantities?: number[];
  prices: number[];
  sizes?: string[];
  images: string[];
  categories?: CategoriesOnProducts[];
  description?: string;
  keyIngredients?: string[];
  ingredients?: string[];
  amountSold?: number;
  warnings?: string[];
  howToUse?: string[];
  aromas?: string[];
  updatedAt?: Date | null;
  createdAt?: Date;
};

export type Category = {
  id: string;
  name: string;
  products: CategoriesOnProducts[];
  updatedAt: Date | null;
  createdAt: Date;
};

export type CategoriesOnProducts = {
  product:    Product;
  productId:  string;
  category:   Category;
  categoryId: string;
};

export type Package = {
  title: string;
  price: number;
  duration: number;
  description: string;
  services?: string[],
  image: string;
};

export type FooterList = {
  title: string;
  href?: string;
};
