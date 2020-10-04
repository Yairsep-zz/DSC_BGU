import React from "react";
import './Collabs.scss'
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import Typography from "@material-ui/core/Typography";
import CollabsCard from "./CollabsCard/CollabsCard";
import Footer from "../../components/Footer";


function Collabs() {

    const collection = useFirestore().collection("Partners").orderBy("id" , "asc")
    const collabs = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div className={'CollabsPage'}>
            <Typography variant="h2" gutterBottom className={'header'}>
                Collaborations
            </Typography>
            <div className={'CollabsCards'}>
                {collabs.filter(collab => !collab.name.includes("DSC")).map((collab) => <CollabsCard collab={collab} key={collab.id}/>)}
            </div>
            <Footer/>
        </div>
    );
}

export default Collabs;

