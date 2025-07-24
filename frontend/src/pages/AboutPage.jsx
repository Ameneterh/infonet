import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

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

export default function AboutPage() {
  return (
    <MainLayout>
      <motion.section
        className="min-h-screen w-full max-w-6xl mx-auto bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col md:mt-20 p-4 text-sm md:text-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-20 max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-10"
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <h1 className="text-xl md:text-3xl font-bold border-l-[6px] border-l-orange-600 pl-3 mb-6">
              About Our <br />
              Graphics<sup>+</sup> Design <br />
              Company
            </h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight mb-6"
            >
              <strong>Infonet Grafix Global</strong> (formerly{" "}
              <em>Infonet Grafix & Codes</em>) is a dynamic and innovative
              graphic design company headquartered in Kaduna, Nigeria, and
              officially registered as a corporate entity. With a strong
              reputation for excellence and creativity, the company specializes
              in <strong>product packaging design</strong>, crafting unique,
              eye-catching packaging solutions that elevate product appeal and
              reinforce brand identity. From consumer goods to cosmetics,
              pharmaceuticals, and more, Infonet Grafix Global ensures every
              design combines functionality with aesthetic value to meet both
              market and client expectations.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight mb-6"
            >
              In addition to packaging, the company offers a{" "}
              <strong>comprehensive suite of graphic design services</strong>,
              including the design and production of{" "}
              <strong>
                calendars, book covers, jotters, business cards, magazines,
                brochures, flyers, posters
              </strong>
              , and other marketing and corporate materials. Each project is
              approached with meticulous attention to detail, ensuring that
              every visual element aligns seamlessly with the client’s brand and
              communication goals.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight mb-6"
            >
              Expanding its creative offerings into the digital space,{" "}
              <strong>
                Infonet Grafix Global also provides professional website design
                and development services
              </strong>
              , leveraging the full{" "}
              <strong>
                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </strong>{" "}
              to build fast, responsive, and modern web applications. Their web
              design services cover:
              <ul className="list-disc pl-6 space-y-1">
                <li className="list-disc">
                  <b>Company portfolio websites:</b> Showcasing brand identity,
                  services, and achievements in a polished and interactive
                  digital format.
                </li>
                <li className="list-disc">
                  <b>Individual portfolio websites:</b> Ideal for creatives,
                  professionals, public figures, and freelancers looking to
                  present their work in a visually compelling and user-friendly
                  way.
                </li>
                <li className="list-disc">
                  <b>E-commerce websites:</b> Fully functional online stores
                  with seamless navigation, secure payment integration, and a
                  focus on user experience and conversion optimization.
                </li>
              </ul>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight md:mb-6"
            >
              Driven by creativity, innovation, and a commitment to client
              satisfaction, Infonet Grafix Global continues to empower
              businesses and individuals with cutting-edge design solutions,
              both in print and digital formats, that deliver lasting impact and
              measurable value.
            </motion.p>
          </motion.div>

          {/* right */}
          <motion.div className="w-full max-w-sm">
            <h1 className="text-xl md:text-2xl font-bold text-orange-600 pl-3 mb-6">
              What We Do
            </h1>

            <div className="flex items-start w-full gap-2">
              <img
                src={images.product}
                alt="product packaging mockup"
                width={80}
              />
              <div>
                <h3 className="mb-1 text-sm">Product Packaging Design</h3>
                <p className="font-extralight text-xs">
                  Beautiful and trendy product packaging that makes your product
                  stand out, making it easily noticeable on the shelf.
                </p>
              </div>
            </div>
            <div className="flex items-start w-full gap-2 my-6">
              <img
                src={images.wedding}
                alt="product packaging mockup"
                width={80}
              />
              <div>
                <h3 className="mb-1 text-sm">Graphics Design/Printing</h3>
                <p className="font-extralight text-xs">
                  We provide high-quality graphic design and printing services
                  that bring your brand to life with stunning visuals and
                  professional finishes.
                </p>
              </div>
            </div>
            <div className="flex items-start w-full gap-2 mb-6">
              <img
                src={images.website}
                alt="product packaging mockup"
                width={80}
              />
              <div>
                <h3 className="mb-1 text-sm">Web Development</h3>
                <p className="font-extralight text-xs">
                  Beautifully crafted website with unbeatable functionality and
                  delivery timeline.
                </p>
              </div>
            </div>
            <div className="flex items-start w-full gap-2">
              <img
                src={images.data_analysis}
                alt="data analysis picture"
                width={80}
              />
              <div>
                <h3 className="mb-1 text-sm">Data Analysis</h3>
                <p className="font-extralight text-xs">
                  We inspect, cleanse, transform, and model your data to extract
                  useful information, so you can make conclusions, and support
                  your data driven decision-making.
                </p>
              </div>
            </div>

            <motion.div className="mt-6 w-full bg-black/10 rounded-md p-6 font-extralight">
              <h1 className="text-xl md:text-2xl text-orange-600 font-bold mb-2">
                Meet Our CEO
              </h1>

              <div className="w-full flex flex-col items-center justify-center gap-3 mb-4 py-4 bg-white/10 rounded-md">
                <img
                  src={images.ceo_picture}
                  alt="ceo image"
                  width={200}
                  className="rounded-full self-center mx-auto mb-2 bg-black/10 shadow-xl"
                />

                <div className="flex items-center justify-center gap-2">
                  <Link
                    to="#"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                  <Link
                    to="#"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <FaTwitter size={20} />
                  </Link>
                  <Link
                    to="#"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <FaFacebook size={20} />
                  </Link>
                  <Link
                    to="#"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <MdOutlineWhatsapp size={20} />
                  </Link>
                </div>
              </div>

              <p className="text-xs mb-3">
                Erdoo Blessing Abanyi, a Computer Science graduate from the
                University of Jos, Nigeria, is the{" "}
                <b>CEO of a dynamic company</b>
                specializing in{" "}
                <b>graphics design, web development, and data analysis</b>. As a
                <b>certified data analyst</b>, she masterfully blends technical
                expertise with entrepreneurial vision, leading her team to
                deliver innovative digital solutions and insightful data
                strategies.
              </p>
              <p className="text-xs mb-3">
                Beyond her role as a <b>driven entrepreneur</b>, Erdoo is also a
                <b>dedicated teacher</b>, committed to empowering others with
                essential digital skills. Her multifaceted career highlights her
                passion for technology and education, establishing her as a
                significant figure in Nigeria's evolving tech landscape.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.section>
    </MainLayout>
  );
}
