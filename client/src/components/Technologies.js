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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "50px",
    },
    media: {
        position: "relative",

    },
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
        <div className="section-title">
            <h2>Technologies</h2>
            <div className="bar"/>
            <p>These are some of the technologies we mainly try to focus at DSC BGU</p>
            <div style={{  display: "flex" , justifyContent: "center"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Web Development"
                        height="140"
                        image="pictures/technologies/webdev.jpg"
                        title="Web Development"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Web Development
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            All of our content regarding Web Development
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/WebDev'>
                        <Button size="small" color="primary">
                            Enter
                        </Button>
                    </Link>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Mobile Development"
                        height="140"
                        image="pictures/technologies/Android.png"
                        title="Mobile Development"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mobile Development
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            All of our content regarding Mobile Development
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/MobileDev'>
                        <Button size="small" color="primary">
                            Enter
                        </Button>
                    </Link>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Machine Learning"
                        height="140"
                        image="pictures/technologies/ml.jpg"
                        title="Machine Learning"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Machine Learning
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            All of our content regarding Machine Learning
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/ML'>
                        <Button size="small" color="primary">
                            Enter
                        </Button>
                    </Link>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Python Development"
                        height="140"
                        image="pictures/technologies/python-logo.png"
                        title="Python Development"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Python Development
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            All of our content regarding Python Development
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/Python'>
                        <Button size="small" color="primary">
                            Enter
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            </div>
        </div>
    );
}

export default Technologies;

