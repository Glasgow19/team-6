package com.example.codeforgood.cfg;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizResultRepo extends CrudRepository<QuizResults,Integer> {


}

