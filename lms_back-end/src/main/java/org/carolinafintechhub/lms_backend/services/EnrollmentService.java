package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.model.EnrollmentCreationModel;

public interface EnrollmentService {
    EnrollmentCreationModel createEnrollment(EnrollmentCreationModel enrollmentCreationModel);
}
