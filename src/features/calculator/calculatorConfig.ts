// src/features/calculator/calculatorConfig.ts

export interface StepConfig {
    id: number;
    label: string;
    description: string;
}

export const STEPS: StepConfig[] = [
    {
        id: 1,
        label: "Confirmation",
        description: "Please confirm the terms before we begin.",
    },
    {
        id: 2,
        label: "Property",
        description: "Tell us about your home.",
    },
    {
        id: 3,
        label: "Access",
        description: "Elevator availability and moving help.",
    },
    {
        id: 4,
        label: "Items",
        description: "Select products to be collected.",
    },
    {
        id: 5,
        label: "Specifications",
        description: "Add details for each item.",
    },
    {
        id: 6,
        label: "Extra Services",
        description: "Choose additional services.",
    },
    {
        id: 7,
        label: "Estimate",
        description: "Review your cost breakdown.",
    },
    {
        id: 8,
        label: "Your Info",
        description: "Final details and PDF download.",
    },
];

export const STORAGE_KEY = "calculator_state";
export const STORAGE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Fixed fees
export const STAIR_CLIMBING_FEE = 5500;
export const TAX_RATE = 0.10;

export const EXTRA_SERVICES = [
    { id: "lowering", label: "Lowering service fee", price: 11000 },
    { id: "ac_standard", label: "Air conditioner removal (standard type)", price: 9000 },
    { id: "ac_public", label: "Air conditioner removal (public housing unit)", price: 15000 },
    { id: "ac_window", label: "Air conditioner removal (window type)", price: 3000 },
] as const;
