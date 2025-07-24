import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTAButtons({ image, text, url }) {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate({ url });
  // };

  return (
    <Link
      to={url}
      className="w-full md:w-72 py-2 px-4 bg-gradient-to-r from-green-950 to-green-700 border border-green-700 font-light rounded-lg hover:from-green-800 hover:to-green-600 hover:font-semibold transition duration-200 cursor-pointer flex items-center justify-center"
    >
      {text} {image && <img src={image} className="ml-3 h-5 w-5" />}
    </Link>
  );
}
