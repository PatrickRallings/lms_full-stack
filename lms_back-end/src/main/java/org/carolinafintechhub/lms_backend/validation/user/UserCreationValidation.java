package org.carolinafintechhub.lms_backend.validation.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.carolinafintechhub.lms_backend.service.user.UserService;
import org.carolinafintechhub.lms_backend.validation.ValidationError;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UserCreationValidation {

    @JsonProperty("validated")
    boolean validated;

    @JsonProperty("errorsPresent")
    List<ValidationError> errorsPresent;

    @JsonProperty("user")
    UserCreationModel userCreationModel;

    @JsonIgnore
    UserService userService;

    public UserCreationValidation(UserCreationModel userCreationModel, UserService userService) {
        this.userCreationModel = userCreationModel;
        this.userService = userService;
        this.errorsPresent = new ArrayList<>();
        runValidation();
    }

    private void runValidation() {
        isNotEmptyCheck("firstName", userCreationModel.getFirstName());
        isNotEmptyCheck("lastName", userCreationModel.getLastName());
        isNotEmptyCheck("email", userCreationModel.getEmail());
        isNotEmptyCheck("password", userCreationModel.getPassword());
        emailRegexCheck();
        emailAlreadyTaken();
        validate();
    }

    private void validate() {
        this.validated = errorsPresent.isEmpty();
    }

    private void addError(String name, String message) {
        ValidationError validationError = new ValidationError(name, message);
        errorsPresent.add(validationError);
    }

    private void isNotEmptyCheck(String name, String value) {
        if (value.trim().isEmpty()) {
            addError(name, "This field cannot be empty.");
        }
    }

    private void emailAlreadyTaken() {
        if (userService.userExists(userCreationModel)) {
            addError("email", "This email is already in use.");
        }
    }

    private void emailRegexCheck() {
        String regex = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+(?:\\.[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(userCreationModel.getEmail());
        if (!matcher.matches()) {
            addError("email", "This is not a valid email.");
        }
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

    public UserCreationModel getUserCreationModel() {
        return userCreationModel;
    }

    public void setUserCreationModel(UserCreationModel userCreationModel) {
        this.userCreationModel = userCreationModel;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public String toString() {
        return "UserCreationValidation{" +
                "validated=" + validated +
                ", errorsPresent=" + errorsPresent +
                ", userCreationModel=" + userCreationModel +
                ", userService=" + userService +
                '}';
    }
}
