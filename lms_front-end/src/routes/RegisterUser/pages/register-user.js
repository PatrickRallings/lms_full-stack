import RegisterUserForm from "../components/RegisterUserForm"
import {useState} from "react";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const RegisterUser = () => {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [unsuccessfulRegistration, setUnsuccessfulRegistration] = useState(false);

    const [successfulRegistration, setSuccessfulRegistration] = useState(false);

    const registrationUnsuccessful = () => {
        setUnsuccessfulRegistration(true)
    }

    const registrationSuccessful = () => {
        setSuccessfulRegistration(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setUnsuccessfulRegistration(false);
        setSuccessfulRegistration(false)
    };

    return (
        <div className={"page-container"}>
            <div className={"register-container"}>
                <div className={"container-heading"}>
                    <span>Create CFH Account</span>
                </div>
                <div className={"register-form-body"}>
                    <RegisterUserForm
                        userExistsWithThisEmail={registrationUnsuccessful}
                        successfulRegistration={registrationSuccessful}
                    />
                </div>
            </div>
            <Snackbar open={unsuccessfulRegistration} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    An account with this email already exists. Please login.
                </Alert>
            </Snackbar>
            <Snackbar open={successfulRegistration} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your account has been registered!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default RegisterUser;