import React from "react";

import SocialLogo from "./SocialLogo";

const TeamMember = ({ name, title, image, links }: { name: string, title: string, image: string, links: string[] }) => {
    return (
        <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
                <img src={image} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">{name}</h5>
                <span className="small text-uppercase text-muted">{title}</span>
                <ul className="social mb-0 list-inline mt-3">
                    {
                        links.map(l => <SocialLogo link={l} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TeamMember;
