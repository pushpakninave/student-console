package com.aliencodes.sbreact.service;

import java.util.List;

import com.aliencodes.sbreact.model.Student;

public interface IStudentService {
    Student addStudent(Student student);

    List<Student> getStudents();
    
    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudentById(Long id);
}
