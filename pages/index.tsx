import type { NextPage } from "next";
import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Join from "../components/Join";
import Player from "../components/Player";
import Products from "../components/Products";

import SlideShow from "../components/SlideShow";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <main> */}
      <Body />
      <Products />
      <Join />
      <Player />
      <Footer />

      {/* </main> */}
    </div>
  );
};

export default Home;
