// src/features/calculator/hooks/useCalculator.ts

import { useCallback, useEffect, useState } from "react";
import {
    STEPS,
    STORAGE_KEY,
    STORAGE_TTL_MS,
    STAIR_CLIMBING_FEE,
    TAX_RATE,
    EXTRA_SERVICES,
    BASIC_FEE,
} from "../features/calculator/calculatorConfig";
import { generatePDF } from "../utils/generatePDF";
import { useToast } from "../context/ToastContext";
import { useTranslation } from "react-i18next";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Step1Data {
    confirmed: boolean;
}

export interface Step2Data {
    propertyType: string;
    totalFloors: string;
    itemFloor: string;
}

export interface Step3Data {
    hasElevator: boolean | null;
    wantsStairHelp: boolean;
}

export interface ItemEntry {
    id: string;
    category: string;
    productName: string;
    quantity: number;
    imagePreview: string | null;
    width: string;
    depth: string;
    height: string;
    weight: string;
    forSelling: boolean;
    sellingImage: string | null;
    unitPrice: string;
    hasSize: boolean;
    hasWeight: boolean;
    canSell: boolean;
}

export interface Step4Data {
    items: ItemEntry[];
}

export interface Step5Data {
    currentEditItemId: string | null;
}

export interface Step6Data {
    selectedServices: string[];
}

export interface Step7Data {
    // Read-only — calculated from previous steps
}

export interface Step8Data {
    lastName: string;
    firstName: string;
    phoneNumber: string;
    email: string;
    city: string;
    building: string;
}

export interface CalculatorFormData {
    step1: Step1Data;
    step2: Step2Data;
    step3: Step3Data;
    step4: Step4Data;
    step5: Step5Data;
    step6: Step6Data;
    step7: Step7Data;
    step8: Step8Data;
}

interface PersistedState {
    currentStep: number;
    formData: CalculatorFormData;
    savedAt: number;
}

export interface CostBreakdown {
    itemsSubtotal: number;
    basicFee: number;
    stairFee: number;
    servicesTotal: number;
    subtotal: number;
    tax: number;
    grandTotal: number;
}

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const DEFAULT_FORM_DATA: CalculatorFormData = {
    step1: { confirmed: false },
    step2: { propertyType: "", totalFloors: "", itemFloor: "" },
    step3: { hasElevator: null, wantsStairHelp: false },
    step4: { items: [] },
    step5: { currentEditItemId: null },
    step6: { selectedServices: [] },
    step7: {},
    step8: { lastName: "", firstName: "", phoneNumber: "", email: "", city: "", building: "" },
};

// ---------------------------------------------------------------------------
// localStorage helpers
// ---------------------------------------------------------------------------

function loadFromStorage(): PersistedState | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;

        const parsed: PersistedState = JSON.parse(raw);

        if (Date.now() - parsed.savedAt > STORAGE_TTL_MS) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }

        return parsed;
    } catch {
        return null;
    }
}

function saveToStorage(state: PersistedState): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
        // Fail silently
    }
}

function clearStorage(): void {
    localStorage.removeItem(STORAGE_KEY);
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useCalculator() {
    const totalSteps = STEPS.length;
    const { showToast } = useToast();
    const { t } = useTranslation();

    const [currentStep, setCurrentStep] = useState<number>(() => {
        const saved = loadFromStorage();
        return saved ? saved.currentStep : 1;
    });

    const [formData, setFormData] = useState<CalculatorFormData>(() => {
        const saved = loadFromStorage();
        return saved ? saved.formData : DEFAULT_FORM_DATA;
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    useEffect(() => {
        if (isSubmitted) return;
        saveToStorage({ currentStep, formData, savedAt: Date.now() });
    }, [currentStep, formData, isSubmitted]);

    // -------------------------------------------------------------------
    // Step updaters
    // -------------------------------------------------------------------

    const updateStep1 = useCallback((data: Partial<Step1Data>) => {
        setFormData((prev) => ({ ...prev, step1: { ...prev.step1, ...data } }));
    }, []);

    const updateStep2 = useCallback((data: Partial<Step2Data>) => {
        setFormData((prev) => ({ ...prev, step2: { ...prev.step2, ...data } }));
    }, []);

    const updateStep3 = useCallback((data: Partial<Step3Data>) => {
        setFormData((prev) => ({ ...prev, step3: { ...prev.step3, ...data } }));
    }, []);

    const updateStep5 = useCallback((data: Partial<Step5Data>) => {
        setFormData((prev) => ({ ...prev, step5: { ...prev.step5, ...data } }));
    }, []);

    const updateStep6 = useCallback((data: Partial<Step6Data>) => {
        setFormData((prev) => ({ ...prev, step6: { ...prev.step6, ...data } }));
    }, []);

    const updateStep8 = useCallback((data: Partial<Step8Data>) => {
        setFormData((prev) => ({ ...prev, step8: { ...prev.step8, ...data } }));
    }, []);

    // -------------------------------------------------------------------
    // Item management
    // -------------------------------------------------------------------

    const addItem = useCallback((item: ItemEntry) => {
        setFormData((prev) => ({
            ...prev,
            step4: {
                items: [...prev.step4.items, item],
            },
        }));
    }, []);

    const removeItem = useCallback((itemId: string) => {
        setFormData((prev) => ({
            ...prev,
            step4: {
                items: prev.step4.items.filter((item) => item.id !== itemId),
            },
            step5: {
                currentEditItemId:
                    prev.step5.currentEditItemId === itemId
                        ? null
                        : prev.step5.currentEditItemId,
            },
        }));
    }, []);

    const updateItem = useCallback((itemId: string, updates: Partial<ItemEntry>) => {
        setFormData((prev) => ({
            ...prev,
            step4: {
                items: prev.step4.items.map((item) =>
                    item.id === itemId ? { ...item, ...updates } : item
                ),
            },
        }));
    }, []);

    // -------------------------------------------------------------------
    // Cost calculation
    // -------------------------------------------------------------------

    const calculateTotal = useCallback((): CostBreakdown => {
        const items = formData.step4.items;
        const itemsSubtotal = items.reduce((sum, item) => {
            // Skip items marked for selling
            if (item.forSelling && item.canSell) return sum;
            const price = parseInt(item.unitPrice.replace(/\./g, ""), 10) || 0;
            const qty = item.quantity || 1;
            return sum + price * qty;
        }, 0);

        const basicFee = BASIC_FEE;

        const stairFee =
            !formData.step3.hasElevator && formData.step3.wantsStairHelp
                ? STAIR_CLIMBING_FEE
                : 0;

        const servicesTotal = formData.step6.selectedServices.reduce((sum, serviceId) => {
            const service = EXTRA_SERVICES.find((s) => s.id === serviceId);
            return sum + (service ? service.price : 0);
        }, 0);

        const subtotal = itemsSubtotal + basicFee + stairFee + servicesTotal;
        const tax = Math.round(subtotal * TAX_RATE);
        const grandTotal = subtotal + tax;

        return { itemsSubtotal, basicFee, stairFee, servicesTotal, subtotal, tax, grandTotal };
    }, [formData.step3, formData.step4.items, formData.step6.selectedServices]);

    // -------------------------------------------------------------------
    // Navigation
    // -------------------------------------------------------------------

    const goNext = useCallback(() => {
        if (currentStep === 1 && !formData.step1.confirmed) {
            showToast(t('calculator.validation.confirmTerms', 'Please confirm the terms to continue.'), "warning");
            return;
        }
        if (
            currentStep === 2 &&
            (!formData.step2.propertyType || !formData.step2.totalFloors || !formData.step2.itemFloor)
        ) {
            showToast(t('calculator.validation.completeFields', 'Please complete all fields before proceeding.'), "warning");
            return;
        }
        if (currentStep === 3 && formData.step3.hasElevator === null) {
            showToast(t('calculator.validation.selectElevator', 'Please select whether you have an elevator.'), "warning");
            return;
        }
        if (currentStep === 4 && formData.step4.items.length === 0) {
            showToast(t('calculator.validation.addItem', 'Please add at least one item.'), "warning");
            return;
        }

        setCurrentStep((s) => Math.min(s + 1, totalSteps));
    }, [currentStep, formData, totalSteps, showToast, t]);

    const goPrev = useCallback(() => {
        setCurrentStep((s) => Math.max(s - 1, 1));
    }, []);

    const goToStep = useCallback(
        (step: number) => {
            if (step >= 1 && step <= totalSteps) {
                // Only allow navigating to completed steps or current step
                if (step <= currentStep) {
                    setCurrentStep(step);
                }
            }
        },
        [totalSteps, currentStep]
    );

    // -------------------------------------------------------------------
    // Submission
    // -------------------------------------------------------------------

    const submit = useCallback(async () => {
        // Validate Step 8 before submitting
        if (!formData.step8.lastName.trim()) {
            showToast(t('calculator.validation.lastName', 'Please enter your last name.'), "warning");
            return;
        }
        if (!formData.step8.firstName.trim()) {
            showToast(t('calculator.validation.firstName', 'Please enter your first name.'), "warning");
            return;
        }
        const phoneNumber = formData.step8.phoneNumber.trim().replace(/\s/g, "");

        if (!phoneNumber) {
            showToast(t('calculator.validation.phone', 'Please enter your phone number.'), "warning");
            return;
        }

        const phoneRegex = /^(\+81-?)?0(\d{1,4})-?\d{1,4}-?\d{3,4}$/;

        if (!phoneRegex.test(phoneNumber)) {
            showToast(t('calculator.validation.validPhone', 'Please enter a valid phone number (e.g., 090-1234-5678 or 03-1234-5678).'), "warning");
            return;
        }

        if (!formData.step8.email.trim()) {
            showToast(t('calculator.validation.email', 'Please enter your email address.'), "warning");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.step8.email.trim())) {
            showToast(t('calculator.validation.validEmail', 'Please enter a valid email address.'), "warning");
            return;
        }

        // All good — generate PDF
        try {
            setIsGeneratingPDF(true);
            const totals = calculateTotal();
            await generatePDF(formData, totals, t);
            clearStorage();
            setIsSubmitted(true);
        } finally {
            setIsGeneratingPDF(false);
        }
    }, [formData, calculateTotal, showToast, t]);

    const reset = useCallback(() => {
        clearStorage();
        setFormData(DEFAULT_FORM_DATA);
        setCurrentStep(1);
        setIsSubmitted(false);
    }, []);

    // -------------------------------------------------------------------
    // Derived
    // -------------------------------------------------------------------

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === totalSteps;
    const progressPercent = Math.round((currentStep / totalSteps) * 100);

    return {
        // state
        currentStep,
        formData,
        isSubmitted,
        isGeneratingPDF,
        totalSteps,
        isFirstStep,
        isLastStep,
        progressPercent,
        // updaters
        updateStep1,
        updateStep2,
        updateStep3,
        updateStep5,
        updateStep6,
        updateStep8,
        // item management
        addItem,
        removeItem,
        updateItem,
        // cost
        calculateTotal,
        // navigation
        goNext,
        goPrev,
        goToStep,
        // lifecycle
        submit,
        reset,
    };
}