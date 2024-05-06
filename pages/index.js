import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Meet Tempo</h1>
      <p>An Obsidian template collection. By the community, for the community</p>

      <p>I've been on the lookout for templates for my ever-growing Obsidian vault for years. After all those long hours of being through abandoned Github repositories, long community threads and deprecated/broken scripts, listening to hours of videos on Youtube, I have decided to create the space where the Obsidian community could find all of these at one place, without that exhausting hunt.</p>

      <p>Let me know if you are a Creator <Link href="/">HERE</Link><br /> or if you are simply on the lookout for the latest scripts and templates for your vault <Link href="/">HERE</Link></p>
    </div>
  );
}
