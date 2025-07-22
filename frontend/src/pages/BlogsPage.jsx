import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import MainLayout from "../layout/MainLayout";
import { blog_posts } from "../assets/constants/blog_posts";
import BlogComponent from "../components/BlogComponent";

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

export default function BlogsPage() {
  return (
    <MainLayout>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="min-h-screen w-full mx-auto md:mt-10 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-20 max-w-6xl w-full mx-auto flex flex-col items-center px-4"
        >
          <h3 className="text-sm text-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl shadow-xl">
            Our Blog
          </h3>
          <h3 className="text-2xl md:text-4xl text-center mt-3">
            Resources and Insights
          </h3>
          <p className="text-xs md:text-sm text-center mt-3 font-extralight">
            The latest industry news, interviews, technologies, and resources.
          </p>

          <div className="flex items-center justify-between my-4 md:my-10 w-full max-w-xl bg-white rounded-full md:p-1">
            <FiSearch size={20} className="text-gray-600 ml-1" />
            <input
              type="text"
              placeholder="Enter a search term"
              className="flex-1 w-full md:h-8 text-gray-950 font-extralight p-1 outline-none border-none ring-0 focus:outline-none 
              focus:border-none px-1 md:px-2 rounded-full bg-transparent"
            />
          </div>
          <motion.div
            className="w-full max-w-6xl mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {blog_posts.map((post) => (
              <BlogComponent
                image={post.image}
                category={post.category}
                title={post.title}
                slug={post.slug}
                content={post.content}
                author={post.author}
                date={post.date}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
