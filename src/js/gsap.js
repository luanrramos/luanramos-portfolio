/*==================== GSAP ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

//Loader
document
  .addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    tl.fromTo("body", 1, { scrollToTop }, { scrollToTop }, "-=1.5")

      .fromTo(
        ".loader",
        1,
        { width: "100%" },
        { width: "0%", delay: 4, ease: Expo.easeInOut }
      )

      .fromTo("body", 1, { overflow: "hidden" }, { overflow: "auto" }, "-=1")

      .fromTo(
        ".delay-bg",
        1.5,

        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut },
        "-=0.1"
      )
      .fromTo(
        ".top",
        0.1,
        { opacity: 0 },
        { opacity: 1, ease: Expo.easeInOut },
        "-=0.1"
      )
      .fromTo(
        ".show",
        0.5,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=0.5"
      )

      .fromTo(
        ".info-title",
        0.1,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=1"
      )
      .fromTo(
        ".title",
        0.1,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=1.2"
      )
      .fromTo(
        ".dc",
        0.1,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=0.01"
      )
      .fromTo(
        ".dv",
        0.1,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=0.01"
      )

      .fromTo(
        ".info-title2",
        0.01,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=0.5"
      )
      .fromTo(
        ".title2",
        0.01,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=0.05"
      )
      .fromTo(
        ".loc",
        0.01,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.ease },
        "-=0.001"
      )

      .fromTo(
        ".navbar",
        3,
        { opacity: 0 },
        { opacity: 1, ease: Expo.easeInOut },
        "-=0.01"
      );
  })
  .from(
    ".container-hero .grid-7 div",
    {
      duration: 2,
      opacity: 0,
      y: 200,
      stagger: { each: 0.1 },
      ease: "power4.out",
    },
    "-=1.9"
  )
  .from(
    ".container-hero .grid-5 div",
    {
      duration: 2,
      opacity: 0,
      y: 200,
      stagger: { each: 0.1 },
      ease: "power4.out",
    },
    "-=1.9"
  );

gsap.from("#text-creative", {
  x: 100,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#text-creative",
    start: "top 80%",
    end: "bottom 00%",
    scrub: 1,
  },
});

gsap.to("#text-uimotion", {
  x: 100,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#text-uimotion",
    start: "top 80%",
    end: "bottom 00%",
    scrub: 1,
  },
});
