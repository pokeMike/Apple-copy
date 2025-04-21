import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex flex-col">
        <p
          id="hero"
          className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10 mt-10"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 mx-auto">
          <video
            autoPlay
            muted
            playsInline="true"
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">from $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
