package com.aula124.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aula124.project.models.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{

    List<Contact> findByUserId(Integer userId);

    @Transactional
    void deleteByUserId(Integer userId);
    
}
