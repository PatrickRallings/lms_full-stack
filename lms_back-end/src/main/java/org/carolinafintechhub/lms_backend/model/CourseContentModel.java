package org.carolinafintechhub.lms_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CourseContentModel {

    @JsonProperty
    String content;

    public CourseContentModel(String content) {
        this.content = content;
    }

    public CourseContentModel() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "CourseContentModel{" +
                "content='" + content + '\'' +
                '}';
    }
}
