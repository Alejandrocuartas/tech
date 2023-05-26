import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;