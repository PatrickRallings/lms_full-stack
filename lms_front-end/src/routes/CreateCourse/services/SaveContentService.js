const CREATE_COURSE_URL = "http://localhost:8080/api/v1/course/save-content";

class SaveCourseService {

    saveCourse(courseContent) {

        return fetch(CREATE_COURSE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseContent),
        })
            .then(response => response.json())
    }

}

export default new SaveCourseService();