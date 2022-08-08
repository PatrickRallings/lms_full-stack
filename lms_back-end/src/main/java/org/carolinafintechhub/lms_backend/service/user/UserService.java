package org.carolinafintechhub.lms_backend.service.user;

import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    UserCreationModel createUser(UserCreationModel userCreationModel);

    boolean userExists(String email);

    UserEntity getUserById(Long id);

    UserEntity getUserByEmail(String email);

    List<UserEntity> getAllUsers();
}
