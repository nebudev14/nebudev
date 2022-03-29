import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layouts/Layout';

export default function Home() {
  return (
    <div>
      <div className="text-9xl">
        <span className='text-pink-600 mr-9'>warren</span>
        <span className='text-cyan-400'>yun</span>
      </div>
      
      <h1 className='text-3xl thin'>beep</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};