import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
import { BsPlusLg } from "react-icons/bs";

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
  let timeline = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
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
      }, 1000);
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
      });
  }, []);
  const specReverse = () => {
    timeline.current?.reverse();
  };
  return (
    <>
      <main className="w-full h-screen fixed inset-0  overflow-y-hidden spec-section z-50">
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover specImage"
          />
          <article className="bg-white absolute w-[46%] right-5 top-5 h-[0%] flex flex-col justify-between specs-overlay overflow-hidden">
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
      className="absolute right-[60px] top-1/2 -translate-y-1/2 flex items-center gap-2"
     
    >
      {/* Sliding pill */}
      <div
        className="absolute right-[40px] bg-white text-black rounded-full px-4 py-2 text-sm font-semibold opacity-0 -translate-x-20 z-0"
        style={{ whiteSpace: "nowrap" }}
      >
        View Gallery
      </div>

      {/* Plus icon */}
      <div className="relative z-10 bg-[#ef4826] hover:bg-green-500 rounded-full p-4 cursor-pointer">
        <BsPlusLg className="text-black text-2xl" />
      </div>
    </div>
      </main>
    </>
  );
}
