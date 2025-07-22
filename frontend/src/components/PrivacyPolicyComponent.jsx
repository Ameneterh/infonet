import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdOutlineMarkEmailUnread,
  MdAddIcCall,
  MdWhatsapp,
} from "react-icons/md";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { sections } from "../assets/constants/policy_sections";

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

export default function PrivacyPolicyComponent() {
  return (
    <>
      <motion.p
        className="mb-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <strong>Effective Date:</strong> Friday, June 6, 2025 <br />
        <strong>Last Updated:</strong> Friday, June 6, 2025 <br />
      </motion.p>

      <motion.p
        className="mb-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        This Privacy Policy outlines how <b>Infonet Grafix Global</b> also
        referred to by its nickname <em>Infonet Grafix & Codes</em> hereinafter
        referred to as <b>"the company", “we,” “us,” or “our”</b> collects,
        uses, stores, and protects personal data in accordance with the{" "}
        <b>Nigeria Data Protection Act 2023 (NDPA)</b> and applicable
        international standards such as the{" "}
        <b>General Data Protection Regulation (GDPR)</b>.
      </motion.p>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            {section.content}
          </motion.div>
        ))}
      </div>
      {/* </motion.section> */}
    </>
  );
}

// constants for privacy policy sections
// const privacy_sections = [
//   {
//     title: "1. Who We Are",
//     content: (
//       <div>
//         <p>
//           <b>Infonet Grafix</b> is a creative design agency based in Kaduna,
//           Nigeria, specializing in graphics and packaging design for clients
//           locally and internationally.
//         </p>

//         <p className="mt-2">
//           <strong>Contact Details:</strong> <br />
//           No 25, Liberty Street, Karatudu, Kaduna <br />
//           <p className="flex items-center gap-2">
//             <MdOutlineMarkEmailUnread />{" "}
//             <Link
//               to="mailto:infonetgrafix.webdev@gmail.com"
//               className="text-blue-500 hover:underline underline-offset-2"
//             >
//               infonetgrafix.webdev@gmail.com
//             </Link>
//           </p>
//           <p className="flex items-center gap-2">
//             <MdAddIcCall /> <MdWhatsapp />{" "}
//             <Link
//               to="tel:+2348148224299"
//               className="text-blue-500 hover:underline underline-offset-2"
//             >
//               +2348148224299
//             </Link>
//           </p>
//         </p>
//         <p className="flex items-center gap-2">
//           <span className="">Follow us:</span>
//           <Link
//             to="/twitter"
//             className="hover:underline hover:font-semibold underline-offset-2"
//           >
//             <FaTwitter size={20} className="hover:text-blue-700" />
//           </Link>
//           <Link
//             to="/facebook"
//             className="hover:underline hover:font-semibold underline-offset-2"
//           >
//             <FaFacebook size={20} className="hover:text-blue-700" />
//           </Link>
//           <Link
//             to="/linkedin"
//             className="hover:underline hover:font-semibold underline-offset-2"
//           >
//             <FaLinkedin size={20} className="hover:text-blue-700" />
//           </Link>
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "2. Personal Data We Collect",
//     content: (
//       <>
//         <h2>
//           We collect personal data that you voluntarily provide to us,
//           including:
//         </h2>
//         <ul className="list-disc pl-6 space-y-1">
//           <li className="list-disc">
//             Identity Information: Name, company name, job title
//           </li>
//           <li className="list-disc">
//             Contact Information: Email, phone number, address
//           </li>
//           <li className="list-disc">
//             Project Data: Creative input, brand assets, and briefs
//           </li>
//           <li className="list-disc">
//             Transactional Data: Billing and payment info
//           </li>
//           <li className="list-disc">
//             Website & Technical Data: IP address, browser type, cookies
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "3. Legal Basis for Processing",
//     content: (
//       <>
//         <p>
//           We process your personal data under the Nigeria Data Protection Act
//           (NDPA) 2023 based on:
//         </p>
//         <ul className="list-disc pl-6 mt-1 space-y-1">
//           <li className="list-disc">Your consent</li>
//           <li className="list-disc">The performance of a contract</li>
//           <li className="list-disc">Our legal obligations</li>
//           <li className="list-disc">
//             Our legitimate interests, including marketing and service
//             improvement
//           </li>
//         </ul>
//         <p>
//           For clients in the EU/EEA, processing also aligns with Article 6 of
//           the GDPR.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "4. How We Use Your Data",
//     content: (
//       <>
//         <p>We use your data to:</p>
//         <ul className="list-disc pl-6 space-y-1">
//           <li className="list-disc">
//             Provide and manage graphic and packaging design services
//           </li>
//           <li className="list-disc">
//             To communicate with you about ongoing or new projects
//           </li>
//           <li className="list-disc">To process payments and manage invoices</li>
//           <li className="list-disc">
//             To Improve user experience on our website
//           </li>
//           <li className="list-disc">
//             To meet regulatory and legal obligations
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "5. Sharing and Disclosure",
//     content: (
//       <>
//         <p>We do not sell or rent your personal data. We may share it with:</p>
//         <ul className="pl-6 space-y-1">
//           <li className="list-disc">
//             Trusted third-party service providers (e.g., hosting, cloud storage,
//             payment processors)
//           </li>
//           <li className="list-disc">
//             Regulatory bodies or law enforcement when legally required
//           </li>
//           <li className="list-disc">
//             Business partners involved in project collaboration (with your
//             consent)
//           </li>
//         </ul>

//         <p>
//           All third parties are bound by data protection obligations under the
//           NDPA and, where applicable, GDPR.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "6. Data Transfers Outside Nigeria",
//     content: (
//       <>
//         <p>
//           If we transfer your data outside Nigeria (e.g., using cloud-based
//           services), we ensure that:
//         </p>
//         <ul className="pl-6 space-y-1">
//           <li className="list-disc">
//             The receiving country provides an adequate level of data protection;
//           </li>
//           <li className="list-disc">
//             Standard contractual clauses or other safeguards are in place.
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "7. Data Security",
//     content: (
//       <>
//         <p>We implement industry-standard security measures, including:</p>
//         <ul className="pl-6 space-y-1">
//           <li className="list-disc">Encrypted storage and secure servers</li>
//           <li className="list-disc">
//             Access control and authentication protocols
//           </li>
//           <li className="list-disc">Regular security audits</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "8. Data Retention",
//     content: (
//       <>
//         <p>
//           We retain personal data for as long as necessary to fulfill the
//           purposes for which it was collected, including legal, tax, or
//           accounting requirements.
//         </p>
//         <p>Retention periods:</p>
//         <ul className="pl-6 space-y-1">
//           <li className="list-disc">Design projects: 3–5 years</li>
//           <li className="list-disc">Billing and contracts: 5–7 years</li>
//           <li className="list-disc">
//             Marketing data: Until you unsubscribe or request deletion
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "9. Your Rights",
//     content: (
//       <>
//         <p>Under the Nigeria Data Protection Act, you have the right to:</p>
//         <ul className="list-disc pl-6 mt-1 space-y-1">
//           <li className="list-disc">Access your personal data</li>
//           <li className="list-disc">Correct inaccurate or incomplete data</li>
//           <li className="list-disc">Withdraw consent at any time</li>
//           <li className="list-disc">
//             Request deletion of your data ("right to be forgotten")
//           </li>
//           <li className="list-disc">
//             Object to processing or request restriction
//           </li>
//           <li className="list-disc">
//             Lodge a complaint with the Nigeria Data Protection Commission (NDPC)
//           </li>
//         </ul>
//         <p className="mt-2">
//           To exercise your rights, please contact us by mail at{" "}
//           <a
//             href="infonetgrafix.webdev@gmail.com"
//             className="text-blue-500 hover:underline underline-offset-2"
//           >
//             infonetgrafix.webdev@gmail.com
//           </a>
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "10. Cookies and Website Tracking",
//     content: (
//       <>
//         <p>Our website uses cookies to:</p>
//         <ul className="list-disc pl-6 mt-1 space-y-1">
//           <li className="list-disc">
//             Analyze traffic via tools like Google Analytics
//           </li>
//           <li className="list-disc">Improve user experience</li>
//         </ul>
//         <p>
//           You can manage cookies through your browser settings. By continuing to
//           use our website, you consent to our use of cookies.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "11. Children’s Privacy",
//     content: (
//       <p>
//         We do not knowingly collect personal data from individuals under the age
//         of 16. If we become aware that we have inadvertently received such data,
//         we will delete it promptly.
//       </p>
//     ),
//   },
//   {
//     title: "12. Changes to This Policy",
//     content: (
//       <p>
//         We may update this policy occasionally. Changes will be posted on this
//         page with a new “Last Updated” date. We recommend checking this page
//         periodically. By continuing to use our website, you agree with the
//         updated Privacy Policy.
//       </p>
//     ),
//   },
//   {
//     title: "13. Contact Us",
//     content: (
//       <p>
//         If you have any questions about this Privacy Policy or our data
//         practices, please contact us:
//         <br />
//         <p className="mt-2">
//           <strong>Infonet Grafix Global</strong>
//           <p className="flex items-center gap-2">
//             <MdOutlineMarkEmailUnread />{" "}
//             <Link
//               to="mailto:infonetgrafix.webdev@gmail.com"
//               className="text-blue-500 hover:underline underline-offset-2"
//             >
//               infonetgrafix.webdev@gmail.com
//             </Link>
//           </p>
//           <p className="flex items-center gap-2">
//             <MdAddIcCall /> <MdWhatsapp />{" "}
//             <Link
//               to="tel:+2348148224299"
//               className="text-blue-500 hover:underline underline-offset-2"
//             >
//               +2348148224299
//             </Link>
//           </p>
//         </p>
//       </p>
//     ),
//   },
// ];
