import { type NextPage } from "next";
import Head from "next/head";

import Resume from "~/components/resume/Resume";
import { profile, summary } from "~/components/resume/resume-data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${profile.name} - Resume`}</title>
        <meta name="description" content={summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume />
    </>
  );
};

export default Home;
