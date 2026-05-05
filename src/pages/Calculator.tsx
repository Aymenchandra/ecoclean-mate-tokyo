import React from "react";
import CalculatorPage from "../features/calculator/CalculatorPage";
import { ToastProvider } from "../context/ToastContext";

const Calculator: React.FC = () => {
    return (
        <ToastProvider>
            <CalculatorPage />
        </ToastProvider>
    );
};

export default Calculator;