package org.carolinafintechhub.lms_backend.services;

import org.carolinafintechhub.lms_backend.model.User;
import org.carolinafintechhub.lms_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User getUserById(Long id) {
        Optional<User> optional = this.userRepository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        } else {
            throw new RuntimeException("User not found.");
        }
    }

    @Override
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
