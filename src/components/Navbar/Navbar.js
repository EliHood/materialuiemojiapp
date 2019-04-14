import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography component="h2" varient="h2" color="inherit">
                        Emoji Material UI Example 
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;