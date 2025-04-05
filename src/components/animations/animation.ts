import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
  gsap.fromTo(
    ".carImg",
    { y: -300, opacity: 0 },
    { y: 320, opacity: 1, duration: 1.5, ease: "power4.inOut" }
  );

  const split1 = new SplitType(".hf1", { types: "chars" });
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

export const homeAnimation = () => {
  const timeline = gsap.timeline();
  const letStats = gsap.utils.toArray(".stats");
  const split1 = new SplitType(".lm1", { types: "words" });
  const statText1 = new SplitType(".statText1", { types: "chars" });
  const statText2 = new SplitType(".statText2", { types: "chars" });
  const chars1 = split1.words;
  const stat1 = statText1.chars;
  const stat2 = statText2.chars;

  timeline
    .fromTo(
      letStats,
      { y: 130, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power2.inOut" }
    )
    .to(stat1, {
      y: -30,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
    })
    .fromTo(
      stat2,
      { y: 0, opacity: 0 },
      { y: -35, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" },
      "<"
    )
    .fromTo(
      ".watchVideo",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" },
      "<"
    )
    .fromTo(
      chars1,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
      "<"
    );
};

const onGoingCode = (progress: number) => {
  gsap.to(".carImg", {
    scale: 1.2 * (1 - progress),
    duration: 1,
    ease: "power2.out",
    scrub: 1,
  });

  const maxMove = -355;

  gsap.to(".eleven", {
    y: Math.max(maxMove, -700 * progress),
    ease: "power2.out",
    duration: 1,
    marginBottom: 10,
  });

  // gsap.fromTo(".panel_1",{
  //   filter: "brightness(0.5)",
  //   duration: 1,
  //   ease: "power2.out",
  // },{
  //   filter: `brightness(${0.5 + progress})`,
  // })
};

export const createScroll01 = () => {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel, i) => {
    const isLast = i === panels.length - 1;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          scrub: 1,
          onUpdate: (self) => {
            onGoingCode(self.progress);
          },
        },
      })
      .to(
        panel,
        {
          // filter: "brightness(50%) blur(10px)",
          ease: "expo.inOut",
        },
        "<"
      );
  });
};

// export const scaleAnimation = () => {
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".main-section",
//       start: "top bottom",
//       scrub: true,
//       markers: true,
//     },
//   });

//   timeline
//     .to(".scale-section", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       ease: "power2.out",
//       duration: 3,
//     })
//     .fromTo(
//       ".backgroundImg",
//       { width: "100%" },
//       { width: "50%", duration: 1, ease: "power2.out" }
//     );
// };

export const scaleAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".aboutSection", { yPercent: 65 });
  gsap.to(".scale-section", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.out",
    duration: 3,
    scrollTrigger: {
      trigger: ".main-section",
      start: "top bottom",
      scrub: true,
      // pin: true,
      // markers: true,
    },
  });

  const tl = gsap.timeline();

  tl.to(".backgroundImg", {
    width: "50%",
    ease: "power2.out",
    duration: 3,
    scrollTrigger: {
      trigger: ".main-section",
      start: "top 60%",
      scrub: true,
      pin: ".main-section",
      markers: true,
    },
  }).to(".aboutSection", {
    yPercent: -10,
    ease: "power2.out",
    duration: 1,
    delay: 1,
    // scrollTrigger: {
    //   trigger: ".main-section",
    //   start: "top 60%",
    //   end: "bottom top",
    //   scrub: true,
    //   markers: true,
    // },
  });
};
