import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

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

export default function ProjectComponent({
  image,
  category,
  date,
  title,
  project_url,
  project_brief,
}) {
  return (
    <motion.section
      className="p-4 bg-green-950/10 backdrop-blur-lg shadow-xl border-[1.5px] border-green-900 rounded-md flex flex-col gap-5"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full flex items-center justify-center">
        <img src={image} alt={title} className="min-w-full max-h-48" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-orange-400">{category}</p>
        <div className="flex items-center justify-between px-1">
          <Link
            to={`/projects/${title}`}
            className="text-lg font-bold truncate overflow-hidden"
          >
            {title}
          </Link>
          <MdArrowOutward size={20} />
        </div>
        <p className="text-xs text-gray-400 line-clamp-4">{project_brief}</p>
        {/* <p className="text-[13px] text-white line-clamp-1">
          Live Link:{" "}
          <Link
            to={project_url}
            className="text-blue-400 hover:underline underline-offset-2"
            target="_blank"
          >
            View Project
          </Link>
        </p> */}
      </div>

      {/* <p className="text-sm text-orange-400 font-extralight">
        Posted on: <span className="text-white font-bold">{date}</span>
      </p> */}
    </motion.section>
  );
}
