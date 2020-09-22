import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";

function ClubMembers() {

    const collection = useFirestore().collection("ClubMembers");
    const clubMembers = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Club Members</h1>
            <br/>
            {clubMembers.map(({name}) => (
                <div>
                    {name}
                </div>
            ))}
        </div>
    );
}

export default ClubMembers;
