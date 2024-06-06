package org.demo.userbackend.controller;

import org.demo.userbackend.dto.UserRequest;
import org.demo.userbackend.dto.UserResponse;
import org.demo.userbackend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<UserResponse> getAllUsers() {
        UserResponse userResponse = userService.getAllUsers();
        if (userResponse.getUsers().isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(userResponse);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        UserResponse userResponse = userService.getUserById(id);
        if (userResponse.getUsers().isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(userResponse);
        }
    }

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody UserRequest userRequest) {
        try {
            UserResponse userResponse = userService.createUser(userRequest);
            return ResponseEntity.created(null).body("User created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody UserRequest userRequest) {
        try {
            userService.updateUser(id, userRequest);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("User deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
