package org.carolinafintechhub.lms_backend.service.course;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.exception.ValidationException;
import org.carolinafintechhub.lms_backend.model.CourseContentCreationModel;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.model.CoursePreviewModel;
import org.carolinafintechhub.lms_backend.repository.CourseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {

    CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public CourseCreationModel createCourse(CourseCreationModel courseCreationModel) {

        if (!courseExists(courseCreationModel.getTitle())) {
            CourseEntity courseEntity = new CourseEntity();
            BeanUtils.copyProperties(courseCreationModel, courseEntity);
            courseRepository.save(courseEntity);
            return courseCreationModel;
        } else {
            throw new ValidationException("Validation Failure: A course with this title already exists.");
        }
    }

    @Override
    public boolean courseExists(String title) {
        return courseRepository.getCourseByTitle(title) != null;
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

    @Override
    public CourseEntity getCourseByTitle(String title) {
        Optional<CourseEntity> optional = Optional.ofNullable(this.courseRepository.getCourseByTitle(title));
        if (optional.isPresent()) {
            return optional.get();
        } else {
            throw new RuntimeException("Course not found.");
        }
    }

    @Override
    public List<CoursePreviewModel> getAllCourses() {
        List<CourseEntity> courseEntities = courseRepository.findAll();

        return courseEntities
                .stream().map(course -> new CoursePreviewModel(
                        course.getTitle(),
                        course.getDescription(),
                        course.getPreviewImage()))
                                .collect(Collectors.toList());

    }

    @Override
    public CourseContentCreationModel saveCourseContent(CourseContentCreationModel courseContentCreationModel) {

        CourseEntity courseEntity = courseRepository.getCourseByTitle(courseContentCreationModel.getTitle());

        courseEntity.setContent(courseContentCreationModel.getContent());

        courseRepository.save(courseEntity);

        return courseContentCreationModel;
    }
}
