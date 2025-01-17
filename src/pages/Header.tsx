import Head from "next/head";
import type { NextPage } from "next";

const HeadMeta: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TokamakDao - Tokamak</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dao.staking.tokamak.network" />
        <meta property="title" content="Tokamak DAO - Tokamak" />
        <meta property="og:title" content="Tokamak DAO - Tokamak" />
        <meta
          property="description"
          content="Easier UI for Tokamak Staking"
        />
        <meta
          property="og:description"
          content="Easier UI for Tokamak Staking"
        />
        <link rel="icon" href="/tokamak_favicon_8tt.ico" />
      </Head>
    </div>
  );
};

export default HeadMeta;
