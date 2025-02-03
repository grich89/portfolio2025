"use client";

import styles from "../app/page.module.css";
import Link from "next/link";
import { useRef, useEffect } from "react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

export default function Footer() {
  const splitTextRef = useRef(null);
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = new SplitText(splitTextRef.current, { type: "chars" });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });

    console.log(splitTextRef.current);

    return () => split.revert();
  }, []);

  return (
    <footer className={styles.footer}>
      <h1 className={styles.logo}>
        <Link 
          href="/"
        >
          <div ref={splitTextRef}>
            Greg Rich
          </div>
        </Link>
      </h1>
    </footer>
  );
}