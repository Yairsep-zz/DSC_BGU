import React from "react";
import {useFirestore, useFirestoreCollectionData, useFirestoreDoc, useFirestoreDocOnce} from "reactfire";
import Typography from "@material-ui/core/Typography";
import './Content.scss'
import Footer from "../../components/Footer";
import ContentCard from "./ContentCard/ContentCard";
import WebDev from "./WebDev/WebDev";
import MobileDev from "./MobileDev/MobileDev";
import PythonDev from "./PythonDev/PythonDev";
import MLpage from "./ML/MLpage";

function Content() {

    const collection = useFirestore().collection("Content");
    const content = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name


    return (
        <div>
            <div Content={'ContentPage'}>
                <Typography variant="h2" gutterBottom className={'header'}>
                    Content
                </Typography>
                {/*<div className={'ContentCards'}>*/}
                {/*    {content.map((content) => <ContentCard content={content} key={content.id}/>)}*/}
                {/*</div>*/}
                <WebDev/>
                <MobileDev/>
                <PythonDev/>
                <MLpage/>
            </div>
            <Footer/>
        </div>
    );
}

export default Content;
