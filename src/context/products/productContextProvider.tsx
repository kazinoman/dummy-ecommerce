import React, { useEffect } from "react";
import { ProductContext } from "./productContext";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

interface IProducts {
  id: number;
  name: string;
  quantity?: number;
  price?: string | any;
}

const ProductContextProvider: React.FC<IProps> = ({ children }) => {
  const [getProducts, setProducts] = React.useState<IProducts[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  const addProducts = (products: IProducts) => {
    if (!getProducts.some((product) => product.id === products.id)) {
      setProducts([...getProducts, products]);
      return true;
    }
    return false;
  };

  const removeProduct = (products: IProducts) => {
    if (getProducts.some((product) => product.id === products.id)) {
      const removeProduct = getProducts.filter((product) => product.id != products.id);
      setProducts((pre) => removeProduct);
      return true;
    }
    return false;
  };

  const handleTotalPrice = () => {
    const totalPrice = getProducts
      .map((data) => {
        return data?.price;
      })
      .reduce((acc: any, currentValue) => {
        return acc + currentValue;
      }, 0);

    setTotalPrice((ps) => totalPrice);
  };

  useEffect(() => {
    handleTotalPrice();
  }, [getProducts]);

  const increaseProduct = (id: number) => {
    if (getProducts.some((data) => data.id === id)) {
      const updateProduct = getProducts.map((productData) => {
        if (
          productData.id === id &&
          productData.quantity !== undefined &&
          productData.price !== undefined
          // productData.quantity !== undefined
        ) {
          return {
            ...productData,
            quantity: productData.quantity + 1,
            // ...(productData.price != 0 && { price: productData.price * productData.quantity }),
            price: productData.price * productData.quantity,
          };
        }
        return productData;
      });
      setProducts(updateProduct);
    }
  };

  const decreaseProduct = (id: number, price: any) => {
    if (getProducts.some((data) => data.id === id)) {
      const updateProduct = getProducts.map((productData) => {
        if (productData.quantity !== 0) {
          if (
            productData.id === id &&
            productData.quantity !== undefined &&
            productData.price !== undefined
            // productData.quantity !== undefined
          ) {
            return {
              ...productData,
              quantity: productData.quantity - 1,
              price: productData.price,
            };
          }
        } else {
          // if (getProducts.some((product) => product.id === id)) {
          //   const removeProduct = getProducts.filter((product) => {
          //     if (product.quantity === 0 && product.id === id) {
          //       product.id !== id;
          //     }
          //   });
          // console.log(removeProduct);
          // setProducts((pre) => removeProduct);
          // return true;
        }
        // return false;
        // }

        return productData;
      });
      setProducts(updateProduct);
    }
  };

  const value = {
    products: getProducts,
    totalPrice,
    addProducts,
    removeProduct,
    increaseProduct,
    decreaseProduct,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
