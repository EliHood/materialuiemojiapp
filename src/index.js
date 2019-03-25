import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    shadows: ["none"],
    palette: {
        primary: {
            light: '#757ce8',
            main: '#7986cb',
        },
        secondary: {
          main: '#f1f1f1',
        },
      },
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider >
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
