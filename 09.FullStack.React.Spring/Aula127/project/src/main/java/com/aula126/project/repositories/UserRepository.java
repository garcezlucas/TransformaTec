package com.aula126.project.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aula126.project.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    Optional<User> findByUsername(String username);

    User findById(long id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    
}
