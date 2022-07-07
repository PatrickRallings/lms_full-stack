package org.carolinafintechhub.lms_backend.model;

import org.carolinafintechhub.lms_backend.entity.CourseEntity;
import org.carolinafintechhub.lms_backend.entity.UserEntity;

import java.util.Date;

public class EnrollmentModel {

    private Long id;
    private Date enrollmentDate = new Date();
    private UserEntity userEntity;
    private CourseEntity courseEntity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getEnrollmentDate() {
        return enrollmentDate;
    }

    public void setEnrollmentDate(Date enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public CourseEntity getCourseEntity() {
        return courseEntity;
    }

    public void setCourseEntity(CourseEntity courseEntity) {
        this.courseEntity = courseEntity;
    }

    @Override
    public String toString() {
        return "EnrollmentModel{" +
                "id=" + id +
                ", enrollmentDate=" + enrollmentDate +
                ", userEntity=" + userEntity +
                ", courseEntity=" + courseEntity +
                '}';
    }
}
