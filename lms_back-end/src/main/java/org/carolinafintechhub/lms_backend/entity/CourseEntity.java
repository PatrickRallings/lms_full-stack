package org.carolinafintechhub.lms_backend.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="courses")
public class CourseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "body")
    private String body;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "courseEntity")
    private Set<EnrollmentEntity> enrollmentEntities = new HashSet<>();

    public CourseEntity(){};

    public CourseEntity(String title, String body){
        this.title = title;
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Set<EnrollmentEntity> getEnrollmentEntities() {
        return enrollmentEntities;
    }

    public void setEnrollmentEntities(Set<EnrollmentEntity> enrollmentEntities) {
        this.enrollmentEntities = enrollmentEntities;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}
