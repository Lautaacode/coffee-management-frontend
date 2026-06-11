export interface OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    subtotal: number;
    product: {
        id: number;
        name: string;
        price: number;
    };
}