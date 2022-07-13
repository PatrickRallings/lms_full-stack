package org.carolinafintechhub.lms_backend.service.user;

import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.carolinafintechhub.lms_backend.model.UserCreationModel;
import org.carolinafintechhub.lms_backend.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class UserCreationServiceImpl implements UserCreationService {

    private final UserRepository userRepository;

    public UserCreationServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserCreationModel createUser(UserCreationModel userCreationModel) {

        if (!getUserByEmail(userCreationModel)) {
            UserEntity userEntity = new UserEntity();
            BeanUtils.copyProperties(userCreationModel, userEntity);
            userRepository.save(userEntity);
            return userCreationModel;
        } else {
            throw new SecurityException("A user with this email already exists.");
        }
    }

    public boolean getUserByEmail(UserCreationModel userCreationModel){
        return userRepository.getUserByEmail(userCreationModel.getEmail()) != null;
    }
}
