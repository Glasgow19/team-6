package com.example.codeforgood.cfg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;


    public Iterable<Users> findAll() {
       return userRepo.findAll();

    }

    public Optional<Users> findUserById(int id) {
        return userRepo.findById(id);
    }

    public void addUser(Users users) {
        userRepo.save(users);
    }


}

