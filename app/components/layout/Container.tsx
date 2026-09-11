export default function Container ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="mx-auto w-full max-w-5xl p-8 md:p-10">
            {children}
        </main>
    )
}