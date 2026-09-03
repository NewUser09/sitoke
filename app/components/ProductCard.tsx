type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export default function ProductCard({ product }: {product: Product}) {
    return (
        <div className="flex flex-col h-full overflow-hidden rounded-lg border border-gray-300 bg-white hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5 duration-100">
            <div className="w-full aspect-square">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex-1 p-2">
                <h2 className="font-normal line-clamp-2 h-12">
                    {product.name}
                </h2>
            </div>

            <div className="p-2">
                <p className="text-lg text-blue-500 font-bold">
                    Rp {product.price.toLocaleString("id-ID")}
                </p>
            </div>
        </div>
    );
}