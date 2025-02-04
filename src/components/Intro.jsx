"use client";

import Link from "next/link";
import styles from "./intro.module.css";
import { useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export default function Intro() {
  let path = usePathname();
  const headerRef = useRef(null);

  const router = useRouter();

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

  const handleTransitionClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    gsap.to("main", {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        router.push(href);
      }
    });
  }

  return (
    <header className={styles.intro} ref={headerRef}>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.navItem} ${path === "/" ? styles.activeNavItem : ""}`}
          onClick={(e) => { handleTransitionClick(e); }}
        >
          Work
        </Link>
        <Link
          href="/about"
          className={`${styles.navItem} ${path === "/about" ? styles.activeNavItem : ""}`}
          onClick={(e) => { handleTransitionClick(e) }}
        >
          About
        </Link>
      </nav>
      
      <div className={styles.pagination}>
        <div className={`swiper-header-pagination ${styles.paginationContainer}`}></div>
      </div>
    </header>
  );
}