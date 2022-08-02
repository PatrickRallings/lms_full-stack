package org.carolinafintechhub.lms_backend.controller.course;

import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.service.course.CourseService;
import org.carolinafintechhub.lms_backend.validation.course.courseCreationValidation;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/course/")
public class CourseCreationController {

    CourseService courseService;

    public CourseCreationController(CourseService courseService) {
        this.courseService = courseService;
    }

    @RequestMapping("/create")
    public courseCreationValidation createCourse(@RequestBody CourseCreationModel courseCreationModel) {
        return courseService.createCourse(courseCreationModel);
    }
}
