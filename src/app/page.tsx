import { Products } from "@/components";
import Image from "next/image";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  return res.json();
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="max-w-5xl mx-auto mt-10 mb-10">
      <h1 className="font-bold">Shoping cart list</h1>
      <Products products={products.products} />
    </main>
  );
}
