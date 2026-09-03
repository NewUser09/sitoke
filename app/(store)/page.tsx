import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { getProducts } from "@/lib/services/getProduct";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Katalog Produk
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}
