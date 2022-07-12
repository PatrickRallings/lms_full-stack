package org.carolinafintechhub.lms_backend.controller;

import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.carolinafintechhub.lms_backend.services.UserService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/user")
public class UserCreationController {

    private final UserService userService;

    public UserCreationController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/create")
    public UserCreationModel createUser(@RequestBody UserCreationModel userCreationModel) {
        return userService.createUser(userCreationModel);
    }
}