package org.carolinafintechhub.lms_backend.controller;

import org.carolinafintechhub.lms_backend.model.EnrollmentCreationModel;
import org.carolinafintechhub.lms_backend.services.EnrollmentService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/create_enrollment/v1")
public class EnrollmentCreationController {

    EnrollmentService enrollmentService;

    public EnrollmentCreationController (EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @RequestMapping("/enrollments")
    public EnrollmentCreationModel createEnrollment (@RequestBody EnrollmentCreationModel enrollmentCreationModel){
        return enrollmentService.createEnrollment(enrollmentCreationModel);
    }

}