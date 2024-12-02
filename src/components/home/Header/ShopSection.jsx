import React from "react";
import { motion } from "framer-motion";

const ShopSection = ({ title, items, isOpen, toggleOpen }) => {
    return (
        <div className="shop-section">
            <h1 onClick={toggleOpen} className="section-title">
                {title} <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
            </h1>
            {isOpen && (
                <motion.ul
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="section-list"
                >
                    {items.map((item, index) => (
                        <li key={index} className="section-item">
                            {item}
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default ShopSection;
