import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lotto Time!</title>
        <meta name="description" content="Ethereum Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
      Yep!
    </div>
  );
}
