import { Hotel } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import HotelItem from "./hotel-item";

const HOST_API = "https://61c3e5d2f1af4a0017d99115.mockapi.io";

const getHotels = async () => {
  const res = await fetch(`${HOST_API}/hotels/tokyo`);
  return res.json();
};

const getHotelPrices = async (currency: string) => {
  const res = await fetch(`${HOST_API}/hotels/tokyo/1/${currency}`);
  return res.json();
};

interface HotelListProps {
  currency: string;
}

function HotelList({ currency }: HotelListProps) {
  const { data: hotelData } = useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: () => getHotels(),
  });

  const { data: pricesData } = useQuery<Hotel[]>({
    queryKey: ["hotels-prices", currency],
    queryFn: () => getHotelPrices(currency),
  });

  const getHotelPrice = (hotelId: number) => {
    return pricesData?.find((hotelPrice) => hotelPrice.id === hotelId);
  };

  // Push unavailable price hotels to the bottom
  const availPriceHotels = hotelData?.filter((hotel) =>
    getHotelPrice(hotel.id)
  );
  const naPriceHotels = hotelData?.filter((hotel) => !getHotelPrice(hotel.id));

  let finalData = availPriceHotels ? availPriceHotels : [];
  if (naPriceHotels) {
    finalData = [...finalData, ...naPriceHotels];
  }

  return (
    <div>
      {finalData?.map((hotel, id) => (
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

export default HotelList;
