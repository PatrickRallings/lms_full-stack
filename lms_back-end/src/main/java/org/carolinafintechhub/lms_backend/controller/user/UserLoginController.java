package org.carolinafintechhub.lms_backend.controller.user;

import org.carolinafintechhub.lms_backend.model.UserLoginModel;
import org.carolinafintechhub.lms_backend.service.user.UserService;
import org.carolinafintechhub.lms_backend.validation.user.UserLoginValidation;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
public class UserLoginController {

    private final UserService userService;

    public UserLoginController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/login")
    public UserLoginValidation createUser(@RequestBody UserLoginModel userLoginModel) {

        UserLoginValidation userLoginValidation = new UserLoginValidation(userLoginModel, userService);

        return userLoginValidation;
    }
}