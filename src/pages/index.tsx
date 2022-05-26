import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../components/board";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tsuro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tsuro</h1>

        <Board />
      </main>
    </div>
  );
};

export default Home;
