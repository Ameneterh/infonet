import { motion } from "framer-motion";

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

export default function TermsAndConditionsComponent() {
  return (
    <>
      <motion.p
        className="mb-6 md:mt-5"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <strong className="text-xl md:text-2xl mb-4">
          Infonet Grafix Global{" "}
          <span className="hidden md:inline">
            – Graphics & Packaging Design Services
          </span>
        </strong>
        <br />
        <br />
        <strong>Effective Date:</strong> Friday, June 6, 2025 <br />
        <strong>Registered in Nigeria (RC: 8155733)</strong>
      </motion.p>

      <motion.p
        className="mb-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        These Terms and Conditions (“Agreement”) govern all services provided by{" "}
        <strong>Infonet Grafix Global</strong>, herein referred to as “the
        Company”, to the Client. By engaging the Company’s services, the Client
        agrees to be legally bound by the terms and conditions outlined herein
        and under the laws of the <strong>Federal Republic of Nigeria</strong>.
      </motion.p>

      <div className="space-y-8">
        {terms_sections.map((section, index) => (
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
      <p className="text-sm md:text-lg text-center font-bold mt-4 md:mt-10">
        By engaging the services of Infonet Grafix Global, the Client
        acknowledges and agrees to these Terms and Conditions.
      </p>
    </>
  );
}

// constants for privacy policy sections
const terms_sections = [
  {
    title: "1. Scope of Services",
    content: (
      <div>
        <p>
          The Company offers graphic design, packaging design, visual branding,
          print design, digital design, and consulting services as outlined in
          the agreed proposal or service contract.
        </p>
      </div>
    ),
  },
  {
    title: "2. Quotations and Acceptance",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li className="list-disc">
            Quotations are valid for{" "}
            <strong>14 days (weekends/public holidays inclusive)</strong> from
            the date of issue.
          </li>
          <li className="list-disc">
            Work will commence only after written acceptance (via email or
            signed agreement) and/or{" "}
            <strong>receipt of the agreed initial payment</strong>.
          </li>
          <li className="list-disc">
            In the absence of a written acceptance as stated above, receipt of
            payment from the Client will be interpreted by the Company as
            acceptance and agreement to proceed with the contract
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Payment Terms",
    content: (
      <>
        <ul className="pl-6 mt-1 space-y-1">
          <li className="list-disc">
            For projects less than N500,000.00, <strong>100%</strong> upfront
            payment is required before commencement of work
          </li>
          <li className="list-disc">
            For projects more than N500,000.00, but less than N2,000,000.00:
            <ul className="pl-6 mt-1 space-y-1">
              <li className="list-disc">
                <strong>70% upfront payment</strong> is required before
                commencement of work.
              </li>
              <li className="list-disc">
                <strong>The remaining 30%</strong> is payable upon final
                delivery of completed design files or pre-print submission.
              </li>
            </ul>
          </li>
          <li className="list-disc">
            For ongoing or large projects (₦2,000,000 and above), payment may be
            structured in milestones, subject to mutual agreement.
          </li>
          <li className="list-disc">
            All payments must be made within 5 working days of invoice issuance
            unless otherwise agreed.
          </li>
          <li className="list-disc">
            Late payments may incur a ₦5,000 penalty per week or 5% of the
            outstanding amount monthly, whichever is higher.
          </li>
        </ul>
        <p>
          <strong>Bank transfers</strong> are the preferred method of payment.
          All bank charges (local or international) are the responsibility of
          the Client.
        </p>
      </>
    ),
  },
  {
    title: "4. Refund and Cancellation Policy",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li className="list-disc">
            The initial payment is non-refundable once work has commenced.
          </li>
          <li className="list-disc">
            If the Client cancels the project after commencement, they are
            liable for payment covering all work done up to the date of
            cancellation.
          </li>
          <li className="list-disc">
            Completed projects or partially completed files delivered to the
            Client are <strong>non-returnable</strong> and{" "}
            <strong>non-refundable</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Revisions and Design Rejection",
    content: (
      <>
        <ul className="pl-6 space-y-1">
          <li className="list-disc">
            Each design phase includes up to{" "}
            <strong>two (2) rounds of revisions</strong>. Subsequent revisions
            will attract additional fees.
          </li>
          <li className="list-disc">
            If, after two rounds of revisions, the Client is still dissatisfied,
            they may:
            <ul className="pl-6 space-y-1">
              <li className="list-disc">
                Request a redesign at additional cost, or
              </li>
              <li className="list-disc">
                Cancel the project (with no refund of previous payments).
              </li>
            </ul>
          </li>
          <li className="list-disc">
            Failure to provide feedback within 7 working days of receiving a
            design draft may result in project suspension.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Post-Approval Redesign",
    content: (
      <>
        <ul className="pl-6 space-y-1">
          <li className="list-disc">
            Once the Client <strong>approves</strong> a design (via email,
            WhatsApp, or signed document), any future modifications will be
            treated as a <strong>new design task</strong> and billed
            accordingly.
          </li>
          <li className="list-disc">
            Approved designs sent to production or delivered as final files are
            deemed <strong>final and accepted</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Ownership and Intellectual Property",
    content: (
      <>
        <ul className="pl-6 space-y-1">
          <li className="list-disc">
            Upon full payment, the Client receives ownership of the{" "}
            <strong>final, approved</strong> designs.
          </li>
          <li className="list-disc">
            Infonet Grafix Global retains ownership of:
            <ul className="pl-6 space-y-1">
              <li className="list-disc">Unused drafts and concepts</li>
              <li className="list-disc">
                Any design elements created but not used in the final product
              </li>
            </ul>
          </li>
          <li className="list-disc">
            The Company reserves the right to showcase completed work in its
            <strong>portfolio, website</strong>, or{" "}
            <strong>marketing materials</strong>, unless otherwise agreed in
            writing (e.g., through a Non-Disclosure Agreement).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Client Obligations",
    content: (
      <>
        <ul className="pl-6 space-y-1">
          <li className="list-disc">
            The Client must provide all necessary content, information, and
            feedback in a timely manner.
          </li>
          <li className="list-disc">
            Delays in providing these may extend delivery timelines and may
            incur additional costs.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <>
        <p>Infonet Grafix Global is not liable for:</p>
        <ul className="pl-6 mt-1 space-y-1">
          <li className="list-disc">
            Errors in printed or published material after approval by the Client
          </li>
          <li className="list-disc">
            Delays caused by third-party vendors (e.g., printers, shipping
            agents)
          </li>
          <li className="list-disc">
            Any consequential or indirect losses incurred from the use of the
            design work
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Termination Clause",
    content: (
      <>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li className="list-disc">
            Either party may terminate the agreement with{" "}
            <strong>5 working days’ written notice</strong>.
          </li>
          <li className="list-disc">
            All work completed up to the point of termination must be paid for
            in full.
          </li>
        </ul>
        <p>
          Any deposits paid are <strong>non-refundable</strong>.
        </p>
      </>
    ),
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: (
      <ul className="list-disc pl-6 mt-1 space-y-1">
        <li className="list-disc">
          These Terms are governed by the laws of the{" "}
          <strong>Federal Republic of Nigeria</strong>.
        </li>
        <li className="list-disc">
          Any dispute arising from this Agreement shall first be resolved
          amicably.
        </li>
        <li className="list-disc">
          If resolution fails, disputes shall be submitted to{" "}
          <strong>arbitration</strong> in accordance with the{" "}
          <strong>
            Arbitration and Conciliation Act, Cap A18, Laws of the Federation of
            Nigeria 2004
          </strong>
          .
        </li>
      </ul>
    ),
  },
  {
    title: "12. Amendments",
    content: (
      <ul className="list-disc pl-6 mt-1 space-y-1">
        <li className="list-disc">
          Infonet Grafix Global reserves the right to amend these Terms and
          Conditions from time to time as may be deemed necessary.
        </li>
        <li className="list-disc">
          Updated terms will be communicated to Clients and/or posted on the
          Company’s official communication channels.
        </li>
      </ul>
    ),
  },
];
