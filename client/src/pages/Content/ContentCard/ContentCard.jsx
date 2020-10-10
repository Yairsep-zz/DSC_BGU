import React from 'react'
import './ContentCard.scss'
import {
  Avatar, Card, CardContent, CardMedia,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
const ContentCard = (props) => {
  const { technology, style } = props
  const { Name, ImageUrl} = technology
  return (
      <div style={style} className="ContentCard">
        <Card className="card" elevation={1}>
          <CardMedia className="AvatarContainer">
            <Avatar alt={Name} src={ImageUrl} className="avatar" />
          </CardMedia>
          <CardContent className="content">
            <Typography gutterBottom variant="h6" component="h2">
              {/*<Link to={route} style={{ textDecoration: 'none' }}>*/}
                {Name}
              {/*</Link>*/}
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
}

export default ContentCard
