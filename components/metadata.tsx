import Head from "next/head";

const MetaData: React.FC = () => {
  return (
    <Head>
      <title>Warren Yun - Personal Website</title>
      <meta
        name="description"
        content="I'm Warren Yun! I do stuff from robotics, to software engineering, to embedded security and a little more."
        key="desc"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        property="og:description"
        content="I'm Warren! I like to mess around with robotics, full-stack web development, embedded security, and a whole bunch of other things that may or may not be tanegntially related."
      />
      <meta property="og:image" content="https://www.wyun.dev/warrenog.png" />
      <meta property="og:url" content="https://www.wyun.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Warren Yun - Personal Website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="wyun.dev" />
      <meta property="twitter:url" content="https://www.wyun.dev/" />
      <meta name="twitter:title" content="Warren Yun - Personal Website" />
      <meta
        name="twitter:description"
        content="I'm Warren! I like to mess around with robotics, full-stack web development, embedded security, and a whole bunch of other things that may or may not be tanegntially related."
      />
      <meta name="twitter:image" content="https://www.wyun.dev/warrenog.png" />
    </Head>
  );
};

export default MetaData;