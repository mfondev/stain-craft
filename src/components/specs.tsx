import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
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
  useEffect(() => {
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
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ".specImage",
        { scale: 1.1 },
        { scale: 1, duration: 1, ease: "power2.out" }
      )
      .to(".specs-overlay", {
        height: "95%",
        duration: 1,
        ease: "power2.out",
      })
      .to(specTitleChars, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      })
      .to(".backButton", {
        width: "78px",
        duration: 0.5,
        ease: "power2.out",
      })
      .to(".specSlide", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(".specTexts", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
  });
  return (
    <>
      <main className="w-full h-screen fixed inset-0  overflow-y-hidden spec-section">
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
              <div className="bg-[#ef4826] h-fit w-[1px] backButton">
                <p className="uppercase cursor-pointer py-1 px-4">back</p>
              </div>
            </header>
            <section className="flex flex-col items-center justify-center">
              <div className="m mb-8 slideshow-section specSlide opacity-0">
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
      </main>
    </>
  );
}
