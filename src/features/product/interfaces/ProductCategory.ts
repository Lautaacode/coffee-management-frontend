export const PRODUCT_CATEGORIES = [
    "FOOD",
    "DRINK"
] as const;

export type ProductCategory =
    typeof PRODUCT_CATEGORIES[number];
