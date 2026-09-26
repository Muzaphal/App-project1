import dayjs from "dayjs";

export const formatCurrency = (value: number, currency: any): string => {
    try {
        return `${new Intl.NumberFormat("en-UG", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)} UGX`;
    } catch {
        return `${Math.round(value).toLocaleString("en-UG")} UGX`;
    }
};

export const formatSubscriptionDateTime = (value?: string): string => {
    if (!value) return "Not provided";

    const parsedDate = dayjs(value);

    return parsedDate.isValid()
        ? parsedDate.format("MM/DD/YYYY")
        : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
    if (!value) return "Unknown";

    return value.charAt(0).toUpperCase() + value.slice(1);
};