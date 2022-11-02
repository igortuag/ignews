import { render, screen } from "@testing-library/react";

test("it renders correctly", () => {
  render(<div>Hello World</div>);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
