import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MOOVIES</title>
        <meta
          name="description"
          content="Community for people who love movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>MOOVIES</h1>
        <p>A community for people who like movies</p>
      </main>
    </>
  )
}
