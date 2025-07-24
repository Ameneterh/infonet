import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import CTAButtons from "../buttons/CTAButtons";
import { images } from "../../assets/images";

export default function PrivacyAndTerms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full py-10 px-4"
    >
      <div className="max-w-6xl mx-auto my-5 flex flex-col-reverse lg:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-xl md:text-3xl">
            Privacy Policy and{" "}
            <span className="text-orange-600 block"> Terms</span>
          </h1>
          <p className="-mt-3 md:-mt-6 text-sm text-gray-400">
            Last updated on June 6, 2025
          </p>
          <p className="font-extralight w-full md:w-3/4 -mt-1 md:-mt-3">
            Below are our privacy & policy, which outline a lot of goodies.{" "}
            <span className="inline md:block">
              It’s our aim to always take of our participant
            </span>
          </p>

          <div className="w-full mt-8 flex flex-col gap-3 border border-green-700 rounded-lg p-4 md:p-10">
            <p className="font-extralight text-md mb-5">
              At Infonet Grafix Global, we value your privacy and are committed
              to protecting your personal information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your data
              when you use our site or contact us through any of the listed
              channels. By using our website, you consent to the practices
              described in this policy.
            </p>
            <p className="font-bold text-orange-600 text-lg mb-2">
              Licensing Policy
              <span className="block font-light text-white text-sm mt-2">
                Here are terms of our Standard License:
              </span>
            </p>

            <div className="flex items-start gap-3 mb-10">
              <FaCheckCircle className="text-green-700" size={20} />
              <p className="flex-1 font-extralight">
                The Standard License grants you a non-exclusive right to
                navigate, register on our site, and request our services
              </p>
            </div>
            <CTAButtons text="Read More Here" url="/privacy-terms" />
          </div>
        </div>
        <div className="flex-1">
          <img
            src={images.privacy_terms}
            width={400}
            className="place-self-end"
          />
        </div>
      </div>
    </motion.div>
  );
}
