import { render, screen } from "@testing-library/react";
import Posts from "../pages/ss";

jest.mock("../../services/stripe");

const posts = [
  {
    slug: "my-new-post",
    title: "My new post",
    content: "<p>Post excerpt</p>",
    updatedAt: "10 de Abril",
  },
];

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText(/My new post/i)).toBeInTheDocument();
  });
});
