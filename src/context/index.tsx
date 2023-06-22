"use client";
import React from "react";
import ProductContextProvider from "./products/productContextProvider";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const ContextWrapper: React.FC<IProps> = ({ children }) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export default ContextWrapper;
