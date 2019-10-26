package com.example.codeforgood.cfg;
import com.example.codeforgood.cfg.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class QuizResultService {

    @Autowired
    private QuizResultRepo quizResultRepo;


    public Iterable<QuizResultEntitiy> findAll() {
        return quizResultRepo.findAll();

    }


    public void addQuizResult(QuizResultEntitiy quizResultEntitiy) { quizResultRepo.save(quizResultEntitiy);
    }

    public void findAllQuizResultsById(int id) { quizResultRepo.findAllById(Collections.singleton(id));
    }




}

