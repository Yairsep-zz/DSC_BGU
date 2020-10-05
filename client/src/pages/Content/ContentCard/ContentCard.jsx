import React from 'react'
import './ContentCard.scss'
import {
  Avatar, Card, CardContent, CardMedia,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const ContentCard = (props) => {
  const { content } = props
  const { name, url, pic } = content
  return (
    <div className="ContentCard">
      <Card className="card" elevation={5}>
        <CardMedia className="AvatarContainer">
          <Avatar alt={name} src={pic} className="avatar" />
        </CardMedia>
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
            <a href={url}>
              {name}
            </a>
          </Typography>
          <Typography color="textSecondary" variant="h6" component="h3" className="role" />
        </CardContent>
      </Card>
    </div>
  )
}

export default ContentCard
