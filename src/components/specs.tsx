import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
import { BsPlusLg } from "react-icons/bs";
import CustomCursor from "./ui/customCursor";

type SpecsProps = {
  title: string;
  images: string[];
  backgroundImage: string;
  paragraph: string;
};

export default function Specs({
  title,
  images,
  backgroundImage,
  paragraph,
}: SpecsProps) {
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

    timeline.current = gsap.timeline();
    const section = gsap.utils.toArray(".slideshow-section") as HTMLElement[];

    section.forEach((section) => {
      const images = section.querySelectorAll(".slideshow-image");

      gsap.set(images, { autoAlpha: 0 });
      gsap.set(images[0], { autoAlpha: 1 });

      let currentIndex = 0;

      setInterval(() => {
        gsap.set(images[currentIndex], { autoAlpha: 0 });
        currentIndex = (currentIndex + 1) % images.length;
        gsap.set(images[currentIndex], { autoAlpha: 1 });
      }, 500);
    });

    const splitText = new SplitType(".specTitle", { types: "chars" });
    const specTitleChars = splitText.chars;
    gsap.set(specTitleChars, { y: 70 });
    timeline.current
      .fromTo(
        ".spec-section",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, ease: "power2.out" }
      )
      .fromTo(
        ".specImage",
        { scale: 1.1 },
        { scale: 1, duration: 0.5, ease: "power2.out" },
        "+=0.1"
      )
      .to(
        ".specs-overlay",
        {
          height: "95%",
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .to(specTitleChars, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
      })
      .to(".backButton", {
        width: "78px",
        duration: 0.15,
        ease: "power2.out",
      })
      .fromTo(
        ".specSlide",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, ease: "power2.out" }
      )
      .to(".specTexts", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      .fromTo(
        ".gallery-button",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

    return () => {
      window.removeEventListener("mousemove", draggingEnter);
      window.removeEventListener("mouseup", draggingLeave);
    };
  }, []);
  const specReverse = () => {
    timeline.current?.reverse();
  };
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
      <main className="w-full h-screen fixed inset-0 overflow-y-hidden spec-section z-50">
        <section className="relative w-full h-screen overflow-hidden">
          {images.map((image, index) => (
            <Image
              src={image}
              alt={image}
              fill
              className="object-cover"
              key={index}
            />
          ))}
          <article className="bg-white absolute w-[46%] right-5 top-5 h-[0%] flex flex-col justify-between specs-overlay overflow-hidden z-40">
            <header className="flex items-cente justify-between px-2 py-1">
              <div className=" h-[72px] overflow-hidden">
                <h1 className="text-[90px] uppercase leading-[1] specTitle">
                  {title}
                </h1>
              </div>
              <div
                className="bg-[#ef4826] h-fit w-[1px] backButton "
                onClick={specReverse}
              >
                <p className="uppercase cursor-pointer py-1 px-4">back</p>
              </div>
            </header>
            <section className="flex flex-col items-center justify-center">
              <div className="m mb-8 slideshow-section specSlide ">
                <div className="w-[290px] h-[310px] relative ">
                  {images.map((image, index) => (
                    <Image
                      src={image}
                      alt={image}
                      fill
                      className="object-cover slideshow-image"
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm px-18 pb-4 specTexts opacity-0 text-left">
                {paragraph}
              </p>
            </section>
          </article>
        </section>
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
          onMouseDown={() => isDraggingRef.current = true}
        >
          <div
            ref={picBoxRef}
            className="flex flex-nowrap items-center space-x-4 picture-box overflow-x-auto w-full h-full "
            style={{ cursor: "grab", scrollbarWidth: "none" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[200px] h-[110px]"
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
      </main>
      <CustomCursor active={cursorActive} />
    </>
  );
}
