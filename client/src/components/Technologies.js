import React from 'react';

function Technologies() {

    const websiteLogo =".../public/website.png";

        return (
            <section className="services-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Technologies</h2>
                        <div className="bar" />
                        <p>These are some of the technologies we mainly try to focus at DSC BGU</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/website.png"} alt="website" />
                                <h3>Website Development</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/Android.png"} alt="android" />

                                <h3>Android App Development</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/Cloud.png"} alt="cloud logo" />

                                <h3>Google Cloud</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/machine-learning-logo.png"} alt="machine" />
                                <h3>Machine Learning</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/iot.png"} alt="iot" />
                                <h3>Internet Of Things</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/python-logo.png"} alt="python" />

                                <h3>Python</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/javascript-logo.png"} alt="javascript" />
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={"pictures/technologies/react-logo.png"} alt="react" />
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default Technologies;
