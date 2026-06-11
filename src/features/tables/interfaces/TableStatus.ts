export const TABLES_STATUSES = [
    "OPEN",
    "CLOSED"
] as const;

export type TablesStatus =
    typeof TABLES_STATUSES[number];