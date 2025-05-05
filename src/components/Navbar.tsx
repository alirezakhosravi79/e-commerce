// Hooks
import { useState } from "react";
import { NavLink } from "react-router-dom";

// ----  import icons from react-icons   -----
import { FiMoon, FiSun } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaGithub, FaSearch } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

function Navbar() {
  // state برای حالت تاریک/روشن
  const [darkMode, setDarkMode] = useState(false);

  // toggle بین حالت روشن و تاریک
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="text-white bg-blue-600 cursor-pointer px-6 py-2 flex items-center justify-between">
      {/* لوگو و دکمه حالت تاریک/روشن */}
      <div className="flex gap-4 items-center">
        <h1 className="text-xl font-bold text-black">
          <GiClothes className="text-4xl text-white" />
        </h1>

        <button onClick={toggleTheme} className="text-2xl">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* باکس سرچ */}
      <div className="relative w-[300px]">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[40px] pl-10 pr-3 rounded bg-white text-black placeholder-black focus:outline-none"
        />
      </div>

      {/* مسیرهای منو */}
      <ul className="hidden md:flex gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-black underline-offset-4"
                : "text-white"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-black underline-offset-4"
                : "text-white"
            }
          >
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-black underline-offset-4"
                : "text-white"
            }
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-black underline-offset-4"
                : "text-white"
            }
          >
            BLOG
          </NavLink>
        </li>
      </ul>

      {/* آیکن‌ها و پروفایل */}
      <div className="flex items-center gap-6 text-xl relative">
        <CgShoppingBag />
        <FaGithub />

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="text-2xl ">
              <BsPerson />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 
            w-52 px-6 py-2 shadow "
          >
            <li>
              <a className="justify-between text-xl">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a className="text-xl">Settings</a>
            </li>
            <li>
              <a className="text-xl">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
