import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { images } from "../assets/images";
import { Link, useParams } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { project_posts } from "../assets/constants/project_posts";
import Divider from "../components/Divider";

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
  const { title } = useParams();

  const project = project_posts.filter((project) => project.title === title);

  console.log(project);

  return (
    <MainLayout>
      <motion.section
        className="min-h-screen w-full max-w-6xl mx-auto bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col md:mt-20 p-4 text-sm md:text-lg mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-20 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center px-4"
        >
          <div className="w-full">
            <h3 className="w-fit mx-auto text-sm text-center px-6 py-1 rounded-full bg-white/10 backdrop-blur-xl shadow-xl">
              {project[0].category}
            </h3>
            <h3 className="text-2xl md:text-4xl text-center my-5">
              {project[0].title}
            </h3>
            <Divider />

            <div className="my-5 w-full flex flex-col md:flex-row gap-3 md:gap-10">
              <div className="flex-1">
                <h1 className="text-lg md:text-2xl font-bold mb-3">
                  Project Brief:
                </h1>
                <p className="text-xs md:text-lg mt-3 font-extralight">
                  <img
                    src={project[0].image}
                    alt={project.title}
                    className="w-full max-w-[500px] rounded-xl my-4 md:my-10 mx-auto"
                  />
                  {project[0].project_brief}
                </p>
              </div>
              <div className="w-full max-w-72 border">Advert Placement</div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
