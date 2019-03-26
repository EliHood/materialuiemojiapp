import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
const styles = theme => ({
    shadows: ["none"],
    spacing: 8,
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 100,
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
    myitemList: {
        margin: '20px 0px'
    },
    notFound: {
        margin: '20px 0px'
    },
    cancel: {
        margin: '20px 0px'
    }
});
const EmojiList = (props) => {
    const {classes} = props
    return (
        <Grid item sm={4} className={classes.myitem}>
            {/* reference it by the name items, it can be called whatever.  */}
            <ListSubheader> Results </ListSubheader>
            {props.items.length > 0
                ? (props.items.map((item, i) => (
                        <List className={classes.root} component="nav">
                            <ListItem key={i} href="#simple-list">
                                {item}
                            </ListItem>
                        </List>
                )))
                : (
                    <div>
                          <List component="nav">
                            <ListItem  href="#simple-list">
                                No Items Yet
                            </ListItem>
                        </List>
                    </div>
                )}
        </Grid>
    )
}
export default withStyles(styles)(EmojiList);