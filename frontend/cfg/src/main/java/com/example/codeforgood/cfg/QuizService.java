package com.example.codeforgood.cfg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    private QuizRepo quizRepository;


    public Iterable<Quizes> findAll() {
        return quizRepository.findAll();

    }

    public Optional<Quizes> findQuizById(int id) {
        return quizRepository.findById(id);
    }

    public void addQuizEntity(Quizes quizes) {
        quizRepository.save(quizes);
    }


}

