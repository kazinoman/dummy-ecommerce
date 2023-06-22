import React, { useEffect } from "react";
import { ProductContext } from "./productContext";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

interface IProducts {
  id: number;
  name: string;
  quentity?: number;
  price?: string;
}

const ProductContextProvider: React.FC<IProps> = ({ children }) => {
  const [getProducts, setProducts] = React.useState<IProducts[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const addProducts = (products: IProducts) => {
    if (!getProducts.some((product) => product.id === products.id))
      setProducts([...getProducts, products]);
  };

  const removeProduct = (products: IProducts) => {
    if (getProducts.some((product) => product.id === products.id)) {
      const removeProduct = getProducts.filter((product) => product.id != products.id);
      setProducts((pre) => removeProduct);
    }
  };

  const handleTotalPrice = () => {
    const totalPrice = getProducts
      .map((data) => {
        return data.price;
      })
      .reduce((acc: any, currentValue) => {
        return acc + currentValue;
      }, 0);

    setTotalPrice((ps) => totalPrice);
  };

  useEffect(() => {
    handleTotalPrice();
  }, [getProducts]);

  const value = {
    products: getProducts,
    addProducts,
    removeProduct,
    totalPrice,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
