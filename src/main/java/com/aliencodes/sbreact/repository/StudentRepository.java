package com.aliencodes.sbreact.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aliencodes.sbreact.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEmail(String email);
    
}
