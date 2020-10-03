import React from "react";
import {Link} from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {classes} from "istanbul-lib-coverage";
import MenuItem from "@material-ui/core/MenuItem";

function NavigationBar() {

    return (
        <div style={{ textAlign: "center" }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src='/pictures/logos/dsc-logo-tablet.png' width={"25px"} height={"25px"} />
                    </IconButton>

                    {/*TODO:ADD DSC BGU LOGO*/}
                    {/*<Link href="/">*/}
                    {/*    <a className="navbar-brand">*/}
                    {/*        <img style={{width: "150px" , height: "70px"}} src="DSCwebLogo.png" alt="logo" />*/}
                    {/*    </a>*/}
                    {/*</Link>*/}

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Home">
                        Home
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Collab">
                        Collab
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Members">
                        Members
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Events">
                        Events
                    </MenuItem>

                    {/*<MenuItem variant="h6" className={classes.title} component={Link} to="/Content">*/}
                    {/*    Content*/}
                    {/*</MenuItem>*/}

                    {/*<MenuItem variant="h6" className={classes.title} component={Link} to="/Projects">*/}
                    {/*    Projects*/}
                    {/*</MenuItem>*/}

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Contact">
                        Contact
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Apply">
                        Apply
                    </MenuItem>

                </Toolbar>
            </AppBar>
        </div>

    );
}

export default NavigationBar;
