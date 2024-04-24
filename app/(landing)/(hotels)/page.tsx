"use client";

import React, { useEffect, useState } from "react";
import SearchBox from "./_components/search-box";
import HotelItem from "./_components/hotel-item";
import CurrencyPicker from "./_components/currency-picker";
import axios from "axios";
import { useLocalStorage } from "usehooks-ts";
import { Hotel, HotelPrices } from "@/types";

const HOST_API = "https://61c3e5d2f1af4a0017d99115.mockapi.io";

function HotelPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [prices, setPrices] = useState<HotelPrices[]>([]);
  const [currency, setCurrency] = useLocalStorage("CURRENCY", "USD");

  useEffect(() => {
    const fetchData = async () => {
      const hotelRes = await axios(`${HOST_API}/hotels/tokyo`);
      const priceRes = await axios(`${HOST_API}/hotels/tokyo/1/${currency}`);
      setHotels(hotelRes.data);
      setPrices(priceRes.data);
    };

    fetchData();
  }, [currency]);

  const getHotelPrice = (hotelId: number) => {
    return prices.find((hotelPrice) => hotelPrice.id === hotelId);
  };

  return (
    <div className="w-[750px] h-[265px]">
      <CurrencyPicker onCurrencyChange={setCurrency} />
      {/* <SearchBox /> */}
      {hotels?.map((hotel, id) => (
        <HotelItem
          key={hotel.id}
          currency={currency}
          {...hotel}
          {...getHotelPrice(hotel.id)}
        />
      ))}
    </div>
  );
}

export default HotelPage;
