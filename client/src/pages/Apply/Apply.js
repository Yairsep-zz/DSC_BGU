import React , {useState} from "react";
import GoogleIntegration from "../../components/GoogleIntegration";
import Application from "./Appliction/Application";
import Footer from "../../components/Footer";

function Apply() {

    const [isSigned , setIsSigned] = useState(false);

    const googleIntegrationHandler = () => {
        setIsSigned(true);
    }

    return (
        <div>
            <br/><br/>
            {/*{!isSigned ? <GoogleIntegration/> : <Application/>}*/}
            <Application/>
            <Footer/>
        </div>
    );
}

export default Apply;
