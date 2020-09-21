import React from "react";
import {useFirestore, useFirestoreCollection} from "reactfire";

function CoreTeam() {

    // const collection = useFirestore().collection("CoreTeam");
    // const coreTeam = useFirestoreCollection(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Core Team</h1>
            {/*{coreTeam.map(({id , name , pic , facebook , instagram , linkedin}) => (*/}
            {/*    <div>*/}
            {/*        */}
            {/*    </div>*/}
            {/*    ))}*/}
        </div>
    );
}

export default CoreTeam;
