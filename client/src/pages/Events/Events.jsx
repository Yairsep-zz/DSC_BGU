import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import Typography from "@material-ui/core/Typography";
import EventCard from "./EventsCard/EventCard";
import './Events.scss'
import Footer from "../../components/Footer";

function Events() {

    const collection = useFirestore().collection("Events");
    const events = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name


    return (
        <div>
            <div className={'EventsPage'}>
                <Typography variant="h2" gutterBottom className={'header'}>
                    Events
                </Typography>
                <div className={'EventsCards'}>
                    {events.map((event) => <EventCard event={event} key={event.id}/>)}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Events;
