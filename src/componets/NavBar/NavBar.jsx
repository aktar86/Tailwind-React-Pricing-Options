import React from "react";
import Link from "../NavBar/Link";

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
  return (
    <nav>

        <ul className="flex">
            {
                navigationData.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>







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
    </nav>
  );
};

export default Navbar;
