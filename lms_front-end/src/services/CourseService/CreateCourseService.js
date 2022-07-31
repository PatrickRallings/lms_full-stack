const CREATE_COURSE_URL = "http://localhost:8080/api/v1/course/create";

class CreateCourseService {

    createCourse(course) {

        fetch(CREATE_COURSE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        })
            .then(response => response.json())
            .then(data => {
                if (data.validated !== true) {
                    alert("")
                }
                else if (data.error != null) {
                    console.log("Error: ", data)
                    alert(data.error)
                } else {
                    console.log('Success:', data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

}

export default new CreateCourseService();