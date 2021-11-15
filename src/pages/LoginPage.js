import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from "react-final-form";
import { connect } from 'react-redux';

import {
    Button,
    Card,
    CardActions,
    TextField,
    Avatar,
} from "@mui/material";

import {
    ThemeProvider,
    createTheme
} from "@mui/material/styles";

import { 
    LockOutlined as LockIcon
} from "@mui/icons-material";

import { 
    cyan,
    pink
} from "@mui/material/colors";

import {
    Notification,
    userLogin as userLoginAction
} from 'react-admin';

//TODO - Create a .CSS files
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        bgcolor:pink["A200"],
        margin: '1em',
        textAlign:"center",
        verticalAlign:"middle",
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
        marginTop:"1em",
    },
    directions: {
        textAlign: 'center',
        marginTop: '1em',
        color: '#999',
    },
};

const renderInput = ({ meta: { touched, error } = {}, input: { ...inputProps }, ...props }) =>
    {
    console.log(touched); 
    console.log(error); 
    return (<TextField
        error={Boolean(touched) && Boolean(error)}
        helperText={error}
        {...inputProps}
        {...props}
        fullWidth
    />); 
};

class LoginForm extends Component {
    //Check if the input on textfields are not empty before submitting
    //Called when user enter either email or password field
    validate= (values) => {
        const errors = {};
        if (!values.username) errors.username = "Please enter an email.";
        if (!values.password) errors.password = "Please enter a password.";
        return errors;
    }

    //called when the user submits the form and all validation passes
    //will not be called if there's validation error
    onSubmit = ({ email, password }) => {
        const { userLogin, location } = this.props;
        userLogin({ email, password }, location.state ? location.state.nextPathname : '/');
    }

    render(){
        return(
        <Form
            onSubmit={this.onSubmit}
            validate={this.validate}>
        {({ handleSubmit,submitting,theme})=>{
            const muiTheme = createTheme(theme);
            return (
                <div style={{ ...styles.main, backgroundColor: cyan[500]}}>
                <Card sx={styles.card}>
                    <Avatar sx={styles.avatar} sizes="60">
                        <LockIcon/>
                    </Avatar>
                <form onSubmit={handleSubmit}>
                    <div style={styles.form}>
                        <p style={styles.directions}>For administrative use only<br></br>
                            To access MYR, please visit <a href="https://learnmyr.org">LearnMYR.org</a>.</p>
                        <div style={styles.input}>
                            <Field
                                component={renderInput}
                                name="username"
                                label="Email"
                                autoComplete="username"
                            />
                        </div>
                        <div style={styles.input}>
                            <Field
                                component={renderInput}
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <CardActions>
                        <Button variant="contained" type="submit" color="primary" disabled={submitting} fullWidth >Sign In</Button>
                    </CardActions>
                </form>
            </Card>
        </div>
            );}}
        </Form>);
    }
}


LoginForm.propTypes = {
    authClient: PropTypes.func,
    previousRoute: PropTypes.string,
    theme: PropTypes.object.isRequired,
};

LoginForm.defaultProps = {
    theme: {},
};

export default connect(null, { userLogin: userLoginAction})(LoginForm);
