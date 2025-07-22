import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaRegUser,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdAlternateEmail,
  MdOutlinePhoneInTalk,
  MdMessage,
  MdCall,
  MdEmail,
} from "react-icons/md";

import MainLayout from "../layout/MainLayout";
import { blog_posts } from "../assets/constants/blog_posts";
import BlogComponent from "../components/BlogComponent";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import CTAButtons from "../components/buttons/CTAButtons";

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

export default function ContactPage() {
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
            Contact Us
          </h3>
          <h3 className="text-xl md:text-2xl text-center mt-3 md:mt-6">
            Send Us a Message
          </h3>
          <p className="text-center text-sm md:text-lg">
            We will get back to you within 24 hours
          </p>

          <motion.div
            className="w-full max-w-xl mt-5 md:mt-10 mb-20 flex flex-col gap-3"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <Link
                to="/twitter"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                <FaTwitter size={20} className="hover:text-blue-700" />
              </Link>
              <Link
                to="/facebook"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                <FaFacebook size={20} className="hover:text-blue-700" />
              </Link>
              <Link
                to="/linkedin"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                <FaLinkedin size={20} className="hover:text-blue-700" />
              </Link>
              <Link
                to="/linkedin"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                <FaWhatsapp size={20} className="hover:text-blue-700" />
              </Link>
              <Link
                to="/linkedin"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                <MdCall size={20} className="hover:text-blue-700" />
              </Link>
              <Link
                to="/linkedin"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                <MdEmail size={20} className="hover:text-blue-700" />
              </Link>
            </div>
            <motion.form className="mt-6 flex flex-col gap-5">
              <div className="flex items-center flex-col md:flex-row gap-5">
                <Input
                  size="large"
                  prefix={<FaRegUser />}
                  placeholder="Surname (Last Name)"
                  className="flex-1 contact-input"
                />
                <Input
                  size="large"
                  prefix={<FaRegUser />}
                  placeholder="Other Name(s)"
                  className="flex-1"
                />
              </div>
              <Input
                size="large"
                prefix={<MdAlternateEmail />}
                placeholder="Email address"
                className="flex-1"
              />
              <Input
                size="large"
                prefix={<MdOutlinePhoneInTalk />}
                placeholder="Phone Number"
                className="flex-1"
              />
              {/* <div className="relative"> */}
              <TextArea
                prefix={<MdMessage />}
                showCount
                maxLength={100}
                placeholder="Your Message"
                style={{ height: 120, resize: "none" }}
              />
              {/* <MdMessage className="absolute top-2 left-3 text-black" /> */}
              {/* </div> */}

              <CTAButtons text="Send Message" />
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
