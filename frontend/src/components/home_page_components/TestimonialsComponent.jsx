import { motion } from "framer-motion";
import { images } from "../../assets/images.js";
import { testimonials } from "../../assets/testimonials.js";
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

export default function TestimonialsComponent() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="px-4 w-full"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-5 pb-10 md:pb-20">
        <h1 className="text-center text-2xl md:text-4xl relative">
          Testimonials
          <img
            src={images.white_swipe}
            className="w-20 md:w-64 absolute right-[40%]"
          />
        </h1>
        <p className="text-center text-md md:text-lg md:mt-5">
          Hear what our clients say about us
        </p>
        {testimonials.map((testimonial, id) => (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-3xl mx-auto mt-2 md:mt-10 border border-green-900 shadow-lg shadow-black p-3 md:p-10 rounded-lg">
            <img
              src={testimonial.avatar}
              className="size-36 rounded-full bg-white"
            ></img>
            <div className="flex flex-col flex-1 w-full p-2 md:p-10">
              <p className="font-extralight text-sm mb-2">
                {testimonial.comment}
              </p>
              <p className="text-xl font-extrabold text-orange-600 mb-1">
                {testimonial.name}
              </p>
              <p className="font-bold text-sm">
                {testimonial.designation}{" "}
                <span className="block font-extralight">
                  {testimonial.company}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
