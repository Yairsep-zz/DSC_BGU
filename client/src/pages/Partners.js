import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";

function Partners() {

    const collection = useFirestore().collection("Partners");
    const partners = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div>
            <h1>Partners</h1>
            <br/>
            {partners.map(({id ,name , pic , url}) => (
                <div>
                    {name}
                </div>
            ))}
        </div>
    );
}

export default Partners;
