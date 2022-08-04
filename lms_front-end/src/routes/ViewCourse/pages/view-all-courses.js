import ViewAllCoursesService from "../services/ViewAllCoursesService";
import {useEffect, useState} from "react";
import CourseCard from "../components/CourseCard";


const ViewAllCourses = () => {

    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

    useEffect( () => {
        setLoading(true)
        fetch("http://localhost:8080/api/v1/courses/view-all", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()
            )
            .then(data => {
                setCourses(data)
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
                        <span key={course.title}>{course.title}</span>
                        )

                    )}
                </div>
            )}
        </div>
    )
}

export default ViewAllCourses;