import { motion } from "framer-motion";
import { Input, PasswordInput } from "../components/Input";
import {
  Headset,
  MapPinHouse,
  FilePenLine,
  PhoneCall,
  CircleUserRound,
  Mail,
  KeySquare,
  Building2,
  Loader,
  Eye,
  EyeOff,
} from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBusinessStore } from "../store/businessStore";
import MainLayout from "../layout/MainLayout";
import { images } from "../assets/images";
import { Button, Form, message } from "antd";
import Divider from "../components/Divider";
import { RegisterUser } from "../apiCalls/user.controllers.js";
import { useAuthStore } from "../store/authStore.js";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import NormalButtons from "../components/buttons/NormalButtons.jsx";

export default function UserRegistration() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [avatar, setAvatar] = useState("");
  const [name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [affiliation, setAffiliation] = useState("");

  // const [businesses, setBusinesses] = useState([]);

  const handleUploadImage = async () => {
    try {
      // if (!file) {
      //   setImageUploadError("Please, select an image");
      //   return;
      // }
      // setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = name + "-" + new Date().getTime();
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed!");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed!!");
      setImageUploadProgress(null);
    }
  };

  const { addUser, error, isLoading } = useAuthStore();

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      await addUser(name, email, phoneNumber, password, affiliation);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div
        className={`min-h-screen flex items-center justify-center w-full md:mt-10 bg-[image:var(--bg-image)] bg-cover bg-fixed`}
        style={{ "--bg-image": `url('${images.bg_image}')` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto w-full bg-white/25 border-t border-t-white/35 border-l border-l-white/35 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden my-20"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-800 uppercase">
              Create <span className="text-gray-500">Account</span>
            </h2>

            <Divider />

            <form
              onSubmit={handleRegisterUser}
              className="flex flex-col gap-4 mt-6"
            >
              <Input
                icon={CircleUserRound}
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setFullname(e.target.value)}
              />
              <Input
                icon={Mail}
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                icon={PhoneCall}
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                icon={Building2}
                type="text"
                placeholder="Business Affiliation"
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
              />

              <div className="relative flex items-center w-full">
                <PasswordInput
                  icon={KeySquare}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Strong Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute right-2 inset-y-0 cursor-pointer flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-green-500" />
                  ) : (
                    <Eye className="size-5 text-green-500" />
                  )}
                </div>
              </div>

              {error && (
                <p className="text-red-800 font-semibold mt-2 p-2 text-center bg-red-100 rounded">
                  {error}
                </p>
              )}

              {/* password strength meter */}
              <PasswordStrengthMeter password={password} />

              <motion.button
                className="normal_button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-6 h-6 animate-spin mx-auto text-white font-bold" />
                ) : (
                  "Register Account"
                )}
              </motion.button>
            </form>
          </div>

          <div className="px-8 py-4 bg-black/80 flex justify-center">
            <p className="text-sm text-gray-400">
              Already registered?{" "}
              <Link to="/user-login" className="text-green-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
