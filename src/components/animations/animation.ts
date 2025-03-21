import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// export const textSlide = () => {
//   const tl = gsap.timeline({
//     // stagger: 0.8,
//     // markers: true,
//   });

//   const text1 = document.querySelectorAll(".h-text1");
//   const text2 = document.querySelectorAll(".h-text2");

//   document.querySelectorAll(".h-text1").forEach((el) => {
//     tl.fromTo(
//       el,
//       {
//         opacity: 0,
//       },
//       {
//         y: -140,
//         duration: 0.5,
//         opacity: 1,
//         stagger: 0.8,
//       }
//     );
//   });

//   document.querySelectorAll(".h-text2").forEach((el) => {
//     tl.to(text2, { y: -140, duration: 0.5,stagger: 0.8 })
//   })

//   //   tl.from(text1, {
//   //     opacity: 0,
//   //   })
//   //   tl.to(text1, { y: -140, duration: 0.5 ,opacity: 1, stagger: 0.8});
//   //   tl.to(text2, { y: -140, duration: 0.5,stagger: 0.8 });
// };

export const textSlide = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".h-text1",
    { y: 0, opacity: 1 },
    { y: -140, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" }
  ).fromTo(
    ".h-text2",
    { y: 0, opacity: 0 },
    { y: -140, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" },
    "<"
  );

  tl.fromTo(
    ".l-footer",
    {
      y: 100,
      opacity: 0,
    },
    {y:0, opacity: 1, duration: 0.8, ease: "power2.out" },
    "1"
  );
};
