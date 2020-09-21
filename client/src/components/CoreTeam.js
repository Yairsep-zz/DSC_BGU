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

function CoreTeam() {

    const collection = useFirestore().collection("CoreTeam");
    const coreTeam = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Core Team</h1>
            {/*{console.log(coreTeam)}*/}
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
                        <Button size="small" color="primary">
                            FaceBook
                        </Button>
                        <Button size="small" color="primary">
                            LinkedIn
                        </Button>
                    </CardActions>
                </Card>
                ))}

        </div>
    );
}

export default CoreTeam;
