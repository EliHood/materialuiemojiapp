import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import {Typography, Button} from '@material-ui/core';
import Footer from './components/Footer';
import Emoji from './components/Emoji';
import TextField from '@material-ui/core/TextField';
import EmojiPicker from 'emoji-picker-react';
import JSEMOJI from 'emoji-js';
import Icon from '@material-ui/core/Icon';
let jsemoji = new JSEMOJI();
// set the style to emojione (default - apple)
jsemoji.img_set = 'emojione';
// set the storage location for all emojis
jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';
// some more settings...
jsemoji.supports_css = false;
jsemoji.allow_native = true;
jsemoji.replace_mode = 'unified'
const styles = theme => ({
    shadows: ["none"],
    spacing: 8,
    root: {
        flexGrow: 1,
        minHeight: '800px',
        width: '100%',
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
    cancel: {
        margin: '20px 0px'
    }
});
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emoji: '',
            text: '',
            items: [],
            emojiToggle: false
        }
    }
    onChange = (e) => {
        e.preventDefault()
        this.setState({text: e.target.value});
    }
    handleClick = (n, e) => {
        let emoji = jsemoji.replace_colons(`:${e.name}:`);
        this.setState({
            text: this.state.text + emoji
        });
        console.log(emoji)
    }
    handleButton = (e) => {
        e.preventDefault();
        if(!this.state.emojiToggle){
          this.setState({emojiToggle: true})
        }
        else{
          this.setState({emojiToggle: false})

        }
   
    }
    

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Navbar/>
                <Grid container spacing={12}>
                    <Grid item sm={6} className={classes.myitem}>
                        <Paper className={classes.paper}>
                            <Typography variant="h2" component="h2">
                                Insert An Emoji
                            </Typography>
                            <TextField
                                id="standard-name"
                                label="Enter Something"
                                className={classes.textField}
                                value={this.state.text}
                                onChange={this.onChange}
                                margin="normal"
                              />
                              {this.state.emojiToggle ? (
                                    <div>
                                        <EmojiPicker onEmojiClick={this.handleClick}/>
                                        <Button
                                            className={classes.cancel}
                                            onClick={this.handleButton}
                                            color="danger"
                                            variant="outlined">
                                            Close
                                        </Button>
                                    </div>
                                )
                                : (
                                    <div>
                                        <Button onClick={this.handleButton} color="primary" variant="outlined">
                                            Show Emojis
                                        </Button>
                                    </div>
                                )}
                        </Paper>
                    </Grid>
                </Grid>
                <Footer/>
            </div>
        );
    }
}
export default withStyles(styles)(App);
