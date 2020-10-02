import React from 'react';
import './Skillcard.css'

function Skillcard({ icon, title, about }) {
    return (
        <div className="skillcard">
            <img src={icon} alt="icon" className="skillcard__icon" />
            <div className="skillcard__body">
                <h6 className="skillcard__title">{title}</h6>
                <p className="skillcard__content">{about}</p>
            </div>
        </div>
    )
}

export default Skillcard
