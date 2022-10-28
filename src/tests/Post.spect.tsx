import { render, screen } from "@testing-library/react";
import Post, { getServerSideProps } from "../pages/post";
import { mocked } from "ts-jest/utils";

import { prismic } from "../../services/prismic";
import { getSession } from "next-auth/react";

jest.mock("../../services/stripe");
jest.mock('next-auth/react', () => { })
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
    const getSessionMocked = mocked(getSession);

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
