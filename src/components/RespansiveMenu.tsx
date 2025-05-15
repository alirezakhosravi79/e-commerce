// فایل: components/ResponsiveMenu.tsx
import { FaTimes, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface ResponsiveMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

function ResponsiveMenu({ menuOpen, toggleMenu }: ResponsiveMenuProps) {
  return (
    <>
      {/* منوی کشویی همبرگری فقط در موبایل و تبلت */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-700 z-50 transform transition-transform duration-300 ${
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

        {/* فیلد سرچ برای موبایل */}
        <div className="relative w-full px-4 mt-4 lg:hidden">
          <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] pl-10 pr-3 rounded bg-white text-black placeholder-black focus:outline-none"
          />
        </div>

        {/* لینک‌های ناوبری */}
        <ul className="flex flex-col gap-4 p-6 text-white text-lg">
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" onClick={toggleMenu}>
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={toggleMenu}>
              BLOG
            </NavLink>
          </li>
        </ul>
      </div>

      {/* بک‌دراپ تار در صورت باز بودن منو */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default ResponsiveMenu;
