const VIEW_COURSE_CONTENT_URL = "http://localhost:8080/api/v1/courses/view-content";

class ViewCourseContentService {

    viewCourseContent(course) {

        return fetch(VIEW_COURSE_CONTENT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        })
            .then(response => response.json())
    }
}

export default new ViewCourseContentService;