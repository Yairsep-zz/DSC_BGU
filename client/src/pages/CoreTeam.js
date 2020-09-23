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
import {  faLinkedin , } from '@fortawesome/free-brands-svg-icons';
function CoreTeam() {

    const collection = useFirestore().collection("CoreTeam");
    const coreTeam = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Core Team</h1>

            {coreTeam.map(({id , name, role , pic , facebook , instagram , linkedin}) => (
                <div>
                    {/*<img src={pic}/>*/}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia style={{height: "400px" , width: "400px"}}
                            component="img" src={pic}
                            className={classes.media}
                            title={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {role}
                            </Typography>
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
                                    <a href={facebook}>
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={instagram}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href={linkedin}>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </CardActions>
                </Card>
                </div>
                ))}
        </div>
    );
}

export default CoreTeam;
