import { render, screen } from "@testing-library/react";
import SubscribeButton from ".";

jest.mock('next-auth/client', () => { 
  return {
    useSession: () => [null, false],
  }
})

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton priceId="123" />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});
