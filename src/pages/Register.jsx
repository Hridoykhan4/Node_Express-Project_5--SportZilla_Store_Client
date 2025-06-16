import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuthValue from "../hooks/useAuthValue";

const Register = () => {
    const nav = useNavigate()
  const { createNewUser, updateUserProfile } = useAuthValue();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createNewUser(data?.email, data.password)
      .then(() => {
        updateUserProfile({
          displayName: data.name,
        }).then(() => {
          toast.success("Account created successfully!", {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#f0f9ff",
              color: "#0f172a",
            },
            iconTheme: {
              primary: "#4f46e5",
              secondary: "#ffffff",
            },
          });
          nav('/')
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Registration failed! Please try again.", {
          position: "top-right",
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

    reset();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(https://i.ibb.co/jZVtmmJh/pair-gloves-boxing-sport-min.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white/40 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-xl shadow-lg p-8 backdrop-blur">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white tracking-wide">
          SportZilla Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
