"use client";

import Link from "next/link";
import styles from "./intro.module.css";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";

export default function Intro() {
  let path = usePathname();
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    const links = headerRef.current.querySelectorAll("nav a");
    const pagination = headerRef.current.querySelector(".swiper-header-pagination");

    gsap.from(links, {
      duration: 1,
      y: -100,
      opacity: 0,
      stagger: 0.1,
    });

    gsap.from(pagination, {
      duration: 1,
      x: 100,
      opacity: 0,
    });
  }, []);

  return (
    <header className={styles.intro} ref={headerRef}>
      <nav>
        <Link
          href="/"
          className={`${styles.navItem} ${path === "/" ? styles.activeNavItem : ""}`}
        >
          Work
        </Link>
        <Link
          href="/about"
          className={`${styles.navItem} ${path === "/about" ? styles.activeNavItem : ""}`}
        >
          About
        </Link>
      </nav>
      
      <div className={styles.pagination}>
        <div className="swiper-header-pagination"></div>
      </div>
    </header>
  );
}