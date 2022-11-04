import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";

test("it renders correctly", async () => {
  render(<div>Hello World</div>);

  expect(screen.getByText("Hello World")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  await waitForElementToBeRemoved(screen.queryByText("Invisible Button"));
});
