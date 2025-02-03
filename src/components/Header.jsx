"use client";

import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link 
          className={styles.logo}
          href="/"
        >
          GREG<br />
          RICH
          {/* <img
            aria-hidden
            src="/logo.svg"
            alt="GR Logo"
            width={342}
            height={40}
          /> */}
        </Link>

        <nav>
          <Link
            href="/about"
          >
            About
          </Link>
          <Link
            href="/work"
          >
            Work
          </Link>
        </nav>
      </div>
    </header>
  );
}