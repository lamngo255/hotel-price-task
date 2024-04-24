import React from "react";
import SearchBox from "./_components/search-box";
import HotelItem from "./_components/hotel-item";

function HotelPage() {
  return (
    <div className="w-[750px] h-[265px]">
      <SearchBox />
      <HotelItem />
      <HotelItem />
    </div>
  );
}

export default HotelPage;
