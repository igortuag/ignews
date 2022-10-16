import { render } from "@testing-library/react";
import { ActiveLink } from ".";

test("active link renders correctly", () => {
  const { getByText } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  );

  expect(getByText("Home")).toBeInTheDocument();
});
