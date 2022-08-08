package org.carolinafintechhub.lms_backend.service.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.model.CourseContentCreationModel;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.model.CoursePreviewModel;

import java.util.List;

public interface CourseService {

    CourseCreationModel createCourse(CourseCreationModel courseCreationModel);

    boolean courseExists(String title);

    CourseEntity getCourseById(Long id);

    List<CoursePreviewModel> getAllCourses();

    CourseContentCreationModel saveCourseContent(CourseContentCreationModel courseContent);
}
