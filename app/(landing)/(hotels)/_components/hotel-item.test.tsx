import { render, screen } from "@testing-library/react";
import HotelItem from "./hotel-item";

test("loads and displays data", async () => {
  const obj = {
    id: 1,
    name: "Shinagawa Prince Hotel",
    rating: 7.7,
    stars: 4,
    address: "108-8611 Tokyo Prefecture, Minato-ku, Takanawa 4-10-30, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
    description: "",
    price: 120,
  };
  render(<HotelItem {...obj} currency="USD" />);
  expect(screen.getByText("Shinagawa Prince Hotel")).toBeInTheDocument();
  expect(screen.getByText("Good")).toBeInTheDocument();
  expect(screen.getByTestId("price").innerHTML.trim()).toBe("$120");
});

test("switch currency KRW test", async () => {
  const obj = {
    id: 3,
    name: "Park Hyatt Tokyo",
    rating: 9.2,
    stars: 5,
    address:
      "163-1055 Tokyo Prefecture, Shinjuku-ku, Nishishinjuku 3-7-1-2, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/VuLE/i1_m.jpg",
    description: "",
    price: 801007.35,
  };
  render(<HotelItem {...obj} currency="KRW" />);
  expect(screen.getByTestId("price").innerHTML.trim()).toBe("₩801,000");
});

test("switch currency CNY test", async () => {
  const obj = {
    id: 3,
    name: "Park Hyatt Tokyo",
    rating: 9.2,
    stars: 5,
    address:
      "163-1055 Tokyo Prefecture, Shinjuku-ku, Nishishinjuku 3-7-1-2, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/VuLE/i1_m.jpg",
    description: "",
    price: 5788.43,
  };
  render(<HotelItem {...obj} currency="CNY" />);
  expect(screen.getByTestId("price").innerHTML.trim()).toBe("¥5,788");
});

test("tax & hotel fees display", async () => {
  const obj = {
    id: 3,
    name: "Park Hyatt Tokyo",
    rating: 9.2,
    stars: 5,
    address:
      "163-1055 Tokyo Prefecture, Shinjuku-ku, Nishishinjuku 3-7-1-2, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/VuLE/i1_m.jpg",
    description: "",
    taxes_and_fees: {
      tax: 92,
      hotel_fees: 115,
    },
    price: 1150,
  };
  render(<HotelItem {...obj} currency="SGD" />);
  expect(screen.getByText("*")).toBeInTheDocument();
});

test("Competitors display", async () => {
  const obj = {
    id: 3,
    name: "Park Hyatt Tokyo",
    rating: 9.2,
    stars: 5,
    address:
      "163-1055 Tokyo Prefecture, Shinjuku-ku, Nishishinjuku 3-7-1-2, Japan",
    photo: "https://d2ey9sqrvkqdfs.cloudfront.net/VuLE/i1_m.jpg",
    description: "",
    competitors: {
      "Booking.com": 815,
      "Hotels.com": 817,
      Expedia: 814,
      getaroom: 830,
      "AMOMA.com": 900,
    },
    price: 825.94,
  };
  render(<HotelItem {...obj} currency="CNY" />);
  expect(screen.getByText("Expedia")).toBeInTheDocument();
  expect(screen.getByText("¥814")).toBeInTheDocument();
  expect(screen.getByText("Booking.com (¥815 ¥900)")).toBeInTheDocument();
  expect(screen.getByText("Hotels.com (¥817 ¥900)")).toBeInTheDocument();
  expect(screen.getByText("getaroom (¥830 ¥900)")).toBeInTheDocument();
  expect(screen.getByText("AMOMA.com (¥900)")).toBeInTheDocument();
});
