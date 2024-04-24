import { render, screen } from "@testing-library/react";
import SearchBox from "./search-box";

it("Search box renders properly", () => {
  render(<SearchBox />);

  const myElem = screen.getByText("Search");
  expect(myElem).toBeInTheDocument();
});
