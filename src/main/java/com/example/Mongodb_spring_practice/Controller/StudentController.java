package com.example.Mongodb_spring_practice.Controller;

import com.example.Mongodb_spring_practice.Entity.Student;
import com.example.Mongodb_spring_practice.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*") //Needed to connect to frontend application
@RequestMapping("api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping(value="/save")
    public String saveStudent(@RequestBody Student students){
        studentService.saveOrUpdate(students);
        return students.getId();
    }

    @GetMapping(value="/getAll")
    private Iterable<Student> getStudents(){
        return studentService.listAll();
    }

    @PutMapping(value="/edit/{id}")
    private Student update(@RequestBody Student student, @PathVariable(name="id") String id){
        student.setId(id);
        studentService.saveOrUpdate(student);
        return student;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteStudent(@PathVariable("id") String id){
        studentService.deleteStudent(id);
    }

    @RequestMapping("/search/{id}")
    private Student getStudents(@PathVariable(name = "id") String student_id){
        return studentService.getStudentId(student_id);
    }

}
