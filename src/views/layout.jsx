import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Context } from "../context/appContext";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className='bg-white bg-no-repeat bg-cover overflow-hidden'>
            <Nav />
            <Outlet />
            {/*<div className='h-[4000px]'></div>*/}
            <Footer />
        </div>
    )
};

export default Layout;