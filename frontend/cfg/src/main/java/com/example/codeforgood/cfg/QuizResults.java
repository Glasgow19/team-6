package com.example.codeforgood.cfg;
import net.minidev.json.JSONObject;

import net.minidev.json.JSONObject;

import javax.persistence.*;
import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "quiz_results")
public class QuizResults {

    @Id
    @EmbeddedId
    private QuizResultId quizResultId;
    //need to do the id
    @Column(name = "user_result")
    private int user_result;





    public QuizResults(QuizResultId quizResultId, int user_result) {
        this.quizResultId=quizResultId;
        this.user_result=user_result;


    }


    public QuizResults(){}



    public JSONObject toJSONObject(){
        JSONObject object = new JSONObject();
        JSONObject quizEntityObject = new JSONObject();
        quizEntityObject.appendField("time", this.quizResultId.time);
        quizEntityObject.appendField("quiz_id", this.quizResultId.quiz_id);
        quizEntityObject.appendField("user_id", this.quizResultId.user_id);
        quizEntityObject.appendField("user_result", this.user_result);

        object.appendField("quizEntityObject", quizEntityObject);

        return object;

    }
}
