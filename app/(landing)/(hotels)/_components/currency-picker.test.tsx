import { render, screen } from "@testing-library/react";
import CurrencyPicker from "./currency-picker";

it("Default currency is USD", () => {
  render(<CurrencyPicker onCurrencyChange={() => {}} />);

  const myElem = screen.getByText("USD");
  expect(myElem).toBeInTheDocument();
});
