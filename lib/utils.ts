import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function roundToNearest100(amount: number) {
  return Math.round(amount / 100) * 100;
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatCurrency(value: number, currency: string) {
  let val = "";
  if (["USD", "SGD", "CNY"].includes(currency)) {
    val = numberWithCommas(Math.floor(value));
  } else {
    val = numberWithCommas(roundToNearest100(value));
  }
  switch (currency) {
    case "USD":
      return `$${val}`;
    case "SGD":
      return `S$${val}`;
    case "CNY":
      return `¥${val}`;
    case "KRW":
      return `₩${val}`;
    default:
      return `$${val}`;
  }
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
