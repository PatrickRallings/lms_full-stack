import CreateCourseForm from "../components/CreateCourseForm";
import {useState} from "react";
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CreateCourse = () => {

    const [course, setCourse] = useState({
            title: "",
            description: "",
            image: ""
        }
    );

    const [courseExists, setCourseExists] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [successAlert, setSuccessAlert] = React.useState(false);

    const courseCreated = () => {
        setCourseExists(true)
        setSuccessAlert(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessAlert(false);
    };

    return (
        <div className={"page-container"}>
            <div className={"content-container"}>
                <div className={"container-heading"}>
                    {!courseExists ? (
                        <span>Create New Course</span>
                    ) : (
                        <span>Add Course Content</span>
                    )}
                </div>
                <div className={"container-body"}>
                    <CreateCourseForm
                        passCourse={(course) => setCourse(course)}
                        courseExists={courseCreated}
                    />
                </div>
            </div>
            <Snackbar open={successAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    The course "{course.title}" has been created.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CreateCourse;