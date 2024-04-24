import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosStar } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency } from "@/lib/utils";

const imgSrc =
  "https://content.r9cdn.net/rimg/himg/93/b0/65/ice-113400-63963384_3XL-483522.jpg?width=452&height=400&xhint=1554&yhint=960&crop=true&watermarkheight=28&watermarkpadding=10";

interface HotelItemProps {
  id: number;
  name: string;
  rating: number;
  stars: number;
  address: string;
  photo: string;
  description: string;
  currency: string;
  price?: number;
  competitors?: Record<string, number>;
  taxes_and_fees?: Record<string, number>;
}

function HotelItem(props: HotelItemProps) {
  const createStars = (numStar: number) => {
    var elements = [];
    for (let i = 0; i < numStar; i++) {
      elements.push(<IoIosStar />);
    }
    return elements;
  };

  const hotelRating = (rating: number) => {
    if (7 <= rating && rating < 8) return "Good";
    if (8 <= rating && rating < 9) return "Fabulous";
    if (rating >= 9) return "Exceptional";
    return "Normal";
  };

  return (
    <Card className="w-full mt-4 p-3 flex h-full flex-row">
      <div className="relative w-72 h-58">
        <Image
          src={props.photo}
          alt="Hotel"
          fill
          className="w-full h-auto rounded-md"
        />
      </div>

      <CardContent className="-ml-3 h-full w-96">
        <form>
          <label className="text-big font-semibold">{props.name}</label>
          <div className="flex flex-row gap-1">{createStars(props.stars)}</div>

          <div>
            <div className="flex flex-row justify-between pt-2 text-sm px-1 h-7 border-b hover:bg-slate-200">
              <span>Hotels</span>
              <span>270$</span>
            </div>
            <div className="flex flex-row justify-between pt-2 text-sm px-1 h-7 border-b mb-2 hover:bg-slate-200">
              <span>Booking</span>
              <span>270$</span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="platform">
                  <SelectValue placeholder="Expedia and 4 more" />
                </SelectTrigger>
                <SelectContent position="popper" className="border-none">
                  <SelectItem value="expedia">
                    <div className="w-full flex flex-row justify-between">
                      <span className="font-semibold">Expedia ($232)</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="agoda">Agoda.com ($232)</SelectItem>
                  <SelectItem value="hotelscombined">
                    HotelsCombined ($232)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardContent className="p-2 flex flex-col w-40 h-auto border rounded-md pt-2 justify-between">
        <div>
          <div className="flex flex-row mt-3">
            <span className="bg-green-700 text-sm text-white px-1 rounded-md mr-1">
              {props.rating}
            </span>
            <span className="text-sm">{hotelRating(props.rating)}</span>
          </div>
          <div className="text-2xl font-bold mt-2">
            {formatCurrency(props.price || 0, props.currency)}
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          className="bg-teal-700 font-semibold"
        >
          Book!
        </Button>
      </CardContent>
    </Card>
  );
}

export default HotelItem;
