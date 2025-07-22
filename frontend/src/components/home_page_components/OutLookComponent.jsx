import { motion } from "framer-motion";
import { images } from "../../assets/images.js";
import { outlook } from "../../assets/outlook.js";
import Outlook from "./Outlook.jsx";

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

export default function OurClients() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="mt-4 px-4 w-full"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-5 py-10 md:py-20">
        <h1 className="text-center text-2xl md:text-4xl relative">
          How we are doing{" "}
          <img
            src={images.line}
            className="w-20 md:w-40 absolute right-[40%]"
          />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-5 md:mt-10">
          {outlook.map((detail, index) => (
            <div key={index}>
              <Outlook
                number={detail.number}
                text={detail.text}
                url={detail.url}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
