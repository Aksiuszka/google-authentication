import { GetServerSideProps, NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

const Login: NextPage = () => {
  return (
    <>
      <div>sign in</div>
      <button onClick={() => signIn('google')}>sign in</button>
    </>
  );
};
export default Login;
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
