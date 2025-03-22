import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const textSlide = () => {

  const tl = gsap.timeline();

  const text1Letters = gsap.utils.toArray(".h-text1 span");
  const text2Letters = gsap.utils.toArray(".h-text2 span");

  tl.fromTo(
    text1Letters,
    { y: 0, opacity: 1 },
    { y: -140, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" }
  ).fromTo(
    text2Letters,
    { y: 0, opacity: 0 },
    { y: -140, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" },
    "<" 
  );
};

// export const textSlide = () => {
//   const tl = gsap.timeline();

//   tl.fromTo(
//     ".h-text1",
//     { y: 0, opacity: 1 },
//     { y: -140, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" }
//   ).fromTo(
//     ".h-text2",
//     { y: 0, opacity: 0 },
//     { y: -140, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" },
//     "<"
//   );

//   tl.fromTo(
//     ".l-footer",
//     {
//       y: 100,
//       opacity: 0,
//     },
//     {y:0, opacity: 1, duration: 0.8, ease: "power2.out" },
//     "1"
//   );
// };
