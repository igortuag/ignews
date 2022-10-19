import { render, screen } from "@testing-library/react";
import SignInButton from ".";

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("SignInButton component", () => {
  it("renders correctly", () => {
    render(<SignInButton />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
