"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "../ui/customCursor";

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const plusRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const [clicked, setClicked] = useState(false);
  const isDraggingRef = useRef(false);
  const [cursorActive, setCursorActive] = useState(false);
  const picBoxRef = useRef<HTMLDivElement | null>(null);
  let timeline = useRef<GSAPTimeline | null>(null);


  useEffect(() => {
    const picBox = picBoxRef.current;
    if (!picBox) return;
    const draggingEnter = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      picBox.scrollLeft -= e.movementX;
      console.log(e.movementX);
    };

    const draggingLeave = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener("mousemove", draggingEnter);
    window.addEventListener("mouseup", draggingLeave);
    return () => {
      window.removeEventListener("mousemove", draggingEnter);
      window.removeEventListener("mouseup", draggingLeave);
    };
  }, []);
  const handleMouseEnter = () => {
    gsap.to(galleryRef.current, {
      // width: 100,
      width: "170px",
      duration: 0.3,
      ease: "power2.out",
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(galleryRef.current, {
      width: 0,
      duration: 0.5,
      ease: "power2.in",
      opacity: 0,
    });
  };

  gsap.set(".gallery-section", { y: 100 });
  const handleClick = () => {
    if (!timelineRef.current) {
      const tl = gsap.timeline({ paused: true });

      tl.to(plusRef.current, {
        rotation: "0.785rad",
        duration: 0.3,
        ease: "power2.inOut",
      })
        .to(
          ".view",
          {
            y: "-20",
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          ".close",
          {
            y: "-20",
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(".specs-overlay", {
          yPercent: -110,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setCursorActive(true),
        })
        .to(".gallery-section", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });

      timelineRef.current = tl;
    }

    if (!clicked) {
      timelineRef.current?.play();
    } else {
      timelineRef.current.reverse();
      setCursorActive(false);
    }

    setClicked(!clicked);
  };

  return (
    <>
      <div
        className="gallery-button  absolute right-[40px] top-1/2 -translate-y-1/2 flex items-center h-[50px] z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="gallery-grp absolute right-[0px] py-3 uppercase bg-white border-[0.5px] border-b-gray-400 text-black rounded-full w-0 opacity-0"
          ref={galleryRef}
          style={{ whiteSpace: "nowrap" }}
        >
          <div ref={textRef} className="h-[20px] overflow-hidden mr-8">
            <p className="view text-[13px]">view gallery</p>
            <p className="close text-[13px]">close gallery</p>
          </div>
        </div>
        <div
          onClick={handleClick}
          className="relative z-10 bg-[#ef4826] hover:bg-[#26ef47] rounded-full p-2 cursor-pointer"
        >
          <div ref={plusRef}>
            <BsPlusLg className="text-black text-2xl" />
          </div>
        </div>
      </div>
      <section
        className="absolute bottom-10 right-5 z-20 w-[640px] h-[110px] overflow-hidden opacity-0 gallery-section"
        onMouseDown={() => (isDraggingRef.current = true)}
      >
        <div
          ref={picBoxRef}
          className="flex flex-nowrap items-center space-x-4 picture-box overflow-x-auto w-full h-full "
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative shrink-0 w-[200px] h-[110px]">
              <Image
                src={image}
                alt={`Image ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <CustomCursor active={cursorActive} />
    </>
  );
}
