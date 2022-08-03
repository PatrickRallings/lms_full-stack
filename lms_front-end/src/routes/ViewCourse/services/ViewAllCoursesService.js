const CREATE_USER_URL = "http://localhost:8080/api/v1/courses/view-all";

class ViewAllCoursesService {

    getHTML() {
        let courses = null;

        fetch(CREATE_USER_URL, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                courses = data;
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        return courses;
    }
}

export default new ViewAllCoursesService();