import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEngine } from "../engine/store";
import { ChangeEvent, useCallback, useRef } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const name = useRef("");
  const createGame = useEngine(useCallback(({ createGame }) => createGame, []));
  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    name.current = e.target.value;
  }, []);
  const handleClickHost = useCallback(() => {
    router.push("/game");
    createGame(name.current);
  }, [router, createGame]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tsuro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tsuro</h1>
        <form>
          <label htmlFor="player-name">Your name</label>:{" "}
          <input id="player-name" type="text" onChange={handleNameChange} />
          <fieldset>
            <legend>Create new game</legend>
            <button onClick={handleClickHost} type="button">
              Host
            </button>
          </fieldset>
          <fieldset>
            <legend>Join existing game</legend>
            <label htmlFor="game-id">Game ID</label>:{" "}
            <input id="game-id" type="text" />
            <button type="button">Join</button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Home;
