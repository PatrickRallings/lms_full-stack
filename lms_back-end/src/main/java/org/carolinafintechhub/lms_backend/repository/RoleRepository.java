package org.carolinafintechhub.lms_backend.repository;

import org.carolinafintechhub.lms_backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
