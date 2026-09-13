import { supabase } from "../supabase";

export interface Product {
    id: string;
    name: string;
    category_id: string;
    categories?: {
        id: string;
        name: string;
    }
    normal_price: number;
    special_price: number;
    stock: number;
    description: string;
    image_url: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
}

export const getProducts = async (search?: string | null): Promise<Product[]> => {
    let query = supabase.from("products").select("*,  categories(*)");

    if (search) {
        query = query.ilike("name", `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
        throw error;
    }

    return data;
}

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
    const { data, error } = await supabase
        .from("products")
        .select("*, categories(*)")
        .eq("slug", slug)
        .maybeSingle();
    if (error) {
        throw error;
    }

    return data;
}