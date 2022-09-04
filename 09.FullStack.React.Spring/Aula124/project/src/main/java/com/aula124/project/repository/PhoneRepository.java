package com.aula124.project.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aula124.project.models.Phone;

public interface PhoneRepository extends JpaRepository<Phone, Long>{
    
    Phone findByNumber(String number);

    List<Phone> findByContactId(Integer id);

    @Transactional
    void deleteByContactId(Integer contactId);
}