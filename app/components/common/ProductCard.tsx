import { Product } from "@/lib/services/getProduct";
import Link from "next/link";

export default function ProductCard({ product }: {product: Product}) {
    return (
        <Link href={`/${product.slug}`} className="block h-full">
            <div className="flex flex-col h-full overflow-hidden rounded-xl border border-gray-300 bg-white hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5 duration-100">
                <div className="relative w-full aspect-square">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex-1 p-2">
                    <h2 className="line-clamp-2 h-12 md:text-lg md:h-14">
                        {product.name}
                    </h2>
                </div>

                <div className="flex-1 px-2 pb-2">
                    <p className="line-clamp-1 text-sm text-gray-500 md:text-base">
                        {product.categories?.name}
                    </p>
                </div>

                <div className="flex-1 pt-2 px-2">
                    <p className="text-sm text-gray-500 font-semibold md:text-base">Stok : <span className="text-sm text-blue-600 font-bold md:text-base">{product.stock}</span></p>
                </div>

                <div className="flex-1 px-2 pb-2">
                    <p className="text-lg font-bold md:text-xl">
                        Rp {product.normal_price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </Link>
    );
}