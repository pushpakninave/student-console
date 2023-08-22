package com.aliencodes.sbreact.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aliencodes.sbreact.exception.StudentAlreadyExistsException;
import com.aliencodes.sbreact.exception.StudentNotFoundException;
import com.aliencodes.sbreact.model.Student;
import com.aliencodes.sbreact.repository.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {

    private final StudentRepository studentRepository;

    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())) {
            throw new StudentAlreadyExistsException(student.getEmail() + " already exists!");
        }
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(st -> {
            st.setFirstName(student.getFirstName());
            st.setDepartment(student.getDepartment());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());
            return studentRepository.save(st);
        }).orElseThrow(() -> new StudentNotFoundException("Sorry, this student does not exist"));
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException("Sorry, no student found with the Id :" + id));
    }

    @Override
    public void deleteStudentById(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException("Sorry, student not found.");
        }
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }

}
