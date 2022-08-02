package org.carolinafintechhub.lms_backend.service.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.repository.CourseRepository;
import org.carolinafintechhub.lms_backend.validation.course.courseCreationValidation;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {

    CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public courseCreationValidation createCourse(CourseCreationModel courseCreationModel) {
        CourseEntity courseEntity = new CourseEntity();

        BeanUtils.copyProperties(courseCreationModel, courseEntity);
        courseRepository.save(courseEntity);

        return courseCreationModel;
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
