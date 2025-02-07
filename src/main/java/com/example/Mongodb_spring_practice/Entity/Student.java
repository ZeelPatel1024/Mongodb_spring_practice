package com.example.Mongodb_spring_practice.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students") //database has collections called students
public class Student {

    @Id
    private String id; //Mongo auto has string id's
    private String name;
    private String address;
    private String mobile_number;

    public Student(String id, String name, String address, String mobile_number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.mobile_number = mobile_number;
    }

    public Student(){

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", mobile_number='" + mobile_number + '\'' +
                '}';
    }
}
