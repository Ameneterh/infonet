import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
// import { useAuthStore } from "../store/authStore";
// import { formatDate } from "../../../server/utils/date";
import MainLayout from "../layout/MainLayout";
import HeroComponent from "../components/home_page_components/HeroComponent";
import IntroducingInfonet from "../components/home_page_components/IntroducingInfonet";
import OutLookComponent from "../components/home_page_components/OutLookComponent";
import FrequentlyAskedQuestions from "../components/home_page_components/FrequentlyAskedQuestions";
import PrivacyAndTerms from "../components/home_page_components/PrivacyAndTerms";
import SubscriptionComponent from "../components/SubscriptionComponent";

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

export default function HomePage() {
  // const { user, logout, isLoading } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <MainLayout>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        // initial={{ opacity: 0, scale: 0.9 }}
        // animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        // transition={{ duration: 0.5 }}
        className="min-h-screen w-full mx-auto mt-10 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col"
      >
        {/* <motion.button
          className="mx-auto mt-5 py-2 px-4 bg-gradient-to-r from-green-800 to-emerald-900 rounded-lg hover:from-green-600 hover:to-emerald-700 text-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-200 cursor-pointer flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
        >
          Get Started with Invoice Gen
        </motion.button> */}

        <HeroComponent />
        <IntroducingInfonet />
        <OutLookComponent />
        <FrequentlyAskedQuestions />
        <PrivacyAndTerms />
        <SubscriptionComponent />
      </motion.div>
    </MainLayout>
  );
}
