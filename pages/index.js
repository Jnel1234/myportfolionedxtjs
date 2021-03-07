import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Bio from "../components/Bio";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Paul Nelsoon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.profilePicture}
          src="/images/profile.jpg"
          height={400}
          width={320}
          layout="intrinsic"
        />
        <h1 className={styles.title}>Jack Nelson</h1>

        <Bio />
      </main>
    </div>
  );
}
