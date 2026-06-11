import type { OrderStatus } from "./OrderStatus";

export interface Orders {
    id: number;
    status: OrderStatus;
    waiter: {
        id: number;
        name: string;
    };
    tables: {
        id: number;
        number: number;
    };
}