package com.example.codeforgood.cfg;
import com.example.codeforgood.cfg.QuizEntity;
import com.example.codeforgood.cfg.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    private QuizRepo quizRepository;


    public Iterable<QuizEntity> findAll() {
        return quizRepository.findAll();

    }

    public Optional<QuizEntity> findQuizById(int id) {
        return quizRepository.findById(id);
    }

    public void addQuizEntity(QuizEntity quizEntity) {
        quizRepository.save(quizEntity);
    }


}

