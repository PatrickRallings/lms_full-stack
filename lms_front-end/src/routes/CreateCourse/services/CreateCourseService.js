const CREATE_COURSE_URL = "http://localhost:8080/api/v1/course/create";

class CreateCourseService {

    createCourse(course) {

        return fetch(CREATE_COURSE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        })
            .then(response => response.json())
    }

}

export default new CreateCourseService();