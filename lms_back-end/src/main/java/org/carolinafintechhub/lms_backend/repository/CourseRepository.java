package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, Long> {
    CourseEntity getCourseByTitle(String title);
}
