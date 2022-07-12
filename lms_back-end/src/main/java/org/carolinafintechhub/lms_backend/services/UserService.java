package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    UserCreationModel createUser(UserCreationModel userCreationModel);

    boolean getUserByEmail(UserCreationModel userCreationModel);

    UserEntity getUserById(Long id);

    List<UserEntity> getAllUsers();
}
