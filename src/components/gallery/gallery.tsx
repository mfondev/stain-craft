import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { galleryImages } from "@/lib/types";
import { TfiClose } from "react-icons/tfi";
import CustomCursor from "../ui/customCursor";

interface Props {
  closeGallery: () => void;
}

export default function Gallery({ closeGallery }: Props) {
  const [cursorActive, setCursorActive] = useState(true);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const plusRef = useRef(null);
  const textRef = useRef(null);
  const backgroundImageRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    const bckgroundImage = backgroundImageRef.current;
    if (!bckgroundImage) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      bckgroundImage.scrollLeft -= e.movementX;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  });

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
    setCursorActive(true);
    gsap.to(galleryRef.current, {
      width: 0,
      duration: 0.5,
      ease: "power2.in",
      opacity: 0,
    });
  };
  return (
    <>
      <main className="w-full h-screen fixed inset-0 overflow-y-hidden spec-section z-50">
        <div
          className="w-full h-screen flex items-center overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
          ref={backgroundImageRef}
          onMouseDown={() => (isDraggingRef.current = true)}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full h-screen relative shrink-0  ">
              <Image src={image} alt={image} fill className="object-cover" />
            </div>
          ))}
        </div>
        
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
            <div ref={textRef} className="h-[20px] overflow-hidden ml-4">
              <p className="close text-[13px]">close gallery</p>
            </div>
          </div>
          <div
            //    onClick={handleClick}
            className="relative z-10 bg-[#ef4826] hover:bg-[#26ef47] rounded-full p-2 cursor-pointer"
          >
            <div ref={plusRef}>
              <TfiClose
                onClick={closeGallery}
                className="text-black text-2xl"
              />
            </div>
          </div>
        </div>
      </main>
      <CustomCursor active={cursorActive} />
    </>
  );
}
