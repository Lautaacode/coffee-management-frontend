export const ROLE_NAMES = [
    "SUPER_ADMIN",
    "MANAGER",
    "CASHIER",
    "WAITER",
    "COOK"
] as const;

export type RoleName =
    typeof ROLE_NAMES[number];