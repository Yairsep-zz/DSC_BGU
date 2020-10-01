import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import {Avatar} from "@material-ui/core";
import "./css/Technology.scss"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "50px",
    },
    media: {
        position: "relative",

    },
    avatar: {
        display: "flex",
        width: "200px",
        height: "200px",
        border: "darkgray solid 3px"
    }
});


function Technologies() {

    const classes = useStyles();

    const urls = {
        Web: "pictures/technologies/website.png",
        Android: 'pictures/technologies/Android.png',
        Cloud: 'pictures/technologies/Cloud.png',
        ML: 'pictures/technologies/machine-learning-logo.png',
        IOT: "pictures/technologies/iot.png",
        Python: "pictures/technologies/python-logo.png",
        JavaScript: "pictures/technologies/javascript-logo.png",
        React: "pictures/technologies/react-logo.png"
    }

    return (
        <div className="header">
            <h2>Technologies</h2>
            <div className="header"/>
            <p>These are some of the technologies we mainly try to focus at DSC BGU</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <CardMedia className={'AvatarContainer'}>
                    <Avatar alt={"Web"} src={"pictures/technologies/webdev.jpg"} className={"avatar"}/>
                    <div>
                        <Link to='/WebDev' style={{textDecoration: "none"}}>
                            <Typography variant="h5" component="h2">
                                Web Development
                            </Typography>
                        </Link>
                    </div>
                </CardMedia>


                <CardMedia className={'AvatarContainer'}>
                    <Avatar alt={"Web"} src={"pictures/technologies/mobiledev.png"} className={"avatar"}/>
                    <div>
                        <Link to='/MobileDev'  style={{textDecoration: "none"}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Mobile Development
                            </Typography>
                        </Link>
                    </div>
                </CardMedia>


                <CardMedia className={'AvatarContainer'}>
                    <Avatar alt={"Web"} src={"pictures/technologies/ml.jpg"} className={"avatar"}/>
                    <div>
                        <Link to='/ML'  style={{textDecoration: "none"}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Machine Learning
                            </Typography>
                        </Link>
                    </div>
                </CardMedia>

                <CardMedia className={'AvatarContainer'}>
                    <Avatar alt={"Web"} src={"pictures/technologies/python-logo.png"} className={"avatar"}/>
                    <div>
                        <Link to='/PythonDev'  style={{textDecoration: "none"}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Python Development
                            </Typography>
                        </Link>
                    </div>
                </CardMedia>

            </div>
        </div>
    );
}

export default Technologies;

