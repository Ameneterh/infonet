import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { blog_posts } from "../assets/constants/blog_posts";

import { images } from "../assets/images";
import { Link, useParams } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
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

export default function SingleArticlePage() {
  const { slug } = useParams();
  const post = blog_posts.filter((post) => post.slug === slug);

  console.log(post);

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
            Article Details
          </h3>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-2 md:mt-8 max-w-6xl w-full mx-auto flex flex-col px-4"
          >
            <h3 className="text-2xl md:text-4xl text-center my-3">
              {post[0].title}
            </h3>
            <Divider />
            {/* <div
              dangerouslySetInnerHTML={{ __html: post[0] && post[0].content }}
              className="text-xs md:text-lg mt-3 font-extralight"
            ></div> */}
            <p className="text-xs md:text-sm mt-3 font-extralight">
              {post[0].content}
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
