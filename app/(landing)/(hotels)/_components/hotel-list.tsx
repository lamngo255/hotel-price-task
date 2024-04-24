import { Hotel, HotelPrices } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/spinner";
import React, { Fragment, useEffect, useState } from "react";
import HotelItem from "./hotel-item";
import hotels from "@/config/hotels.json";
import USD from "@/config/USD.json";

const HOST_API = "https://61c3e5d2f1af4a0017d99115.mockapi.io";

const getHotels = async () => {
  if (process.env.MY_ENV === "sandbox") {
    return hotels;
  }

  const res = await fetch(`${HOST_API}/hotels/tokyo`);
  return res.json();
};

const getHotelPrices = async (currency: string) => {
  if (process.env.MY_ENV === "sandbox") {
    return USD;
  }

  const res = await fetch(`${HOST_API}/hotels/tokyo/1/${currency}`);
  return res.json();
};

interface HotelListProps {
  currency: string;
}

function HotelList({ currency }: HotelListProps) {
  const { data: hotelData, isLoading: hotelLoading } = useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: () => getHotels(),
  });

  const { data: pricesData, isLoading: hotelPricesLoading } = useQuery<Hotel[]>(
    {
      queryKey: ["hotels-prices", currency],
      queryFn: () => getHotelPrices(currency),
    }
  );

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
    <Fragment>
      {hotelLoading || hotelPricesLoading ? (
        <Spinner />
      ) : (
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
      )}
    </Fragment>
  );
}

export default HotelList;
