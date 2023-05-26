import React from "react";

import SocialLogo from "./SocialLogo";

const Footer = () => {
    return (
        <>
            <footer id="contact" className="bg-white pb-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 mt-4">Contacto</h6>
                            <ul className="social mb-0 list-inline mt-3">
                                <SocialLogo link="mailto:cuartasmarin734@gmail.com?subject=DigiWeb%3A%20Soluciones%20digitales" />
                                <SocialLogo link="https://wa.me/+573137682258" />
                            </ul>
                            <p className="font-italic text-muted mb-0 mt-4">cel: 313 768 2258</p>
                        </div>
                    </div>
                    <p className="font-italic text-muted mb-0 mt-4">&copy; Copyrights Company.com All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
