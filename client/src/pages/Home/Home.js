import React from "react";
import ClubSocialIcons from "../../components/ClubSocialIcons";
import Technologies from "../../components/Technologies";
import Footer from "../../components/Footer";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container">
                        <h1>
                            Developers Student Clubs <br/>
                        </h1>
                        <h1 style={{fontWeight: 700}}>BGU</h1>
                        <p>
                            Developer Student Clubs are university based community
                            groups for students interested in Google developer
                            technologies. Students from all undergraduate or
                            graduate programs with an interest in growing as a
                            developer are welcome.
                        </p>
            <Link to="/Apply">
            <Button variant="contained" size="large" color="primary">
                Join DSC BGU
            </Button>
            </Link>
                        <ClubSocialIcons/>
            {/*<div>*/}
            {/*    <Technologies/>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    );
}

export default Home;
