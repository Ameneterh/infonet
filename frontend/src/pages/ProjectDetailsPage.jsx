import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

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

export default function ProjectDetailsPage() {
  return (
    <MainLayout>
      <motion.section
        className="min-h-screen w-full max-w-6xl mx-auto bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col md:mt-20 p-4 text-sm md:text-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-20 max-w-6xl w-full mx-auto flex flex-col items-center px-4"
        >
          <h3 className="text-sm text-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl shadow-xl">
            Project Detail
          </h3>
          <h3 className="text-2xl md:text-4xl text-center mt-3">
            Resources and Insights
          </h3>
          <p className="text-xs md:text-sm text-center mt-3 font-extralight">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
