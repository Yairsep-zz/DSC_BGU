import React from "react";
import './CoreTeam.scss'
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import Typography from "@material-ui/core/Typography";
import MemberCard from "./MemberCard/MemberCard";
function CoreTeam() {

    const collection = useFirestore().collection("CoreTeam").orderBy("id" , "asc")
    const coreTeam = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div className={'coreTeamPage'}>
            <Typography variant="h2" gutterBottom className={'header'}>
                Core Team
            </Typography>
            <div className={'teamCards'}>
                {coreTeam.map((member , id) => <MemberCard member={member} key={member.id}/>)}
            </div>
        </div>
    );
}

export default CoreTeam;
