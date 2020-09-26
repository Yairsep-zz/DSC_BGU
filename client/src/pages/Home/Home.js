import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ContactMail, Facebook, GitHub, InsertChart, Instagram, LinkedIn, Mail, Twitter} from '@material-ui/icons';
import ClubSocialIcons from "../../components/ClubSocialIcons";
import Technologies from "../../components/Technologies";
import Footer from "../../components/Footer";

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="hero-content">
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

                        <a
                            href="https://forms.gle/QLgdJBjJJFGLFqw1A"
                            className="btn btn-primary"
                        >
                            Join DSC BGU
                        </a>
                        <ClubSocialIcons/>
                    </div>
                </div>
                <Technologies/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
