import * as React from "react";
import { Navbar2 } from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            <Navbar2></Navbar2>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;