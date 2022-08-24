import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <p>profile page</p>
      <Link href="/login">login</Link>
      <Link href="/profile">profile</Link>
    </div>
  );
};

export default Home;
