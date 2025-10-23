import { motion } from "framer-motion";
import { images } from "../../assets/images";
import CTAButtons from "../buttons/CTAButtons";

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

export default function IntroducingInfonet() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="w-full bg-black bg-opacity-35 py-10 px-4"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto my-5 flex flex-col-reverse lg:flex-row gap-10"
      >
        <div className="flex-1">
          <img src={images.the_big_idea} />
        </div>
        <motion.div className="flex-1 flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Get to know <br />
            Infonet{" "}
            <span className="text-orange-600 italianno-regular text-4xl md:text-6xl font-extrabold">
              Grafix
            </span>
          </h1>
          <p className="w-full md:w-3/4">
            Your brand deserves a packaging that speaks before a word is said,
            and that is exactly what we help you create. Whether you are
            launching your first product or leading a global brand, we design
            packaging that reflects your vision, resonates with your customers,
            and elevates your market presence.
            <span className="block mt-5">
              Think of us as partners invested in your success, here to support
              every stage of your packaging journey and bring your ideas to life
              with creativity, care, and clarity.
            </span>
          </p>

          <CTAButtons text="Read More Here" url="/about" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
