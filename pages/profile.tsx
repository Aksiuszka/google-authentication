import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { signOut, useSession } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';

const Profile: NextPage = props => {
  const { data: session } = useSession();
  console.log(session);
  console.log(props);
  return (
    <>
      <p>hej, {session?.user?.name}</p>
      <p>email, {session?.user?.email}</p>
      <button onClick={() => signOut()}>signout</button>
    </>
  );
};
export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  } else {
    const token = await getToken({ req });
    return {
      props: {
        token,
      },
    };
  }
};
