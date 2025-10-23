import { images } from "../../assets/images.js";
import { motion } from "framer-motion";
import CTAButtons from "../buttons/CTAButtons.jsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HeroComponent() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      // exit={{ opacity: 0, scale: 0.9 }}
      className="max-w-6xl min-h-screen w-full mx-auto mt-10 p-4 md:mt-20 flex flex-col items-center bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl"
    >
      <h1 className="w-full text-xl md:text-4xl text-right">
        Igniting a revolution in{" "}
        <span className="text-orange-500 block relative">
          Packaging Design{" "}
          <img
            src={images.white_swipe}
            className="w-40 md:w-64 absolute right-0"
          />
        </span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-flex gap-10">
        <div className="flex-1 flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Let's get you the{" "}
            <span className="block text-orange-600 italianno-regular text-4xl md:text-6xl">
              Ideal Packaging!
            </span>
          </h1>
          <div className="w-full md:w-3/4 font-extralight text-sm">
            <p className="mb-2">
              You deserve packaging that does not just look good, but works
              beautifully for your customers and your brand. That is why we
              focus on designs that are creative, functional, and sustainable —
              built to elevate your products and reflect your identity.
              <span className="block mt-5">
                From the spark of an idea to the finished package in your hands,
                we tailor every detail to help your brand stand out, tell its
                story, and make a lasting connection with the people who buy
                from you.
              </span>
            </p>
          </div>

          <CTAButtons
            text="Let's get you a befitting packaging"
            url="/contact"
          />
        </div>
        <div className="flex-1 mt-8 md:mt-20">
          <img src={images.hero1} />
        </div>
      </div>
    </motion.div>
  );
}
