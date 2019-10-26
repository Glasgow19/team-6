package com.example.codeforgood.cfg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

<<<<<<< HEAD
    public Iterable<Users> findAll() {
       return userRepo.findAll();

    }

    public Optional<Users> findUserById(int id) {
        return userRepo.findById(id);
    }

    public void addUser(Users users) {
        userRepo.save(users);
=======
    public Iterable<UserEntity> findAll() {
       return userRepository.findAll();

    }

    public Optional<UserEntity> findUserById(int id) {
        return userRepository.findById(id);
    }

    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
>>>>>>> 433c2e051aa6caf0851c2f5808604a6cc8ad19b3
    }


}

