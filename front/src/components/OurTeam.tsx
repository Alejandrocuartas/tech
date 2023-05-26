import React from "react";

import SocialLogo from "./SocialLogo";
import TeamMember from "./TeamMember";

const OurTeam = () => {
    return (
        <>
            <div id='us' className="bg-light">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Nuestro equipo</h2>
                            <p className="font-italic text-muted">Tenemos experiencia valiosa en el mundo digital.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <TeamMember
                            description="Desarrollador Full Stack con experiencia en la creación de aplicaciones con Javascript, Typescript, Node.js, Golang, React.js, Webpack, Git, Express.js, Fastify.js, GraphQL, Socket.io, Jest, MySQL y MongoDB.
                            En mis experiencias he demostrado ser proactivo, orientado al trabajo en equipo y capacitado para hablar con los usuarios y traducir sus necesidades en software.
                            También tengo una sólida formación en habilidades matemáticas y algorítmicas para resolver problemas."
                            name="Alejandro Cuartas"
                            title="Desarrollador"
                            image="https://media.licdn.com/dms/image/D4E03AQEj5IDjB1TDtA/profile-displayphoto-shrink_800_800/0/1675399753741?e=1690416000&v=beta&t=5XbVtW7W1If0wqOP3OddPV5m51VMumexRuwCXEusIZ0"
                            links={[
                                "https://www.facebook.com/alejandro.cuartas.3150",
                                "https://twitter.com/ale31jo",
                                "https://www.instagram.com/ale31jo",
                                "https://www.linkedin.com/in/cuartas",
                                "https://wa.me/+573137682258",
                                "https://github.com/Alejandrocuartas",
                                "mailto:cuartasmarin734@gmail.com?subject=DigiWeb%3A%20Soluciones%20digitales",
                            ]}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurTeam;