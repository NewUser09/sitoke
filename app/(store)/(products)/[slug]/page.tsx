import { getProductBySlug } from "@/lib/services/getProduct";
import BackButton from "@/app/components/ui/BackButton";
import Container from "@/app/components/layout/Container"

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const resolvedParams = await params;
    const product = await getProductBySlug(resolvedParams.slug);

    if (!product) {
        return <Container>
            <div className="flex items-center justify-center min-h-[80vh]">
                <div className="text-center">
                    <img
                        src="/images/ilustrations/no_product.png"
                        alt="Produk tidak ditemukan"
                        className="mx-auto"
                    />
                
                    <h1 className="text-xl text-gray-300 font-bold md:text-2xl">
                        Produk tidak ditemukan
                    </h1>
                </div>
            </div>
        </Container>;
    }

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-6">
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
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1 className="text-2xl font-bold md:text-3xl">
                        {product.name}
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 md:text-base">
                        {product.categories?.name}
                    </p>
                    
                    <p className="mt-3 text-gray-500 font-semibold md:text-lg">
                        Stok Tersedia : <span className="text-blue-600 font-bold">{product.stock}</span>
                    </p>

                    <p className="mt-5 text-xl font-bold md:text-2xl">
                        Rp {product.normal_price.toLocaleString("id-ID")}
                    </p>

                    <div className="mt-5">
                        <h3 className="text-lg mb-3 border-b border-gray-200 pb-2 font-bold md:text-xl">
                            Deskripsi Produk
                        </h3>
                        <p className="text-md leading-relaxed md:text-lg">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}