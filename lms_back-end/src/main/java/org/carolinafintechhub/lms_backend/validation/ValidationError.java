package org.carolinafintechhub.lms_backend.validation;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidationError {

    @JsonProperty("fieldName")
    String fieldName;

    @JsonProperty("errorMessage")
    String errorMessage;

    public ValidationError(String errorName, String errorMessage) {
        this.fieldName = errorName;
        this.errorMessage = errorMessage;
    }
}
