package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    UserEntity getUserById(Long id);

    List<UserEntity> getAllUsers();
}
