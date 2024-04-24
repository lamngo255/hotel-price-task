import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocalStorage } from "usehooks-ts";

interface CurrencyPickerProps {
  onCurrencyChange: (val: string) => void;
}

function CurrencyPicker({ onCurrencyChange }: CurrencyPickerProps) {
  const [currency] = useLocalStorage("CURRENCY", "USD");

  return (
    <div className="flex flex-col w-32 mb-3">
      <Select defaultValue={currency} onValueChange={onCurrencyChange}>
        <SelectTrigger id="currency">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent position="popper" className="border-none">
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="SGD">SGD</SelectItem>
          <SelectItem value="CNY">CNY</SelectItem>
          <SelectItem value="KRW">KRW</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CurrencyPicker;
