import Image from "next/image";
import ProductCard from "@/app/components/common/ProductCard";
import { getProducts } from "@/lib/services/getProduct";
import Container from "@/app/components/layout/Container";
import { SearchBarMobile } from "@/app/components/common/SearchBar";
import CategoryDropdown from "../components/common/FilterDropdown";
import FilterButton from "@/app/components/ui/FilterButton";


export default async function HomePage() {
  const products = await getProducts();
  return (
    <Container>
      <h1 className="mb-6 text-xl font-bold md:text-2xl">
        Katalog Produk
      </h1>

      <div className="mb-8 flex flex-col gap-4">
        <div>
          <div className="flex sm:hidden items-center gap-3">
            <div className="flex-1">
              <SearchBarMobile/>
            </div>

            <FilterButton/>
          </div>
        </div>

      </div>

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
