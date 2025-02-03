"use client";

import Project from "../app/work/Project";
import styles from "./workslider.module.css";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";

export default function WorkSlider ({
  projects
}) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) {
      return;
    }
    
    gsap.set(swiperRef.current, { opacity: 0, y: -100 }); // Ensure it's hidden initially
  
    gsap.to(swiperRef.current, {
      duration: 1,
      y: 0, // Adjust if needed
      opacity: 1,
      ease: "power2.out",
    });
  }, []);  

  return (
    <section className={styles.work}>
      <Swiper 
        spaceBetween={0}
        slidesPerView={1.5}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
        }}
        className={styles.projects}
        centeredSlides={true}
        loop={true}
        onClick={(swiper) => {
          if (swiper.clickedIndex > swiper.activeIndex) {
            swiper.slideNext();
          } else {
            swiper.slidePrev();
          }
        }}
        modules={[Pagination]}
        pagination={{
          el: ".swiper-header-pagination",
          clickable: true,
        }}
        onBeforeDestroy={() => {
          document.querySelector(".swiper-header-pagination").innerHTML = "";
        }}
        ref={swiperRef}
      >
        {projects.map((project, index) => (
          <SwiperSlide 
            key={index}
          >
            <div>
              <Project 
                {...project} 
                isActiveSlide={index}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}