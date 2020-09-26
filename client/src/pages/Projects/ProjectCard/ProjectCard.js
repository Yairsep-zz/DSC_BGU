import React from "react";
import {Avatar, Card, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import './ProjectCard.scss'

const ProjectCard = (props)=> {

    const {project} = props;
    const {name, logo , url} = project;

    return(
        <div className={'ProjectCard'} >
            <Card className={'card'} elevation={5}>
                <CardMedia className={'AvatarContainer'}>
                    <Avatar alt={name} src={logo} className={'avatar'}/>
                </CardMedia>
                <CardContent className={'content'}>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={url}>
                            {name}
                        </a>
                    </Typography>
                    <Typography color="textSecondary" variant="h6" component="h3" className={'role'}>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard;
