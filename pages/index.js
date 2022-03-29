import Head from 'next/head'
import Image from 'next/image'

import Layout from '../Util/Layout';

export default function Home() {
  return (
    <div>
      <h1 className=' text-pink-600 text-3xl'>hello</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};