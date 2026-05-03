// src/utils/generatePDF.ts

import jsPDF from "jspdf";

import { STAIR_CLIMBING_FEE, EXTRA_SERVICES, BASIC_FEE } from "../features/calculator/calculatorConfig";
import type { CalculatorFormData, CostBreakdown } from "../hooks/useCalculator";

const formatYen = (amount: number): string => {
    return "¥" + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export function generatePDF(
    formData: CalculatorFormData,
    totals: CostBreakdown
): void {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    // ------------------------------------------------------------------
    // Header - Logo + Title
    // ------------------------------------------------------------------
    doc.setFontSize(22);
    doc.setTextColor(249, 115, 22); // orange-500
    doc.setFont("helvetica", "bold");
    doc.text("Eco Clean Mate Tokyo", 20, y);

    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128); // gray-500
    doc.setFont("helvetica", "normal");
    doc.text("Cost Estimate", 20, y + 6);

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const dateStr = `${year}/${month}/${day} ${hours}:${minutes}`;

    doc.setFontSize(8);
    doc.setTextColor(156, 163, 175);
    doc.text(`Generated: ${dateStr}`, pageWidth - 20, y, { align: "right" });

    // Divider
    y += 14;
    doc.setDrawColor(229, 231, 235); // gray-200
    doc.line(20, y, pageWidth - 20, y);
    y += 10;

    // ------------------------------------------------------------------
    // Customer Information
    // ------------------------------------------------------------------
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55); // gray-800
    doc.setFont("helvetica", "bold");
    doc.text("Customer Information", 20, y);
    y += 8;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(55, 65, 81); // gray-700

    const customerInfo = [
        ["Name:", `${formData.step8.lastName} ${formData.step8.firstName}`],
        ["Phone:", formData.step8.phoneNumber],
        ["Email:", formData.step8.email],
    ];

    if (formData.step8.city) {
        customerInfo.push(["Address:", formData.step8.city]);
    }
    if (formData.step8.building) {
        customerInfo.push(["Building:", formData.step8.building]);
    }

    customerInfo.forEach(([label, value]) => {
        if (value && value.trim()) {
            doc.setFont("helvetica", "bold");
            doc.text(label, 20, y);
            doc.setFont("helvetica", "normal");
            doc.text(value, 52, y);
            y += 6;
        }
    });

    y += 4;

    // Divider
    doc.setDrawColor(229, 231, 235);
    doc.line(20, y, pageWidth - 20, y);
    y += 10;

    // ------------------------------------------------------------------
    // Items
    // ------------------------------------------------------------------
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55);
    doc.setFont("helvetica", "bold");
    doc.text("Items", 20, y);
    y += 8;

    if (formData.step4.items.length > 0) {
        // Table header
        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(107, 114, 128);
        doc.text("Item", 22, y);
        doc.text("Qty", 110, y, { align: "center" });
        doc.text("Unit Price", 140, y, { align: "center" });
        doc.text("Total", pageWidth - 22, y, { align: "right" });
        y += 6;

        doc.setDrawColor(229, 231, 235);
        doc.line(20, y, pageWidth - 20, y);
        y += 4;

        // Table rows
        doc.setFont("helvetica", "normal");
        doc.setTextColor(55, 65, 81);

        formData.step4.items.forEach((item) => {
            const unitPrice = parseInt(item.unitPrice.replace(/\./g, ""), 10) || 0;
            const qty = item.quantity || 1;
            const itemTotal = unitPrice * qty;

            // Check if we need a new page
            if (y > 270) {
                doc.addPage();
                y = 20;
            }

            doc.setFontSize(8);
            const name = item.productName.length > 35 ? item.productName.substring(0, 33) + "..." : item.productName;
            doc.text(name, 22, y);
            doc.text(qty.toString(), 110, y, { align: "center" });
            doc.text(formatYen(unitPrice), 140, y, { align: "center" });
            doc.text(formatYen(itemTotal), pageWidth - 22, y, { align: "right" });
            y += 6;
        });

        // Items subtotal
        y += 2;
        doc.setDrawColor(229, 231, 235);
        doc.line(20, y, pageWidth - 20, y);
        y += 6;

        doc.setFont("helvetica", "bold");
        doc.text("Items Subtotal", 22, y);
        doc.text(formatYen(totals.itemsSubtotal), pageWidth - 22, y, { align: "right" });
        y += 10;
    } else {
        doc.setFontSize(9);
        doc.setTextColor(156, 163, 175);
        doc.text("No items added", 22, y);
        y += 10;
    }

    // ------------------------------------------------------------------
    // Cost Breakdown
    // ------------------------------------------------------------------
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55);
    doc.setFont("helvetica", "bold");
    doc.text("Cost Breakdown", 20, y);
    y += 8;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(55, 65, 81);

    const breakdownLines = [
        { label: "Basic Service Fee", value: formatYen(totals.basicFee) },
        { label: "Stair Climbing Service", value: totals.stairFee > 0 ? formatYen(totals.stairFee) : "¥0" },
    ];

    // Extra services
    if (formData.step6.selectedServices.length > 0) {
        formData.step6.selectedServices.forEach((serviceId) => {
            const service = EXTRA_SERVICES.find((s) => s.id === serviceId);
            if (service) {
                breakdownLines.push({ label: service.label, value: formatYen(service.price) });
            }
        });
    }

    breakdownLines.forEach(({ label, value }) => {
        doc.text(label, 22, y);
        doc.text(value, pageWidth - 22, y, { align: "right" });
        y += 6;
    });

    // Divider before totals
    y += 2;
    doc.setDrawColor(229, 231, 235);
    doc.line(20, y, pageWidth - 20, y);
    y += 8;

    // Totals
    doc.setFont("helvetica", "bold");
    doc.text("Subtotal", 22, y);
    doc.text(formatYen(totals.subtotal), pageWidth - 22, y, { align: "right" });
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.text("Tax (10%)", 22, y);
    doc.text(formatYen(totals.tax), pageWidth - 22, y, { align: "right" });
    y += 7;

    // Grand Total
    y += 2;
    doc.setDrawColor(249, 115, 22); // orange
    doc.setLineWidth(0.5);
    doc.line(20, y, pageWidth - 20, y);
    y += 7;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(249, 115, 22);
    doc.text("Grand Total", 22, y);
    doc.text(formatYen(totals.grandTotal), pageWidth - 22, y, { align: "right" });

    // ------------------------------------------------------------------
    // Footer
    // ------------------------------------------------------------------
    y = 280;
    doc.setFontSize(7);
    doc.setTextColor(156, 163, 175);
    doc.setFont("helvetica", "normal");
    doc.text("This is an estimate only. Final pricing may vary based on actual assessment.", pageWidth / 2, y, { align: "center" });
    doc.text("Contact us for any questions about this estimate.", pageWidth / 2, y + 4, { align: "center" });

    // ------------------------------------------------------------------
    // Save
    // ------------------------------------------------------------------
    const fileName = `ECO-CLEAN-MATE-TOKYO_${year}${month}${day}_${hours}${minutes}.pdf`;
    doc.save(fileName);
}