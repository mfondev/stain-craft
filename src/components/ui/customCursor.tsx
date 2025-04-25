import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor({ active }: { active: boolean }) {
  const followerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    if (active) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [active]);

  return (
    <>
     <div
      ref={followerRef}
      className={`bg-[#ef4826] w-fit px-4 py-2 follower-cursor fixed top-0 left-0 z-50 pointer-events-none ${
        active ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <h1 className="uppercase text-black text-sm">drag</h1>
    </div>
    </>
  );
}
