import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuthValue from "../hooks/useAuthValue";
import { toast } from "react-hot-toast";

const Login = () => {
  const { logInGoogle } = useAuthValue();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Handle login logic here
  };

  const handleGoogleSignIn = () => {
    logInGoogle()
      .then((res) => {
        if (res.user) {
          toast.success(`Welcome ${res.user.displayName || "back"}!`, {
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "white",
              color: "black",
            },
            iconTheme: {
              primary: "#4f46e5",
              secondary: "#ffffff",
            },
          });

          nav("/");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google Sign-In failed. Please try again.", {
          style: {
            borderRadius: "10px",
            background: "#1f2937",
            color: "#fff",
          },
          iconTheme: {
            primary: "#dc2626",
            secondary: "#ffffff",
          },
        });
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${`https://i.ibb.co/Csn8ghfm/top-view-composition-with-neatly-arranged-organized-sport-items-min.jpg`})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white/40 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-xl shadow-lg p-8 backdrop-blur">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white tracking-wide">
          SportZilla Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 text-center text-gray-600 dark:text-gray-400">
          OR
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 rounded-md font-medium transition duration-300 text-gray-800 dark:text-white"
        >
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>

        {/* Already have an account */}
        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:underline font-medium"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
