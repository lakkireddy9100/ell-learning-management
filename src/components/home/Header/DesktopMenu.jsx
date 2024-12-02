import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navBarList } from "../../../constants";

const DesktopMenu = () => {
    const location = useLocation();

    return (
        <ul className="desktop-menu">
            {navBarList.map(({ _id, title, link }) => (
                <li key={_id}>
                    <NavLink
                        to={link}
                        exact
                        activeClassName="active"
                        className="menu-item"
                        state={{ data: location.pathname.split("/")[1] }}
                    >
                        {title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenu;
