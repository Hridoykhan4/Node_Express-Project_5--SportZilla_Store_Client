import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logoPP.jpg";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import useAuthValue from "../hooks/useAuthValue";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser, setUser } = useAuthValue();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinksStyle = ({ isActive }) =>
    `px-4 py-2 font-semibold transition ${
      isActive
        ? "text-green-400 font-bold border-b-2 border-green-400"
        : "hover:text-green-400"
    }`;

  const links = (
    <>
      <li>
        <NavLink className={navLinksStyle} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinksStyle} to="/allEquipments">
          All Equipments
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinksStyle} to="/addEquipment">
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinksStyle} to="/myEquipments">
          My Equipments
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    setUser(null);
    logOutUser()
      .then(() => {
        toast.success("Successfully logged out!", {
          icon: "👋",
          style: {
            background: "#1e293b",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        toast.error("Logout failed. Try again.", {
          icon: "⚠️",
          style: {
            background: "#b91c1c",
            color: "#fff",
          },
        });
        console.error(err);
      });
  };

  const Avatar = (
    <details className="dropdown dropdown-end">
      <summary className="btn btn-ghost p-0 hover:scale-105 transition-transform duration-200">
        {user && (
          <img
            src={user?.photoURL}
            className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
            alt="user avatar"
          />
        )}
      </summary>

      <ul className="menu dropdown-content dark:text-white z-[1] p-3 mt-3 shadow-lg rounded-xl w-64 bg-base-100 text-sm space-y-2">
        <li className="text-gray-600 dark:text-white font-medium">
          ✉️ Email:
          <span className="text-gray-800  dark:text-white font-semibold break-words">
            {user?.email || "Not provided"}
          </span>
        </li>
        <li className="text-gray-600 dark:text-white font-medium">
          👤 Name:
          <span className="text-gray-800 dark:text-white font-semibold break-words">
            {user?.displayName || "Anonymous"}
          </span>
        </li>
      </ul>
    </details>
  );

  return (
    <div className="w-full shadow-sm py-3 px-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="btn btn-ghost px-2 sm:px-4 gap-2 sm:gap-4 hover:bg-gradient-to-r from-purple-600 to-indigo-600 transition duration-300 rounded-xl"
        >
          <div className="relative">
            <img
              className="sm:w-16 sm:h-16 w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
              src={logoImg}
              alt="SportZilla Logo"
            />
            <span className="absolute -top-1 -right-1 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-wider bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
            SportZilla
          </span>
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-3">
        {/* Theme Toggle */}
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleTheme}
            checked={theme === "dark"}
          />
          {/* Sun & Moon Icons */}
          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </g>
          </svg>
          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </g>
          </svg>
        </label>

        {/* Avatar */}
        {Avatar}

        {/* Login / Logout */}
        {user ? (
          <button
            onClick={() => handleLogOut()}
            className="btn text-white bg-gradient-to-r from-red-900 to-red-600"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn text-white bg-gradient-to-r from-red-900 to-red-600"
          >
            Login
          </Link>
        )}
      </div>

      <label className="toggle lg:hidden text-base-content ms-auto">
        {/* <span className="text-sm font-medium">Dark Mode</span> */}
        <input
          type="checkbox"
          className="theme-controller"
          onChange={handleTheme}
          checked={theme === "dark"}
        />
      </label>
      {/* Drawer Toggle */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="btn btn-ghost lg:hidden"
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <div className="w-72 bg-base-100  shadow-lg p-5 flex flex-col">
            <button
              className="self-end btn btn-sm mb-5"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✕
            </button>
            <ul className="menu space-y-1">{links}</ul>

            {/* Divider */}
            <div className="border-t cursor-pointer mt-4 pt-4 space-y-3">
              {/* Theme Toggle (Mobile) */}

              {/* Avatar */}
              {Avatar}

              {/* Login / Logout */}
              {user ? (
                <button
                  onClick={() => handleLogOut()}
                  className="btn w-full text-white bg-gradient-to-r from-red-900 to-red-600"
                >
                  Log out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn w-full text-white bg-gradient-to-r from-red-900 to-red-600"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
