import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {classes} from "istanbul-lib-coverage";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Partners() {

    const collection = useFirestore().collection("Partners");
    const partners = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Partners</h1>
            <br/>
            {partners.map(({id ,name , logo , url}) => (
                <div>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia style={{height: "400px" , width: "400px"}}
                                       component="img" src={logo}
                                       className={classes.media}
                                       title={name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <a href={url}>
                                        {name}
                                    </a>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Partners;
