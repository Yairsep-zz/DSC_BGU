import React from 'react'
import {
  Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter,
} from '@material-ui/icons'
import "./css/ClubSocialIcons.css"

function ClubSocialIcons() {
  return (
    <div
      className="social-icons-list"
      style={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}
    >
      <a href="https://www.facebook.com/DSC-BGU-119947236310010" className="socialIcons">
        <Facebook />
      </a>
      <a href="https://www.instagram.com/dsc.bgu/" className="socialIcons">
        <Instagram />
      </a>
      {/*<a href="" className="socialIcon">*/}
      {/*  <Twitter />*/}
      {/*</a>*/}
      <a href="" className="socialIcons">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/company/dsc-bgu/" className="socialIcons">
        <LinkedIn />
      </a>
      <a href="mailto:dsc@post.bgu.ac.il" className="socialIcons">
        <Mail />
      </a>
    </div>
  )
}

export default ClubSocialIcons
