import { Product } from "@/lib/services/getProduct";

export default function ProductCard({ product }: {product: Product}) {
    return (
        <div className="flex flex-col h-full overflow-hidden rounded-xl border border-gray-300 bg-white hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5 duration-100">
            <div className="relative w-full aspect-square">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
                
                {/* <div className="absolute bottom-2 right-2 bg-white/70 rounded-full px-2.5 py-0.5">
                    <span className="text-sm font-semibold"> Stok : {product.stock} </span>
                </div> */}
            </div>

            {/* <div className="flex-1 pt-2 px-2">
                <div className="bg-blue-100 rounded-full w-fit px-3 py-1">
                    <span className="text-xs text-blue-600 font-semibold"> Stok : {product.stock} </span>
                </div>
            </div> */}

            <div className="flex-1 p-2">
                <h2 className="line-clamp-2 h-12">
                    {product.name}
                </h2>
            </div>

            <div className="flex-1 pt-2 px-2">
                <span className="text-sm text-blue-500 font-semibold"> {`Tersedia (${product.stock})`} </span>
            </div>

            <div className="flex-1 px-2 pb-2">
                <p className="text-lg font-bold">
                    Rp {product.normal_price.toLocaleString("id-ID")}
                </p>
            </div>
        </div>
    );
}