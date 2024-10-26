import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

async function login(credentials) {
  try {
    await connect();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong Credentials.");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error("Wrong Credentials.");
    return user;
  } catch (error) {
    console.log("error while logging in.");
    throw new Error("something went wrong!");
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Failed to login.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.isAdmin = user.isAdmin;
        token.id = user.id;
      }
      console.log("this is the token = ", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;
        session.user.id = token.id;
      }
      console.log("this is the session = ", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
