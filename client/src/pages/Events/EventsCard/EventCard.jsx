import React from "react";
import './EventCard.scss'
import {Avatar, Card, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const EventCard = (props)=>{

    const {event} = props;
    const {name, url , pic} = event;
    return(
        <div className={'EventCard'} >
            <Card className={'card'} elevation={5}>
                <CardMedia className={'AvatarContainer'}>
                    <Avatar alt={name} src={pic} className={'avatar'}/>
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

export default EventCard
