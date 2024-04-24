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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatCurrency } from "@/lib/utils";
import { useLocalStorage } from "usehooks-ts";

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
  const [currency] = useLocalStorage("CURRENCY", "USD");
  const { taxes_and_fees, competitors } = props;

  const mostExpensive = competitors
    ? Math.max(...Object.values(competitors), props.price || 0)
    : props.price || 0;

  const discountRate = competitors
    ? ((mostExpensive - (props.price || 0)) / mostExpensive) * 100
    : 0;

  let sortedCompetitors = competitors ? Object.entries(competitors) : null;
  sortedCompetitors?.sort((a, b) => a[1] - b[1]);

  console.log(sortedCompetitors);
  const firstCompetitor = sortedCompetitors ? sortedCompetitors[0] : null;
  const restCompetitors = sortedCompetitors
    ? sortedCompetitors.slice(1, sortedCompetitors.length)
    : null;

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
    <Card className="w-full mt-4 p-3 flex h-60 flex-row">
      <div className="relative w-64 h-58">
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
            {/* Our booking */}
            <div className="flex flex-row justify-between mt-2 pt-2 text-sm px-1 h-7 hover:bg-slate-200">
              <span className="cursor-pointer">
                <span>Us </span>
                {discountRate > 0 && (
                  <span className="underline">
                    (Save ${discountRate.toFixed(1)}%)
                  </span>
                )}

                {taxes_and_fees && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span>{"*"}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div>
                          <div className="font-semibold">
                            Tax & Fees are inclusive:
                          </div>
                          <div>
                            Tax: {formatCurrency(taxes_and_fees.tax, currency)}
                          </div>
                          <div>
                            Hotel fees:{" "}
                            {formatCurrency(
                              taxes_and_fees.hotel_fees,
                              currency
                            )}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </span>

              <span>
                <span className="mr-1">
                  {props.price ? formatCurrency(props.price, currency) : "N/A"}
                </span>
                {discountRate > 0 && (
                  <span className="line-through">
                    {formatCurrency(mostExpensive, currency)}
                  </span>
                )}
              </span>
            </div>

            {/* First competitor */}
            {competitors && firstCompetitor && (
              <div className="flex flex-row justify-between pt-2 text-sm px-1 h-7 mb-2 hover:bg-slate-200">
                <span>{firstCompetitor[0]}</span>
                <span>
                  <span className="mr-1">
                    {formatCurrency(firstCompetitor[1], currency)}
                  </span>
                  {mostExpensive > firstCompetitor[1] && (
                    <span className="line-through">
                      {formatCurrency(mostExpensive, currency)}
                    </span>
                  )}
                </span>
              </div>
            )}

            {restCompetitors && restCompetitors?.length > 0 && (
              <div className="flex flex-col space-y-1.5">
                <Select>
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="More.." />
                  </SelectTrigger>
                  <SelectContent position="popper" className="border-none">
                    {restCompetitors?.map((item, id) => (
                      <SelectItem key={id} value={item[0]}>
                        <span>
                          {item[0]} ({formatCurrency(item[1], currency)}
                          {mostExpensive > item[1] ? (
                            <span className="line-through ml-1">
                              {" "}
                              {formatCurrency(mostExpensive, currency)})
                            </span>
                          ) : (
                            ")"
                          )}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardContent className="p-2 flex flex-col w-44 h-auto border rounded-md pt-2 justify-between">
        <div>
          <div className="flex flex-row mt-3">
            <span className="bg-green-700 text-sm text-white px-1 rounded-md mr-1">
              {props.rating}
            </span>
            <span className="text-sm">{hotelRating(props.rating)}</span>
          </div>
          <div className="text-2xl font-bold mt-2">
            {props.price ? formatCurrency(props.price, props.currency) : "N/A"}
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
