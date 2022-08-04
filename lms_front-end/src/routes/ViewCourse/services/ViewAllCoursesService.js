const VIEW_COURSES_URL = "http://localhost:8080/api/v1/courses/view-all";

class ViewAllCoursesService {

    getCourses() {
        return fetch(VIEW_COURSES_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()
            )
    }
}

export default new ViewAllCoursesService();