import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "/Users/aryaranadive/Projects/personal_website/arya_website/src/NavBar.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;