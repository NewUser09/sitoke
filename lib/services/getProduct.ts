import { supabase } from "../supabase";

export interface Product {
    id: string;
    name: string;
    category_id: string;
    normal_price: number;
    special_price: number;
    stock: number;
    description: string;
    image_url: string;
    created_at: Date;
    updated_at: Date;
}

export const getProducts = async (): Promise<Product[]> => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        throw error;
    }

    return data;
}