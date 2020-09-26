import React from "react";
import {Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter} from "@material-ui/icons";

function ClubSocialIcons() {
    return (
        <div
            className="social-icons-list"
            style={{marginTop: '15px'}}
        >
            <ul
                className="social-list"
                style={{paddingLeft: '0px'}}
            >
                <li>
                    <a href={"https://www.facebook.com/DSC-BGU-119947236310010"} className={'socialIcon'}>
                        <Facebook/>
                    </a>
                </li>
                <li>
                    <a href={"https://www.instagram.com/dsc.bgu/"} className={'socialIcon'}>
                        <Instagram/>
                    </a>
                </li>
                <li>
                    <a href={""} className={'socialIcon'}>
                        <Twitter/>
                    </a>
                </li>
                <li>
                    <a href={""} className={'socialIcon'}>
                        <GitHub/>
                    </a>
                </li>
                <li>
                    <a href={""} className={'socialIcon'}>
                        <LinkedIn/>
                    </a>
                </li>
                <li>
                    <a href={"mailto:dsc.bgu7@gmail.com"} className={'socialIcon'}>
                        <Mail/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ClubSocialIcons;
