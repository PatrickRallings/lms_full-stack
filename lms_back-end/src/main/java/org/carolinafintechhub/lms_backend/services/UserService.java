package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    User getUserById(Long id);

    List<User> getAllUsers();
}
