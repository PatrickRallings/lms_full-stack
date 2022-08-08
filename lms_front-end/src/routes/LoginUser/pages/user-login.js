import LoginUserForm from "../components/LoginUserForm";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import {useState} from "react";
import MuiAlert from '@mui/material/Alert';

const LoginUser = ({passUser}) => {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [unsuccessfulLogin, setUnsuccessfulLogin] = useState(false);

    const loginUnsuccessful = () => {
        setUnsuccessfulLogin(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setUnsuccessfulLogin(false);
    };

    return (
        <div className={"page-container"}>
            <div className={"login-container"}>
                <div className={"container-heading"}>
                    <span>Login to CFH Account</span>
                </div>
                <div className={"login-form-body"}>
                    <LoginUserForm
                        loginUnsuccessful={loginUnsuccessful}
                        passUser={passUser}
                    />
                </div>
            </div>
            <Snackbar open={unsuccessfulLogin} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    The information you have entered is incorrect, please try again.
                </Alert>
            </Snackbar>
        </div>
    );
}

export default LoginUser;