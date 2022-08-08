package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.entity.ERole;
import org.carolinafintechhub.lms_backend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository {
    Optional<Role> findByName(ERole name);
}
