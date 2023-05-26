import React from "react";

const MemberDescription = ({ name, description }: { name: string, description: string }) => {
    return (
        <div className="card" style={{
            width: "18rem",
            maxHeight: "370px",
            overflowY: "scroll"
        }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default MemberDescription;
