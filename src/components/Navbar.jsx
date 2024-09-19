// src/components/Navbar.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Navbar.css'
//import img from '..\assets\gamers-gate-high-resolution-logo-transparent.png';

const Navbar = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        height: 0,
        opacity: 0,
    });

    return (
        <nav className="bg-navbar-blue py-4 position-sticky">
            <ul
                onMouseLeave={() => {
                    setPosition((pv) => ({
                        ...pv,
                        opacity: 0,
                    }));
                }}
                className="relative flex w-full justify-center space-x-8 p-1"
            >
                <img src="src/assets/gamers-gate-high-resolution-logo-transparent.png" alt="img" className="logo" />
                <NavLink setPosition={setPosition} to="/">Home</NavLink>
                <NavLink setPosition={setPosition} to="/login">Login</NavLink>
                <NavLink setPosition={setPosition} to="/dashboard">Dashboard</NavLink>
                <NavLink setPosition={setPosition} to="/community">Community</NavLink>
                <NavLink setPosition={setPosition} to="/team">Find friends</NavLink>



                <Cursor position={position} />
            </ul>
        </nav>
    );
};

const NavLink = ({ children, setPosition, to }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width, height, left } = ref.current.getBoundingClientRect();

                setPosition({
                    left: left - ref.current.parentNode.getBoundingClientRect().left,
                    width,
                    height,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-5 py-3 text-xs uppercase text-white md:px-5 md:py-3 md:text-base"
        >
            <Link to={to} className="text-white hover:text-gray-200">
                {children}
            </Link>
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                left: position.left,
                width: position.width,
                height: position.height,
                opacity: position.opacity,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute z-0 bg-purple rounded-md"
        />
    );
};

export default Navbar;
