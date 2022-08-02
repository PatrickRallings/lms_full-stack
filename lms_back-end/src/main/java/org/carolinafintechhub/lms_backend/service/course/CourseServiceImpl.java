package org.carolinafintechhub.lms_backend.service.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.exception.ValidationException;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.repository.CourseRepository;
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
    public CourseCreationModel createCourse(CourseCreationModel courseCreationModel) {

        if (!courseExists(courseCreationModel)) {
            CourseEntity courseEntity = new CourseEntity();
            BeanUtils.copyProperties(courseCreationModel, courseEntity);
            courseRepository.save(courseEntity);
            return courseCreationModel;
        } else {
            throw new ValidationException("Validation Failure: A course with this title already exists.");
        }
    }

    @Override
    public boolean courseExists(CourseCreationModel courseCreationModel) {
        return courseRepository.getCourseByTitle(courseCreationModel.getTitle()) != null;
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
