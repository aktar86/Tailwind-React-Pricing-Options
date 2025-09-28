import React, { useState } from "react";
import Link from "../NavBar/Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    pathName: "Home",
    pathId: 1,
    pathUrl: "/home",
  },
  {
    pathName: "About",
    pathId: 2,
    pathUrl: "/about",
  },
  {
    pathName: "Services",
    pathId: 3,
    pathUrl: "/services",
  },
  {
    pathName: "Contact",
    pathId: 4,
    pathUrl: "/contact",
  },
  {
    pathName: "Profile",
    pathId: 5,
    pathUrl: "/profile",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <Link key={route.pathId} route={route}></Link>
  ));




  return (
    <nav className="flex justify-between py-10 mx-10">
      <span className="flex items-center">
        <span onClick={() => setOpen(!open)} >
          {open ? (
            <X className="md:hidden cursor-pointer"></X>
          ) : (
            <Menu className="md:hidden cursor-pointer"></Menu>
          )}

          <ul
            className={`md:hidden absolute bg-white text-black  ${
              open ? "top-20" : "-top-50"
            }`}
          >
            {links}
          </ul>
        </span>
        <h3 className="ml-5 text-3xl">My Navbar</h3>
      </span>

      <ul className="lg:flex hidden">{links}</ul>

      {/* <ul className="flex">
            {
                navigationData.map((route) => (
                    <li className="mr-10">
                        <a href={route.pathUrl}>{route.pathName}</a>
                    </li>
                ) )
            }
        </ul> */}

      {/* <ul className="flex gap-10">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul> */}

      <button>Click Now</button>
    </nav>
  );
};

export default Navbar;
