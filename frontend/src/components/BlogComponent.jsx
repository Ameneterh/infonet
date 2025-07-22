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

export default function BlogComponent({
  image,
  category,
  date,
  title,
  slug,
  content,
  author,
}) {
  return (
    <motion.section
      className={`h-[200px] md:h-[400px] shadow-xl border-[1.5px] border-green-700 rounded-md flex items-start gap-3 relative overflow-hidden`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[200px] md:h-[400px] bg-slate-600"
      ></div>
      <div
        className={`flex flex-col gap-2 absolute bottom-0 bg-black/80 w-full p-2 md:p-4`}
      >
        <Link
          to={`/blogs/${slug}`}
          className="flex items-center justify-between px-1"
        >
          <h1 className="text-lg font-bold truncate overflow-hidden text-gray-300">
            {title}
          </h1>
          <MdArrowOutward size={20} />
        </Link>
        <div className="flex items-center justify-between text-sm">
          <p className="text-orange-400">{category}</p>
          <p className="">{date}</p>
        </div>
        <p className="text-xs hidden md:block md:line-clamp-4 text-gray-300 font-extralight">
          {content}
        </p>
      </div>
    </motion.section>
  );
}
