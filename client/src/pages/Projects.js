import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";

function Projects() {

    const collection = useFirestore().collection("Projects");
    const projects = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name


    return (
        <div>
            <h1>Projects</h1>
            <br/>
            {projects.map(({name}) => (
                <div>
                    {name}
                </div>
            ))}
        </div>
    );
}

export default Projects;
