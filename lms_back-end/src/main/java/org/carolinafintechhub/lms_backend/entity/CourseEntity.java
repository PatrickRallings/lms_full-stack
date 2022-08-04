package org.carolinafintechhub.lms_backend.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "courses")
public class CourseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = true)
    private String description;

    @Column(name = "previewImage", nullable = true)
    private String previewImage;

    @Column(name= "date_created")
    private final Date dateCreated = new Date();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "courseEntity")
    private Set<EnrollmentEntity> enrollmentEntities = new HashSet<>();

//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "courseEntity")
//    private final Set<RichTextEntity> courseComponentEntities = new HashSet<>();

    public CourseEntity() {};

    public CourseEntity(String title, String description, String previewImage) {
        this.title = title;
        this.description = description;
        this.previewImage = previewImage;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public Set<EnrollmentEntity> getEnrollmentEntities() {
        return enrollmentEntities;
    }

    public void setEnrollmentEntities(Set<EnrollmentEntity> enrollmentEntities) {
        this.enrollmentEntities = enrollmentEntities;
    }

    public String getPreviewImage() {
        return previewImage;
    }

    public void setPreviewImage(String previewImage) {
        this.previewImage = previewImage;
    }

    @Override
    public String toString() {
        return "CourseEntity{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", previewImage='" + previewImage + '\'' +
                ", dateCreated=" + dateCreated +
                ", enrollmentEntities=" + enrollmentEntities +
                '}';
    }
}
