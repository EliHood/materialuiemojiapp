import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      left: 0,
      margin:'0 auto'
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  });
  

const Footer = props => {
    const { classes } = props;
    return(

        <div>

        <AppBar position="absolute" color="secondary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography component="h2" varient="h2" color="inherit">
                Emoji Material UI Example 
                </Typography>
            </Toolbar>
        </AppBar>

        </div>
    )


}

export default withStyles(styles) (Footer) ;