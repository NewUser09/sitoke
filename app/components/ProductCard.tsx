type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export default function ProductCard({ product }: {product: Product}) {
    return (
        <div className="rounded-lg border bg-white p-4">
            <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain"
            />

            <h2 className="mt-3 font-semibold">
                {product.name}
            </h2>

            <p className="mt-2 text-lg font-bold">
                Rp {product.price.toLocaleString("id-ID")}
            </p>
        </div>
    );
}