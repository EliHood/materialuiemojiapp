import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import { Typography } from '@material-ui/core';

// import './App.css';

const styles = theme => ({
 shadows: ["none"],
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow:'0px'
  },
  myitem:{
    margin:'40px'
  }
});


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <Navbar />

          <Grid container spacing={24}>
            <Grid item sm={6} className={classes.myitem}  >
              <Paper className={classes.paper} >
                <Typography variant="h2" component="h2">
                    Emoji
                </Typography>
              </Paper>
            
            </Grid>
          
          </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(App);
