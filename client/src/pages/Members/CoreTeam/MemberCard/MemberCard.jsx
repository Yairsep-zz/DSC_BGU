import React from 'react'
import './MemberCard.scss'
import {
  Avatar, CardContent, CardMedia,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const MemberCard = (props) => {
  const { member, style } = props
  const {
    name, role, pic, facebook, linkedin, email,
  } = member
  return (
    <div className="MemberCard" style={style}>
      <div className="card" elevation={5}>
        <CardMedia className="AvatarContainer">
          <Avatar alt={name} src={pic || '/dscLogo.png'} className="avatar" />
        </CardMedia>
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary" variant="h6" component="h3" className="role">
            {role}
          </Typography>
          <div className="socialRow">
            {facebook && (
              <a href={facebook} className="socialIcon">
                <FacebookIcon />
              </a>
            )}
            {linkedin && (
              <a href={linkedin}>
                <LinkedInIcon className="socialIcon" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`}>
                <MailIcon className="socialIcon" />
              </a>
            )}
          </div>
        </CardContent>
      </div>
    </div>
  )
}

export default MemberCard
