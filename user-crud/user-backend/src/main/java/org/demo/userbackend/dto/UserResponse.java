package org.demo.userbackend.dto;

import org.demo.userbackend.model.User;

import java.util.List;

public class UserResponse {
    private List<User> users;

    public UserResponse(List<User> users) {
        this.users = users;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
