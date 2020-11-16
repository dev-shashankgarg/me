import React from 'react'
import { Grid, Typography, Button, Divider } from '@material-ui/core'
import fileSaver from "file-saver"
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import profileImage from '../library/images/profile.png'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(119.0954680287216deg, rgba(74, 77, 84,1) 6.654947916666667%,rgba(66, 69, 76,1) 19.321940104166668%,rgba(49, 52, 60,1) 47.21256510416667%,rgba(40, 44, 52,1) 62.436197916666664%)",
        padding: "48px 0px"
    },
    profileImage: {
        height: "200px",
        width: "200px",
        [theme.breakpoints.down("sm")]: {
            height: "150px",
            width: "150px",
        },
    },
    textBase: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "12px",
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.fontSize.sm
        },
        textShadow: "3px 4px 5px #000",
        color: "#f6f5f5",
    },
    textRed: {
        color: "#e94560",
    },
    textMd: {
        fontSize: theme.fontSize.md,
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px"
        },
        opacity: "0.9"
    },
    textLg: {
        fontSize: theme.fontSize.lg,
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.fontSize.md
        },
    },
    aboutMeContainer: {
        padding: "24px"
    },
    buttonContainer: {
        padding: "16px 0px"
    }
}));

const AboutPage = () => {

    const classes = useStyles();
    const [lock, setLock] = React.useState(false);

    const handleDownload = () => {
        try {
            setLock(true);
            fileSaver.saveAs(
                process.env.PUBLIC_URL + "/assets/files/shashankgarg_resume.pdf",
                "shashankgarg_resume.pdf"
            );
        } catch (exception) { }
        finally {
            setLock(false);
        }

    }

    return (<React.Fragment>
        <Grid container className={classes.root} id={"about"}>
            <Grid item sm={12}>
                <Grid container justify={"center"} alignItems="center">
                    <Grid item sm={2}>
                        <Grid container justify="center">
                            <Grid item><img src={profileImage} className={classes.profileImage}></img></Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container direction={"column"} spacing={1} className={classes.aboutMeContainer}>
                            <Grid item>
                                <Typography className={clsx(classes.textBase, classes.textRed)}>DISCOVER</Typography>
                                <Typography className={clsx(classes.textBase, classes.textLg)}>About Me</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={clsx(classes.textBase, classes.textMd)}>Hello there &#128400; I am shashank and welcome to my little corner on the internet. &#128522;
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={clsx(classes.textBase, classes.textMd)}>
                                    By profession i'm a software engineer &#128104;&#8205;&#128187; specialised in frontend and backend development with 3+ years of experience designing and building complex web applications.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={clsx(classes.textBase, classes.textMd)}>I enjoy creating things that are both useful and elegant.
                            </Typography>
                            </Grid>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Grid item>
                                <Typography className={clsx(classes.textBase, classes.textMd)}>
                                    Do you have a project, idea or problem you'd like to discuss?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={3} className={classes.buttonContainer}>
                                    <Grid item> <Button variant="contained" size="small" startIcon={<MailIcon />}>Contact Me</Button></Grid>
                                    <Grid item><Button variant="contained" size="small" startIcon={<CloudDownloadIcon />} onClick={handleDownload} disabled={lock}>Download Resume</Button></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>);
}

export default AboutPage;