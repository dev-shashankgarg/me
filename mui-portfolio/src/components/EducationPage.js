import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Chip, Typography } from '@material-ui/core'

import educationImage from '../library/images/education.png'
import thaparImage from '../library/images/thapar.png'


import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "16px 0px",
        backgroundImage: "linear-gradient(114.95185118623829deg, rgba(245, 233, 235,0.4) 41.881510416666664%,rgba(244, 232, 235,0.4) 41.881510416666664%,rgba(230, 232, 250,0.4) 92.14192708333331%)",
    },
    icon: {
        width: "25px",
        heigh: "25px"
    },
    educationContainer: {
        paddingTop: "16px"
    },
    text: {
        fontSize: theme.fontSize.md,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.sm,
        },
        fontFamily: "Montserrat, sans-serif",
        color: "#282c34",
    },
    textBase: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "12px",
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.fontSize.sm
        },
        textShadow: "3px 4px 5px #FFF",
        color: "#282c34",
    },
    textLg: {
        fontSize: theme.fontSize.lg,
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.fontSize.md
        },
    },
    textMd: {
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px"
        },
    },
    textUnderline: {
        textDecoration: "underline",
        textDecorationColor: "#e94560",
        textUnderlinePosition: "under"
    },
    textBold: {
        fontWeight: "bold"
    },
    textLighten: {
        opacity: 0.7
    },
    educationImage: {
        height: "48px",
        width: "48px"
    },
    collegeImage: {
        height: "32px",
        width: "32px"
    }
}));

const EducationPage = () => {

    const classes = useStyles();

    const generate = (item) => {
        return <Grid item xs={11}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item><img src={item.imageSrc} className={classes.collegeImage} /></Grid>
                <Grid item><Typography className={clsx(classes.textBase, classes.textLg, classes.textBold)}>{item.title}</Typography></Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
                <Grid item><Typography className={clsx(classes.textBase, classes.textMd, classes.textLighten)}>{`${item.subtitle}`}&nbsp;</Typography></Grid>
                <Grid item><Typography className={clsx(classes.textBase, classes.textMd, classes.textLighten)}>&#9679;&nbsp;{`${item.location}`}&nbsp;</Typography></Grid>
                <Grid item><Typography className={clsx(classes.textBase, classes.textMd, classes.textLighten)}>&#9679;&nbsp;{`${item.startTime} -  ${item.endTime}`}</Typography></Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
                {item.description.map(desc => {
                    return <Grid item><Typography className={clsx(classes.textBase, classes.textMd, classes.textLighten)}>&#9679;&nbsp;{`${desc}`}</Typography></Grid>
                })}
            </Grid>
        </Grid>
    }

    return (<React.Fragment>
        <Grid container justify="center" alignItems="center" className={classes.root} id={"skills"}>
            <Grid item xs={12} md={3} >
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <img src={educationImage} className={classes.educationImage} />
                    </Grid>
                    <Grid item>
                        <Typography className={clsx(classes.textBase, classes.textLg, classes.textUnderline)}>EDUCATION</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10} md={7}>
                <Grid container alignItems="center" justify="center" spacing={1} className={classes.educationContainer}>
                    {[{
                        title: "Thapar University",
                        imageSrc: thaparImage,
                        location: "Patiala",
                        subtitle: "B.E. Computer Engineering",
                        startTime: "August , 2013",
                        endTime: "July , 2017",
                        description: ["Awarded 100% tuition fee waiver scholarship to continued academic excellence for all 4 years (2013 - 2017)",
                            "Graduated with 9.01 CGPA (10 - Point Scale)"]
                    }].map(item => generate(item))}
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>)
}

export default EducationPage
