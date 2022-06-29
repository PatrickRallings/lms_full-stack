package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
