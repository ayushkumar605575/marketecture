"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollImage = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      ease: "none",
    });

    // Define the animation timeline for scaling the video
    tl.fromTo(
      "#video",
      { scale: 0.4 },  // Initial scale
      { scale: 0.7, duration: 1, transformOrigin: "center center" }  // End scale
    );

    // Create the ScrollTrigger instance
    ScrollTrigger.create({
      trigger: "#video-section",
      start: "top top",
      end: "+=200%",
      pin: true,  // Pin the section during scroll
      animation: tl,
      scrub: 0.78,  // Smoothly transition with scrolling
      pinSpacing: false,  // No extra space below the section
    });

    return () => {
      // Clean up ScrollTrigger and GSAP timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <>
      <section id="video-section" className="relative h-screen w-screen z-10 overflow-hidden">
        <video
          id="video"
          src="/video.mp4"  // Replace with your video URL
          className="object-cover h-full w-full"
          controls  // Video controls like play/pause
          autoPlay
          muted
          loop
        />
      </section>
      <div className="spacer h-screen w-screen grid place-content-center relative"></div>
      {/* <section id="text" className="relative z-20 grid place-content-center h-screen w-screen">
        <div className="bg-white p-8">
          <h1>This is text</h1>
        </div>
      </section> */}
      <div className="spacer h-screen w-screen grid place-content-center relative">
        <h2></h2>
        <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          
        </span>
      </div>
    </>
  );
};

export default ScrollImage;

