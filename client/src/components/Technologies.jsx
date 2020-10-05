import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import './css/Technology.scss'
// import { useHistory } from 'react-router-dom'
const TechnologiesList = require('../data/TechnologiesList.json')

// const history = useHistory()
function Technologies() {
  return (
    <div className="technologies">
      <div className="header">
        <Typography variant="h2" gutterBottom className="header">
          Technologies
        </Typography>
      </div>
      <div className="description">
        <p>These are some of the technologies we mainly try to focus at DSC BGU</p>
      </div>
      <div className="cards">
        <Grid item xs={12}>
          <Grid container justify="center">
            {TechnologiesList.map(({ Name, ImageUrl, Link: techLink }) => (
              <CardMedia key={Name} className="AvatarContainer">
                <Avatar alt={Name} src={ImageUrl} className="avatar" />
                <Link to={`/content${techLink}`} style={{ textDecoration: 'none' }}>
                  <Typography variant="h5" component="h2">
                    {Name}
                  </Typography>
                </Link>
              </CardMedia>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Technologies
