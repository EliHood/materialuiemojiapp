import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Emoji from './components/Emoji/Emoji';
import JSEMOJI from 'emoji-js';
import EmojiList from './components/EmojiList/emojiList';
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
        position: 'relative',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    paper: {
        padding: theme.spacing.unit * 2,
        flex:1,
        textAlign: 'left',
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
            text: this.state.text + emoji,
        });
        // console.log(this.state.items)
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
    
    onSubmit = (e) => {
        e.preventDefault();
        this.setState(
          {
            text: this.state.text,
            items: [...this.state.items, this.state.text]
          },
          () => console.log(this.state.items)
        );
   
    }
    

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Navbar/>
                <Grid container spacing={12}>
                    <Grid item xs={12} md={6} className={classes.myitem}>
                        <Paper  className={classes.paper}>
                            <Typography variant="h2" component="h2">
                                Insert An Emoji
                            </Typography>
                          {/* Begin Form */}
                         <Emoji 
                            text={this.state.text} 
                            onChange={this.onChange} 
                            emojiToggle={this.state.emojiToggle}
                            emojiClick={this.handleClick}
                            handleButton={this.handleButton}
                            handleShowButton={this.handleButton}
                            onSubmit={this.onSubmit}
                             />
                        </Paper>
                    </Grid>
                                
                {/* items gets passed here as a prop */}
                <EmojiList items={this.state.items} />
                </Grid>
                <Footer/>
            </div>
        );
    }
}
export default withStyles(styles)(App);
