import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Copyright } from '@material-ui/icons'
import './Footer.scss'
import ClubSocialIcons from "../ClubSocialIcons";
import {isMobile} from "../../utils/utils";

function Footer() {
  return (
    <div className={'footer'}>
        <div className="copyright-area">
                <img alt="dsc_logo" src="/pictures/logos/dscLogo.png" className={'logo'}/>
                <h5>Developed by DSC BGU Core Team</h5>
                <Copyright fontSize="small" />
        </div>
        <div className={'social'}>
            {ClubSocialIcons()}
        </div>
    </div>
  )
}

export default Footer
