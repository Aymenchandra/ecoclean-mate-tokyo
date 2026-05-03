// src/utils/calculatePrice.ts

export interface ProductRank {
    id: string;
    product_rank_name: string;
    product_size: number;
    weight: number;
    price_notax: number;
}

const PRODUCT_RANKS: ProductRank[] = [
    { id: "1", product_rank_name: "A", product_size: 50, weight: 1, price_notax: 500 },
    { id: "2", product_rank_name: "B", product_size: 90, weight: 2, price_notax: 1000 },
    { id: "3", product_rank_name: "C", product_size: 150, weight: 5, price_notax: 1500 },
    { id: "4", product_rank_name: "D", product_size: 180, weight: 10, price_notax: 2000 },
    { id: "5", product_rank_name: "E", product_size: 210, weight: 15, price_notax: 2500 },
    { id: "6", product_rank_name: "F", product_size: 270, weight: 20, price_notax: 3000 },
    { id: "7", product_rank_name: "G", product_size: 300, weight: 30, price_notax: 4000 },
    { id: "14", product_rank_name: "H", product_size: 360, weight: 40, price_notax: 6500 },
    { id: "10", product_rank_name: "I", product_size: 400, weight: 50, price_notax: 8000 },
    { id: "11", product_rank_name: "J", product_size: 450, weight: 70, price_notax: 11000 },
    { id: "8", product_rank_name: "K", product_size: 500, weight: 90, price_notax: 12000 },
    { id: "12", product_rank_name: "L", product_size: 600, weight: 120, price_notax: 17000 },
    { id: "13", product_rank_name: "M", product_size: 700, weight: 150, price_notax: 20000 },
    { id: "9", product_rank_name: "N", product_size: 800, weight: 200, price_notax: 40000 },
];

function getNumber(value: string): number {
    const num = parseInt(value, 10);
    return isNaN(num) ? 0 : num;
}

export function getTotalSize(width: string, depth: string, height: string): number {
    return getNumber(width) + getNumber(depth) + getNumber(height);
}

export function getItemWeight(weight: string): number {
    return getNumber(weight);
}

/**
 * Calculate unit price based on size and weight against rank table.
 * When hasSize/hasWeight are false, those dimensions are treated as 0.
 * Falls back to basePrice if no inputs are enabled or entered.
 */
export function calculateUnitPrice(
    width: string,
    depth: string,
    height: string,
    weight: string,
    hasSize: boolean,
    hasWeight: boolean,
    basePrice: number = 0
): number {
    const totalSize = hasSize ? getTotalSize(width, depth, height) : 0;
    const itemWeight = hasWeight ? getItemWeight(weight) : 0;

    // Nothing to calculate — use original base price from products.ts
    if (totalSize === 0 && itemWeight === 0) return basePrice;

    // Find first rank that covers both total size AND weight
    for (const rank of PRODUCT_RANKS) {
        if (rank.product_size >= totalSize && rank.weight >= itemWeight) {
            return rank.price_notax;
        }
    }

    // Item exceeds all ranks — return highest tier
    return PRODUCT_RANKS[PRODUCT_RANKS.length - 1].price_notax;
}

export function formatYen(amount: number): string {
    return "¥" + Math.round(amount).toLocaleString("en-US");
}