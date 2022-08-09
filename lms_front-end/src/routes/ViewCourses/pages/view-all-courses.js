import ViewAllCoursesService from "../services/ViewAllCoursesService";
import {useEffect, useState} from "react";
import CourseCard from "../components/CourseCard";
import ViewCourseContentService from "../services/ViewCourseContentService";

const ViewAllCourses = () => {

    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedCourseContent, setSelectedCourseContent] = useState(null);

    useEffect(() => {
            setLoading(true)
            ViewAllCoursesService.getCourses()
                .then(data => {
                    setCourses(data)
                    console.log(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }, []
    )

    const setViewedCourse = (course) => {
        setSelectedCourse(course)
        setLoading(true)
        ViewCourseContentService.viewCourseContent(course)
            .then(data => {
                setSelectedCourseContent(data.content)
                // setCourses(data)
                // console.log(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className={"page-container"}>
            <div className={"view-all-courses-container"}>
                {selectedCourse == null ? (
                    <div>
                        <div className={"container-heading"}>
                            <span>All Enrolled Courses</span>
                        </div>
                        {!loading && (
                            <div className={"view-all-courses-body"}>
                                {courses.map((course) => (
                                        <CourseCard key={course.title} course={course} onCardClick={() => setViewedCourse(course)}/>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className={"container-heading"}>
                            <span>{selectedCourse.title}</span>
                        </div>
                        {!loading && (
                            <div className={"view-course-content"}
                                 dangerouslySetInnerHTML={{__html: selectedCourseContent}}
                            >
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ViewAllCourses;