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
import CreateCourseService from "../services/CreateCourseService";

function CreateCourseForm() {

    const [course, setCourse] = useState({
            title: "",
            description: "",
            email: "",
            password: ""
        }
    );

    const handleChange = (e) => {
        setCourse({...course, [e.target.name]: e.target.value})
    }

    const createCourse = () => {
        console.log("Dev - saveUser function initiated")
        CreateCourseService.createCourse(course)
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('The title cannot be left blank.'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    return (
        <ThemeProvider theme={OrangeCFHTheme}>
            <Fragment>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                value = {course.title}
                                label="Course Title"
                                fullWidth
                                margin="dense"
                                {...register('title')}
                                onChange={(e) => handleChange(e)}
                                error={!!errors.title}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.title?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="description"
                                name="description"
                                value = {course.description}
                                label="Course Description"
                                fullWidth
                                multiline
                                rows={4}
                                margin="dense"
                                {...register('description')}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                    </Grid>
                    <Box mt={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit(createCourse)}
                        >
                            Create Course
                        </Button>
                    </Box>
            </Fragment>
        </ThemeProvider>

    );
}

export default CreateCourseForm;