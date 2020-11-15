import React from 'react'
import { Typography, Grid, Tooltip, darken } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import profileImage from '../library/images/profile.png'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as StackOverflowIcon } from '../library/graphics/stack-overflow.svg';
import { ReactComponent as LeetcodeIcon } from '../library/graphics/leetcode.svg';
import { ReactComponent as CodeChefIcon } from '../library/graphics/codechef.svg';
import { ReactComponent as CodeforcesIcon } from '../library/graphics/codeforces.svg';

const useStyles = makeStyles(theme => {
    console.log(theme);
    return {
        container: {
            paddingTop: theme.spacing(2)
        },
        welcomeText: {
            fontWeight: "bold",
            fontSize: theme.fontSize.xxl,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.fontSize.xl,
            },
            fontFamily: "Montserrat, sans-serif",
            color: "#e8e8e8"
        },
        welcomeText2: {
            fontSize: theme.fontSize.xl,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.fontSize.lg,
            },
            fontFamily: "Montserrat, sans-serif",
            color: "#e8e8e8"
        },
        welcomeText3: {
            fontSize: theme.fontSize.lg,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.fontSize.md,
            },
            fontFamily: "Montserrat, sans-serif",
            color: "#e8e8e8"
        },
        colonText: {
            color: "#f05454"
        },
        profileImage: {
            height: "140px"
        },
        redirectIcons: {
            color: "#e8e8e8",
            '&:hover': {
                color: '#f05454',
            },
        },
        customRedirectIcons: {
            height: 22,
            width: 22,
            color: "#e8e8e8",
            '&:hover': {
                color: '#f05454',
            },
        },
        profileLinkContainer: {
            backgroundColor: darken('#282c34', .15),
            borderRadius: "16px"
        }
    }
});

const WelcomeText = () => {

    const classes = useStyles();

    return (<React.Fragment>
        <Grid container className={classes.container} justify={"center"} alignItems="center" spacing={2}>
            <Grid item>
                <img className={classes.profileImage} src={profileImage}></img>
            </Grid>
            <Grid item>
                <Typography className={classes.welcomeText2} align="justify">{`cout`}<span className={classes.colonText} >{` << `}</span>{`Hello, I'm`}</Typography>
                <Typography className={classes.welcomeText} align="justify">SHASHANK GARG <span className={classes.colonText} >;</span></Typography>
                <Typography className={classes.welcomeText3} align="justify">Software Engineer</Typography>
                <Grid container justify={"flex-start"} alignItems="baseline" className={classes.profileLinkContainer}>
                    <Grid item>
                        <Tooltip title="Linkedin">
                            <IconButton className={classes.redirectIcons} onClick={() => window.open('https://www.linkedin.com/in/shashank-garg-381445bb/', "_blank")}>
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Github">
                            <IconButton className={classes.redirectIcons} onClick={() => window.open('https://github.com/dev-shashankgarg', "_blank")}>
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Leetcode">
                            <IconButton className={classes.redirectIcons} onClick={() => window.open('https://leetcode.com/wormx/', "_blank")}>
                                <LeetcodeIcon className={classes.customRedirectIcons} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Stack Overflow">
                            <IconButton className={classes.redirectIcons} onClick={() => window.open('https://stackoverflow.com/users/14519758/shashank-garg', "_blank")}>
                                <StackOverflowIcon className={classes.customRedirectIcons} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="CodeChef">
                            <IconButton className={classes.redirectIcons} onClick={() => window.open('https://www.codechef.com/users/wormx', "_blank")}>
                                <CodeChefIcon className={classes.customRedirectIcons} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Codeforces">
                            <IconButton className={classes.redirectIcons} onClick={() => window.open('https://codeforces.com/profile/wormx', "_blank")}>
                                <CodeforcesIcon className={classes.customRedirectIcons} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>);
}

export default WelcomeText;

