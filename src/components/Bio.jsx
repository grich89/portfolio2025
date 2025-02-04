"use client";

import Link from "next/link";
import styles from "./bio.module.css";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";

import LinkedIn from "@/icons/LinkedIn";
import Github from "@/icons/Github";
import Mail from "@/icons/Mail";

const Bio = () => {
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(titleRef.current, { type: "chars" });
    const paragraphSplit = new SplitText(bioRef.current, { type: "lines" });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });

    gsap.from(paragraphSplit.lines, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });

    gsap.set(socialRef.current, { opacity: 0, y: 100 }); 

    gsap.to(socialRef.current, {
      duration: 1,
      y: 0, // Adjust if needed
      opacity: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    return () => split.revert();
  }, []);

  return (
    <div className={styles.bio}>
      <h1 className={styles.title} ref={titleRef}>About</h1>

      <div ref={bioRef}>
        <p>
          I am a software developer based in Brooklyn, NY, currently working at <Link href="https://madwell.com" target="_blank" rel="noopener noreferrer">Madwell</Link>. I have over a decade of experience building web applications in React, Next.js, and JavaScript/TypeScript.
        </p>

        <p>
          In addition to my work as a developer, I am also an avid tennis player and member of the <Link target="_blank" href="https://nygayfootball.org/" rel="noopener noreferrer">
            NYGFL
          </Link>. 
        </p>

        <p>
          I am currently available for freelance work. If you would like to get in touch, please reach out to me at <Link href="mailto:gregorysrich@gmail.com">gregorysrich@gmail.com</Link> or through the below profiles.
        </p>
      </div>

      <div className={styles.social} ref={socialRef}>
        <Link target="_blank" href="https://www.linkedin.com/in/gregory-rich-7935b522/" rel="noopener noreferrer" className={styles.socialLink}>
          <LinkedIn className={styles.svg} />
        </Link>

        <Link target="_blank" href="https://github.com/grich89" rel="noopener noreferrer" className={styles.socialLink}>
          <Github className={styles.svg} />
        </Link>
      </div>
    </div>
  );
}

export default Bio;