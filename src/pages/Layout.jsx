import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "/Users/aryaranadive/Projects/ranapp.github.io/src/NavBar.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;