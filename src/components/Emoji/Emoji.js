import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core';
import EmojiPicker from 'emoji-picker-react';
import {Button} from '@material-ui/core';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width:'100%'
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    },
    emoji: {
        margin: '20px 0px'
    }
});
const Emoji = props => {
    const {classes} = props
    return (
        <div className={classes.emoji}>
            <form>
                <TextField
                    id="standard-name"
                    label="Enter Something"
                    className={classes.textField}
                    value={props.text}
                    onChange={props.onChange}
                    margin="normal"/> {props.emojiToggle
                    ? (
                        <div>
                            <EmojiPicker onEmojiClick={props.emojiClick}/>
                            <Button
                                className={classes.cancel}
                                onClick={props.handleButton}
                                color="danger"
                                variant="outlined">
                                Close
                            </Button>
                        </div>
                    )
                    : (
                        <div>
                            <Button onClick={props.handleShowButton} color="primary" variant="outlined">
                                Show Emojis
                            </Button>
                            <Button
                                onClick={props.onSubmit}
                                style={{
                                marginLeft: '10px'
                            }}
                                color="primary"
                                variant="outlined">
                                Submit
                            </Button>
                        </div>
                    )}
                {/* End  Form */}
            </form>
        </div>
    )
}
export default withStyles(styles)(Emoji);