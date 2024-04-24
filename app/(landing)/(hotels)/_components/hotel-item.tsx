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

const imgSrc =
  "https://content.r9cdn.net/rimg/himg/93/b0/65/ice-113400-63963384_3XL-483522.jpg?width=452&height=400&xhint=1554&yhint=960&crop=true&watermarkheight=28&watermarkpadding=10";

function HotelItem() {
  return (
    <Card className="w-full mt-4 p-3 flex h-full flex-row">
      <div className="relative w-60 h-58">
        <Image
          src={imgSrc}
          alt="Hotel"
          fill
          className="w-full h-auto rounded-md"
        />
      </div>

      <CardContent className="-ml-3 h-full">
        <form>
          <label className="text-big font-semibold">
            Crowne Plaza Changi Airport
          </label>
          <div className="flex flex-row gap-1">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className="flex flex-row mt-3">
            <span className="bg-green-700 text-white px-1 rounded-md mr-2">
              8.7
            </span>
            <span className="text-md">Excellence (200)</span>
          </div>

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
          <div className="font-semibold">Best Deal</div>
          <div className="text-2xl font-bold">$232</div>
        </div>

        <Button type="submit" variant="default" className="bg-teal-700">
          View Deal
        </Button>
      </CardContent>
    </Card>
  );
}

export default HotelItem;
