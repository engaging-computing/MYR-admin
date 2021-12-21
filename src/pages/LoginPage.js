import React, { Component } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {
    Notification,
    userLogin as userLoginAction
} from 'react-admin';
import { Form, Field } from "react-final-form";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    TextField,
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { cyan, pink } from "@mui/material/colors"
import { LockOutlined as LockIcon } from "@mui/icons-material"

const theme = createTheme({
    palette: {
        primary:{
            main: cyan[500]
        },
        secondary:{
            main: pink["A200"]
        }
    }
});

const style = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main
    },
    card:{
        minWidth: 300,
        padding: '0 1em 1em 1em',
    },
    input:{
        display: "flex",
    },
    infoText: {
        textAlign: 'center',
        marginTop: '1em',
        color: '#999'
    },
    avatar: {
        margin: "1em auto",
        width: "60px",
        height:"60px",
        backgroundColor: theme.palette.secondary.main
    }
};

class LoginPage extends Component {
    /**
     * Functions called when user interact with textfield to validate their input
     *  Right now, it just check if input is empty or not
     *  On validate -> return empty objs
     *  On not validate -> return objs w/ error msgs
     */
    validate= (values) => {
        const errors = {};
        if (!values.email) errors.email = "Please enter an email.";
        if (!values.password) errors.password = "Please enter a password.";
        return errors;
    }
    /**
     * Functions called when user click submit button and passed validation function
     *  email and password are passed into authProvider and sent it to backend to check
     *  On Success -> Redirect to Dashboard
     *  On Failure -> Stay at same path ('/')
     */
    onSubmit = ({ email, password }) => {
        const { userLogin, location } = this.props;
        userLogin({ email, password }, location.state ? location.state.nextPathname : '/');
    }
    /**
     * A Textfield Component for Email and Password Field
     */
    inputComponent = (props)=>{
        //Is the textfield is focused(active) and pass the validate? If not shows error label
        //Error is string from validate function, so it has to converted to Boolean in error attribute.
        const { active, error } = props.meta;
        //inputProps is specifically specified so it will invoked onChange function and re-render the components
        return (<TextField label={props.label} variant="standard" margin="dense" error={active && Boolean(error)} helperText={error ? error : " "} inputProps={props.input} {...props}/>);
    }
    /**
     * Render Login Page
     */
    render(){
        return (
            <ThemeProvider theme={theme}>
                <div style={style.main}>
                    <Card style={style.card}>
                        <div>
                            <Avatar style={style.avatar}>
                                <LockIcon fontSize="large"/>
                            </Avatar>
                        </div>
                        <p style={style.infoText}>
                            For administrative use only<br/>To access MYR, please visit <a href="https://learnmyr.org">LearnMYR.org</a>.</p>
                        <Form
                            onSubmit={this.onSubmit}
                            validate={this.validate}
                            render={({handleSubmit,submitting})=>(
                                <form onSubmit={handleSubmit}>
                                    <Field style={style.input} label="Email" name="email" component={this.inputComponent} autoComplete="email"/>
                                    <div/>
                                    <Field style={style.input} type="password" label="Password" name="password" component={this.inputComponent} autoComplete="password"/>
                                    <div/>
                                    <CardActions disableSpacing>
                                        <Button variant="contained" type="submit" disabled={submitting} fullWidth>Sign In</Button>
                                    </CardActions>
                                </form>)
                            }
                        />
                    </Card>
                    <Notification/>
                </div>
            </ThemeProvider>
        );    
    }
}

LoginPage.propTypes = {
    authClient: PropTypes.func,
    previousRoute: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
    userLogin: bindActionCreators(userLoginAction,dispatch)
});

export default connect(null,mapDispatchToProps)(LoginPage);