import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import DesktopMenu from "./DesktopMenu";
import SideNav from "./SideNav";
import Divstd from "../../designLayouts/Divstd";

const Header = () => {
  const [sidenav, setSidenav] = useState(false);

  return (
      // <div className="header">
      <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
          {/*<nav>*/}
          <nav className="h-full px-4 max-w-container mx-auto relative">

              {/*<Divstd className="container">*/}
                  <Divstd className="flex items-center justify-between h-full">
                  {/* Logo */}
                  <Link to="/">
                      <Image className="logo" imgSrc={logo}/>
                  </Link>

                  {/* Desktop Menu */}
                  <DesktopMenu/>

                  {/* Mobile Menu Toggle */}
                  {/*<HiMenuAlt2*/}
                  {/*    aria-label="Toggle menu"*/}
                  {/*    aria-expanded={sidenav}*/}
                  {/*    onClick={() => setSidenav(!sidenav)}*/}
                  {/*    className="menu-icon"*/}
                  {/*/>*/}

                  {/* Side Navigation */}
                  {/*{sidenav && <SideNav closeSidenav={() => setSidenav(false)}/>}*/}
              </Divstd>
          </nav>
      </div>
  );
};

export default Header;
