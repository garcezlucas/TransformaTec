package com.aula126.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aula126.project.models.Group;


public interface GroupRepository extends JpaRepository<Group, Long>{

    List<Group> findByName(String name);

    Group getById(long id);
    
}
