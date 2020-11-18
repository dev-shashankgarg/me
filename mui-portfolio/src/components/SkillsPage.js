import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Chip, Typography, Divider } from '@material-ui/core'
import { ReactComponent as ReactJsIcon } from '../library/graphics/react.svg';
import { ReactComponent as JavaIcon } from '../library/graphics/java.svg';
import { ReactComponent as CamelIcon } from '../library/graphics/camel.svg';
import { ReactComponent as CassandraIcon } from '../library/graphics/cassandra.svg';
import { ReactComponent as SpringIcon } from '../library/graphics/spring.svg';
import { ReactComponent as KafkaIcon } from '../library/graphics/kafka.svg';
import { ReactComponent as MSSqlIcon } from '../library/graphics/mssql.svg';
import { ReactComponent as OracleSqlIcon } from '../library/graphics/oraclesql.svg';
import { ReactComponent as NodeIcon } from '../library/graphics/nodejs.svg';
import { ReactComponent as JavascriptIcon } from '../library/graphics/javascript.svg';
import { ReactComponent as CssIcon } from '../library/graphics/css.svg';
import { ReactComponent as GitIcon } from '../library/graphics/git.svg';
import { ReactComponent as HtmlIcon } from '../library/graphics/html5.svg';

import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "32px 0px",
        backgroundImage: "linear-gradient(114.95185118623829deg, rgba(245, 233, 235,0.4) 41.881510416666664%,rgba(244, 232, 235,0.4) 41.881510416666664%,rgba(230, 232, 250,0.4) 92.14192708333331%)",
    },
    icon: {
        width: "25px",
        heigh: "25px"
    },
    skillsContainer: {
        padding: "16px"
    },
    skillChip: {
        borderColor: "#282c34"
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
    textUnderline: {
        textDecoration: "underline",
        textDecorationColor: "#e94560",
        textUnderlinePosition: "under"

    }
}));

const SkillsPage = () => {

    const classes = useStyles();


    const generate = (tag) => {
        return (
            <Grid item key={tag.label}>
                <Chip label={<Typography className={clsx(classes.text)}>{tag.label}</Typography>}
                    variant="outlined" className={classes.skillChip} icon={tag.icon} />
            </Grid>);
    }

    return (<React.Fragment>
        <Grid container justify="center" alignItems="center" className={classes.root} id={"skills"}>
            <Grid item sm={3} ><Typography className={clsx(classes.textBase, classes.textLg, classes.textUnderline)}>TOOLBOX</Typography></Grid>
            <Grid item sm={7}>
                <Grid container alignItems="center" justify="center" spacing={1} className={classes.skillsContainer}>
                    {[{ label: "Java", icon: <JavaIcon className={classes.icon} /> },
                    { label: "Springboot", icon: <SpringIcon className={classes.icon} /> },
                    { label: "Apache Kafka", icon: <KafkaIcon className={classes.icon} /> },
                    { label: "Apache Camel", icon: <CamelIcon className={classes.icon} /> },
                    { label: "Apache Cassandra", icon: <CassandraIcon className={classes.icon} /> },
                    { label: "Microsoft SQL", icon: <MSSqlIcon className={classes.icon} /> },
                    { label: "Oracle SQL", icon: <OracleSqlIcon className={classes.icon} /> },
                    { label: "React", icon: <ReactJsIcon className={classes.icon} /> },
                    { label: "Node", icon: <NodeIcon className={classes.icon} /> },
                    { label: "Javascript", icon: <JavascriptIcon className={classes.icon} /> },
                    { label: "HTML5", icon: <HtmlIcon className={classes.icon} /> },
                    { label: "CSS", icon: <CssIcon className={classes.icon} /> },
                    { label: "Git", icon: <GitIcon className={classes.icon} /> }
                    ].map(item => {
                        return generate(item);
                    })}
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>)
}

export default SkillsPage
