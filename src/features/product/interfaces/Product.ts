import type { ProductCategory } from "./ProductCategory";


export interface Product {
    id: number;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    active: boolean;
    category: ProductCategory;
}