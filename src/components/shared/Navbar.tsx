
import { FaBars } from "react-icons/fa";
import NavLink from "./NavLink";
import Link from "next/link";

const navItems = [
  { name: "হোম", href: "/" },
  { name: "সেবাসমূহ", href: "/services" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#F2FAFA] via-[#F5EEEE] to-[#F2FAFA] px-4 py-4">
      <div className="navbar max-w-3xl mx-auto rounded-full bg-white/90 backdrop-blur-md border border-white shadow-xl px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <FaBars className="text-lg text-[#26704F]" />
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-white rounded-2xl z-1 mt-3 w-52 p-2 shadow-lg border border-[#E8F5E9]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className="rounded-xl text-[#26704F]">{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-[#26704F] font-extrabold text-xl">
            সব সেবা
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} className="rounded-full px-5 py-2 font-medium text-[#26704F] hover:bg-[#E8F5E9] transition-all duration-300">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink href="/login" className="btn rounded-full  bg-white text-[#26704F] px-6 hover:bg-[#26704F] hover:text-white btn-outline">
            লগইন
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;