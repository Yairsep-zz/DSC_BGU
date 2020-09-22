import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";

function Events() {

    const collection = useFirestore().collection("Events");
    const events = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name


    return (
        <div>
            <h1>Events</h1>
            <br/>
            {events.map(({name}) => (
                <div>
                    {name}
                </div>
            ))}
        </div>
    );
}

export default Events;
