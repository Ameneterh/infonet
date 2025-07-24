import { motion } from "framer-motion";
import { images } from "../assets/images.js";
import { Input } from "./Input.jsx";
import { Mail, KeySquare, Loader, Eye, EyeOff } from "lucide-react";

export default function SubscriptionComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-4 mb-10 px-4 w-full max-w-4xl mx-auto p-4 md:p-10 bg-green-500/10 opacity-80 backdrop-blur-md shadow-lg rounded-xl"
    >
      <div className="flex flex-col items-center">
        <img
          src={images.email_sub}
          width={60}
          className="mb-5 -mt-[45px] md:-mt-[70px]"
        />
        <h1 className="uppercase text-2xl text-center prata-regular mb-3">
          Newsletter <span className="text-gray-400">Subscription</span>
        </h1>
        <p className="font-extralight text-sm text-center w-full max-w-md mx-auto">
          Subscribe to our Newsletter to stay up to date on our products and
          happenings in the packaging design community
        </p>

        <div className="flex items-center justify-between gap-1 mt-4 md:mt-10 w-full max-w-xl bg-white rounded-full p-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-1 w-full text-black font-extralight p-1 outline-none border-none ring-0 focus:outline-none focus:border-none px-1 md:px-4 rounded-full"
          />
          <button className="text-sm bg-orange-800 hover:opacity-85 px-4 rounded-full my-0">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </motion.div>
  );
}
