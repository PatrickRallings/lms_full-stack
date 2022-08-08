import React, {Fragment, useEffect, useState} from 'react';
import {
    Button,
    Grid,
    ThemeProvider,
} from "@mui/material";
import {OrangeCFHTheme} from "../../../style/themes/OrangeCFHTheme";
import Editor from "../editor/Editor";
import SaveIcon from '@mui/icons-material/Save';
import SaveContentService from "../services/SaveContentService";

function CourseContentForm({courseTitle}) {

    const [courseContent, setCourseContent] = useState ("")

    const [course, setCourse] = useState(
        {
            title: courseTitle,
            content: courseContent
        }
    )

    useEffect(() => {
        setCourse(
            {
                title: courseTitle,
                content: courseContent
            }
        )
    }, [courseContent])

    const saveCourseContent = () => {
        SaveContentService.saveCourse(course)
            .then(data => {
                if (data.validated === false) {

                } else if (data.error != null) {
                    console.log("Error: ", data)
                    alert(data.error)
                } else {
                    console.log('Success:', data);
                    // passCourse(course);
                    // courseCreationSuccess();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <ThemeProvider theme={OrangeCFHTheme}>
            <Fragment>
                <Grid container >
                    <Grid item xs={12}>
                        <Editor setValue={setCourseContent} />
                    </Grid>
                    {courseContent.content !== "" && (
                        <div className="container-heading">
                            <Button variant="outlined"
                                    color="success"
                                    endIcon={<SaveIcon />}
                                    onClick={saveCourseContent}
                            >

                                Save Course Content
                            </Button>
                        </div>
                    )}
                </Grid>
            </Fragment>
        </ThemeProvider>

    );
}

export default CourseContentForm;