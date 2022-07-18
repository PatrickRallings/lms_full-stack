package org.carolinafintechhub.lms_backend.controller.user;

import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.carolinafintechhub.lms_backend.service.user.UserService;
import org.carolinafintechhub.lms_backend.validation.user.UserCreationValidation;
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
    public UserCreationValidation createUser(@RequestBody UserCreationModel userCreationModel) {

        UserCreationValidation userCreationValidation = new UserCreationValidation(userCreationModel, userService);

        if (userCreationValidation.isValidated()) {
            userService.createUser(userCreationModel);
        }
        return userCreationValidation;
    }
}