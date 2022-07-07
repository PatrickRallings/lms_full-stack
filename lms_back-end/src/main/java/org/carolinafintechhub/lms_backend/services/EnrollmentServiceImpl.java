package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.entity.EnrollmentEntity;
import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.model.EnrollmentCreationModel;
import org.carolinafintechhub.lms_backend.repository.EnrollmentRepository;
import org.springframework.stereotype.Service;

@Service
public class EnrollmentServiceImpl implements EnrollmentService{

    EnrollmentRepository enrollmentRepository;
    CourseService courseService;
    UserService userService;

    public EnrollmentServiceImpl (EnrollmentRepository enrollmentRepository, CourseService courseService, UserService userService){
        this.enrollmentRepository = enrollmentRepository;
        this.courseService = courseService;
        this.userService = userService;
    }

    @Override
    public EnrollmentCreationModel createEnrollment(EnrollmentCreationModel enrollmentCreationModel) {
        UserEntity userEntity = userService.getUserById(enrollmentCreationModel.getUserId());
        CourseEntity courseEntity = courseService.getCourseById(enrollmentCreationModel.getCourseId());

        EnrollmentEntity enrollmentEntity = new EnrollmentEntity(userEntity, courseEntity);
        enrollmentRepository.save(enrollmentEntity);

        return enrollmentCreationModel;
    }
}
