package org.carolinafintechhub.lms_backend.validation.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.service.course.CourseService;
import org.carolinafintechhub.lms_backend.validation.ValidationError;

import java.util.List;

public class courseCreationValidation {

    @JsonProperty("validated")
    boolean validated;

    @JsonProperty("errorsPresent")
    List<ValidationError> errorsPresentList;

    @JsonProperty("course")
    CourseCreationModel courseCreationModel;

    @JsonIgnore
    CourseService courseService;

    public courseCreationValidation (CourseCreationModel courseCreationModel, CourseService courseService) {
        this.courseCreationModel = courseCreationModel;
        this.courseService = courseService;
        runValidation();
    }

    private void runValidation () {
        isNotEmptyCheck("title", courseCreationModel.getTitle());
        isNotEmptyCheck("body", courseCreationModel.getBody());
        validate();
    }

    private void addError (String name, String message) {
        ValidationError validationError = new ValidationError(name, message);
        errorsPresentList.add(validationError);
    }

    private void isNotEmptyCheck (String name, String value) {
        String valueChecked = value.trim();
        if (valueChecked.isEmpty()) {
            addError(name, "This field cannot be empty.");
        }
    }

    private void validate () {
        this.validated = errorsPresentList.isEmpty();
    }

    public boolean isValidated() {
        return validated;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }

    public List<ValidationError> getErrorsPresentList() {
        return errorsPresentList;
    }

    public void setErrorsPresentList(List<ValidationError> errorsPresentList) {
        this.errorsPresentList = errorsPresentList;
    }

    public CourseCreationModel getCourseCreationModel() {
        return courseCreationModel;
    }

    public void setCourseCreationModel(CourseCreationModel courseCreationModel) {
        this.courseCreationModel = courseCreationModel;
    }

    public CourseService getCourseService() {
        return courseService;
    }

    public void setCourseService(CourseService courseService) {
        this.courseService = courseService;
    }

    @Override
    public String toString() {
        return "courseCreationValidation{" +
                "validated=" + validated +
                ", errorsPresentList=" + errorsPresentList +
                ", courseCreationModel=" + courseCreationModel +
                ", courseService=" + courseService +
                '}';
    }
}
