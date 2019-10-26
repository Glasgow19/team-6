package com.example.codeforgood.cfg;

import com.example.codeforgood.cfg.QuizResultEntitiy;
import com.example.codeforgood.cfg.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<UserEntity,Integer> {


    UserEntity findResultById(int id);
}
