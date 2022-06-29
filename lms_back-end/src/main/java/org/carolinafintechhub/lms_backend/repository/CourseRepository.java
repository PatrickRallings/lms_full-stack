package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
