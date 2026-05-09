export interface StepConfig {
    id: number;
    label: string;
    description: string;
}

export const STEPS: StepConfig[] = [
    {
        id: 1,
        label: "calculator.steps.confirmation.label",
        description: "calculator.steps.confirmation.description",
    },
    {
        id: 2,
        label: "calculator.steps.property.label",
        description: "calculator.steps.property.description",
    },
    {
        id: 3,
        label: "calculator.steps.access.label",
        description: "calculator.steps.access.description",
    },
    {
        id: 4,
        label: "calculator.steps.items.label",
        description: "calculator.steps.items.description",
    },
    {
        id: 5,
        label: "calculator.steps.specifications.label",
        description: "calculator.steps.specifications.description",
    },
    {
        id: 6,
        label: "calculator.steps.extraServices.label",
        description: "calculator.steps.extraServices.description",
    },
    {
        id: 7,
        label: "calculator.steps.estimate.label",
        description: "calculator.steps.estimate.description",
    },
    {
        id: 8,
        label: "calculator.steps.yourInfo.label",
        description: "calculator.steps.yourInfo.description",
    },
];

export const STORAGE_KEY = "calculator_state";
export const STORAGE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Fixed fees
export const BASIC_FEE = 3000;
export const STAIR_CLIMBING_FEE = 5000;
export const TAX_RATE = 0.10;

export const EXTRA_SERVICES = [
    { id: "lowering", label: "calculator.extraServices.lowering", price: 11000 },
    { id: "ac_standard", label: "calculator.extraServices.acStandard", price: 9000 },
    { id: "ac_public", label: "calculator.extraServices.acPublic", price: 15000 },
    { id: "ac_window", label: "calculator.extraServices.acWindow", price: 3000 },
] as const;