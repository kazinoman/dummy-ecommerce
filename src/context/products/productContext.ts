import { createContext, useContext } from "react";

interface IProducts {
  id: number;
  name: string;
  quantity?: number;
  price?: string;
}

interface IProductsContext {
  totalPrice?: number;
  products: IProducts[];
  addProducts?: (product: IProducts) => boolean;
  removeProduct?: (product: IProducts) => boolean;
  increaseProduct?: (id: number) => void;
  decreaseProduct?: (id: number, price: number) => void;
}

export const ProductContext = createContext<IProductsContext>({
  products: [],
  totalPrice: 0,
  addProducts: () => {
    return false;
  },
  removeProduct: () => {
    return false;
  },
  increaseProduct: () => {},
  decreaseProduct: () => {},
});

export const useProductContext = () => useContext(ProductContext);
