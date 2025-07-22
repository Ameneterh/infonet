import { Input } from "antd";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

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

export default function AddBlogPost() {
  const { isLoading, login, error } = useAuthStore();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    console.log(
      "title",
      title,
      "category",
      category,
      "file",
      file,
      "content",
      content
    );
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-3xl mx-auto my-10 text-black shadow-lg rounded p-4"
    >
      <h1 className="text-lg md:text-2xl font-bold text-white text-center">
        Add Blog Post
      </h1>
      <div className="my-10">
        <form className="flex flex-col gap-3" onSubmit={handleSubmitPost}>
          <Input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex items-center flex-col  md:flex-row justify-between gap-5">
            <select
              name="category"
              id="category"
              className="w-full max-w-[300px] mx-auto text-black"
              value={category}
              onChange={handleChange}
            >
              <option label="Select Category ..." value="">
                Select Category ...
              </option>
              <option label="Blog Post" value="blog-post">
                Blog Post
              </option>
              <option label="Project Post" value="project-post">
                Project
              </option>
            </select>

            <Input
              type="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            />
          </div>
          <textarea
            id="message"
            rows="20"
            value={content}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Blog content here..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <motion.button
            className="normal_button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto text-white font-bold" />
            ) : (
              "Submit Content"
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
