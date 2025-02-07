package com.example.Mongodb_spring_practice.Repository;

import com.example.Mongodb_spring_practice.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> { // Get type Student and Id of type String
}
