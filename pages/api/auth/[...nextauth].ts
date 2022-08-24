import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account}){
      if(account){
        token.account = account;
        token.idToken = account.id_token
      }
      return token
    },
    async session({ session, token }) {
      if(token){
        session.idToken = token.idToken
      }
      return session
    },
  }
};
export default NextAuth(authOptions);
