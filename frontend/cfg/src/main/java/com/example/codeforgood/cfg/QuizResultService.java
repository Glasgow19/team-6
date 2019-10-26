package com.example.codeforgood.cfg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class QuizResultService {

    @Autowired
    private QuizResultRepo quizResultRepo;


    public Iterable<QuizResults> findAll() {
        return quizResultRepo.findAll();

    }


    public void addQuizResult(QuizResults quizResultEntitiy) { quizResultRepo.save(quizResultEntitiy);
    }

    public void findAllQuizResultsById(int id) { quizResultRepo.findAllById(Collections.singleton(id));
    }




}

