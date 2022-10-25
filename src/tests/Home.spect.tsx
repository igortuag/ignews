import { render, screen } from "@testing-library/react";
import { stripe } from "../services/stripe";
import { mocked } from "ts-jest/utils";
import Home, { getStaticProps } from "../pages";

jest.mock("next/router");
jest.mock("next-auth/react", () => {
  return {
    useSession: () => [null, false],
  };
});
jest.mock("../../services/stripe");

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

    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve);

    retrieveStripePricesMocked.mockResolvedValueOnce({
      priceId: "123",
      amount: "100",
    } as any);

    const response = await getStaticProps({} as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "123",
            amount: "100",
          },
        },
      })
    );
  });
});
