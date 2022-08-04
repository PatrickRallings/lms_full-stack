package org.carolinafintechhub.lms_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CourseViewModel {

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    private String description;

    public String getTitle() {
        return title;
    }

    public CourseViewModel (){};

    public CourseViewModel (String title, String description) {
        this.title = title;
        this.description = description;
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

    @Override
    public String toString() {
        return "CourseCreationModel{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
