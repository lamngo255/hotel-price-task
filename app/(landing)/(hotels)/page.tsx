import React from "react";
import SearchBox from "./_components/search-box";
import HotelItem from "./_components/hotel-item";
import CurrencyPicker from "./_components/currency-picker";

function HotelPage() {
  return (
    <div className="w-[750px] h-[265px]">
      <CurrencyPicker />
      <SearchBox />
      <HotelItem />
      <HotelItem />
    </div>
  );
}

export default HotelPage;
