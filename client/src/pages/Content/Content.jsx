import React from 'react'
import Typography from '@material-ui/core/Typography'
import './Content.scss'
import ContentCard from "./ContentCard/ContentCard";
const TechnologiesList = require('./TechnologiesList.json')

function Content() {

    return (
        <div className="ContentPage" style={{marginTop: "30px"}}>
            <Typography variant="h2" gutterBottom className="header">
                Technologies
            </Typography>
            <p style={{ fontSize: 20, marginLeft: 50 , marginTop: 14, textAlign: 'justify' }}>
                These are the technologies we focus at DSC BGU
            </p>
            <div className="ContentCards">
                {TechnologiesList.map((technology, i) => (
                    <ContentCard
                        technology={technology}
                        key={technology.id}
                        style={{ animationDelay: `${200 * i}ms` }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content;


// <div className="technologies">
//     <div className="header">
//         <Typography variant="h2" gutterBottom className="header">
//             Technologies
//         </Typography>
//     </div>
//     <div className="description">
//         <p>These are some of the technologies we mainly try to focus at DSC BGU</p>
//     </div>
//     <div className="cards">
//         <Grid item xs={12}>
//             <Grid container justify="center">
//                 {TechnologiesList.map(({ Name, ImageUrl, Link: techLink }) => (
//                     <CardMedia key={Name} className="AvatarContainer">
//                         <Avatar alt={Name} src={ImageUrl} className="avatar" />
//                         <Link to={`/content${techLink}`} style={{ textDecoration: 'none' }}>
//                             <Typography variant="h5" component="h2">
//                                 {Name}
//                             </Typography>
//                         </Link>
//                     </CardMedia>
//                 ))}
//             </Grid>
//         </Grid>
//     </div>
// </div>
