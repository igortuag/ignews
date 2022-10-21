import { render, screen } from "@testing-library/react";
import SubscribeButton from ".";

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton priceId="123" />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});
