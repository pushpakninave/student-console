package com.aliencodes.sbreact.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aliencodes.sbreact.model.Student;
import com.aliencodes.sbreact.service.StudentService;

import lombok.RequiredArgsConstructor;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping
    public ResponseEntity<List<Student>> getStudents() {
        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.FOUND);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Long id) {
        return studentService.updateStudent(student, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudentById(@PathVariable Long id) {
        studentService.deleteStudentById(id);
    }

    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

}
