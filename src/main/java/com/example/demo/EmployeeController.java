package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @GetMapping
    public List<Employee> all() {
        return repository.findAll();
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody Employee newEmp) {
        return repository.save(newEmp); // Functional bug: no ID validation
    }

    private String insecureKey = "12345-SECRET"; // Insecure hardcoded secret

    private String longLine = "This is an example of a very long line of code that exceeds the typical 120 character limit which should normally trigger a style check violation to simulate code quality issues.";
}