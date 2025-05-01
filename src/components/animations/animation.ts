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
    scale: 1 - progress * 0.05,
    duration: 1,
    ease: "power2.out",
    scrub: 1,
  });
  // maxMove = -105;

  // gsap.to(".eleven", {
  //   y: Math.max(maxMove, -700 * progress),
  //   ease: "power2.out",
  //   duration: 1,
  //   marginBottom: 10,
  // });

  gsap.ticker.add(() => {
    const scrollY = window.scrollY;
  
    const panel = document.querySelector(".articleHead");
    const maxUp = panel ? (panel as HTMLElement).offsetHeight - 330 : 0; 
    const moveAmount = Math.min(scrollY, maxUp); 
  
    gsap.set(".eleven", {
      y: -moveAmount, 
    });
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

export const scaleAnimation = () => {
  gsap.to(".scale-section", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.out",
    duration: 3,
    scrollTrigger: {
      trigger: ".main-section",
      start: "top bottom",
      scrub: true,
    },
  });

  const timeline = gsap.timeline();

  timeline.fromTo(
    ".backgroundImg",
    {
      width: "100%",
    },
    {
      width: "50%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".main-section",
        start: "top 40%",
        scrub: true,
        markers: true,
      },
    }
  );
  // ScrollTrigger.create({
  //   trigger: ".main-section",
  //   start: "top top",
  //   end: "bottom bottom",
  //   scrub: true,
  //   markers: true,
  //   pin: ".rightBlock",
  // })
};


export const aboutAnimation = () => {
  // gsap.set(".detailsWrapper", {
  //   yPercent: 140,
  //   ease: "none",
  // });
  gsap.to(".scale-section", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.out",
    duration: 3,
    scrollTrigger: {
      trigger: ".main-section",
      start: "top bottom",
      scrub: true,
    },
  });

  const timeline = gsap.timeline();

  timeline.fromTo(
    ".backgroundImg",
    {
      width: "100%",
    },
    {
      width: "50%",
      duration: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".main-section",
        start: "top 60%",
        scrub: true,
      },
    }
  );
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
  });

  gsap.set(".photo2", { yPercent: 0 });
  gsap.set(".photo3", { yPercent: 0 });

  let timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".detail2",
      start: "top bottom",
      end: "bottom bottom",

      scrub: true,
    },
  });

  timeline1.to(
    ".photo1",
    {
      yPercent: -100,
      ease: "power2.inOut",
    },
    0
  );

  timeline1.to(
    ".photo2",
    {
      yPercent: -100,
      ease: "power2.inOut",
    },
    0
  );

  let timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".detail3",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  });

  timeline2.to(
    ".photo2",
    {
      yPercent: -200,
      ease: "power2.inOut",
    },
    0
  );

  timeline.set(".photo3", { yPercent: -100 });

  timeline2.to(
    ".photo3",
    {
      yPercent: -200,
      ease: "power2.inOut",
    },
    0
  );

  gsap.to(".maniacs", {
    color: "#fff",
    scrollTrigger: {
      trigger: ".detail1Text",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play reverse play reverse",
    },
  });
  gsap.to(".mission", {
    color: "#fff",
    scrollTrigger: {
      trigger: ".detail2Text",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play reverse play reverse",
    },
  });
  gsap.to(".machine", {
    color: "#fff",
    scrollTrigger: {
      trigger: ".detail3Text",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play reverse play reverse",

    },
  });

  // maniac texts animation
  const maniacTextTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".detail1",
      start: "top bottom",
      // end: "bottom bottom",
      toggleActions: "play reverse play reverse",
      scrub: true,
      markers: true,
    },
  });

  maniacTextTimeline.to(
    ".maniacText1",
    {
      x: 100,
      duration: 0.5,
      ease: "power2.inOut",
    },
    0
  );
  maniacTextTimeline.to(
    ".maniacText2",
    {
      x: -100,
      duration: 0.5,
      ease: "power2.inOut",
    },
    0
  );
  maniacTextTimeline.to(
    ".maniacText3",
    {
      x: 100,
      duration: 0.5,
      ease: "power2.inOut",
    },
    0
  );
  maniacTextTimeline.to(
    ".maniacText4",
    {
      x: -100,
      duration: 0.5,
      ease: "power2.inOut",
    },
    0
  );

  // image slide animation
  const image = gsap.utils.toArray(".slideshow") as HTMLElement[];

  gsap.set(image, { autoAlpha: 0 });
  gsap.set(image[0], { autoAlpha: 1 });

  let currentNum = 0;

  setInterval(() => {
    gsap.set(image[currentNum], { autoAlpha: 0 });
    currentNum = (currentNum + 1) % image.length;
    gsap.set(image[currentNum], { autoAlpha: 1 });
  }, 500);
  

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

};


export const specAnimation = () => {
  const timeline = gsap.timeline();

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
    }, 500);
  });

  const splitText = new SplitType(".specTitle", { types: "chars" });
  const specTitleChars = splitText.chars;
  gsap.set(specTitleChars, { y: 70 });

  timeline
    .fromTo(
      ".spec-section",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.3, ease: "power2.out" }
    )
    .fromTo(
      ".specImage",
      { scale: 1.1 },
      { scale: 1, duration: 0.5, ease: "power2.out" },
      "+=0.1"
    )
    .to(
      ".specs-overlay",
      {
        height: "95%",
        duration: 0.3,
        ease: "power2.out",
      },
      "+=0.1"
    )
    .to(specTitleChars, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.05,
    })
    .to(".backButton", {
      width: "78px",
      duration: 0.15,
      ease: "power2.out",
    })
    .fromTo(
      ".specSlide",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5, ease: "power2.out" }
    )
    .to(".specTexts", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
    .fromTo(
      ".gallery-button",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    );

  return timeline;
};

