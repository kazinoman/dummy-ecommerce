// "use client";
import React from "react";
import SingleProductsCard from "./singleProducts";

export type SingleProducts = {
  id: number;
  title: string;
  price: any;
  images: string[];
  discountPercentage: number;
  count: number;
};

type ProductsProps = {
  products: SingleProducts[];
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  //   console.log(products);

  const updateProducts = products?.map((data: SingleProducts) => {
    return { ...data, count: 0 };
  });

  return (
    <div className="flex flex-row flex-wrap gap-10 items-center justify-between">
      {updateProducts?.map((data) => {
        return (
          <SingleProductsCard
            key={data.id}
            discountPercentage={data.discountPercentage}
            id={data.id}
            images={data.images}
            title={data.title}
            price={data.price}
            count={data.count}
          />
        );
      })}
    </div>
  );
};

export default Products;
