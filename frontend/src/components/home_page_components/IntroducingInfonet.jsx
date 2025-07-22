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
            With our dedicated and visionary visually expressive team, our
            purpose is as clear as day: to shape the future of product
            packaging. Whether you're a start up, or a fortune 500 company,
            you'll find our packaging design ideas meet your needs.{" "}
            <span className="block mt-5">
              Let's be your partners that see to your every packaging design
              needs; we are here for you!
            </span>
          </p>

          <CTAButtons text="Read More Here" url="/about" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
