import React from 'react'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import WorkPage from './components/WorkPage'
import EducationPage from './components/EducationPage'
import ContactPage from './components/ContactPage'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    divider: {
        background: "#282c34",
        opacity: 0.5,
    }
}));


const AppDashboard = () => {
    const classes = useStyles();

    const divider = () => {
        return <Grid container justify="center">
            <Grid item sm={11}>
                <Divider className={classes.divider}></Divider>
            </Grid>
        </Grid>
    }

    return <React.Fragment>
        <LandingPage />
        <AboutPage />
        <SkillsPage />
        {divider()}
        <WorkPage />
        {divider()}
        <EducationPage />
        <ContactPage />
    </React.Fragment>
}

export default AppDashboard;
