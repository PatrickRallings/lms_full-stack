package org.carolinafintechhub.lms_backend.controller.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.model.CourseContentModel;
import org.carolinafintechhub.lms_backend.model.CoursePreviewModel;
import org.carolinafintechhub.lms_backend.service.course.CourseService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses/")
public class ViewCourseContentController {

    CourseService courseService;

    public ViewCourseContentController (CourseService courseService) {
        this.courseService = courseService;
    }

    @RequestMapping("/view-content")
    public CourseContentModel viewCourseContent (@RequestBody CoursePreviewModel coursePreviewModel) {

        CourseEntity courseEntity = courseService.getCourseByTitle(coursePreviewModel.getTitle());

        return new CourseContentModel(courseEntity.getContent());
    }
}
