import { Tabs } from "antd";
import { motion } from "framer-motion";
import { MdPolicy } from "react-icons/md";
import { GrNotes } from "react-icons/gr";

import MainLayout from "../layout/MainLayout";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";
import TermsAndConditionsComponent from "../components/TermsAndConditionsComponent";

export default function PrivacyTermsPage() {
  return (
    <MainLayout>
      <motion.section
        className="w-full max-w-6xl mx-auto mt-14 p-4 md:p-20 md:mt-32 bg-black/10 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col font-extralight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 className="text-2xl md:text-4xl font-bold text-center mb-5 md:mb-12">
          Privacy Policy,{" "}
          <span className="block md:inline text-gray-500">
            Terms & Conditions
          </span>
        </motion.h1>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: (
                <h2 className="text-lg md:text-2xl flex items-center gap-1">
                  <MdPolicy size={20} />
                  Privacy <span className="hidden md:inline">Policy</span>
                </h2>
              ),
              key: "1",
              children: <PrivacyPolicyComponent />,
            },
            {
              label: (
                <h2 className="text-lg md:text-2xl flex items-center gap-1">
                  <GrNotes size={20} />
                  Terms <span className="hidden md:inline">of Use</span>
                </h2>
              ),
              key: "2",
              children: <TermsAndConditionsComponent />,
            },
          ]}
        />
      </motion.section>
    </MainLayout>
  );
}
