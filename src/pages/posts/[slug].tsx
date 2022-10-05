import { GetServerSideProps } from "next";

export default function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
