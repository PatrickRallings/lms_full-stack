package org.carolinafintechhub.lms_backend.validation;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidationError {

    @JsonProperty("name")
    String errorName;

    @JsonProperty("message")
    String errorMessage;

    public ValidationError(String errorName, String errorMessage) {
        this.errorName = errorName;
        this.errorMessage = errorMessage;
    }
}
