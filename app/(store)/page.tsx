import Image from "next/image";
import ProductCard from "@/app/components/common/ProductCard";
import { getProducts } from "@/lib/services/getProduct";
import Container from "@/app/components/layout/Container";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <Container>
      <h1 className="mb-6 text-xl font-bold md:text-2xl">
        Katalog Produk
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Container>
  );
}
