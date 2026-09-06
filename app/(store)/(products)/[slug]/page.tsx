export default async function ProductPage({ params }: { params: { slug: string } }) {
    const resolvedParams= await params;

    return (
        <div className="p-10">
            <h1 className="text-xl font-bold">
                Selamat Datang di halaman: {resolvedParams.slug}
            </h1>
        </div>
    );
}