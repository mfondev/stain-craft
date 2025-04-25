"use client"

import Image from "next/image";
import React, { useEffect, useRef} from "react";
import Gallery from "./gallery";
import { specAnimation } from "../animations/animation";

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

  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = specAnimation();
  }, []);

  const specReverse = () => {
    timeline.current?.reverse();
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
        <Gallery images={images} />
      </main>
    </>
  );
}
