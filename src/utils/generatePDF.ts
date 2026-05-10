import jsPDF from "jspdf";
import { EXTRA_SERVICES } from "../features/calculator/calculatorConfig";
import type { CalculatorFormData, CostBreakdown } from "../hooks/useCalculator";
import i18n from "../i18n/i18n";

const formatYen = (amount: number): string => {
    return "¥" + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Translation function type
type TFunction = (key: string, options?: any) => string;

export async function generatePDF(
    formData: CalculatorFormData,
    totals: CostBreakdown,
    t?: TFunction
): Promise<void> {
    // Ensure the products namespace is loaded — it's lazy and may not be
    // available if the user triggers PDF generation before visiting Step 4.
    await i18n.loadNamespaces("products");

    // Helper to get translated text with fallback
    const translate = (key: string, fallback: string, options?: any): string => {
        if (t) {
            const translated = t(key, { defaultValue: fallback, ...options });
            return translated === key ? fallback : translated;
        }
        return fallback;
    };

    const doc = new jsPDF("p", "mm", "a4");

    try {
        const response = await fetch('/fonts/NotoSansJP-Regular.ttf');
        const arrayBuffer = await response.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        let binary = '';
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const base64String = window.btoa(binary);

        doc.addFileToVFS('NotoSansJP-Regular.ttf', base64String);
        doc.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'normal', 'Identity-H');
        doc.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'bold', 'Identity-H');
        doc.setFont('NotoSansJP', 'normal');
    } catch (e) {
        console.error("Failed to load font:", e);
    }

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    const regularItems = formData.step4.items.filter(
        (item) => !(item.forSelling && item.canSell)
    );
    const appraisalItems = formData.step4.items.filter(
        (item) => item.forSelling && item.canSell
    );

    // ------------------------------------------------------------------
    // Header - Logo + Title
    // ------------------------------------------------------------------
    doc.setFontSize(22);
    doc.setTextColor(249, 115, 22);
    doc.setFont("NotoSansJP", "bold");
    doc.text(translate("brand.name", "Eco Clean Mate Tokyo"), 20, y);

    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128);
    doc.setFont("NotoSansJP", "normal");
    doc.text(translate("pdf.title", "Cost Estimate"), 20, y + 6);

    // Date
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const dateStr = `${year}/${month}/${day} ${hours}:${minutes}`;

    doc.setFontSize(8);
    doc.setTextColor(156, 163, 175);
    doc.text(`${translate("pdf.generated", "Generated")}: ${dateStr}`, pageWidth - 20, y, { align: "right" });

    // Divider
    y += 14;
    doc.setDrawColor(229, 231, 235);
    doc.line(20, y, pageWidth - 20, y);
    y += 10;

    // ------------------------------------------------------------------
    // Customer Information
    // ------------------------------------------------------------------
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55);
    doc.setFont("NotoSansJP", "bold");
    doc.text(translate("pdf.customerInfo", "Customer Information"), 20, y);
    y += 8;

    doc.setFontSize(9);
    doc.setFont("NotoSansJP", "normal");
    doc.setTextColor(55, 65, 81);

    const customerInfo = [
        [translate("pdf.name", "Name") + ":", `${formData.step8.lastName} ${formData.step8.firstName}`],
        [translate("pdf.phone", "Phone") + ":", formData.step8.phoneNumber],
        [translate("pdf.email", "Email") + ":", formData.step8.email],
    ];

    if (formData.step8.city) {
        customerInfo.push([translate("pdf.address", "Address") + ":", formData.step8.city]);
    }
    if (formData.step8.building) {
        customerInfo.push([translate("pdf.building", "Building") + ":", formData.step8.building]);
    }

    customerInfo.forEach(([label, value]) => {
        if (value && value.trim()) {
            doc.setFont("NotoSansJP", "bold");
            doc.text(label, 20, y);
            doc.setFont("NotoSansJP", "normal");
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
    doc.setFont("NotoSansJP", "bold");
    doc.text(translate("pdf.items", "Items"), 20, y);
    y += 8;

    if (formData.step4.items.length > 0) {
        // Table header
        doc.setFontSize(8);
        doc.setFont("NotoSansJP", "bold");
        doc.setTextColor(107, 114, 128);
        doc.text(translate("pdf.table.item", "Item"), 22, y);
        doc.text(translate("pdf.table.qty", "Qty"), 110, y, { align: "center" });
        doc.text(translate("pdf.table.unitPrice", "Unit Price"), 140, y, { align: "center" });
        doc.text(translate("pdf.table.total", "Total"), pageWidth - 22, y, { align: "right" });
        y += 6;

        doc.setDrawColor(229, 231, 235);
        doc.line(20, y, pageWidth - 20, y);
        y += 4;

        // Regular Items
        doc.setFont("NotoSansJP", "normal");
        doc.setTextColor(55, 65, 81);

        regularItems.forEach((item) => {
            const unitPrice = parseInt(item.unitPrice.replace(/\./g, ""), 10) || 0;
            const qty = item.quantity || 1;
            const itemTotal = unitPrice * qty;

            if (y > 270) {
                doc.addPage();
                y = 20;
            }

            // Get translated product name
            const productName = translate(`products:names.${item.productName}`, item.productName);
            const name = productName.length > 35 ? productName.substring(0, 33) + "..." : productName;

            doc.setFontSize(8);
            doc.text(name, 22, y);
            doc.text(qty.toString(), 110, y, { align: "center" });
            doc.text(formatYen(unitPrice), 140, y, { align: "center" });
            doc.text(formatYen(itemTotal), pageWidth - 22, y, { align: "right" });
            y += 6;
        });

        // Appraisal Items
        appraisalItems.forEach((item) => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }

            // Orange background for appraisal items
            doc.setFillColor(255, 247, 237);
            doc.rect(20, y - 3, pageWidth - 40, 6, "F");

            const productName = translate(`products:names.${item.productName}`, item.productName);
            const name = productName.length > 30 ? productName.substring(0, 28) + "..." : productName;

            doc.setFontSize(8);
            doc.setTextColor(55, 65, 81);
            doc.text(name, 22, y);
            doc.text((item.quantity || 1).toString(), 110, y, { align: "center" });
            doc.setTextColor(249, 115, 22);
            doc.setFont("NotoSansJP", "bold");
            doc.text(translate("pdf.tba", "TBA"), 140, y, { align: "center" });
            doc.setFont("NotoSansJP", "normal");
            doc.setTextColor(156, 163, 175);
            doc.text("—", pageWidth - 22, y, { align: "right" });
            doc.setTextColor(55, 65, 81);
            y += 8;

            // "To Be Appraised" label
            doc.setFontSize(6);
            doc.setTextColor(249, 115, 22);
            doc.text(translate("pdf.toBeAppraised", "To Be Appraised — price will be provided after assessment"), 24, y);
            doc.setTextColor(55, 65, 81);
            y += 5;
        });

        // Items subtotal
        y += 2;
        doc.setDrawColor(229, 231, 235);
        doc.line(20, y, pageWidth - 20, y);
        y += 6;

        doc.setFontSize(8);
        doc.setFont("NotoSansJP", "bold");
        doc.text(translate("pdf.itemsSubtotal", "Items Subtotal"), 22, y);
        doc.text(formatYen(totals.itemsSubtotal), pageWidth - 22, y, { align: "right" });

        // Appraisal note
        if (appraisalItems.length > 0) {
            y += 5;
            doc.setFontSize(6);
            doc.setFont("NotoSansJP", "normal");
            doc.setTextColor(249, 115, 22);
            doc.text(
                translate("pdf.excludesAppraisal", "* Excludes {{count}} item(s) to be appraised", { count: appraisalItems.length }),
                22,
                y
            );
        }

        y += 10;
    } else {
        doc.setFontSize(9);
        doc.setTextColor(156, 163, 175);
        doc.text(translate("pdf.noItems", "No items added"), 22, y);
        y += 10;
    }

    // ------------------------------------------------------------------
    // Cost Breakdown
    // ------------------------------------------------------------------
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55);
    doc.setFont("NotoSansJP", "bold");
    doc.text(translate("pdf.costBreakdown", "Cost Breakdown"), 20, y);
    y += 8;

    doc.setFontSize(9);
    doc.setFont("NotoSansJP", "normal");
    doc.setTextColor(55, 65, 81);

    const breakdownLines = [
        { label: translate("pdf.basicFee", "Basic Service Fee"), value: formatYen(totals.basicFee) },
        { label: translate("pdf.stairClimbing", "Stair Climbing Service"), value: totals.stairFee > 0 ? formatYen(totals.stairFee) : "¥0" },
    ];

    if (formData.step6.selectedServices.length > 0) {
        formData.step6.selectedServices.forEach((serviceId) => {
            const service = EXTRA_SERVICES.find((s) => s.id === serviceId);
            if (service) {
                breakdownLines.push({
                    label: translate(service.label, service.label),
                    value: formatYen(service.price)
                });
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
    doc.setFont("NotoSansJP", "bold");
    doc.text(translate("pdf.subtotal", "Subtotal"), 22, y);
    doc.text(formatYen(totals.subtotal), pageWidth - 22, y, { align: "right" });
    y += 7;

    doc.setFont("NotoSansJP", "normal");
    doc.text(translate("pdf.tax", "Tax (10%)"), 22, y);
    doc.text(formatYen(totals.tax), pageWidth - 22, y, { align: "right" });
    y += 7;

    // Grand Total
    y += 2;
    doc.setDrawColor(249, 115, 22);
    doc.setLineWidth(0.5);
    doc.line(20, y, pageWidth - 20, y);
    y += 7;

    doc.setFontSize(12);
    doc.setFont("NotoSansJP", "bold");
    doc.setTextColor(249, 115, 22);
    doc.text(translate("pdf.grandTotal", "Grand Total"), 22, y);
    doc.text(formatYen(totals.grandTotal), pageWidth - 22, y, { align: "right" });

    // ------------------------------------------------------------------
    // Footer
    // ------------------------------------------------------------------
    y = 280;
    doc.setFontSize(7);
    doc.setTextColor(156, 163, 175);
    doc.setFont("NotoSansJP", "normal");
    doc.text(translate("pdf.footer.estimate", "This is an estimate only. Final pricing may vary based on actual assessment."), pageWidth / 2, y, { align: "center" });
    if (appraisalItems.length > 0) {
        doc.text(translate("pdf.footer.appraisal", "Items marked 'TBA' will be appraised separately. We will contact you with purchase prices."), pageWidth / 2, y + 4, { align: "center" });
    } else {
        doc.text(translate("pdf.footer.contact", "Contact us for any questions about this estimate."), pageWidth / 2, y + 4, { align: "center" });
    }

    // ------------------------------------------------------------------
    // Save
    // ------------------------------------------------------------------
    const fileName = `ECO-CLEAN-MATE-TOKYO_${year}${month}${day}_${hours}${minutes}.pdf`;
    doc.save(fileName);
}