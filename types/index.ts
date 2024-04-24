export interface Hotel {
  id: number;
  name: string;
  rating: number;
  stars: number;
  address: string;
  photo: string;
  description: string;
}

export interface HotelPrices {
  id: number;
  price?: number;
  competitors?: Record<string, number>;
  taxes_and_fees?: {
    tax: number;
    hotel_fee: number;
  };
}
