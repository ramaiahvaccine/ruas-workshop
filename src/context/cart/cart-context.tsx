import { createContext } from "react";
import { Product } from "./../../types/product";

export type CartContextType = {
  cartItems: Product[];
  checkout: false;
  total: number;

  addToCart: (payload: Product) => void;
  removeFromCart: (payload: Product) => void;
  increase: (payload: Product) => void;
  decrease: (payload: Product) => void;
  handleCheckout: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export default CartContext;
