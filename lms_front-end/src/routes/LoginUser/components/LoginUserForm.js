import React, {Fragment, useState} from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Grid,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {OrangeCFHTheme} from "../../../style/themes/OrangeCFHTheme";
import LoginUserService from "../services/LoginUserService";
import { useNavigate } from "react-router-dom";

const LoginUserForm = ({loginUnsuccessful}) => {

    const [tempUser, setTempUser] = useState({
            email: "",
            password: ""
        }
    );

    const handleChange = (e) => {
        setTempUser({...tempUser, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();

    const checkUser = () => {
        console.log("Dev - checkUser function initiated")
        LoginUserService.loginUser(tempUser)
            .then(data => {
                if (data.validated === false) {
                    loginUnsuccessful()
                } else if (data.error != null) {
                    console.log("Error: ", data)
                    alert(data.error)
                } else {
                    console.log('Success:', data);
                    sessionStorage.setItem('loggedUser', JSON.stringify(data.user))
                    navigate('/')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
    });

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    return (
        <ThemeProvider theme={OrangeCFHTheme}>
            <Fragment>
                <div>
                    <Grid container spacing={1} justifyContent={"center"}>
                        <Grid item xs={8} sm={8}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                value={tempUser.email}
                                label="Email"
                                fullWidth
                                margin="dense"
                                {...register('email')}
                                onChange={(e) => handleChange(e)}
                                error={!!errors.email}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.email?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={8} >
                            <TextField
                                required
                                id="password"
                                name="password"
                                value={tempUser.password}
                                label="Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register('password')}
                                onChange={(e) => handleChange(e)}
                                error={!!errors.password}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.password?.message}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box mt={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit(checkUser)}
                        >
                            Login
                        </Button>
                    </Box>
                </div>
            </Fragment>
        </ThemeProvider>

    );
}

export default LoginUserForm;