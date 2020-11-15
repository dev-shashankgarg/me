import React from 'react';
import ReactDOM from 'react-dom';
import AppDashboard from './AppDashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  fontSize: {
    xxl: '48px',
    xl: "32px",
    lg: "24px",
    md: "16px",
    sm: "8px"
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282c34",
    height: "100%",
  }
}));

const Bundle = () => {
  const classes = useStyles();

  return (
    <React.StrictMode>
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <div className={classes.root}>
            <AppDashboard />
          </div>
        </ThemeProvider>
      </React.Fragment>
    </React.StrictMode>
  );
}

ReactDOM.render(<Bundle />, document.getElementById('root'));

