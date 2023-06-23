"use client";
import React from "react";
import { Drawer, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useProductContext } from "@/context/products/productContext";
import { Icon } from "@iconify/react";
import { Alert, Notification } from "@mantine/core";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { products, totalPrice } = useProductContext();

  return (
    <div
      className="max-w-5xl h-10 flex items-center justify-between mx-auto p-4 sticky top-0 z-10 mt-2 rounded-lg"
      style={{
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }}
    >
      <h1 className="text-white font-bold max-w-5xl ">Header</h1>
      <Icon icon="jam:menu" className="h-8 w-8 text-white" onClick={open} />
      <Drawer
        opened={opened}
        onClose={close}
        title="Your Cart"
        position="right"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        className="w-[50%] bg-slate-400"
        size="lg"
      >
        {/* Drawer content */}
        <div className="flex flex-col gap-5 items-start">
          {products?.map((data) => {
            return (
              <SingleCart
                name={data?.name}
                price={data?.price}
                quantity={data?.quantity}
                id={data?.id}
              />
            );
          })}
        </div>
        <h2> Your total product price : {totalPrice}</h2>
      </Drawer>
    </div>
  );
};

export default Header;

interface IProps {
  id: number;
  name: string;
  price?: number;
  quantity: number | undefined;
}

const SingleCart: React.FC<IProps> = ({ id, name, price, quantity }) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const { removeProduct, increaseProduct, decreaseProduct } = useProductContext();

  const handleShowIcon = () => {
    setShow(!show);
  };
  const handleHideIcon = () => {
    setShow(false);
  };

  const handleRemoveProduct = () => {
    if (removeProduct) {
      const res = removeProduct({ id, name, price });
      console.log(res);

      setShowAlert(res);
    }
  };

  const handleIncreaseProduct = () => {
    if (increaseProduct) {
      const res = increaseProduct(id);
      console.log(res);
    }
  };

  if (showAlert) {
    setTimeout(() => setShowAlert(!showAlert), 3000);
  }

  return (
    <div
      className="flex flex-row justify-between w-full border-[1.5px] rounded-lg shadow-md p-3"
      onMouseEnter={handleShowIcon}
      onMouseLeave={handleHideIcon}
    >
      <div className="flex flex-row gap-5 w-[85%] items-center justify-between   ">
        <div className="flex flex-row gap-5 items-center justify-center ">
          <h1 className="font-bold text-sm w-[6rem]">{name}</h1>
          <h1 className="font-bold text-xs w-[6rem] flex flex-row items-start gap-1">
            <span>$ </span>
            {price}
          </h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button
            className="p-2 border-[1.5px] rounded-lg hover:text-white hover:bg-black"
            onClick={() => {
              if (decreaseProduct) {
                decreaseProduct(id, price);
              }
            }}
          >
            <Icon icon="ic:round-play-arrow" rotate={2} className="h-5 w-5" />
          </button>
          <h2>{quantity}</h2>
          <button
            className="p-2 border-[1.5px] rounded-lg hover:text-white hover:bg-black"
            onClick={handleIncreaseProduct}
          >
            <Icon icon="ic:round-play-arrow" rotate={0} className="h-5 w-5" />
          </button>
        </div>
      </div>
      {show && (
        <button
          className="p-0 border-[1.5px] rounded-lg text-red-600 border-red-600 ml-3"
          onClick={handleRemoveProduct}
        >
          <Icon icon="line-md:close-small" className="h-8 w-8" />
        </button>
      )}
      {showAlert && (
        <Notification className="absolute bottom-10 right-0">
          Product remove successfully.
        </Notification>
      )}
    </div>
  );
};
