import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();
    const { contact } = props;

    return (
        <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Contact
            </Typography>
            <h3>
                <EmailIcon />
                doowankim11@gmail.com
            </h3>
            {contact.map(network => (
                <Link display="block" variant="body1" href="https://github.com/doowankim/portfolio3" key={network}>
                    <Grid container direction="row" spacing={1} alignItems="center">
                        <Grid item>
                            <network.icon />
                        </Grid>
                        <Grid item>{network.name}</Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
    );
}

Sidebar.propTypes = {
    social: PropTypes.array
};