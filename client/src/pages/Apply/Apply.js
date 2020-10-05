import React from "react";
import Application from "./Appliction/Application";
import Footer from "../../components/Footer";
import Typography from "@material-ui/core/Typography";

function Apply() {


    return (
        <div>
            <Typography variant="h2" gutterBottom className={'header'}>
                Club Member Application
            </Typography>
            <Application/>
            <Footer/>
        </div>
    );
}

export default Apply;
