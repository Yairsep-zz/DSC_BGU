import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import './ClubMembers.scss'
import Typography from "@material-ui/core/Typography";
import ClubMemberCard from "./ClubMemberCard/ClubMemberCard";



function ClubMembers() {

    const collection = useFirestore().collection("ClubMembers");
    const clubMembers = useFirestoreCollectionData(collection, {idField: "id"}); //TODO: Change Const Name

    return (
        <div className={'ClubMembersPage'}>
            <Typography variant="h2" gutterBottom className={'header'}>
                Club Members
            </Typography>
            <div className={'ClubMembersCards'}>
                {clubMembers.map((member) => <ClubMemberCard member={member} key={member.id}/>)}
            </div>
        </div>
    );
}

export default ClubMembers;
