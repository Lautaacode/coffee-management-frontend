export interface ProductSupply {
    id?: number;
    quantity: number;
    product: {
        id: number;
        name: string;
    };
    supply: {
        id: number;
        name: string;
    };
}