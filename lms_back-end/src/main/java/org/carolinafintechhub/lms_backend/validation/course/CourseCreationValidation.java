package org.carolinafintechhub.lms_backend.validation.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.carolinafintechhub.lms_backend.model.CourseCreationModel;
import org.carolinafintechhub.lms_backend.service.course.CourseService;
import org.carolinafintechhub.lms_backend.validation.ValidationError;

import java.util.ArrayList;
import java.util.List;

public class CourseCreationValidation {

    @JsonProperty("validated")
    boolean validated;

    @JsonProperty("errorsPresent")
    List<ValidationError> errorsPresent;

    @JsonProperty("course")
    CourseCreationModel courseCreationModel;

    @JsonIgnore
    CourseService courseService;

    public CourseCreationValidation(CourseCreationModel courseCreationModel, CourseService courseService) {
        this.courseCreationModel = courseCreationModel;
        this.courseService = courseService;
        this.errorsPresent = new ArrayList<>();
        runValidation();
    }

    private void runValidation () {
        isNotEmptyCheck("title", courseCreationModel.getTitle());
        titleAlreadyTaken();
        validate();
    }

    private void addError (String name, String message) {
        ValidationError validationError = new ValidationError(name, message);
        errorsPresent.add(validationError);
    }

    private void isNotEmptyCheck (String name, String value) {
        if (value.trim().isEmpty()) {
            addError(name, "This field cannot be empty.");
        }
    }

    private void titleAlreadyTaken() {
        if (courseService.courseExists(courseCreationModel.getTitle())) {
            addError("title", "This course title is already in use.");
        }
    }

    private void validate () {
        this.validated = errorsPresent.isEmpty();
    }

    public boolean isValidated() {
        return validated;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }

    public List<ValidationError> getErrorsPresent() {
        return errorsPresent;
    }

    public void setErrorsPresentList(List<ValidationError> errorsPresent) {
        this.errorsPresent = errorsPresent;
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
                ", errorsPresentList=" + errorsPresent +
                ", courseCreationModel=" + courseCreationModel +
                ", courseService=" + courseService +
                '}';
    }
}
