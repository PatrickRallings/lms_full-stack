import CreateCourseForm from "../components/CreateCourseForm";
import {useState} from "react";
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CourseContentForm from "../components/CourseContentForm";

const CreateCourse = () => {

    const [course, setCourse] = useState({
            title: "",
            description: "",
            image: "",
            content: ""
        }
    );

    const [courseCreationSuccess, setCourseCreationSuccess] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [successAlert, setSuccessAlert] = useState(false);
    const [courseExistsAlert, setCourseExistsAlert] = useState(false);

    const courseCreated = () => {
        setCourseCreationSuccess(true)
        setSuccessAlert(true);
    };

    const courseAlreadyExists = () => {
        setCourseExistsAlert(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessAlert(false);
        setCourseExistsAlert(false);
    };

    return (
        <div className={"page-container"}>
            <div className={"content-container"}>
                <div className={"container-heading"}>
                    {!courseCreationSuccess ? (
                        <span>Create New Course</span>
                    ) : (
                        <span>Add Content to "{course.title}"</span>
                    )}
                </div>

                    {!courseCreationSuccess ? (
                        <div className={"container-body"}>
                    <CreateCourseForm
                        passCourse={(course) => setCourse(course)}
                        courseCreationSuccess={courseCreated}
                        courseAlreadyExists={courseAlreadyExists}
                    />
                        </div>
                    ) : (
                        <div>
                            <CourseContentForm courseTitle={course.title} />
                        </div>

                        )}

            </div>
            <Snackbar open={successAlert} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    The course "{course.title}" has been created.
                </Alert>
            </Snackbar>
            <Snackbar open={courseExistsAlert} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Sorry, a course with that title already exists.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CreateCourse;