package com.example.codeforgood.cfg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;


    public Iterable<UserEntity> findAll() {
       return userRepo.findAll();

    }

    public Optional<UserEntity> findUserById(int id) {
        return userRepo.findById(id);
    }

    public void addUser(UserEntity userEntity) {
        userRepo.save(userEntity);
    }


    public UserEntity getOverallMetricResultById(int id) {
        return userRepo.findResultById(id);
    }
}

