import type { Product } from "../../product/interfaces/Product";
import type { Supply } from "../../supply/interfaces/Supply";

export interface ProductSupply {
    id?: number;
    quantity: number;
    product: Product;
    supply: Supply;
}