import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getPrismicClient } from "../../services/prismic";

export default function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("publication", String(slug), {});

  return {
    props: {},
  };
};
