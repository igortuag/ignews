import { query as q } from "faunadb";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await fauna.query(
          q.Create(q.Collection("users"), {
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
            },
          })
        );

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
