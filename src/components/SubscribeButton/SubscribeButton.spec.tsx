import { render, screen, fireEvent } from "@testing-library/react";
import SubscribeButton from ".";
import { signIn } from "next-auth/react";
import { mocked } from "ts-jest/utils";

jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton priceId="123" />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("redirects user to sign in when not authenticated", () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton priceId="123" />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });
});
