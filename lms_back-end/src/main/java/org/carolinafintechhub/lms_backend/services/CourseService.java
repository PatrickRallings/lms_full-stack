package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;

public interface CourseService {

    CourseEntity getCourseById(Long id);
}
