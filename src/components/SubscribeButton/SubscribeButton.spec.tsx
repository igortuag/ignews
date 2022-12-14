import { render, screen, fireEvent } from "@testing-library/react";
import SubscribeButton from ".";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { mocked } from "ts-jest/utils";

jest.mock("next-auth/client");
jest.mock("next/router");

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      {
        activeSubscription: "fake-active-subscription",
      },
      false,
    ] as any);

    render(<SubscribeButton priceId="123" />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("redirects user to sign in when not authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      {
        activeSubscription: "fake-active-subscription",
      },
      false,
    ] as any);

    const signInMocked = mocked(signIn);

    render(<SubscribeButton priceId="123" />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it("redirects to posts when user already has a subscription", () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce({
      user: {
        name: "John Doe",
        email: "john@dow.com",
      },
      activeSubscription: "fake-active-subscription",
      expires: "fake-expires",
    } as any);

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<SubscribeButton priceId="123" />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith("/posts");
  });
});
