import { getProductBySlug } from "@/lib/services/getProduct";
import BackButton from "@/app/components/ui/BackButton";

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const resolvedParams = await params;
    const product = await getProductBySlug(resolvedParams.slug);

    if (!product) {
        return <div className="p-10 text-xl text-gray-300 font-bold">
            <img
                src={'https://cdn.dribbble.com/userupload/28628569/file/original-edbc9b1a905204e54ac50ca36215712a.jpg'}
                alt="Produk tidak ditemukan"
                className="h-20 w-30"
            />
        </div>;
    }

    return (
        <div className="p-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
            <div>
                <BackButton/>
            </div>
            <div className="w-full md:w-1/2">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-xl border border-gray-300"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h1 className="text-2xl font-bold md:text-3xl">
                    {product.name}
                </h1>

                <p className="text-sm text-gray-500">
                    {product.categories?.name}
                </p>

                <p className="text-blue-500 font-semibold md:text-lg"> 
                    Stok Tersedia : {product.stock}
                </p>

                <p className="text-xl font-bold md:text-2xl">
                    Rp {product.normal_price.toLocaleString("id-ID")}
                </p>

                <div className="mt-4">
                    <h3 className="text-lg mb-2 border-b border-gray-200 pb-2 font-bold">
                        Deskripsi Produk
                    </h3>

                    <p className="leading-relaxed">
                        {product.description}
                    </p>
                </div>

            </div>
        </div>
    );
}