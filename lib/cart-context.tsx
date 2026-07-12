"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  slug: string;
  name: string;
  sizeMg: number;
  pricePerUnit: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, sizeMg: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "pepx_order_request_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setItems(JSON.parse(raw));
      } catch {
        // ignore corrupt local state
      }
    }
  }, []);

  function persist(next: CartItem[]) {
    setItems(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function addItem(item: CartItem) {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug && i.sizeMg === item.sizeMg);
      const next = existing
        ? prev.map((i) =>
            i.slug === item.slug && i.sizeMg === item.sizeMg
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...prev, item];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function removeItem(slug: string, sizeMg: number) {
    const next = items.filter((i) => !(i.slug === slug && i.sizeMg === sizeMg));
    persist(next);
  }

  function clear() {
    persist([]);
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
