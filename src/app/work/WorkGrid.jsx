"use client";

import Project from "./Project";
import styles from "./work.module.css";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkGrid ({
  projects
}) {
  const containerRef = useRef(null); // Reference for the container
  const cardsRef = useRef([]); // Store all card refs

  useLayoutEffect(() => {
    const cards = cardsRef.current; // Get card elements
    
      const ctx = gsap.context(() => {
        cards.forEach((card, index) => {
          if (index === 0) {
            // First card: No entrance animation, just pin when scrolled to
            gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "-40%", // Keep it pinned for a bit
                scrub: true,
                pin: true,
                pinSpacing: false,
              },
            })
            .to(
              card,
              { 
                opacity: 0, 
                y: -30, 
                scale: 0.25, 
                duration: 1.2, 
                ease: "power2.in" 
              }, 
              "-1.4" // Delay before fading out, to overlap with the next card
            );
          } else {
            gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "+=150%",
                top: 0,
                scrub: true,
                pin: true,
                pinSpacing: false,
                snap: {
                  snapTo: 0.3,
                  duration: 0.5,
                  ease: "power2.inOut",
                },
              },
            })
              .fromTo(
                card,
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
              )
              .to(
                card,
                { 
                  opacity: 0, 
                  y: -30, 
                  //rotation: index % 2 === 0 ? -90 : 90, // Alternate left (-) & right (+)
                  scale: 0.25, // Shrink slightly while rotating
                  duration: 1, 
                  ease: "power2.in" 
                }, 
                "+=0.8" // Delay before fading out
              );
          }
        });
      }, containerRef); // Context ensures cleanup when unmounting

      return () => ctx.revert(); // Clean up GSAP animations
  }, []);

  return (
    <ul ref={containerRef} className={styles.projects}>
      {projects.map((project, index) => (
        <Project 
          ref={(el) => (cardsRef.current[index] = el)}
          key={index} {...project} 
        />
      ))}
    </ul>
  )
}