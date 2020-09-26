import React from "react";
import './Partners.scss'
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import Typography from "@material-ui/core/Typography";
import PartnerCard from "./PartnersCard/PartnerCard";
import Footer from "../../components/Footer";


function Partners() {

    const collection = useFirestore().collection("Partners");
    const partners = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div className={'PartnersPage'}>
            <Typography variant="h2" gutterBottom className={'header'}>
                Partners
            </Typography>
            <div className={'PartnersCards'}>
                {partners.map((partner) => <PartnerCard partner={partner} key={partner.id}/>)}
            </div>
            <Footer/>
        </div>
    );
}

export default Partners;

