import { Search } from "lucide-react";

function SearchBarDesktop() {
    return (
        <div className="flex items-center bg-white px-4 py-2 rounded-full w-full focus-within:ring-2 focus-within:ring-blue-600 transition-all">
            <input
                type="text"
                placeholder="Cari Produk..."
                className="w-full bg-transparent outline-none text-gray-700 text-sm md:text-base"
            />

            <button className="text-gray-400 hover:text-blue-600 transition-colors ml-2">
                <Search className="size-5 md:size-6" />
            </button>
        </div>
    );
}

function SearchBarMobile() {
    return (
        <div className="flex sm:hidden relative">
            <input
                type="text"
                placeholder="Cari Produk..."
                className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-300 rounded-full text-sm outline-none focus:ring-1 focus:ring-blue-600 transition-all" 
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                <Search className="size-5 md:size-6" />
            </button>
        </div>
    );
}

export { SearchBarDesktop, SearchBarMobile };