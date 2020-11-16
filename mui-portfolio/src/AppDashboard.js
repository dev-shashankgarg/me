import React from 'react'
import LandingPage from './components/LandingPage'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
}));


const AppDashboard = () => {
    return <React.Fragment>
        <LandingPage />
    </React.Fragment>
}

export default AppDashboard;
