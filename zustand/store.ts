import { Cart, Category, Product, Review } from "@/types/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStore = {
  items: Cart[];
  addItem: (item: Cart) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
};

type FilterReviewStore = {
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  filterItems: (type: string, order: string) => void;
};

type FilterProductStore = {
  products: Product[];
  categories: Category[];
  setProducts: (products: Product[]) => void;
  setCategories: (categories: Category[]) => void;
  filterItems: (type: string, order: string) => void;
  filterCategory: (category: string) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // CHECK IF ITEM IS ALREADY IN THE CART
          const existing = state.items.find(
            (initial) => initial.id === item.id,
          );

          // IF THE ITEM EXISTS, JUST INCREASE THE USER'S QUANTITY FOR THE ITEM
          if (existing) {
            return {
              items: state.items.map((initial) =>
                initial.id === item.id
                  ? { ...initial, quantity: initial.quantity + 1 }
                  : initial,
              ),
            };
          }

          //   IF THE PRODUCT ISN'T INCLUDED IN CART, ADD TO CART WITH ONLY ONE QUANTITY
          return {
            items: [...state.items, item],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        })),

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        // GET ALL THE CART ITEMS AND ADD THE PRICE * QUANTITY PER ITEM
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "cart-storage", // localStorage key
    },
  ),
);

export const useFilterReviewStore = create<FilterReviewStore>()((set, get) => ({
  reviews: [],
  setReviews: (reviews) => {
    set((state) => {
      return { reviews: reviews };
    });
  },
  filterItems: (type, order) => {
    set((state) => {
      if (type === "date") {
        if (order === "asc") {
          return {
            reviews: state.reviews.toSorted(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime(),
            ),
          };
        } else {
          return {
            reviews: state.reviews.toSorted(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            ),
          };
        }
      } else if (type === "relevance") {
        if (order === "asc") {
          return {
            reviews: state.reviews.toSorted((a, b) => {
              if (a?.helpfuls && b?.helpfuls) {
                return a.helpfuls.length - b.helpfuls.length;
              }

              return 0;
            }),
          };
        } else {
          return {
            reviews: state.reviews.toSorted((a, b) => {
              if (a?.helpfuls && b?.helpfuls) {
                return b.helpfuls.length - a.helpfuls.length;
              }

              return 0;
            }),
          };
        }
      } else if (type === "rating") {
        if (order === "asc") {
          return {
            reviews: state.reviews.toSorted((a, b) => a.rating - b.rating),
          };
        } else {
          return {
            reviews: state.reviews.toSorted((a, b) => b.rating - a.rating),
          };
        }
      }

      return {};
    });
  },
}));

export const useFilterProductStore = create<FilterProductStore>()(
  (set, get) => ({
    products: [],
    categories: [],
    setProducts: (products) => {
      set((state) => {
        return { products: products };
      });
    },
    setCategories: (categories) => {
      set((state) => {
        return { categories: categories };
      });
    },
    filterItems: (type, order) => {
      set((state) => {
        if (type === "date") {
          if (order === "asc") {
            return {
              products: state.products.toSorted(
                (a, b) =>
                  new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime(),
              ),
            };
          } else {
            return {
              products: state.products.toSorted(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime(),
              ),
            };
          }
        } else if (type === "name") {
          if (order === "asc") {
            return {
              products: state.products.toSorted((a, b) =>
                a.name.localeCompare(b.name),
              ),
            };
          } else {
            return {
              products: state.products.toSorted((a, b) =>
                b.name.localeCompare(a.name),
              ),
            };
          }
        } else if (type === "price") {
          if (order === "asc") {
            return {
              products: state.products.toSorted(
                (a, b) => a.prices[0] - b.prices[0],
              ),
            };
          } else {
            return {
              products: state.products.toSorted(
                (a, b) => b.prices[0] - a.prices[0],
              ),
            };
          }
        }

        return {};
      });
    },
    filterCategory: (category) => {
      set((state) => {
        if (category !== "all") {
          const cat = state.categories.find(
            (item) => item.name?.toLowerCase() === category.toLowerCase(),
          );

          if (cat) {
            return {
              products: cat.products,
            };
          }
        }

        return {};
      });
    },
  }),
);
