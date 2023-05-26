import React, { useState } from "react";

import SocialLogo from "./SocialLogo";

const OurTeam = () => {
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
            <div id='us' className="bg-light">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Nuestro equipo</h2>
                            <p className="font-italic text-muted">Tenemos robusta experiencia en el mundo digital.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://media.licdn.com/dms/image/D4E03AQEj5IDjB1TDtA/profile-displayphoto-shrink_800_800/0/1675399753741?e=1690416000&v=beta&t=5XbVtW7W1If0wqOP3OddPV5m51VMumexRuwCXEusIZ0" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Alejandro Cuartas</h5>
                                <span className="small text-uppercase text-muted">Desarrollador</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <SocialLogo link="https://www.facebook.com/alejandro.cuartas.3150" />
                                    <SocialLogo link="https://twitter.com/ale31jo" />
                                    <SocialLogo link="https://www.instagram.com/ale31jo" />
                                    <SocialLogo link="https://www.linkedin.com/in/cuartas" />
                                    <SocialLogo link="https://wa.me/+573137682258" />
                                    <SocialLogo link="https://github.com/Alejandrocuartas" />
                                    <SocialLogo link="mailto:cuartasmarin734@gmail.com?subject=DigiWeb%3A%20Soluciones%20digitales" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam;