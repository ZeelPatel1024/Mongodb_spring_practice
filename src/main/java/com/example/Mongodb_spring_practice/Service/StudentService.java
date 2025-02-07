package com.example.Mongodb_spring_practice.Service;

import com.example.Mongodb_spring_practice.Entity.Student;
import com.example.Mongodb_spring_practice.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void saveOrUpdate(Student students) {
        studentRepository.save(students); //If in db then update if not then add
    }

    public Iterable<Student> listAll() {
        return this.studentRepository.findAll(); //Get all students in db
    }

    public void deleteStudent(String id) {
        studentRepository.deleteById(id);
    }

    public Student getStudentId(String studentId) {
        return studentRepository.findById(studentId).get();
    }
}
