import React from "react";
import {useFirestore, useFirestoreCollectionData, useFirestoreDoc, useFirestoreDocOnce} from "reactfire";
import Typography from "@material-ui/core/Typography";
import './Content.scss'
import Footer from "../../components/Footer";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function Content() {

    const collection = useFirestore().collection("Content");
    const content = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name
    const classes = useStyles();

    return (
            <div Content={'ContentPage'}>
                <Typography variant="h2" gutterBottom className={'header'}>
                    Content
                </Typography>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Web Development"
                            height="140"
                            image="pictures/technologies/website.png"
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
                            image="pictures/technologies/machine-learning-logo.png"
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
                <Footer/>
            </div>

    );
}

export default Content;
