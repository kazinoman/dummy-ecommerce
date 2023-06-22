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
  addProducts?: (product: IProducts) => void;
  removeProduct?: (product: IProducts) => void;
}

export const ProductContext = createContext<IProductsContext>({
  products: [],
  addProducts: () => {},
  removeProduct: () => {},
  totalPrice: 0,
});

export const useProductContext = () => useContext(ProductContext);
