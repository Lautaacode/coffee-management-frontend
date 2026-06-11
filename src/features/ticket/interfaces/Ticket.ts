export interface Ticket {
    id: number;
    total: number;
    tables: {
        id: number;
        number: number;
    };
}