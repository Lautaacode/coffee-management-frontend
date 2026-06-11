import type { PaymentMethod } from "./PaymentMethod";

import type { PaymentStatus } from "./PaymentStatus";

export interface Payment {
    id: number;
    amount: number;
    method: PaymentMethod;
    status: PaymentStatus;
}