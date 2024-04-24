import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CurrencyPicker() {
  return (
    <div className="flex flex-col w-32 mb-3">
      <Select defaultValue="usd">
        <SelectTrigger id="currency">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent position="popper" className="border-none">
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="sgd">SGD</SelectItem>
          <SelectItem value="cny">CNY</SelectItem>
          <SelectItem value="krw">KRW</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CurrencyPicker;
