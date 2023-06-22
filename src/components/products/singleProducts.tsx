"use client";
import React from "react";
import { SingleProducts } from "./index";
import { Image } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useProductContext } from "@/context/products/productContext";

const SingleProductsCard: React.FC<SingleProducts> = ({
  discountPercentage,
  id,
  images,
  title,
  price,
  count,
}) => {
  //   console.log(title, price, id);
  const { products, addProducts } = useProductContext();
  console.log(products);
  const handleProduct = () => {
    if (addProducts) {
      addProducts({ id: id, name: title, price: price, quantity: count });
    }
  };

  return (
    <div className="flex flex-col w-[250px] border-2 p-2 rounded-lg  shadow-xl hover:shadow-sm hover:rounded-none duration-500">
      <Image
        maw={240}
        mx="auto"
        radius="md"
        src={images[0]}
        alt="Random image"
        width={200}
        height={150}
        className="border-[1.5px] rounded-lg"
      />
      <div className="flex flex-row items-center gap-5 py-2 mt-5">
        <h1 className="font-medium text-xs">{title}</h1>
        <h2 className="font-thin">${price}</h2>
      </div>
      <button
        className="flex flex-row gap-2 p-2 mt-4 border-2 items-center justify-center rounded-lg bg-black text-white"
        onClick={handleProduct}
      >
        <span className="text-xs">Buy now </span>
        <Icon icon="mdi:cart" className="h-4 w-4 " />
      </button>
    </div>
  );
};

export default SingleProductsCard;
