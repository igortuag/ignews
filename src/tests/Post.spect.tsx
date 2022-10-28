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

  // it("loads initial data", async () => {
  //   const getPrismicClientMocked = mocked(prismic.getPrismicClient);

  //   getPrismicClientMocked.mockReturnValueOnce({
  //     query: jest.fn().mockResolvedValueOnce({
  //       results: [
  //         {
  //           uid: "my-new-post",
  //           data: {
  //             title: [{ type: "heading", text: "My new post" }],
  //             content: [{ type: "paragraph", text: "Post excerpt" }],
  //           },
  //           last_publication_date: "04-01-2021",
  //         },
  //       ],
  //     }),
  //   } as any);

  //   const response = await getStaticProps({} as any);

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         post: [
  //           {
  //             slug: "my-new-post",
  //             title: "My new post",
  //             content: "<p>Post excerpt</p>",
  //             updatedAt: "01 de abril de 2021",
  //           },
  //         ],
  //       },
  //     })
  //   );
  // });
});
