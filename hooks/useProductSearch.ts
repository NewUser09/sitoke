"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function useProductSearch() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        const query =searchQuery.trim();

        if (query) {
            router.push(`/?q=${encodeURIComponent(query)}`);
        } else {
            router.push("/");
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return {
        searchQuery,
        setSearchQuery,
        handleSearch,
        clearSearch,
    };
}