package org.carolinafintechhub.lms_backend.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "enrollments")
public class EnrollmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "enrollment_date", nullable = false)
    private Date enrollmentDate = new Date();
    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity userEntity;
    @ManyToOne(fetch = FetchType.LAZY)
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
        return "EnrollmentEntity{" +
                "id=" + id +
                ", enrollmentDate=" + enrollmentDate +
                ", username=" + userEntity.getUsername() +
                ", course=" + courseEntity.getTitle() +
                '}';
    }
}
