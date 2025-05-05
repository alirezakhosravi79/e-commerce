import { BsPerson } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaGithub, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-white mx-6 my-2 flex items-center justify-between">
      <div>
        <h1>AA_SHOP</h1>
      </div>
      <div className="relative w-[300px]">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[40px] pl-10 pr-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
      <ul className="hidden md:flex gap-8">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/store">STORE</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/blog">BLOG</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6 text-xl relative">
        <CgShoppingBag />
        <FaGithub />
        <BsPerson />
      </div>
    </nav>
  );
}

export default Navbar;
