import React from "react";

const References = () => {
    return (
        <>
            <section id="refs" className="bg-white">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h3 className="mb-4">Negocios que confiaron</h3>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 mb-5 mb-md-0">
                            <a target="_blank" href="https://duppa.com.co/">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://media.licdn.com/dms/image/C4E0BAQEPpQJV1zzbnw/company-logo_200_200/0/1634739977799?e=1692835200&v=beta&t=cndBZX2xCkKFPqJ8I0KPtM3sv4UTUrZJqtNrAs0Xv8c"
                                        className="rounded-circle shadow-1-strong" width="150" height="150" />
                                </div>
                            </a>
                            <h5 className="mb-3">Duppa</h5>
                            <h6 className="text-primary mb-3">Tienda de suministros y mayorista</h6>
                            <p className="px-xl-3">
                                <i className="fas fa-quote-left pe-2">
                                    Facilita el abastecimiento de mercancías a negocios en
                                    poblaciones pequeñas e intermedias, a través del acceso a
                                    financiamiento, red logística y tecnología.
                                </i>
                            </p>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0">
                            <a target="_blank" href="https://www.instagram.com/elcastillodenahia/">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://res.cloudinary.com/dvpcbukeh/image/upload/v1684883858/nahia_db0f8c.png"
                                        className="rounded-circle shadow-1-strong" width="150" height="150" />
                                </div>
                            </a>
                            <h5 className="mb-3">El Castillo de Nahia</h5>
                            <h6 className="text-primary mb-3">Restaurante y Café-Bar</h6>
                            <p className="px-xl-3">
                                <i className="fas fa-quote-left pe-2">
                                    Es un restaurante nuevo en el Valle del Cauca que
                                    ya está creando un gran impacto en la región
                                    dado el alto número de empleos que genera y
                                    lo especial que lo hace ser literalmente un castillo.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default References;
