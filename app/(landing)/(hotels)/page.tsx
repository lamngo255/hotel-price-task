"use client";

import React, { Suspense } from "react";
import CurrencyPicker from "./_components/currency-picker";
import SearchBox from "./_components/search-box";
import { useLocalStorage } from "usehooks-ts";
import HotelList from "./_components/hotel-list";

function HotelPage() {
  const [currency, setCurrency] = useLocalStorage("CURRENCY", "USD");

  return (
    <div className="w-[800px] h-[265px]">
      <CurrencyPicker onCurrencyChange={setCurrency} />
      <SearchBox />
      <Suspense fallback={<>Loading...</>}>
        <HotelList currency={currency} />
      </Suspense>
    </div>
  );
}

export default HotelPage;
