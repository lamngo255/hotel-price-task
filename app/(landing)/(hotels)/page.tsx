"use client";

import React, { Suspense, useEffect, useState, lazy } from "react";
import SearchBox from "./_components/search-box";
import HotelItem from "./_components/hotel-item";
import CurrencyPicker from "./_components/currency-picker";
import axios from "axios";
import { useLocalStorage } from "usehooks-ts";
import { Hotel, HotelPrices } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { delay } from "@/lib/utils";

const HotelList = lazy(() => import("./_components/hotel-list"));

function HotelPage() {
  const [currency, setCurrency] = useLocalStorage("CURRENCY", "USD");

  return (
    <div className="w-[800px] h-[265px]">
      <CurrencyPicker onCurrencyChange={setCurrency} />
      {/* <SearchBox /> */}
      <Suspense fallback={<>Loading...</>}>
        <HotelList currency={currency} />
      </Suspense>
    </div>
  );
}

export default HotelPage;
