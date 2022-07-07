package org.carolinafintechhub.lms_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnrollmentCreationModel {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("user_id")
    private Long userId;

    @JsonProperty("course_id")
    private Long courseId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    @Override
    public String toString() {
        return "EnrollmentCreationModel{" +
                "id=" + id +
                ", userId=" + userId +
                ", courseId=" + courseId +
                '}';
    }
}
