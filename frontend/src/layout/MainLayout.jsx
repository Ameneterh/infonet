import { motion } from "framer-motion";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

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

export default function MainLayout({ children }) {
  return (
    <motion.main
      // variants={fadeInUp}
      // initial="hidden"
      // animate="visible"
      className="w-full min-h-[80svh] sm:mx-auto"
    >
      <HeaderComponent />
      {/* <SearchBar /> */}
      <main className="">{children}</main>
      {window.location.pathname === "/authentication" ? (
        <></>
      ) : (
        <FooterComponent />
      )}
    </motion.main>
  );
}
