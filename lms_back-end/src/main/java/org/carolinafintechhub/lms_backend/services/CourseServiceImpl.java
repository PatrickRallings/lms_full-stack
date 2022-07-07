package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService{

    CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository){
        this.courseRepository = courseRepository;
    }

    @Override
    public CourseEntity getCourseById(Long id) {
        Optional<CourseEntity> optional = this.courseRepository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        } else {
            throw new RuntimeException("Course not found.");
        }
    }
}
