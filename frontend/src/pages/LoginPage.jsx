import { motion } from "framer-motion";
import { Input, PasswordInput } from "../components/Input";
import { Mail, KeySquare, Loader, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import MainLayout from "../layout/MainLayout";
import { images } from "../assets/images";
import Divider from "../components/Divider";

const rules = [{ required: true, message: "Field Value Required" }];

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, login, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/");
      toast.success("Login successful");
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
          className="max-w-md mx-auto w-full bg-white/25 border-t border-t-white/35 border-l border-l-white/35 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden my-10"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-800 uppercase">
              Welcome <span className="text-gray-500">back!</span>
            </h2>

            <Divider />

            <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">
              <Input
                icon={Mail}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              <div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {error && (
                <p className="text-red-800 font-semibold mt-2 p-2 text-center bg-red-100 rounded">
                  {error}
                </p>
              )}

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
                  "Login"
                )}
              </motion.button>

              {/* <NormalButtons text="Login" /> */}
            </form>
          </div>

          <div className="px-8 py-4 bg-black/80 flex justify-center">
            <p className="text-sm text-gray-400">
              Don't have an account yet?{" "}
              <Link to="/register" className="text-green-400 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
