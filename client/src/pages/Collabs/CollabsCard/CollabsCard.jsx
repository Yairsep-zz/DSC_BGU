import React from 'react'
import './CollabsCard.scss'
import {
  Avatar, Card, CardContent, CardMedia,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const CollabsCard = (props) => {
  const { collab, style } = props
  const { name, logo, url } = collab
  return (
    <div style={style} className="CollabsCard">
      <Card className="card" elevation={5}>
        <CardMedia className="AvatarContainer">
          <Avatar alt={name} src={logo} className="avatar" />
        </CardMedia>
        <CardContent className="content">
          <Typography gutterBottom variant="h6" component="h2">
            <a style={{ color: 'black', textDecoration: 'none' }} href={url}>
              {name}
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CollabsCard
