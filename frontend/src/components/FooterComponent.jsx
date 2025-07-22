import { Link } from "react-router-dom";
import logoImage from "../assets/header_img.png";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdAddCall, MdAlternateEmail, MdLocationOn } from "react-icons/md";

export default function FooterComponent() {
  return (
    <footer className="py-10 px-4 bg-black flex flex-col items-center font-extralight">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
        <div className="w-full flex flex-col justify-between text-sm font-extralight gap-5">
          <div>
            <img src={logoImage} className="w-28 md:w-40" />
            <p className="text-xs mt-2">
              We specialize in creative, functional, and sustainable packaging
              design that captures attention and builds brand identity.
            </p>
          </div>
          <div>
            <Link
              to="/privacy-terms"
              className="hover:text-blue-600 hover:underline underline-offset-2"
            >
              Privacy Policy | Terms of Use
            </Link>
          </div>
        </div>

        {/* mid section */}
        <div className="w-full flex flex-col my-5 md:my-0">
          <h3 className="text-orange-700 font-bold">Useful Links</h3>
          <ul className="text-sm list-none -ml-5">
            <li className="">
              <Link
                to="/faqs"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                FAQs
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/register"
                className="hover:underline hover:font-semibold underline-offset-2"
              >
                Register
              </Link>
            </li>
            <li className="mt-2">
              <p className="flex items-center gap-2">
                <span className="text-orange-600">Follow us:</span>
                <Link
                  to="/twitter"
                  className="hover:underline hover:font-semibold underline-offset-2"
                >
                  <FaTwitter size={20} className="hover:text-blue-700" />
                </Link>
                <Link
                  to="/facebook"
                  className="hover:underline hover:font-semibold underline-offset-2"
                >
                  <FaFacebook size={20} className="hover:text-blue-700" />
                </Link>
                <Link
                  to="/linkedin"
                  className="hover:underline hover:font-semibold underline-offset-2"
                >
                  <FaLinkedin size={20} className="hover:text-blue-700" />
                </Link>
              </p>
            </li>
          </ul>
        </div>

        {/* right side */}
        <div className="w-full flex flex-col">
          <h3 className="text-orange-700 font-bold">Contact Us:</h3>
          <ul className="text-sm list-none -ml-5">
            <li className="flex gap-2 items-center">
              <MdAddCall size={16} />
              +2348148224299
            </li>
            <li className="mt-2 flex gap-2 items-center">
              <MdAlternateEmail size={16} />
              infonetgrafix.webdev@gmail.com
            </li>
            <li className="mt-2 flex gap-2 items-start">
              <MdLocationOn size={16} />
              No 25, Liberty Street, Gonin-Gora, <br />
              Karatudu, Kaduna, Kaduna State
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm border-t border-t-slate-800 w-full pt-5">
        All Rights Reserved{" "}
        <span className="block md:inline">
          &copy; {new Date().getFullYear()} Infonet Grafix Global
        </span>
      </div>
    </footer>
  );
}
