import React from "react";
import CoreTeam from "./CoreTeam/CoreTeam";
import ClubMembers from "./ClubMembers/ClubMembers";
import Footer from "../../components/Footer";

function Members() {
    return (
        <div>
            <CoreTeam/>
            <ClubMembers/>
            <Footer/>
        </div>
    );
}

export default Members;
