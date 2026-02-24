import { Cart } from "@/types/type";
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
