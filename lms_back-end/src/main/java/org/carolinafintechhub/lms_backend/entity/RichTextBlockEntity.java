package org.carolinafintechhub.lms_backend.entity;

import javax.persistence.*;

@Entity
public class RichTextBlockEntity implements CourseComponentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    CourseEntity courseEntity;

    @Column(name = "content", nullable = false)
    String content;

    public RichTextBlockEntity (String content) {
        this.content = content;
    }

    public RichTextBlockEntity() {};

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
}
