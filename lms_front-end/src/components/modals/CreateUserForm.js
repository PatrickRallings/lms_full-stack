import React, {useState, Fragment} from 'react';
import CreateUserService from "../../services/UserService/CreateUserService";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Paper, Typography, TextField, Box, Grid, FormControlLabel, Checkbox, Button } from "@mui/material";

function CreateUserForm() {

    const [user, setUser] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    );

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const saveUser = () => {
        console.log("Dev - saveUser function initiated")
        CreateUserService.createUser(user)
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Your first name is required'),
        lastName: Yup.string().required('Your last name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    return (
            <Fragment>
                <Paper>
                    <Box px={3} py={2}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    value = {user.firstName}
                                    label="First Name"
                                    fullWidth
                                    margin="dense"
                                    {...register('firstName')}
                                    onChange={(e) => handleChange(e)}
                                    error={!!errors.firstName}
                                />
                                <Typography variant="inherit" color="textSecondary">
                                    {errors.firstName?.message}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    value = {user.lastName}
                                    label="Last Name"
                                    fullWidth
                                    margin="dense"
                                    {...register('lastName')}
                                    onChange={(e) => handleChange(e)}
                                    error={!!errors.lastName}
                                />
                                <Typography variant="inherit" color="textSecondary">
                                    {errors.lastName?.message}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    value = {user.email}
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    value = {user.password}
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    margin="dense"
                                    {...register('confirmPassword')}
                                    error={!!errors.confirmPassword}
                                />
                                <Typography variant="inherit" color="textSecondary">
                                    {errors.confirmPassword?.message}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Controller
                                            control={control}
                                            name="acceptTerms"
                                            defaultValue="false"
                                            inputRef={register()}
                                            render={({ field: { onChange } }) => (
                                                <Checkbox
                                                    color="primary"
                                                    onChange={e => onChange(e.target.checked)}
                                                />
                                            )}
                                        />
                                    }
                                    label={
                                        <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                                            I have read and agree to the Terms *
                                        </Typography>
                                    }
                                />
                                <br />
                                <Typography variant="inherit" color="textSecondary">
                                    {errors.acceptTerms
                                        ? '(' + errors.acceptTerms.message + ')'
                                        : ''}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit(saveUser)}
                            >
                                Register
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Fragment>

    );
}

export default CreateUserForm;