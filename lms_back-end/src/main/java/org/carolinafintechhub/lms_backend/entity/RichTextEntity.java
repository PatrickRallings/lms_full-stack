package org.carolinafintechhub.lms_backend.entity;

import javax.persistence.*;

@Entity
public class RichTextEntity implements CourseComponentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

//    @ManyToOne(fetch = FetchType.LAZY)
//    CourseEntity courseEntity;

    @Column(name = "content", nullable = false)
    String content;

    public RichTextEntity(String content) {
        this.content = content;
    }

    public RichTextEntity() {};

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "RichTextBlockEntity{" +
                "id=" + id +
//                ", courseEntity=" + courseEntity +
                ", content='" + content + '\'' +
                '}';
    }
}
