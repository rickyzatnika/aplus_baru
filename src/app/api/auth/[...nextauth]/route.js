import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connect from "@/utils/db";
import Users from "@/models/User";
import { compare } from "bcryptjs";
import { signJwtToken } from "@/utils/jwt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",

      async authorize(credentials, req) {
        await connect();
        const { name, password } = credentials;

        const user = await Users.findOne({ name });

        if (!user) {
          throw new Error("User tidak ditemukan, silahkan registrasi!");
        }
        const isPassword = await compare(password, user.password);

        if (!isPassword) {
          throw new Error("Password atau username salah!");
        } else {
          const { password, ...currentUser } = user._doc;
          const accessToken = signJwtToken(currentUser, { expiresIn: "1d" });
          return {
            ...currentUser,
            accessToken,
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.accessToken = user.accessToken;
        token._id = user._id;
        token.role = user.role;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.username = token.username;
        session.user.accessToken = token.accessToken;
        session.user.isAdmin = token.isAdmin;
        session.user.role = token.role || "user";
      }
      return session;
    },
  },
  pages: {
    signIn: "/dashboard",
    signOut: "/login",
  },
});

export { handler as GET, handler as POST };
