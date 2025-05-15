import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaGithub, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import ResponsiveMenu from "./RespansiveMenu";

function Navbar() {
  // وضعیت مربوط به حالت تاریک یا روشن
  const [darkMode, setDarkMode] = useState(false);
  // وضعیت باز یا بسته بودن منوی همبرگری
  const [menuOpen, setMenuOpen] = useState(false);

  // تابع برای تغییر حالت تم
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // تابع برای باز و بسته کردن منوی همبرگری
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* نوار اصلی بالای صفحه */}
      <nav className="text-white  dark:bg-gray-600 cursor-pointer px-6 py-3 flex items-center justify-between flex-wrap">
        {/* لوگو و آیکن‌های سمت چپ */}
        <div className="flex items-center gap-4">
          {/* دکمه منوی همبرگری - فقط در موبایل و تبلت نمایش داده میشه */}
          <div className="lg:hidden text-2xl" onClick={toggleMenu}>
            <FaBars />
          </div>

          {/* لوگو فروشگاه */}
          <NavLink to="/">
            <h1 className="text-xl font-bold text-black">
              <FaShop className="text-3xl text-white  transition-all ease-in-out" />
            </h1>
          </NavLink>

          {/* دکمه تغییر حالت تاریک / روشن */}
          <button onClick={toggleTheme} className="text-2xl">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* باکس سرچ فقط در دسکتاپ (lg و بالاتر) نمایش داده میشه */}
        <div className="relative w-[300px] hidden lg:block">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] pl-10 pr-3 rounded bg-white text-black placeholder-black focus:outline-none"
          />
        </div>

        {/* منو اصلی فقط در دسکتاپ (lg و بالاتر) نمایش داده میشه */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-white underline-offset-4"
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
                  ? "underline decoration-white underline-offset-4"
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
                  ? "underline decoration-white underline-offset-4"
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
                  ? "underline decoration-white underline-offset-4"
                  : "text-white"
              }
            >
              BLOG
            </NavLink>
          </li>
        </ul>

        {/* آیکن‌های سمت راست (همیشه نمایش داده میشن) */}
        <div className="flex items-center gap-6 text-xl">
          {/* آیکن سبد خرید */}
          <div className="relative">
            <NavLink to="/cart">
              <CgShoppingBag className="text-2xl " />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                3
              </span>
            </NavLink>
          </div>

          {/* آیکن گیت‌هاب */}
          <FaGithub className="text-2xl" />

          {/* آیکن پروفایل با منوی کشویی */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="text-2xl">
                <BsPerson />
              </div>
            </div>
            {/* منوی کشویی پروفایل */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 px-6 py-2 shadow"
            >
              {/* <li>
                <a className="justify-between text-xl">
                  Profile <span className="badge">New</span>
                </a>
              </li> */}
              <li>
                <NavLink to="/login" className="text-xl">
                  Login
                </NavLink>
              </li>
              <li>
                <a className="text-xl">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* منوی همبرگر (اسلایدی) - مخصوص موبایل و تبلت */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* نوار بالا داخل منو */}
        <div className="flex justify-between items-center p-4 border-b border-white">
          <h2 className="text-white text-lg font-bold">Menu</h2>
          <FaTimes
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* فیلد سرچ مخصوص موبایل و تبلت */}
        <div className="relative w-full px-4 mt-4 lg:hidden">
          <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] pl-10 pr-3 rounded bg-white text-black placeholder-black focus:outline-none"
          />
        </div>

        {/* لیست لینک‌های ناوبری */}
        <ResponsiveMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </>
  );
}

export default Navbar;
