"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import gsap from "gsap";
import CustomCursor from "../ui/customCursor";

type Props = {
  images: string[];
  imageClick: (index: number) => void;
  activeIndex: number | null
};

export default function Gallery({ images, imageClick,activeIndex }: Props) {
  const [clicked, setClicked] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const plusRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const isDraggingRef = useRef(false);
  const picBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // DRAG FUNCTIONALITY FOR GALLERY
    const picBox = picBoxRef.current;

    if (!picBox) return;
    picBox.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      picBox.scrollLeft -= e.movementX;
    });

    document.addEventListener("mouseup", () => {
      isDraggingRef.current = false;
    });

    picBox.addEventListener("mousedown", () => {
      isDraggingRef.current = true;
    });

    // const draggingEnter = (e: MouseEvent) => {
    //   if (!isDraggingRef.current) return;
    //   if (picBox) {
    //     picBox.scrollLeft -= e.movementX;
    //   }
    // };

    // const draggingEnd = () => {
    //   isDraggingRef.current = false;
    // };

    // if (picBox) {
    //   picBox.addEventListener("mousemove", draggingEnter);
    //   picBox.addEventListener("mousedown", () => {
    //     isDraggingRef.current = true;});
    //   picBox.addEventListener("mouseup", draggingEnd);
    //   picBox.addEventListener("mouseleave", draggingEnd);
    // }
    // return () => {
    //   if (picBox) {
    //     picBox.removeEventListener("mousemove", draggingEnter);
    //     picBox.removeEventListener("mouseup", draggingEnd);
    //     picBox.removeEventListener("mouseleave", draggingEnd);
    //   }
    // };
  }, []);
  // DRAG FUNCTIONALITY FOR GALLERY

  //   useEffect(() => {
  //   const picBox = picBoxRef.current;
  //   let startX = 0;
  //   let scrollLeft = 0;
  //   let isDragging = false;

  //   const mouseDownHandler = (e: MouseEvent) => {
  //     if (!picBox) return;
  //     isDragging = true;
  //     startX = e.pageX - picBox.offsetLeft;
  //     scrollLeft = picBox.scrollLeft;
  //     picBox.style.cursor = "grabbing";
  //   };

  //   const mouseMoveHandler = (e: MouseEvent) => {
  //     if (!isDragging || !picBox) return;
  //     e.preventDefault();
  //     const x = e.pageX - picBox.offsetLeft;
  //     const walk = x - startX; // distance moved
  //     picBox.scrollLeft = scrollLeft - walk;
  //   };

  //   const mouseUpHandler = () => {
  //     isDragging = false;
  //     if (picBox) {
  //       picBox.style.cursor = "grab";
  //     }
  //   };

  //   if (picBox) {
  //     picBox.addEventListener("mousedown", mouseDownHandler);
  //     picBox.addEventListener("mousemove", mouseMoveHandler);
  //     picBox.addEventListener("mouseup", mouseUpHandler);
  //     picBox.addEventListener("mouseleave", mouseUpHandler);
  //     picBox.style.cursor = "grab"; // default cursor
  //   }

  //   return () => {
  //     if (picBox) {
  //       picBox.removeEventListener("mousedown", mouseDownHandler);
  //       picBox.removeEventListener("mousemove", mouseMoveHandler);
  //       picBox.removeEventListener("mouseup", mouseUpHandler);
  //       picBox.removeEventListener("mouseleave", mouseUpHandler);
  //     }
  //   };
  // }, []);

  const handleMouseEnter = () => {
    setCursorActive(false);
    gsap.to(galleryRef.current, {
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
          onComplete: () => {
            setCursorActive(true);
            window.dispatchEvent(new Event("gallery-opened"));
          },
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
      window.dispatchEvent(new Event("gallery-closed"));
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
        // onMouseDown={() => (isDraggingRef.current = true)}
      >
        <div
          ref={picBoxRef}
          className="flex flex-nowrap items-center space-x-4 picture-box overflow-x-auto select-none w-full h-full "
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative shrink-0 w-[200px] h-[110px] cursor-pointer transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => imageClick(index)}
            >
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
