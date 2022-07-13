package org.carolinafintechhub.lms_backend.service.enrollment;

import org.carolinafintechhub.lms_backend.model.EnrollmentCreationModel;

public interface EnrollmentService {
    EnrollmentCreationModel createEnrollment(EnrollmentCreationModel enrollmentCreationModel);
}
