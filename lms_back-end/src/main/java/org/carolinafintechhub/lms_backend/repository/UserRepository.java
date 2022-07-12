package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity getUserByEmail(String email);
}
