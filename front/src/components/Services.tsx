import React from "react";

const Services = () => {
    return (
        <>
            <div id="services" className="bg-light">
                <div className="container py-5">
                    <div className="row align-items-center mt-2">
                        <div className="col-lg-5 px-5 mx-auto">
                            <img src="https://i.pinimg.com/originals/f5/7c/0a/f57c0aad57ef65de8c3c2390cb9b4ba4.jpg" alt="" className="img-fluid mb-4 mb-lg-0" />
                        </div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Creación de páginas web</h2>
                            <p className="font-italic text-muted mb-2">Podemos hacer landing pages con las últimas tecnologías para que promociones tu negocio. Te entregamos link, código QR y le hacemos mantenimiento con un precio muy favorable e incluye garantía.</p>
                            <a target="_blank" href="https://es.wix.com/blog/2021/05/que-es-una-landing-page" className="btn btn-light px-5 rounded-pill shadow-sm">Aprende más</a>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4 mb-2">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Publicidad digital</h2>
                            <p className="font-italic text-muted mb-2">Manejamos todo tipo de publicidad por medio de redes sociales.</p>
                            <a target="_blank" href="https://advertising.amazon.com/es-mx/library/guides/what-is-digital-advertising" className="btn btn-light px-5 rounded-pill shadow-sm">Aprende más</a>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                            <img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" />
                        </div>
                    </div>
                    <div className="row align-items-center mt-4 mb-2">
                        <div className="col-lg-5 px-5 mx-auto order-2 order-lg-1">
                            <img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mt-1 mb-lg-0" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Creación de aplicaciones web</h2>
                            <p className="font-italic text-muted mb-2">
                                Desde Menús interactivos con imágenes para restaurantes y
                                catálogos para ventas hasta herramientas
                                donde se pueda analizar datos, hacer cálculos
                                y gestionar asistencias. Incluye mantenimiento
                                y garantía.
                            </p>
                            <a target="_blank" href="https://www.sap.com/latinamerica/products/technology-platform/process-automation/what-is-process-automation.html" className="btn btn-light px-5 rounded-pill shadow-sm">Aprende más</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
