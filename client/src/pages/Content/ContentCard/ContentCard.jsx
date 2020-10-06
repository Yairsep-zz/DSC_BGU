import React from 'react'
import './ContentCard.scss'
import {
  Avatar, Card, CardContent, CardMedia,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const ContentCard = (props) => {
  const { technology, style } = props
  const { Name, ImageUrl, route } = technology
  console.log("route:" + route);
  return (
      <div style={style} className="CollabsCard">
        <Card className="card" elevation={5}>
          <CardMedia className="AvatarContainer">
            <Avatar alt={Name} src={ImageUrl} className="avatar" />
          </CardMedia>
          <CardContent className="content">
            <Typography gutterBottom variant="h6" component="h2">
              <Link to={route} style={{ textDecoration: 'none' }}>
                {Name}
            </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
}

export default ContentCard
