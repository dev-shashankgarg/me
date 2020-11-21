import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Chip, Typography } from '@material-ui/core'
import workImage from '../library/images/work.png'
import walmartImage from '../library/images/walmart.jpeg'

import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "16px 0px",
        backgroundImage: "linear-gradient(90deg, rgba(245, 237, 237,0.8) 20.25%,rgba(245, 237, 237,0.8) 80.25%)"
    },
    icon: {
        width: "25px",
        heigh: "25px"
    },
    workContainer: {
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
    textMd: {
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px"
        },
    },
    textLg: {
        fontSize: theme.fontSize.lg,
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.fontSize.md
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
    workImage: {
        height: "48px",
        width: "48px"
    },
    companyImage: {
        height: "32px",
        width: "32px"
    }
}));

const WorkPage = () => {

    const classes = useStyles();

    const generate = (item) => {
        return <Grid item xs={11}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item><img src={item.imageSrc} className={classes.companyImage} /></Grid>
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
            <Grid item xs={12} md={3} >  <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <img src={workImage} className={classes.workImage} />
                </Grid>
                <Grid item>
                    <Typography className={clsx(classes.textBase, classes.textLg, classes.textUnderline)}>WORK HISTORY</Typography>
                </Grid>
            </Grid></Grid>
            <Grid item xs={10} md={7}>
                <Grid container alignItems="center" justify="center" spacing={1} className={classes.workContainer}>
                    {[{
                        title: "Walmart Labs",
                        imageSrc: walmartImage,
                        location: "Bengaluru",
                        subtitle: "Software Engineer III",
                        startTime: "August , 2017",
                        endTime: "Present",
                        description: ["Implemented Robust API services for processing Catalog & Recipes data for ASDA groceries e-commerce website (UK based retailer)",
                            "Implemented Product Information Management (PIM) tool for our business partners to help them make decisions on Products, Recipes & related meta-data listed on the website"]
                    }].map(item => generate(item))}
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>)
}

export default WorkPage
