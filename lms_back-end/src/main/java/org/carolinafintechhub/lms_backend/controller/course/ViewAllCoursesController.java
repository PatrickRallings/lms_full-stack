package org.carolinafintechhub.lms_backend.controller.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.service.course.CourseService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses/")
public class ViewAllCoursesController {

    CourseService courseService;

    public ViewAllCoursesController (CourseService courseService) {
        this.courseService = courseService;
    }

    @RequestMapping("/view-all")
    public List<CourseEntity> viewAllCourses () {
        return courseService.getAllCourses();
    }
}