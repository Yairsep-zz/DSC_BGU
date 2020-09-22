import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import {onLog} from "firebase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {classes} from "istanbul-lib-coverage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram , } from '@fortawesome/free-brands-svg-icons';
import {  faGithub , } from '@fortawesome/free-brands-svg-icons';
function CoreTeam() {

    const collection = useFirestore().collection("CoreTeam");
    const coreTeam = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Core Team</h1>

            {coreTeam.map(({id , name , pic , facebook , instagram , linkedIn}) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={pic}
                            title={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            {/*<Typography variant="body2" color="textSecondary" component="p">*/}
                            {/*</Typography>*/}
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div
                            className="social-icons-list"
                            style={{ marginTop: '15px' }}
                        >
                            <ul
                                className="social-list"
                                style={{ paddingLeft: '0px' }}
                            >
                                <li>
                                    <a href="https://www.facebook.com/dscvjit/">
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/dscvjit">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/dscvjit/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/dscvjit">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </CardActions>
                </Card>
                ))}
        </div>
    );
}

export default CoreTeam;
