"use client";
import React from "react";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { ReactNode } from "react";

export default function LenisScroller({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRafState] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time: number): void {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setRafState(rf);
    setLenis(scroller);
    return () => {
      if (rafState !== null) {
        cancelAnimationFrame(rafState);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <div>{children}</div>;
}
