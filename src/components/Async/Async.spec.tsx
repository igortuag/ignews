import { render, screen } from "@testing-library/react";

test("it renders correctly", async () => {
  render(<div>Hello World</div>);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
  expect(await screen.findByText("Button")).toBeInTheDocument();
});
