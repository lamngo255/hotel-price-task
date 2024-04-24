import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency: string) {
  switch (currency) {
    case "USD":
      return `$${value}`;
    case "SGD":
      return `S$${value}`;
    case "CNY":
      return `¥${value}`;
    case "KRW":
      return `₩${value}`;
      return `${value}`;
  }
}
