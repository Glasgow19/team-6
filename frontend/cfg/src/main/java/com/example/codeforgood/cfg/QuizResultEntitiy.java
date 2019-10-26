package com.example.codeforgood.cfg;
import net.minidev.json.JSONObject;

import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "quiz_results")
public class QuizResultEntitiy {

    //need to do the id
    @Column(name = "time")
    private String time;
    @Column(name = "quiz_id")
    private int quiz_id;
    @Column(name = "user_id")
    private int user_id;
    @Column(name = "user_result")
    private int user_result;







    public QuizResultEntitiy(String time, int quiz_id, int user_id, int user_result) {
     this.time = time;
     this.quiz_id=quiz_id;
     this.user_id=user_id;
     this.user_result=user_result;


    }


    public QuizResultEntitiy(){}



    public JSONObject toJSONObject(){
        JSONObject object = new JSONObject();
        JSONObject quizEntityObject = new JSONObject();
        quizEntityObject.appendField("time", this.time);
        quizEntityObject.appendField("quiz_id", this.quiz_id);
        quizEntityObject.appendField("user_id", this.user_id);
        quizEntityObject.appendField("user_result", this.user_result);

        object.appendField("quizEntityObject", quizEntityObject);

        return object;

    }
}
