import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {},
  };
};
