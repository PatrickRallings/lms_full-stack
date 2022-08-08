package org.carolinafintechhub.lms_backend.validation.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.model.UserLoginModel;
import org.carolinafintechhub.lms_backend.service.user.UserService;
import org.carolinafintechhub.lms_backend.validation.ValidationError;

import java.util.ArrayList;
import java.util.List;

public class UserLoginValidation {

    @JsonProperty("validated")
    boolean validated;

    @JsonProperty("errorsPresent")
    List<ValidationError> errorsPresent;

    @JsonProperty("user")
    UserLoginModel userLoginModel;

    @JsonIgnore
    UserService userService;

    public UserLoginValidation(UserLoginModel userLoginModel, UserService userService) {
        this.userService = userService;
        this.userLoginModel = userLoginModel;
        this.errorsPresent = new ArrayList<>();
        this.userLoginModel.setRole("ADMIN");
        runValidation();
    }

    private void runValidation () {
        isNotEmptyCheck("email", userLoginModel.getEmail());
        isNotEmptyCheck("password", userLoginModel.getPassword());
        userExistsWithCorrectPassword();
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

    private boolean userExists() {
        return userService.userExists(userLoginModel.getEmail());
    }

    private boolean passwordCorrect() {
        return userService.getUserByEmail(userLoginModel.getEmail()).getPassword().equals(userLoginModel.getPassword());
    }

    private void userExistsWithCorrectPassword() {
        if (!userExists() || !passwordCorrect()) {
            addError("user", "Either the password is incorrect or this account does not exist.");
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

    public UserLoginModel getUserLoginModel() {
        return userLoginModel;
    }

    public void setUserLoginModel(UserLoginModel userLoginModel) {
        this.userLoginModel = userLoginModel;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public String toString() {
        return "UserLoginValidation{" +
                "validated=" + validated +
                ", errorsPresent=" + errorsPresent +
                ", userLoginModel=" + userLoginModel +
                ", userService=" + userService +
                '}';
    }
}
