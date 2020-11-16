import React from 'react'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
}));


const AppDashboard = () => {
    return <React.Fragment>
        <LandingPage />
        <AboutPage />
    </React.Fragment>
}

export default AppDashboard;
