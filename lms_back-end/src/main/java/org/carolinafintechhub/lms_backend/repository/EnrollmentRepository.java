package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.entity.EnrollmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepository extends JpaRepository<EnrollmentEntity, Long> {
}
