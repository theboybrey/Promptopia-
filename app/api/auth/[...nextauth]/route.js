import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();

      // Check if user exists in database

      // If user does not exist, create user in database

      return true;
    } catch (error) {
      console.log(error.data.message);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
