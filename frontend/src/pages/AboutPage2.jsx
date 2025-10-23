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
        <section className="max-w-4xl mx-auto px-6 py-16">
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold">About Us</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We’re here to help you show up beautifully — everywhere your brand
              appears.
            </p>
            <p className="mt-2 text-base text-gray-500 max-w-2xl mx-auto">
              Because when your brand feels seen, your customers feel connected
              — and connection is where loyalty begins.
            </p>
          </header>

          <div className="space-y-12">
            {/* Mission */}
            <section aria-labelledby="mission">
              <h2 id="mission" className="text-2xl font-semibold">
                Why Our Mission Matters
              </h2>
              <p className="mt-4 text-gray-600">
                Before anything else, we believe your brand deserves a
                foundation built on clarity and purpose — because meaningful
                design starts with meaning.
              </p>
              <p className="mt-3 text-gray-600">
                To empower your brand with design that gives you the confidence
                to show up boldly, stand out clearly, and connect meaningfully
                with the people you serve.
              </p>
            </section>

            <hr className="border-t border-gray-100" />

            {/* Who We Serve */}
            <section aria-labelledby="who-we-serve">
              <h2 id="who-we-serve" className="text-2xl font-semibold">
                Who We Serve & Why They Choose Us
              </h2>
              <p className="mt-4 text-gray-600">
                We are a small, passionate team that cares deeply about helping
                brands grow in a way that feels authentic and meaningful.
              </p>
              <p className="mt-3 text-gray-600">
                We serve entrepreneurs at the beginning of their journey,
                growing businesses ready to take the next step, and established
                brands looking to refresh their visual identity. If you value
                thoughtful design and a partner who listens, you’re in the right
                place.
              </p>
            </section>

            <hr className="border-t border-gray-100" />

            {/* How We Work */}
            <section aria-labelledby="how-we-work">
              <h2 id="how-we-work" className="text-2xl font-semibold">
                How We Work With You
              </h2>
              <p className="mt-4 text-gray-600">
                Design is strongest when it feels like a shared journey, so we
                keep you involved in a way that feels natural, supportive, and
                never overwhelming.
              </p>
              <ol className="mt-4 space-y-3 list-decimal list-inside text-gray-600">
                <li>
                  <strong>Listen &amp; Understand</strong> – We start by
                  learning about your brand and what you hope to achieve, so the
                  design stays aligned with your values.
                </li>
                <li>
                  <strong>Create &amp; Collaborate</strong> – We explore
                  thoughtful ideas and refine them with you, turning concepts
                  into visuals that feel meaningful and true.
                </li>
                <li>
                  <strong>Deliver &amp; Support</strong> – Once your design is
                  ready, we prepare it for real-world use and remain available
                  if you need guidance or updates.
                </li>
              </ol>
            </section>
          </div>
          <hr className="border-t border-gray-100" />
        </section>
      </motion.section>
    </MainLayout>
  );
}
