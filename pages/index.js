import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layouts/Layout';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl text-pink-600 '>sus</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};