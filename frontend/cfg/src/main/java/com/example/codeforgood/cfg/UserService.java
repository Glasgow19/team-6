package com.example.codeforgood.cfg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    public Iterable<UserEntity> findAll() {
       return userRepository.findAll();

    }

    public Optional<UserEntity> findUserById(int id) {
        return userRepository.findById(id);
    }

    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }


}

