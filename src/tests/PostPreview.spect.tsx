import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import PostPreview, { getStaticPaths } from "../pages/posts/preview/[slug]";
import { mocked } from "ts-jest/utils";

import { prismic } from "../../services/prismic";
import { getSession } from "next-auth/react";

jest.mock("../../services/stripe");
jest.mock("next-auth/react", () => {});
jest.mock("../../services/prismic");

const postPreview = {
  slug: "my-new-postPreview",
  title: "My new postPreview",
  content: "<p>PostPreview excerpt</p>",
  updatedAt: "10 de Abril",
};

describe("Post preview page", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<PostPreview post={postPreview} />);

    expect(screen.getByText(/My new postPreview/i)).toBeInTheDocument();
    expect(screen.getByText(/Wanna continue reading?/i)).toBeInTheDocument();
  });

  // it("redirects user if no subscription is found", async () => {
  //   const getSessionMocked = mocked(getSession);

  //   getSessionMocked.mockReturnValueOnce([null, false]);

  //   const response = await getServerSideProps({
  //     params: { slug: "my-new-postPreview" },
  //   } as any);

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       redirect: expect.objectContaining({
  //         destination: "/",
  //       }),
  //     })
  //   );
  // });

  // it("loads initial data", async () => {
  //   const getSessionMocked = mocked(getSession);
  //   const getPrismicClientMocked = mocked(prismic);

  //   getSessionMocked.mockReturnValueOnce([
  //     { activeSubscription: "fake-active-subscription" },
  //     false,
  //   ] as any);

  //   getPrismicClientMocked.mockReturnValueOnce({
  //     getByUID: jest.fn().mockResolvedValueOnce({
  //       data: {
  //         title: [{ type: "heading", text: "My new postPreview" }],
  //         content: [{ type: "paragraph", text: "PostPreview excerpt" }],
  //       },
  //       last_publication_date: "04-01-2021",
  //     }),
  //   } as any);

  //   const response = await getServerSideProps({
  //     params: { slug: "my-new-postPreview" },
  //   } as any);

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         postPreview: {
  //           slug: "my-new-postPreview",
  //           title: "My new postPreview",
  //           content: "<p>PostPreview excerpt</p>",
  //           updatedAt: "01 de abril de 2021",
  //         },
  //       },
  //     })
  //   );
  // });
});
