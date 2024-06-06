package org.demo.userbackend.service;

import org.demo.userbackend.dto.UserRequest;
import org.demo.userbackend.dto.UserResponse;
import org.demo.userbackend.model.User;
import org.demo.userbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponse getAllUsers() {
        Optional<List<User>> users = Optional.of(userRepository.findAll());
        if (users.isPresent()) {
            return new UserResponse(users.get());
        } else {
            return new UserResponse(new ArrayList<>());
        }
    }

    public UserResponse getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            List<User> users = new ArrayList<>();
            users.add(user.get());
            return new UserResponse(users);
        } else {
            return new UserResponse(new ArrayList<>());
        }
    }

    public UserResponse createUser(UserRequest userRequest) {
        User user = new User(userRequest.getName(), userRequest.getEmail());
        userRepository.save(user);
        List<User> users = new ArrayList<>();
        users.add(user);
        return new UserResponse(users);
    }

    public void updateUser(Long id, UserRequest userRequest) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User updatedUser = user.get();
            updatedUser.setName(userRequest.getName());
            updatedUser.setEmail(userRequest.getEmail());
            userRepository.save(updatedUser);
        }
    }

    public void deleteUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            List<User> users = new ArrayList<>();
            users.add(user.get());
        }
    }

}
