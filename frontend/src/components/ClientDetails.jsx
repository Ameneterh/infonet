import { motion } from "framer-motion";

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

export default function ClientDetails({
  client_logo,
  client_name,
  client_address,
}) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="my-4 p-4 w-full md:w-80 flex flex-col items-center rounded-md shadow-md shadow-black bg-opacity-50 border border-green-900"
    >
      {client_logo ? (
        <img
          src={client_logo}
          alt={client_name}
          className="rounded-full w-16 h-16"
        />
      ) : (
        <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-4xl font-extrabold">
          {client_name[0]}
        </div>
      )}
      <h1 className="text-lg font-extrabold mt-1 text-gray-300 text-center">
        {client_name}
      </h1>
      <p className="text-xs font-normal text-gray-400 text-center">
        {client_address}
      </p>
    </motion.section>
  );
}
