export const ORDER_STATUSES = [
    "CREATED",
    "IN_PROGRESS",
    "READY",
    "DELIVERED",
    "CLOSED"
] as const;

export type OrderStatus =
    typeof ORDER_STATUSES[number];