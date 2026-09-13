"use client";

import { Search, X } from "lucide-react";
import { useProductSearch } from "@/hooks/useProductSearch";

function SearchBarDesktop() {
    const {
        searchQuery,
        setSearchQuery,
        handleSearch,
        clearSearch,
    } = useProductSearch();

    return (
        <form 
            onSubmit={handleSearch}
            className="flex items-center bg-white px-4 py-2 rounded-full w-full focus-within:ring-2 focus-within:ring-blue-600 transition-all"
        >
            <input
                type="text"
                placeholder="Cari Produk Di Sini..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-700 text-sm md:text-base"
            />

            { searchQuery && (
                <button 
                    type="button"
                    onClick={clearSearch}
                    className="text-gray-400 hover:text-blue-600 transition-colors ml-2"
                >
                    <X className="size-5 md:size-6"/>
                </button>
            )}

            <button 
                type="submit" 
                className="text-gray-400 hover:text-blue-600 transition-colors ml-2"
            >
                <Search className="size-5 md:size-6" />
            </button>
        </form>
    );
}

function SearchBarMobile() {
    const {
        searchQuery,
        setSearchQuery,
        handleSearch,
        clearSearch,
    } = useProductSearch();

    return (
        <form 
            onSubmit={handleSearch}
            className="flex sm:hidden relative"
        >
            <input
                type="text"
                placeholder="Cari Produk Di Sini..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-300 rounded-full text-sm outline-none focus:ring-1 focus:ring-blue-600 transition-all" 
            />

            {searchQuery && (
                <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                    <X className="size-5 md:size-6"/>
                </button>
            )}

            <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
            >
                <Search className="size-5 md:size-6" />
            </button>
        </form>
    );
}

export { SearchBarDesktop, SearchBarMobile };