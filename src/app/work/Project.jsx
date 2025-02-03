"use client";

import { useEffect, useRef } from "react";
import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const Project = forwardRef(({
  title,
  description,
  pills,
  imageSrc,
  vimeoid,
  url,
  activeSlide,
  index
}, ref) => {
  const titleRef = useRef(null);
  gsap.registerPlugin(SplitText);

  return (
    <li ref={ref} className={styles.project}>
      <footer>
        <h2>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <span ref={titleRef}>{title}</span>
          </Link>
        </h2>
        {pills && (
          <ul>
            {pills.map((pill, index) => (
              <li key={index}>
                <Link href={pill.url} target="_blank" rel="noopener noreferrer">{pill.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </footer>
      <header>
        {imageSrc ? (
          <Link 
            target="_blank"
            rel="noopener noreferrer"
            href={url} passHref>
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={450}
            />
          </Link>
        ) : vimeoid && (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoid}?title=0&byline=0&portrait=0&autoplay=1&loop=1&background=1`}
            width="800"
            height="450"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        )}
      </header>
    </li>
  );
});

export default Project;