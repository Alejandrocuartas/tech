import * as React from "react";
import { Navbar2 } from "./Navbar";
import { Footer2 } from "./Footer";
const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            <Navbar2></Navbar2>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default Layout;