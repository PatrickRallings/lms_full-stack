package org.carolinafintechhub.lms_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CourseViewModel {

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    private String description;

    @JsonProperty("image")
    private String previewImage;

    public String getTitle() {
        return title;
    }

    public CourseViewModel (){};

    public CourseViewModel (String title, String description, String previewImage) {
        this.title = title;
        this.description = description;
        this.previewImage = previewImage;
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

    public String getPreviewImage() {
        return previewImage;
    }

    public void setPreviewImage(String previewImage) {
        this.previewImage = previewImage;
    }

    @Override
    public String toString() {
        return "CourseViewModel{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", previewImage='" + previewImage + '\'' +
                '}';
    }
}
