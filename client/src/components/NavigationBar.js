import React from "react";
import {Link} from "react-router-dom"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import {classes} from "istanbul-lib-coverage";
import MenuItem from "@material-ui/core/MenuItem";


function NavigationBar() {

    return (
        <div style={{ textAlign: "center" }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Home">
                        Home
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/About">
                        About
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Partners">
                        Partners
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/CoreTeam">
                        Core Team
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/ClubMembers">
                        Club Members
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Events">
                        Events
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Projects">
                        Projects
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/Apply">
                        Apply
                    </MenuItem>

                    <MenuItem variant="h6" className={classes.title} component={Link} to="/ContactUs">
                        Contact Us
                    </MenuItem>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default NavigationBar;
