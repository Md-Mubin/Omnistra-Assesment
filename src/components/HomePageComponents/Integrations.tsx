"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Integrations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  const icons = [
    { x: -515, y: -255, img: "/icons1.png" },
    { x: -150, y: -210, img: "/icons2.png" },
    { x: 90, y: -270, img: "/icons3.png" },
    { x: 440, y: -280, img: "/icons4.png" },
    { x: 430, y: -100, img: "/icons5.png" },
    { x: 430, y: 290, img: "/icons6.png" },
    { x: 0, y: 330, img: "/icons7.png" },
    { x: -440, y: 300, img: "/icons8.png" },
    { x: -340, y: 80, img: "/icons9.png" },
    { x: -420, y: -110, img: "/icons10.png" },
  ];

  const middleIconScale = useTransform(scrollYProgress, [0.2, 0.3, 0.55, 0.63], [0.6, 1, 1, 0.6]);
  const middleIconOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.55, 0.625, 0.63], [0, 1, 1, 1, 0]);

  const boxOpacity = useTransform(scrollYProgress, [0.625, 0.63], [0, 1]);
  const boxScaleX = useTransform(scrollYProgress, [0.63, 0.82], [0.08, 1]);
  const boxScaleY = useTransform(scrollYProgress, [0.63, 0.82], [0.08, 1]);
  const boxBorderRadius = useTransform(scrollYProgress, [0.63, 0.82], [24, 8]);

  const nextSectionY = useTransform(scrollYProgress, [0.65, 1], ["100vh", "0vh"]);
  const contentLeftOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 1]);
  const contentRightOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);
  // Fade In And Out
  const nextSectionOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const nextSectionPointerEvents = useTransform(scrollYProgress, (v) => v >= 0.8 ? "none" : "auto");

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#f0f4ff]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <motion.img
          src="/bg_image.avif"
          alt="bg"
          loading="lazy"
          style={{ opacity: bgOpacity }}
          className="absolute max-w-360 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        {/* ICONS */}
        {icons?.map((icon, index) => {
          const x = useTransform(scrollYProgress, [0, 0.2], [icon.x, 0]);
          const y = useTransform(scrollYProgress, [0, 0.2], [icon.y, 0]);
          const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
          const scale = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 0.9, 0.8]);
          return (
            <motion.div
              key={index}
              style={{ x, y, opacity, scale }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-25.25 h-25.25 bg-white shadow-lg shadow-[#e8eeff] rounded-xl flex items-center justify-center text-sm font-semibold text-gray-700"
            >
              <img src={icon.img} alt={`Icon ${index + 1}`} loading="lazy" className="p-3 object-contain" />
            </motion.div>
          );
        })}
        {/* MIDDLE ICON */}
        <motion.img
          style={{ scale: middleIconScale, opacity: middleIconOpacity }}
          src="/middleIcon.png"
          alt="middleIcon"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-5 w-26 h-26 bg-blue-600 rounded-lg border border-[#00000055]"
        />
        {/* EXPANDED BOX */}
        <motion.div
          style={{
            opacity: boxOpacity,
            scaleX: boxScaleX,
            scaleY: boxScaleY,
            borderRadius: boxBorderRadius,
          }}
          className="absolute top-[65%] z-30 w-screen h-[55vh] bg-[#08144f] origin-top"
        />
        {/* WHITE OVERLAY */}
        <motion.span
          style={{
            y: nextSectionY,
            opacity: nextSectionOpacity,
            pointerEvents: nextSectionPointerEvents,
            visibility: useTransform(scrollYProgress, (v) => v >= 0.8 ? "hidden" : "visible"),
          }}
          className="absolute bottom-0 left-0 w-full h-200 z-200 bg-white"
        />
        {/* NEXT SECTION */}
        <motion.div
          style={{ y: nextSectionY }}
          className="absolute bottom-0 left-0 w-full h-200 z-100"
        >
          <video
            src="https://framerusercontent.com/assets/mRSh8H8cT7JPcFnZTCpVEfXl928.mp4"
            loop
            preload="auto"
            muted
            autoPlay={true}
            playsInline
            className="w-full h-full absolute object-cover"
          />
          <div className="relative z-300 h-full flex flex-col lg:flex-row items-center justify-between gap-16 max-w-400 px-4 m-auto  lg:pt-0">
            <motion.div style={{ opacity: contentLeftOpacity }} className="flex-1 flex flex-col gap-6 max-w-lg text-center lg:text-start">
              <span className="leading-[120%] self-start border border-white/70 text-white uppercase px-3 py-1.5 rounded-sm m-auto mt-40 lg:m-0">
                DASHBOARD
              </span>
              <h2 className="text-white text-3xl lg:text-[54px] font-normal leading-[100%]">
                Your Mission Control<br />for End-To-End<br />Servicing
              </h2>
              <p className="text-white text-normal leading-[120%]">
                A centralized command center for high-stakes recovery. Track performance and agent activity in real-time with a continuous data stream designed for rapid, informed decision-making.
              </p>
              <button className="self-center lg:self-start flex items-center justify-center gap-2.5 cursor-pointer bg-[#0145f2] hover:bg-white text-white hover:text-[#0145f2] leading-[120%] font-normal p-[12px_12px_12px_20px] rounded-lg">
                Start a Pilot
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
              </button>
            </motion.div>
            <motion.div style={{ opacity: contentRightOpacity }} className="flex items-center justify-end max-w-260 lg:-mr-25">
              <img
                src="/integration_laptop_image.avif"
                alt="integration_laptop_image"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Integrations;