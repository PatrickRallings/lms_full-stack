import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Grid,
    ThemeProvider,
} from "@mui/material";
import {OrangeCFHTheme} from "../../../style/themes/OrangeCFHTheme";

function CourseContentForm({course}) {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('The title cannot be left blank.'),
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
                <Grid container >

                </Grid>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Create Course
                    </Button>
                </Box>
            </Fragment>
        </ThemeProvider>

    );
}

export default CourseContentForm;