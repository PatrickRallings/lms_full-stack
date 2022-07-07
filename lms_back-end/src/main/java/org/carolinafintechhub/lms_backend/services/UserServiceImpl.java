package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.carolinafintechhub.lms_backend.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserCreationModel createUser(UserCreationModel userCreationModel){
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(userCreationModel, userEntity);
        userRepository.save(userEntity);

        return userCreationModel;
    }

    @Override
    public UserEntity getUserById(Long id) {
        Optional<UserEntity> optional = this.userRepository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        } else {
            throw new RuntimeException("User not found.");
        }
    }

    @Override
    public List<UserEntity> getAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
