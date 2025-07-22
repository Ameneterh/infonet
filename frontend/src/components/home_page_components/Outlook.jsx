import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Outlook({ number, text, url }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-col justify-center items-center gap-2 mt-4 p-4 w-full rounded-lg shadow-xl"
    >
      <h1 className="text-6xl font-extrabold">{number}</h1>
      <p className="capitalize font-light">{text}</p>
      <Link
        to={url}
        className="text-blue-700 hover:underline underline-offset-2 hover:text-white font-normal"
      >
        See more ...
      </Link>
    </motion.div>
  );
}
