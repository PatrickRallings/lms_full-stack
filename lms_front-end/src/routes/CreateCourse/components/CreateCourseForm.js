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
import ImageModal from "./ImageModal";

function CreateCourseForm({passCourse, courseExists}) {

    const [course, setCourse] = useState({
            title: "",
            description: "",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        }
    );

    const [imageSelected, setImageSelected] = useState(false)

    const imageSourceFromClick = (imageSource) => {
        setCourse({...course, image: imageSource})
        setImageSelected(true)
    }

    const handleChange = (e) => {
        setCourse({...course, [e.target.name]: e.target.value})
    }

    const createCourse = () => {
        CreateCourseService.createCourse(course)
            .then(data => {
                if (data.validated !== true) {
                    alert("Sorry, a course with this title already exists.")
                } else if (data.error != null) {
                    console.log("Error: ", data)
                    alert(data.error)
                } else {
                    console.log('Success:', data);
                    passCourse(course);
                    courseExists();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

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
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="title"
                            name="title"
                            value={course.title}
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
                            value={course.description}
                            label="Course Description"
                            fullWidth
                            multiline
                            rows={4}
                            margin="dense"
                            {...register('description')}
                            onChange={(e) => handleChange(e)}
                        />
                    </Grid>
                    {imageSelected && (
                        <Grid item xs={12} sm={12}>
                            <img
                                border={"2px solid #fd7633"}
                                width={200}
                                src={`${course.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${course.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={"Selected Image"}
                                loading="lazy"
                            />
                        </Grid>
                    )}
                    <Grid item xs={12} sm={12}>
                        <ImageModal imageSourceFromClick={imageSourceFromClick}/>
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