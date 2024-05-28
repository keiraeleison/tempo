import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>

      <p className={styles.text}>Anim laborum ullamco aliquip nostrud in ea reprehenderit. Ea ex est do laboris Lorem elit sunt enim est cillum quis est do nostrud. Aute duis amet esse eu qui laboris excepteur. Veniam sunt et sit excepteur voluptate est exercitation.</p>
      <p className={styles.text}>Adipisicing culpa tempor deserunt eu aute incididunt. Veniam cillum ullamco commodo pariatur nostrud excepteur officia proident anim. Dolor id qui quis ut ad nostrud culpa in duis qui non. Et nostrud eu aute consectetur fugiat ut consectetur Lorem consequat et exercitation. Ullamco ad tempor deserunt consectetur quis sunt dolore consectetur qui sint irure. Reprehenderit nostrud laboris in laborum id incididunt minim amet laborum est id.</p>

      <Link legacyBehavior href="/templates"><a className={styles.btn}>Templates</a></Link>
    </div>
  );
}
