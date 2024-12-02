import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navBarList } from "../../../constants";
import { logoLight } from "../../../assets/images";

const SideNav = ({ closeSidenav }) => {
    const location = useLocation();

    return (
        // <div className="sidenav-backdrop">
            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">

                <motion.div
                    initial={{x: -300, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                    className="w-[80%] h-full relative"
                >
                    {/* Sidebar Header with Logo */}
                    <div>
                        <img src={logoLight} alt="Logo" className="w-20 object-cover"/>
                    </div>

                    {/* Sidebar Menu */}
                    <ul>
                        {navBarList.map(({_id, title, link}) => (
                            <li key={_id}>
                                <NavLink
                                    to={link}
                                    state={{data: location.pathname.split("/")[1]}}
                                    onClick={closeSidenav}
                                    // className="sidenav-item"
                                    className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"

                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Close Button */}
                    <MdClose onClick={closeSidenav} className="close-icon"/>
                </motion.div>
            </div>
            );
            };

            export default SideNav;
