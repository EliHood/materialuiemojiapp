import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import EmojiPicker from 'emoji-picker-react';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    emoji:{
        margin:'40px 0px'
    }
});

const Emoji = props => {
    const {classes} = props
    return(
        <div  className={classes.emoji}>

            {/* <TextField
                id="standard-name"
                label="Emoji"
                className={classes.textField}
                value={props.emoji}
                onChange={props.onChange}
                margin="normal"
            /> */}
              

        </div>
    )



}

export default withStyles(styles) (Emoji);