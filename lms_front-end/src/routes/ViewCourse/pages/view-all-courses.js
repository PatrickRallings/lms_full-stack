import ViewAllCoursesService from "../services/ViewAllCoursesService";
import {useState} from "react";
import CourseCard from "../components/CourseCard";


const ViewAllCourses = async () => {

    const [courses, setCourses] = useState([])

    setCourses(await ViewAllCoursesService.getHTML())

    return (
        <div>
            {courses.map((course) => (
                <CourseCard />
            ))}
        </div>
    )
}

export default ViewAllCourses;