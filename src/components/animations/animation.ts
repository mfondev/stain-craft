import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Spline_Sans } from "next/font/google";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

export const textSlide = () => {
  const tl = gsap.timeline();
  const text1Letters = gsap.utils.toArray(".h-text1 span");
  const text2Letters = gsap.utils.toArray(".h-text2 span");
  tl.fromTo(
    text1Letters,
    { y: 0, opacity: 1 },
    { y: -140, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" }
  )
    .fromTo(
      text2Letters,
      { y: 0, opacity: 0 },
      { y: -110, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" },
      "<"
    )
    .fromTo(
      ".l-footer",
      { y: 100, opacity: 0 },
      { y: 0, duration: 0.8, ease: "power2.out", opacity: 1 }
    );
};

export const textUnslide = () => {
  const text2Letters = gsap.utils.toArray(".h-text2 span");
  gsap.to(text2Letters, {
    y: -140,
    duration: 0.8,
    stagger: 0.05,
    ease: "power2.out",
  });
};

export const hfAnimation = () => {
gsap.fromTo(".carImg",{ y: -430, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, ease: "power4.inOut" })


  const split1= new SplitType(".hf1", { types: "chars" });
  const split2 = new SplitType(".hf2", { types: "chars" });
  const chars1 = split1.chars;
  const chars2 = split2.chars;

  const tl = gsap.timeline();
  tl.fromTo(
    chars1,
    { y: 0, opacity: 0 },
    { y: -200, opacity: 1, duration: 1, stagger: 0.3, ease: "power2.out" }
  ).fromTo(
    chars2,
    { y: 0, opacity: 0 },
    { y: -210, opacity: 1, duration: 1, stagger: 0.3, ease: "power2.out" },
    "-=1"
  );
};
export const lmAnimation = () => {
  const split1= new SplitType(".lm1", { types: "words" });
  const split2 = new SplitType(".lm2", { types: "words" });
  console.log(split1.words);
  
  const chars1 = split1.words;
  const chars2 = split2.words;

  const tl = gsap.timeline();
  tl.fromTo(
    chars1,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
  )
};
