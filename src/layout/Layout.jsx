import {Outlet} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <>
            <Header/>
            <div>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout;