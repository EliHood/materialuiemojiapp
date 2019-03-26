import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography, Button} from '@material-ui/core';

const styles = theme => ({
    shadows: ["none"],
    spacing: 8,
    root: {
        flexGrow: 1,
        minHeight: '800px',

        position: 'relative'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        width: '500px',
        color: theme.palette.text.secondary
    },
    textField: {
        width: '400px'
    },
    myitem: {
        margin: '40px'
    },
    emoji: {
        margin: '40px'
    },
    emojiButton: {
        margin: '20px 0px'
    },
    myitemList:{
        margin:'20px 0px'
    },
    notFound: {
        margin:'20px 0px'
    },
    cancel: {
        margin: '20px 0px'
    }
});

const EmojiList = (props) => {
 
    return(
        <Grid item sm={4} className={props.classes.myitem}>
                <Typography variant="h2" component="h2">
                        Output
                    </Typography>
                    {props.items.length > 0 ? (
                        props.items.map( (item, i) => (
                    
                            <div key={i}>
                                <Grid item sm={8} className={props.classes.myitemList}>    
                                    <Paper >
                                        <Typography  variant="h6" component="h6">
                                           {item}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </div>
                        ))
                    ) : (
                        <div>
                                
                            <Grid item sm={6} className={props.classes.notFound}>
                                <Typography>
                                   No Items
                                </Typography>
                            
                            </Grid>
                        </div>
          
                    )}
        </Grid>


    )

}

export default withStyles(styles)(EmojiList);