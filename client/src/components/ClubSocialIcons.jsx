import React from 'react'
import {
  Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter,
} from '@material-ui/icons'

function ClubSocialIcons() {
  return (
    <div
      className="social-icons-list"
      style={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}
    >
      <a href="https://www.facebook.com/DSC-BGU-119947236310010" className="socialIcon">
        <Facebook />
      </a>
      <a href="https://www.instagram.com/dsc.bgu/" className="socialIcon">
        <Instagram />
      </a>
      <a href="" className="socialIcon">
        <Twitter />
      </a>
      <a href="" className="socialIcon">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/company/dsc-bgu/" className="socialIcon">
        <LinkedIn />
      </a>
      <a href="mailto:dsc@post.bgu.ac.il" className="socialIcon">
        <Mail />
      </a>
    </div>
  )
}

export default ClubSocialIcons
