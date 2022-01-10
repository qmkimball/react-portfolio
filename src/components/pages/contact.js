import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPicture from "../../../static/assets/images/auth/vidhunnan-murugan.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background:"url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                <h2>Contact Information</h2>
                <div className="contact-bullet-points">   
                    <div className="bullet-content">
                        <div className="icon">
                            <FontAwesomeIcon  icon="envelope" />
                        </div>
                        <div className="text">Email: quinnkimball192@gmail.com</div>
                    </div>
                    <div className="bullet-content">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className="text">Phone: 602-575-1423</div>
                    </div>
                    <div className="bullet-content">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className="text">Located: Murray, UT</div>
                    </div>
                </div> 
            </div>
            
        </div>
    );
}