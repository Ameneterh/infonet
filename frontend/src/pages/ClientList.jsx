import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { images } from "../assets/images";
import ClientDetails from "../components/ClientDetails";
import { clients } from "../assets/client_list.js";

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

export default function ClientList() {
  return (
    <MainLayout>
      <motion.section
        className="min-h-screen w-full max-w-6xl mx-auto bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl flex flex-col md:mt-20 p-4 text-sm md:text-lg mb-20"
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
              Our Esteemed and
              <br />
              Valued Clients
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* client list */}
              {clients.map((client) => (
                <ClientDetails
                  key={client.id}
                  client_logo={client.logo}
                  client_name={client.name}
                  client_address={client.address}
                />
              ))}
            </div>
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
          </motion.div>
        </motion.section>
      </motion.section>
    </MainLayout>
  );
}
