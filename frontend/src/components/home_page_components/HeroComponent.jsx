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
      className="max-w-6xl min-h-screen w-full mx-auto mt-10 p-4 md:mt-20 flex flex-col bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl"
    >
      <h1 className="w-full text-2xl md:text-4xl text-right">
        Igniting a revolution in{" "}
        <span className="text-orange-500 block relative">
          Packaging Design{" "}
          <img src={images.line} className="w-40 md:w-56 absolute right-0" />
        </span>
      </h1>
      <div className="mt-10 md:mt-20 flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1 flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Let's get you the{" "}
            <span className="block text-orange-600 italianno-regular text-4xl md:text-6xl">
              Ideal Packaging!
            </span>
          </h1>
          <div className="w-full md:w-3/4 font-extralight text-sm">
            <p className="mb-2">
              We specialize in creative, functional, and sustainable packaging
              design that captures attention and builds brand itendity. From
              concept to final product, we help businesses stand out on the
              shelf and connect with their customers through custom-tailored
              packaging solutions.
            </p>
          </div>

          <CTAButtons text="Get Your Product Packaging" />
        </div>
        <div className="flex-1">
          <img src={images.hero1} />
        </div>
      </div>
    </motion.div>
  );
}
