package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class EmployeeTests {

    @Test
    void failingTest() {
        assertEquals(1, 2); // Intentional test failure
    }
}