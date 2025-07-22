import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { Tabs } from "antd";
import { MdPolicy } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { useState } from "react";
import AddBlogPost from "../components/AddBlogPost";
import AddProject from "../components/AddProject";

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

export default function AddContent() {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  console.log(content);

  return (
    <MainLayout>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, scale: 0.9 }}
        className="min-h-screen w-full max-w-6xl mx-auto my-14 p-4 md:p-10 md:mt-32 bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col font-extralight"
      >
        <select
          name="content"
          id="content"
          onChange={handleChange}
          className="w-full max-w-[300px] mx-auto text-black"
        >
          <option label="Select field to add" value="">
            Select field to add
          </option>
          <option label="Add Blog Post" value="blog-post">
            Add Blog Post
          </option>
          <option label="Add Project Post" value="project-post">
            Add Project
          </option>
          <option label="Add" value="blog-post">
            Add
          </option>
        </select>

        <>
          {!content && (
            <div className="text-white w-full max-w-2xl mx-auto mt-10 text-center text-xl md:text-4xl font-extrabold">
              Select Content Type{" "}
              <span className="font-extralight block">above to add</span>
            </div>
          )}
          {content && content === "blog-post" && <AddBlogPost />}
          {content && content === "project-post" && <AddProject />}
        </>
      </motion.div>
    </MainLayout>
  );
}
