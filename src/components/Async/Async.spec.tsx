import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Async from ".";

test("it renders correctly", async () => {
  render(<Async />);

  console.log(
    "screen.logTestingPlaygroundURL() :>> ",
    screen.logTestingPlaygroundURL()
  );

  expect(screen.getByText("Hello World")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  await waitForElementToBeRemoved(screen.queryByText("Invisible Button"));
});
