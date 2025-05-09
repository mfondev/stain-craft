"use client";

import Image from "next/image";
import React, { useEffect, useRef,useState } from "react";
import SpecGallery from "./specGallery";
import { specAnimation } from "../animations/animation";

type SpecsProps = {
  title: string;
  images: string[];
  paragraph: string;
  onClose: () => void;
};

export default function Specs({ title, images, paragraph,onClose }: SpecsProps) {
  const backgroundImageRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const timeline = useRef<gsap.core.Timeline | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  useEffect(() => {
    timeline.current = specAnimation();
    const gallerySection = document.querySelector(
      ".gallery-section .picture-box"
    );

    const syncGalleryScroll = () => {
      if (!backgroundImageRef.current || !gallerySection) return;
      const main = backgroundImageRef.current;
      const ratio = gallerySection.scrollWidth / main.scrollWidth;
      gallerySection.scrollLeft = main.scrollLeft * ratio;
    };

    backgroundImageRef.current?.addEventListener("scroll", syncGalleryScroll);

    const bckgroundImage = backgroundImageRef.current;
    if (!bckgroundImage) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      bckgroundImage.scrollLeft -= e.movementX;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const enableDragging = () => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    const disableDragging = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      isDraggingRef.current = false;
    };

    window.addEventListener("gallery-opened", enableDragging);
    window.addEventListener("gallery-closed", disableDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("gallery-opened", enableDragging);
      window.removeEventListener("gallery-closed", disableDragging);
      backgroundImageRef.current?.removeEventListener(
        "scroll",
        syncGalleryScroll
      );
    };
  }, []);

  const specReverse = () => {
    if (timeline.current) {
      timeline.current.eventCallback("onReverseComplete", () => {
        onClose();
      });
      timeline.current.reverse();
    }
    document.documentElement.style.overflow = "auto";
  };
  

  const onImageClick = (index: number) => {
    if (!backgroundImageRef.current) return;
    const container = backgroundImageRef.current;
    const imageWidth = container.clientWidth;
    container.scrollTo({
      left: imageWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <>
      <main className="w-full h-screen fixed inset-0 overflow-y-hidden spec-section z-50">
        <section className="relative overflow-hidden">
          <div
            className="w-full h-screen flex items-center overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
            ref={backgroundImageRef}
            onMouseDown={() => (isDraggingRef.current = true)}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-screen relative shrink-0  ">
                <Image src={image} alt={image} fill className="object-cover" />
              </div>
            ))}
          </div>
          <article className="bg-white absolute w-full md:w-[95%] lg:w-[46%] right-0 md:right-5 top-0 md:top-5 h-[0%] flex flex-col  md:justify-between specs-overlay overflow-hidden z-40">
            <header className="flex items-cente justify-between px-2 py-1">
              <div className=" h-[72px] overflow-hidden">
                <h1 className="text-[42px] md:text-[72px] lg:text-[90px] uppercase leading-[1] specTitle">
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
              <div className=" mb-8 slideshow-section specSlide ">
                <div className="w-[290px] h-[400px] md:h-[310px] relative ">
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
              <p className="text-[12px] md:text-sm lg:px-18 pb-4 specTexts opacity-0 text-center md:text-left">
                {paragraph}
              </p>
            </section>
          </article>
        </section>
        <SpecGallery images={images} imageClick={onImageClick} activeIndex={activeIndex} />
      </main>
    </>
  );
}


