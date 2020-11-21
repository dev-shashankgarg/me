import React from 'react';
import { makeStyles, darken } from '@material-ui/core'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx'

import EmailValidator from 'email-validator';
import { generate } from '../core/emailTemplate'
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        //backgroundImage: "linear-gradient(119.0954680287216deg, rgba(74, 77, 84,1) 6.654947916666667%,rgba(66, 69, 76,1) 19.321940104166668%,rgba(49, 52, 60,1) 47.21256510416667%,rgba(40, 44, 52,1) 62.436197916666664%)",
        backgroundColor: "#222831",
        //paddingTop: "32px"
    },
    mailIcon: {
        fontSize: "48px",
        color: "#f6f5f5"
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
    textOpacity: {
        opacity: "0.5"
    },
    emailFormContainer: {
        background: "url(../assets/images/contact_bg.jpg) center center no-repeat",
        backgroundSize: "100% cover",
        paddingTop: "16px"
    },
    emailFormRow: {
        paddingTop: "10px"
    },
    emailButtonRow: {
        padding: "20px 0px"
    },
    textField: {
        fontSize: theme.fontSize.md,
        fontFamily: "Montserrat, sans-serif",
    },
    emailInput: {
        backgroundColor: darken("#f6f5f5", 0.2),
        color: "#282c34"
    },
    footer: {
        alignItems: "center",
        paddingTop: "10px",
        backgroundColor: "#222831"
    }
}));

const ContactPage = () => {
    const classes = useStyles();

    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant, message) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, { variant });
    };

    const defaultForm = {
        name: {
            value: "",
            invalid: false
        },
        email: {
            value: "",
            invalid: false
        },
        subject: {
            value: "",
            invalid: false
        },
        message: {
            value: "",
            invalid: false
        }
    }
    const [form, setForm] = React.useState(defaultForm);

    const handleSend = () => {
        if (!EmailValidator.validate(form.email.value)) {
            setForm({
                ...form, email: {
                    ...form.email,
                    invalid: true
                }
            });
            return;
        }
        if (!form.name.value) {
            setForm({
                ...form, name: {
                    ...form.name,
                    invalid: true
                }
            });
            return;
        }
        if (!form.subject.value) {
            setForm({
                ...form, subject: {
                    ...form.subject,
                    invalid: true
                }
            });
            return;
        }
        if (!form.message.value) {
            setForm({
                ...form, message: {
                    ...form.message,
                    invalid: true
                }
            });
            return;
        }

        window.Email.send({
            SecureToken: "310ff987-3f7a-4c6e-8911-fe0e6f21f354",
            To: 'shashankgarg.tu@gmail.com',
            From: "shashankgarg.tu@gmail.com",
            Subject: "[shashankgarg.io]",
            Body: generate(form.subject.value, form.name.value, form.email.value, form.message.value)
        }).then((message) => {
            if (message && message.toLowerCase().includes("ok")) {
                handleClickVariant('success', 'I have recieved your message. Thanks for reaching out :)')();
                setForm({ ...defaultForm });
            } else {
                handleClickVariant('error', 'Something went wrong :(')();
                handleClickVariant('info', 'Please reach out on my below listed email address')();
                handleClickVariant('info', 'shashankgarg.tu@gmail.com')();
            }
        }
        );
    }

    return (<React.Fragment>
        <Grid container className={classes.root} id="contact">
            <Grid item xs={12}>
                <Grid container alignItems="center" justify="center" className={classes.emailFormContainer}>
                    <Grid item xs={12} style={{ paddingTop: "32px" }}>
                        <Grid container alignItems="center" justify="center" >
                            <Grid item xs={12}>
                                <Grid container alignItems="center" justify="center" >
                                    <Grid item><MailIcon className={classes.mailIcon} /></Grid>
                            &nbsp;
                            &nbsp;
                            <Grid item><Typography className={clsx(classes.textBase, classes.textLg)}>Contact Me</Typography></Grid></Grid>
                            </Grid>
                            <Grid item><blockquote><Typography className={clsx(classes.textBase, classes.textMd, classes.textOpacity)}>My Golden Rule of Networking is simple: Don't keep score.</Typography></blockquote></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className={classes.emailFormRow}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={4} md={2}><Typography className={clsx(classes.textBase, classes.textMd)}>Name <span className={classes.textRed}>*</span></Typography></Grid>
                            <Grid item xs={8} md={4} ><TextField className={classes.textField} fullWidth variant="outlined" size="small"
                                InputProps={{ className: clsx(classes.textBase, classes.textMd, classes.emailInput) }}
                                value={form.name.value}
                                error={form.name.invalid}
                                onChange={(event) => {
                                    setForm({
                                        ...form, name: {
                                            ...form.name,
                                            value: event.target.value,
                                            invalid: false
                                        }
                                    });
                                }}
                                helperText={form.name.invalid && "Please provide appropriate name"}
                            ></TextField></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className={classes.emailFormRow}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={4} md={2}><Typography className={clsx(classes.textBase, classes.textMd)}>Email <span className={classes.textRed}>*</span></Typography></Grid>
                            <Grid item xs={8} md={4}><TextField className={classes.textField} fullWidth variant="outlined" size="small"
                                InputProps={{ className: clsx(classes.textBase, classes.textMd, classes.emailInput) }}
                                value={form.email.value}
                                error={form.email.invalid}
                                onChange={(event) => {
                                    setForm({
                                        ...form, email: {
                                            ...form.email,
                                            value: event.target.value,
                                            invalid: false
                                        }
                                    });
                                }}
                                helperText={form.email.invalid && "Please provide appropriate email id"}
                            ></TextField></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className={classes.emailFormRow}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={4} md={2} ><Typography className={clsx(classes.textBase, classes.textMd)}>Subject <span className={classes.textRed}>*</span></Typography></Grid>
                            <Grid item xs={8} md={4} ><TextField className={classes.textField} fullWidth variant="outlined" size="small"
                                InputProps={{ className: clsx(classes.textBase, classes.textMd, classes.emailInput) }}
                                value={form.subject.value}
                                error={form.subject.invalid}
                                onChange={(event) => {
                                    setForm({
                                        ...form, subject: {
                                            ...form.subject,
                                            value: event.target.value,
                                            invalid: false
                                        }
                                    });
                                }}
                                helperText={form.subject.invalid && "Please provide appropriate subject"}
                            ></TextField></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className={classes.emailFormRow}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={4} md={2} ><Typography className={clsx(classes.textBase, classes.textMd)}>Message <span className={classes.textRed}>*</span></Typography></Grid>
                            <Grid item xs={8} md={4} ><TextField className={classes.textField} size="small"
                                InputProps={{ className: clsx(classes.textBase, classes.textMd, classes.emailInput) }}
                                fullWidth variant="outlined" multiline rows={10} rowsMax={10}
                                value={form.message.value}
                                error={form.message.invalid}
                                onChange={(event) => {
                                    setForm({
                                        ...form, message: {
                                            ...form.message,
                                            value: event.target.value,
                                            invalid: false
                                        }
                                    });
                                }}
                                helperText={form.message.invalid && "Please provide appropriate message"}
                            ></TextField></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} className={classes.emailButtonRow}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={4} md={2}></Grid>
                            <Grid item xs={8} md={4}><Button variant="contained" size="small" startIcon={<SendIcon />} onClick={handleSend}>Send</Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.footer}>
                <Grid container alignItems="center" justify="center" direction={"column"}>
                    <Grid item> <Typography className={clsx(classes.textBase, classes.textMd, classes.textOpacity)}>© 2020 Shashank Garg. All Rights Reserved</Typography></Grid>
                    <Grid item> <Typography className={clsx(classes.textBase, classes.textMd, classes.textOpacity)}>Bengaluru , 560102 , KA , IN</Typography></Grid>
                    <Grid item> <Typography className={clsx(classes.textBase, classes.textMd, classes.textOpacity)}>&#128231;&nbsp;shashankgarg.tu@gmail.com</Typography></Grid>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment >);
}

export default ContactPage;