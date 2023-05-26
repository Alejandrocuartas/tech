import React, { useState } from "react";

import SocialLogo from "./SocialLogo";
import Modal from "./Modal";
import MemberDescription from "./MemberDescription";

import "./styles/TeamMember.css";

const TeamMember = ({ name, title, image, description, links }: { name: string, description: string, title: string, image: string, links: string[] }) => {
    const [isOpen, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    return (
        <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
                <img id="member_img" onClick={() => setOpen(true)} src={image} alt="team member photo" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">{name}</h5>
                <span className="small text-uppercase text-muted">{title}</span>
                <ul className="social mb-0 list-inline mt-3">
                    {
                        links.map(l => <SocialLogo key={l} link={l} />)
                    }
                </ul>
            </div>
            <Modal onClose={onClose} isOpen={isOpen}>
                <MemberDescription
                    name={name}
                    description={description}
                />
            </Modal>
        </div>
    )
}

export default TeamMember;
