package com.aula124.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aula124.project.models.Group;

public interface GroupRepository extends JpaRepository<Group, Long>{

    List<Group> findByName(String name);
    
    Group findById(Integer id);
    
}