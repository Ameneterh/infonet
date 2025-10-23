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
        className="min-h-screen w-full max-w-6xl mx-auto bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col md:mt-20 p-4 text-sm md:text-md"
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
              <p className="mt-4 italic">
                We’re here to help you show up beautifully, everywhere your
                brand appears.
              </p>
              <p className="mt-2 text-base italic">
                Because when your brand feels seen, your customers feel
                connected, and connection is where loyalty begins.
              </p>
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight mb-6"
            >
              <h2 id="mission" className="text-2xl font-semibold">
                Why Our Mission Matters
              </h2>
              <p className="mt-4">
                Before anything else, we believe your brand deserves a
                foundation built on clarity and purpose — because meaningful
                design starts with meaning.
              </p>
              <p className="mt-3">
                To empower your brand with design that gives you the confidence
                to show up boldly, stand out clearly, and connect meaningfully
                with the people you serve.
              </p>
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight mb-6"
            >
              <hr className="border-t border-gray-100 my-4" />

              {/* Who We Serve */}
              <h2 id="who-we-serve" className="text-2xl font-semibold">
                Who We Serve & Why They Choose Us
              </h2>
              <p className="mt-4">
                We are a small, passionate team that cares deeply about helping
                brands grow in a way that feels authentic and meaningful.
              </p>
              <p className="mt-3">
                We serve entrepreneurs at the beginning of their journey,
                growing businesses ready to take the next step, and established
                brands looking to refresh their visual identity. If you value
                thoughtful design and a partner who listens, you’re in the right
                place.
              </p>
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight mb-6"
            >
              <hr className="border-t border-gray-100 my-4" />

              {/* How We Work */}
              <h2 className="text-2xl font-semibold">How We Work With You</h2>
              <p className="mt-4">
                Design is strongest when it feels like a shared journey, so we
                keep you involved in a way that feels natural, supportive, and
                never overwhelming.
              </p>
              <ol className="mt-4 space-y-3 list-decimal list-inside">
                <li>
                  <strong>Listen &amp; Understand:</strong> We start by learning
                  about your brand and what you hope to achieve, so the design
                  stays aligned with your values.
                </li>
                <li>
                  <strong>Create &amp; Collaborate:</strong> We explore
                  thoughtful ideas and refine them with you, turning concepts
                  into visuals that feel meaningful and true.
                </li>
                <li>
                  <strong>Deliver &amp; Support:</strong> Once your design is
                  ready, we prepare it for real-world use and remain available
                  if you need guidance or updates.
                </li>
              </ol>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight md:mb-6"
            >
              <hr className="border-t border-gray-100" />

              {/* What Makes Different */}
              <h2 className="text-2xl font-semibold my-4">
                What Makes Our Approach Different
              </h2>
              <p className="mt-4">
                What sets us apart is the care we bring to understanding your
                brand before we design for it. We don’t rush to create — we
                build with intention, so every detail supports your growth.
              </p>
              <p className="mt-3">
                We believe that when your brand feels clear and confident, it
                naturally earns attention — not by competing loudly, but by
                showing up with authenticity and purpose.
              </p>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight md:mb-6"
            >
              <hr className="border-t border-gray-100 my-4" />

              {/* Services (packaging, print, web, data) */}
              <h2 className="text-2xl font-semibold my-4">What We Do</h2>
              <p className="mt-4">
                We partner with you across both print and digital formats to
                craft design that performs.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-gray-100 bg-slate-50/70 text-gray-700">
                  <h3 className="font-extrabold text-gray-800">
                    Product Packaging Design
                  </h3>
                  <p className="mt-2 text-sm">
                    Packaging that attracts attention, builds trust, and
                    balances beauty with real-world functionality.
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100 bg-gray-50 text-gray-700">
                  <h3 className="font-extrabold">Brand &amp; Print Design</h3>
                  <p className="mt-2 text-sm">
                    Calendars, book covers, business cards, brochures, and
                    marketing materials that align with your brand story.
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100 bg-gray-50 text-gray-700">
                  <h3 className="font-extrabold">
                    Web Design &amp; Development
                  </h3>
                  <p className="mt-2 text-sm">
                    Modern, responsive MERN-stack websites—portfolio sites,
                    company sites, and e-commerce stores.
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100 bg-slate-50/70 text-gray-700">
                  <h3 className="font-extrabold text-gray-800">
                    Data &amp; Brand Insight Support
                  </h3>
                  <p className="mt-2 text-sm">
                    Simple, actionable insights to guide design choices and help
                    you connect more deeply with your audience.
                  </p>
                </div>
              </div>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight md:mb-6"
            >
              <hr className="border-t border-gray-100 my-4" />

              {/* Values & Promise */}
              <h2 className="text-2xl font-semibold">
                The Values That Guide Our Work
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Authenticity:</strong> We create designs that feel
                  true to who you are.
                </li>
                <li>
                  <strong>Care:</strong> Your brand matters to us as much as it
                  matters to you.
                </li>
                <li>
                  <strong>Innovation:</strong> We always look for better ways to
                  express your message.
                </li>
                <li>
                  <strong>Reliability:</strong> You can count on us from start
                  to finish.
                </li>
              </ul>

              <div className="mt-6 bg-gray-50/30 border border-gray-100 p-5 rounded-lg">
                <h3 className="font-extrabold text-gray-950">
                  A Promise You Can Feel Confident In
                </h3>
                <p className="mt-2 text-gray-50">
                  We’ll support you with clarity, patience, and collaboration —
                  giving you a space where ideas can grow confidently and at the
                  right pace. Our goal is not just to design for you, but to
                  design <em>with</em> you, so the final result feels like a
                  true reflection of your vision.
                </p>
              </div>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-extralight md:mb-6"
            >
              <hr className="border-t border-gray-100 my-4" />

              {/* Team sentence and CTA */}
              <p className="">
                We’re a small, passionate team that cares deeply about helping
                brands grow in a way that feels authentic and meaningful.
              </p>

              <div className="mt-8">
                <p className="">
                  We’d be honoured to walk this journey with you — whenever
                  you’re ready.
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                  aria-label="Contact Infonet Grafix Global"
                >
                  Let us create together →
                </Link>
              </div>
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

              <p className="text-sm mb-3">
                Erdoo Blessing Abanyi, a Computer Science graduate from the
                University of Jos, Nigeria, is the{" "}
                <b>CEO of a dynamic company</b> specializing in{" "}
                <b>graphics design, web development, and data analysis</b>. As a{" "}
                <b>certified data analyst</b>, she masterfully blends technical
                expertise with entrepreneurial vision, leading her team to
                deliver innovative digital solutions and insightful data
                strategies.
              </p>
              <p className="text-sm mb-3">
                Beyond her role as a <b>driven entrepreneur</b>, Erdoo is also a{" "}
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
