package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;

public interface CourseService {

    CourseCreationModel createCourse(CourseCreationModel courseCreationModel);

    CourseEntity getCourseById(Long id);
}
