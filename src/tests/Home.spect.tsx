import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "123",
          amount: 100,
        }}
      />
    );

    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
