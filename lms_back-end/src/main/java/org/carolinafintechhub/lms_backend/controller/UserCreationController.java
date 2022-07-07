package org.carolinafintechhub.lms_backend.controller;

import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.carolinafintechhub.lms_backend.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/create_user/v1")
public class UserCreationController {

    private final UserService userService;

    public UserCreationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public UserCreationModel createUser(@RequestBody UserCreationModel userCreationModel) {
        return userService.createUser(userCreationModel);
    }
}
