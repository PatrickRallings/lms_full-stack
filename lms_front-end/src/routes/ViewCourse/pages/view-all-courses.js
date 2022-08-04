import ViewAllCoursesService from "../services/ViewAllCoursesService";
import {useEffect, useState} from "react";
import CourseCard from "../components/CourseCard";


const ViewAllCourses = () => {

    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

    useEffect( () => {
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
        },[]
    )

    return (
        <div>
            {!loading && (
                <div>
                    {courses.map((course) => (
                        <CourseCard key={course.title} courseCardTitle={course.title} courseCardDescription={course.description} coursePreviewImage={course.image}/>
                        )

                    )}
                </div>
            )}
        </div>
    )
}

export default ViewAllCourses;