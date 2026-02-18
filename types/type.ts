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
  updatedAt?: Date | null;
  createdAt?: Date;
};

export type Cart = {
  id: string;
  productId: string;
  name: string;
  quantity: number;
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

// export type CategoriesOnProducts = {
//   product:    Product;
//   productId:  string;
//   category:   Category;
//   categoryId: string;
// };

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
