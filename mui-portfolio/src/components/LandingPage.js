import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Chip, Tooltip, IconButton, darken } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ReactComponent as StackOverflowIcon } from '../library/graphics/stack-overflow.svg';
import { ReactComponent as LeetcodeIcon } from '../library/graphics/leetcode.svg';
import { ReactComponent as CodeChefIcon } from '../library/graphics/codechef.svg';
import { ReactComponent as CodeforcesIcon } from '../library/graphics/codeforces.svg';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        background: "url(../assets/images/bg.jpg) center center no-repeat",
        backgroundSize: "100% cover"
    },
    nameText: {
        fontSize: theme.fontSize.xxxl,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.xl,
        },
        fontFamily: "Montserrat, sans-serif",
        color: "#FDF8F5",

    },
    greetingText: {
        fontSize: theme.fontSize.xl,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.md,
        },
        fontFamily: "Montserrat, sans-serif",
        color: "#f6f5f5",
    },
    jobTitleText: {
        fontSize: theme.fontSize.md,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.sm,
        },
        fontFamily: "Montserrat, sans-serif",
        color: "#f6f5f5",
    },
    textShadow: {
        textShadow: "3px 4px 5px #000"
    },
    textRed: {
        color: "#e94560",
    },
    titleChip: {
        color: "#f6f5f5",
        borderColor: "#f6f5f5",
        textShadow: "3px 4px 5px #000"
    },
    profileLinkContainer: {
        marginTop: "64px",
        backgroundColor: darken('#282c34', .25),
        borderRadius: "100px"
    },
    redirectIcons: {
        color: "#e8e8e8",
        '&:hover': {
            color: '#f05454',
        },
    },
    icon: {
        height: 24,
        width: 24,
        [theme.breakpoints.down('sm')]: {
            height: 16,
            width: 16,
        },
    },
    expandIcon: {
        height: 64,
        width: 64,
        '&:hover': {
            color: '#f05454',
            transform: "scale(1.3)"
        },
        [theme.breakpoints.down('sm')]: {
            height: 56,
            width: 56,
        },
    }
}));

const LandingPage = () => {

    const classes = useStyles();

    const goToPage = (page) => {
        window.scrollTo({
            behavior: "smooth",
            top:
                document.getElementById(page).getBoundingClientRect().top -
                document.body.getBoundingClientRect().top
        });
    }

    return <React.Fragment>
        <Grid container className={classes.root} direction={"column"} justify={"space-between"} >
            <Grid item></Grid>
            <Grid item>
                <Grid container justify={"center"} alignItems="center">
                    <Grid item>
                        <Grid container>
                            <Grid item sm={12}>
                                <Typography className={clsx(classes.greetingText)}><span className={classes.textRed} >{">>"}</span> Hello I'm</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sm={12}>
                                <Typography className={clsx(classes.nameText, classes.textShadow)}>SHASHANK GARG</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Chip variant="outlined" color="primary" icon={<FaceIcon className={classes.icon} />} className={classes.titleChip}
                                    label={<Typography className={clsx(classes.jobTitleText)}>Software Engineer</Typography>} /></Grid>
                            <Grid>
                                <Chip variant="outlined" color="primary" icon={<LocationOnIcon className={classes.icon} />} className={classes.titleChip}
                                    label={<Typography className={clsx(classes.jobTitleText)}>Bengaluru</Typography>} />
                            </Grid>
                        </Grid>
                        <Grid container justify={"flex-start"} alignItems="baseline" className={classes.profileLinkContainer}>
                            <Grid item>
                                <Tooltip title="Linkedin">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://www.linkedin.com/in/shashank-garg-381445bb/', "_blank")}>
                                        <LinkedInIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Github">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://github.com/dev-shashankgarg', "_blank")}>
                                        <GitHubIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Leetcode">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://leetcode.com/wormx/', "_blank")}>
                                        <LeetcodeIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Stack Overflow">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://stackoverflow.com/users/14519758/shashank-garg', "_blank")}>
                                        <StackOverflowIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="CodeChef">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://www.codechef.com/users/wormx', "_blank")}>
                                        <CodeChefIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Codeforces">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://codeforces.com/profile/wormx', "_blank")}>
                                        <CodeforcesIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Facebook">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://www.facebook.com/profile.php?id=100012335351157', "_blank")}>
                                        <FacebookIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Instagram">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://www.instagram.com/_shashankgarg/', "_blank")}>
                                        <InstagramIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Twitter">
                                    <IconButton className={classes.redirectIcons} onClick={() => window.open('https://twitter.com/wormcruzer', "_blank")}>
                                        <TwitterIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justify={"center"} alignItems="center">
                    <Tooltip title="Know More!">
                        <IconButton className={classes.redirectIcons} onClick={() => { goToPage("about") }}>
                            <ExpandMoreIcon className={classes.expandIcon} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>


    </React.Fragment >
}

export default LandingPage;