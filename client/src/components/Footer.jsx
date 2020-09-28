import React from "react";
import Grid from "@material-ui/core/Grid";
import { Copyright } from '@material-ui/icons';

function Footer() {

    return (
        <Grid container alignItems={'center'} justify={'center'}>
            <Grid item>
                <div className="copyright-area" style={{ marginTop: '20px' }}>
                    <div className="container">
                        <div className="row h-50 justify-content-center align-items-center">
                            <div
                                className="col-lg-12 col-md-12"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <h5><Copyright/> Developed by DSC BGU Core Team </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default Footer;