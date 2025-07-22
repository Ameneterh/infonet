import { motion } from "framer-motion";
import { Collapse } from "antd";
import { TiPin } from "react-icons/ti";
import { MdLoop } from "react-icons/md";

import { images } from "../../assets/images";
import { Link } from "react-router-dom";

export default function FrequentlyAskedQuestions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full bg-black bg-opacity-35 py-10 px-4"
    >
      <div className="max-w-6xl mx-auto my-5 flex flex-col">
        <h1 className="text-2xl md:text-4xl w-full text-center mb-5 md:mb-14">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
          <Collapse accordion items={items} className="flex-1" />
          <img src={images.freq_qsts} alt="" width={500} />
        </div>
      </div>
    </motion.div>
  );
}

// items
const items = [
  {
    id: 1,
    label: "How do you price your work?",
    children: (
      <div className="flex flex-col gap-3">
        <p>
          We charge based on the scope and complexity of the project. For
          graphics and packaging design, we usually offer fixed pricing per
          project or per item, depending on the deliverables. Printing costs are
          calculated based on quantity, material, and finishing options.
        </p>
        <p>
          For web development, we typically provide a custom quote after
          discussing the features, functionality, and timeline. Basic websites
          have different pricing tiers compared to more complex platforms.
        </p>
        <p>
          In data analysis, pricing depends on the type of data work (whether
          it’s one-time analysis, dashboard development, or ongoing reporting)
          and we can charge per project or on a monthly retainer.
        </p>
        <p>
          Overall, we aim to provide transparent and competitive pricing. Once
          we understand your specific needs, we’ll prepare a detailed quote that
          aligns with your budget and goals.
        </p>
        <p>
          We understand that every client’s needs and budget are different, so
          we’re flexible and always open to structuring our charges in a way
          that’s fair and sustainable—especially for startups and SMEs here in
          Nigeria.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    label: "How does the design process work?",
    children: (
      <div className="flex flex-col gap-3">
        <p>
          At <strong>Infonet Grafix Global</strong>, our process is designed to
          ensure clarity, quality, and creative impact across all our services;
          from graphics and packaging design, to web development, and data
          analysis.
        </p>
        <p>
          <span className="block font-bold">1. Discovery</span> We start with a
          conversation. Whether you’re launching a new brand, redesigning
          packaging, building a website, or making sense of your data, we listen
          to understand your goals.
        </p>
        <p>
          <span className="block font-bold">2. Research & Strategy</span>
          We analyze market trends, user behavior, and data opportunities. For
          Nigerian businesses, we also consider local context, consumer
          behavior, and regional platforms.
        </p>
        <p>
          <span className="block font-bold">3. Concept Development</span>
          We bring your vision to life through initial sketches, layout designs,
          or data modeling. You’ll see early versions of packaging, site
          wireframes, or dashboard structures.
        </p>
        <p>
          <span className="block font-bold">4. Design & Prototyping</span>
          This is where the magic happens. We create detailed visual assets,
          functional web prototypes, and smart data visualizations for review.
        </p>
        <p>
          <span className="block font-bold">5. Feedback & Revisions</span>
          Your feedback is part of the process. We refine everything (graphics,
          UI, or reports) until they’re just right.
        </p>
        <p>
          <span className="block font-bold">6. Launch & Production</span>
          We move your product to print, publish your site, or deploy your data
          solution—smoothly and professionally.
        </p>
        <p>
          <span className="block font-bold">7. Ongoing Support</span>
          Post-launch, we offer maintenance, updates, and strategic guidance to
          help you grow.
        </p>
        <p>
          <span className="block font-bold">
            Built for Nigeria. Designed for the world.
          </span>
          Let’s build something remarkable, <strong>together</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    label: "What graphic design services do you offer?",
    children: (
      <div className="flex flex-col gap-3">
        <p>
          At <strong>Infonet Grafix Global</strong>, we specialize in product
          packaging design that not only captures attention but also
          communicates your brand’s story effectively. Whether you're launching
          a new product or refreshing your current look, we craft packaging that
          stands out on the shelf and connects with your target market.
        </p>
        <p>
          Beyond packaging, we’re a full-service graphic design studio. Our
          services include:
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              <strong>Brand Identity Design </strong>(logos, brand guidelines,
              stationery)
            </li>
            <li className="list-disc">
              <strong>Marketing Materials </strong>(brochures, flyers, posters)
            </li>
            <li className="list-disc">
              <strong>Labels & Stickers</strong>
            </li>
            <li className="list-disc">
              <strong>Point-of-Sale Displays</strong>
            </li>
            <li className="list-disc">
              <strong>Social Media Graphics</strong>
            </li>
            <li className="list-disc">
              <strong>Event & Trade Show Graphics</strong>
            </li>
            <li className="list-disc">
              <strong>Book Cover Designs & Book Laying</strong>
            </li>
            <li className="list-disc">
              <strong>Custom Printing Solutions</strong>
            </li>
          </ul>
        </p>
        <p>
          From concept to final print, we bring your ideas to life with
          creativity, strategy, and quality craftsmanship.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    label: "What kind of files will I receive?",
    children: (
      <div className="flex flex-col gap-3">
        <p>
          You will receive a variety of file formats to suit your needs,
          including:
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              <strong>JPG </strong> – High-quality image suitable for web and
              print use.
            </li>
            <li className="list-disc">
              <strong>PNG </strong>– Transparent background image, ideal for
              digital use.
            </li>
            <li className="list-disc">
              <strong>PDF</strong>– Print-ready format, great for sharing and
              professional printing.
            </li>
            <li className="list-disc">
              <strong>CDR (CorelDRAW)</strong> – Editable vector file, provided
              in CorelDRAW version 13 and upwards for maximum compatibility.
            </li>
          </ul>
        </p>
        <p>
          Other file formats may be accommodated depending on your specific
          requirement and need.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    label: "How long does a project typically take?",
    children: (
      <div className="flex flex-col gap-3">
        <p>
          We understand the importance of timely delivery and strive to provide
          clear expectations. Below is a general guide for estimated turnaround
          times based on project type, along with key factors that may affect
          the timeline:
        </p>
        <p>
          <span className="text-md font-bold flex items-center gap-1">
            <TiPin size={25} /> Estimated Timeframes by Project Type
          </span>
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              <strong>Branding & Logo Design:</strong> <br />
              <p>
                <em>Timeline: </em>
                1–2 weeks
              </p>
              <p>
                <em>Notes: </em>
                Depends on the number of concepts and revisions requested.
              </p>
            </li>
            <li className="list-disc">
              <strong>Branding & Logo Design:</strong> <br />
              <p>
                <em>Timeline: </em>
                1–2 weeks
              </p>
              <p>
                <em>Notes: </em>
                Depends on the number of concepts and revisions requested.
              </p>
            </li>
            <li className="list-disc">
              <strong>Website Design & Development:</strong> <br />
              <p>
                <em>Timeline: </em>
                4–12 weeks
              </p>
              <p>
                <em>Notes: </em>
                Complexity (e.g., e-commerce, custom features) and content
                readiness can significantly influence the timeline.
              </p>
            </li>
            <li className="list-disc">
              <strong>Marketing Materials (e.g., brochures, flyers):</strong>{" "}
              <br />
              <p>
                <em>Timeline: </em>
                3–7 business days
              </p>
              <p>
                <em>Notes: </em>
                Dependent on design complexity and the number of pages.
              </p>
            </li>
            <li className="list-disc">
              <strong>Social Media Content Packages:</strong> <br />
              <p>
                <em>Timeline: </em>
                5–10 business days
              </p>
              <p>
                <em>Notes: </em>
                Timelines vary depending on the number of assets and strategy
                involved.
              </p>
            </li>
          </ul>
        </p>
        <p>
          <span className="text-md font-bold flex items-center gap-1">
            <MdLoop size={25} />
            Factors That May Influence Turnaround Time
          </span>
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              <strong>Project Complexity: </strong>
              More intricate designs or features naturally require more time.
            </li>
            <li className="list-disc">
              <strong>Client Feedback & Approvals: </strong>Prompt and clear
              feedback helps us stay on schedule.
            </li>
            <li className="list-disc">
              <strong>Scope Changes: </strong>Adjustments or additions
              mid-project can extend the timeline.
            </li>
            <li className="list-disc">
              <strong>Content Readiness: </strong>Delays in receiving necessary
              assets (e.g., images, text) can impact progress.
            </li>
            <li className="list-disc">
              <strong>Revisions: </strong>Multiple or late-stage revisions may
              add time to the original estimate.
            </li>
          </ul>
        </p>
        <p>
          We always aim to deliver high-quality results on time, and we will
          keep you informed every step of the way. If you have a specific
          deadline in mind, let us know; we will do our best to accommodate it.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    label: "What if I don't like what you come up with?",
    children: (
      <p>
        Please, visit our
        <Link
          to="/privacy-terms"
          className="text-blue-400 hover:underline underline-offset-2"
        >
          Terms and Conditions
        </Link>{" "}
        page to find out how our company handles rejection of output.
      </p>
    ),
  },
  {
    id: 7,
    label: "Do you offer printing services?",
    children: (
      <p>
        While Infonet Grafix Global does not handle printing in-house, we offer
        professional printing services through trusted third-party vendors. We
        manage the entire process, from preparing print-ready files to
        coordinating with the vendor, to ensure high-quality results and a
        seamless experience for you.
      </p>
    ),
  },
  {
    id: 8,
    label: "How do I communicate with you during the project?",
    children: (
      <>
        <p>
          You can communicate with us through several convenient channels
          throughout the project. We’re available via:
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              <strong>Email </strong> for detailed updates, file sharing, and
              formal communication
            </li>
            <li className="list-disc">
              <strong>WhatsApp </strong> for quick messages, updates, and
              sharing visuals
            </li>
            <li className="list-disc">
              <strong>Phone Calls </strong> for direct conversations or urgent
              matters
            </li>
            <li className="list-disc">
              <strong>Zoom Meetings </strong>for in-depth discussions,
              presentations, or screen sharing
            </li>
            <li className="list-disc">
              <strong>SMS </strong> for brief, time-sensitive updates
            </li>
            <li className="list-disc">
              <strong>In-App Messaging</strong> if you’re using a project
              management platform we’re connected on
            </li>
            <li className="list-disc">
              <strong>Website Contact</strong> by using the opportunity of the
              contact form ont he website
            </li>
          </ul>
        </p>
        <p>
          You’re welcome to use whichever method works best for you—we’re
          flexible and committed to staying accessible throughout the entire
          project.
        </p>
      </>
    ),
  },
  {
    id: 9,
    label: "What if I have specific requests or ideas?",
    children: (
      <p>
        We absolutely welcome your specific requests and ideas. Your input is a
        vital part of the design process, and we are committed to making sure
        your preferences are fully incorporated. Collaboration is important to
        us, and we are here to bring your vision to life.
      </p>
    ),
  },
  {
    id: 10,
    label: "Why is graphic design important for my business?",
    children: (
      <>
        <p>
          Graphic design plays a key role in making your brand stand out. It
          builds brand recognition through consistent visuals, improves customer
          experience with clean and engaging layouts, and helps communicate your
          message clearly across all platforms. Great design doesn’t just look
          good—it works hard for your business.
        </p>
        <p>
          Here's why Graphic Design Matters for Your Business
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              <strong>Boost Brand Recognition </strong> <br />
              Consistent, eye-catching design helps your brand stand out and
              stay memorable. From your logo to your color scheme, we create
              visuals that reflect your identity and make a lasting impression
              across all platforms.
            </li>
            <li className="list-disc">
              <strong>Create a Seamless Customer Experience </strong> <br />
              Good design does more than look great—it guides, informs, and
              engages. Whether it is a website, brochure, or app, we craft
              user-friendly visuals that make it easy for your audience to
              connect with your brand.
            </li>
            <li className="list-disc">
              <strong>Communicate with Clarity and Impact </strong> <br />
              Strong design turns complex ideas into clear, compelling visuals.
              From infographics to social media content, we help you communicate
              professionally and effectively, so your message hits home every
              time.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 11,
    label: "How do I get started?",
    children: (
      <>
        <p>A typical request for quotation is as follows:</p>
        <p>
          <p className="mt-2">
            <strong>a. Initial Inquiry</strong>
            <br />
            Customers may request a quote by:
          </p>
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              Filling out the Quote Request Form on our website
            </li>
            <li className="list-disc">
              Emailing us at{" "}
              <Link
                to="mailto:infonetgrafix.webdev@gmail.com"
                className="text-blue-500 hover:underline underline-offset-2"
              >
                infonetgrafix.webdev@gmail.com
              </Link>{" "}
            </li>
            <li className="list-disc">
              Calling our office at{" "}
              <Link
                to="tel:+2348148224299"
                className="text-blue-500 hover:underline underline-offset-2"
              >
                +2348148224299
              </Link>{" "}
              time.
            </li>
          </ul>
        </p>
        <p>
          <p className="mt-2">
            <strong>b. Required Information</strong>
            <br />
            To receive an accurate quote, customers must provide the following:
          </p>
          <ul className="pl-6 space-y-1">
            <li className="list-disc">
              Project description (e.g., logo design, brochure, web graphics)
            </li>
            <li className="list-disc">Number of design assets required</li>
            <li className="list-disc">Preferred design style or inspiration</li>
            <li className="list-disc">
              Final format(s) needed (e.g., JPG, PDF, etc)
            </li>
            <li className="list-disc">
              Intended use (digital, print, commercial, etc.)
            </li>
            <li className="list-disc">Deadline or timeline</li>
            <li className="list-disc">Budget (optional but encouraged)</li>
          </ul>
        </p>

        <p>
          <strong>Turnaround Time </strong> <br />
          Quotes are typically provided within 2–3 business days after receiving
          all required information. Delays may occur if the request lacks
          sufficient detail.
        </p>
      </>
    ),
  },
  {
    id: 12,
    label: "What is your return policy?",
    children: (
      <p>
        We realise unforseen circumstances do arise. For an exhaustive
        discussion of our return policy, please, visit of{" "}
        <Link
          to="/privacy-terms"
          className="text-blue-400 hover:underline underline-offset-2"
        >
          Terms and Conditions
        </Link>{" "}
        page.
      </p>
    ),
  },
];
