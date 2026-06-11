export const PAYMENT_STATUSES = [
    "PENDING",
    "COMPLETED",
    "CANCELLED"
] as const;

export type PaymentStatus =
    typeof PAYMENT_STATUSES[number];