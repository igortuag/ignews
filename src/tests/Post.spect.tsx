import { render, screen } from "@testing-library/react";
import Post, { getServerSideProps } from "../pages/post";
import { mocked } from "ts-jest/utils";

import { prismic } from "../../services/prismic";

jest.mock("../../services/stripe");

jest.mock("../../services/prismic");

const post = {
  slug: "my-new-post",
  title: "My new post",
  content: "<p>Post excerpt</p>",
  updatedAt: "10 de Abril",
};

describe("Post page", () => {
  it("renders correctly", () => {
    render(<Post post={post} />);

    expect(screen.getByText(/My new post/i)).toBeInTheDocument();
  });

  it("redirects user if no subscription is found", async () => {
    const getSessionMocked = mocked({
      req: {
        cookies: {},
      },
      params: {
        slug: "my-new-post",
      }
    });
    getSessionMocked.mockReturnValueOnce([null, false]);

    const response = await getServerSideProps({
      params: { slug: "my-new-post" },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/",
        }),
      })
    );
  });
});
