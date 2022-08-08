package org.carolinafintechhub.lms_backend.validation.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.carolinafintechhub.lms_backend.model.CourseContentCreationModel;
import org.carolinafintechhub.lms_backend.service.course.CourseService;
import org.carolinafintechhub.lms_backend.validation.ValidationError;

import java.util.ArrayList;
import java.util.List;

public class CourseContentValidation {

    @JsonProperty("validated")
    boolean validated;

    @JsonProperty("errorsPresent")
    List<ValidationError> errorsPresent;

    @JsonProperty("course")
    CourseContentCreationModel courseContentCreationModel;

    @JsonIgnore
    CourseService courseService;

    public CourseContentValidation(CourseContentCreationModel courseContentCreationModel, CourseService courseService) {
        this.courseContentCreationModel = courseContentCreationModel;
        this.courseService = courseService;
        this.errorsPresent = new ArrayList<>();
        runValidation();
    }

    private void runValidation () {
        isNotEmptyCheck("title", courseContentCreationModel.getTitle());
        courseExists();
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

    private void courseExists() {
        if (!courseService.courseExists(courseContentCreationModel.getTitle())) {
            addError("title", "This course does not exist.");
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

    public void setErrorsPresent(List<ValidationError> errorsPresent) {
        this.errorsPresent = errorsPresent;
    }

    public CourseContentCreationModel getCourseContentCreationModel() {
        return courseContentCreationModel;
    }

    public void setCourseContentCreationModel(CourseContentCreationModel courseContentCreationModel) {
        this.courseContentCreationModel = courseContentCreationModel;
    }

    public CourseService getCourseService() {
        return courseService;
    }

    public void setCourseService(CourseService courseService) {
        this.courseService = courseService;
    }

    @Override
    public String toString() {
        return "CourseContentValidation{" +
                "validated=" + validated +
                ", errorsPresent=" + errorsPresent +
                ", courseContentCreationModel=" + courseContentCreationModel +
                ", courseService=" + courseService +
                '}';
    }
}
