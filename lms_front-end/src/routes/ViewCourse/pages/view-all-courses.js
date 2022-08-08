import ViewAllCoursesService from "../services/ViewAllCoursesService";
import {useEffect, useState} from "react";
import CourseCard from "../components/CourseCard";


const ViewAllCourses = () => {

    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

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

    return (
        <div className={"page-container"}>
            <div className={"view-all-courses-container"}>
                <div className={"container-heading"}>
                    <span>All Enrolled Courses</span>
                </div>
                    {!loading && (
                        <div className={"view-all-courses-body"}>
                            {courses.map((course) => (
                                    <CourseCard key={course.title} course={course}/>
                                )
                            )}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ViewAllCourses;