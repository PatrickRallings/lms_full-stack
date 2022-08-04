package org.carolinafintechhub.lms_backend.service.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.model.CourseViewModel;

import java.util.List;

public interface CourseService {

    CourseCreationModel createCourse(CourseCreationModel courseCreationModel);

    boolean courseExists(CourseCreationModel courseCreationModel);

    CourseEntity getCourseById(Long id);

    List<CourseViewModel> getAllCourses();
}
