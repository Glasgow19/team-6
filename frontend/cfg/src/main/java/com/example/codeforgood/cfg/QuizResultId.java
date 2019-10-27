package com.example.codeforgood.cfg;

import lombok.*;

import java.io.Serializable;


@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class QuizResultId implements Serializable
{

    public QuizResultId(int quiz_id, int user_id, String time){
        this.quiz_id=quiz_id;
        this.user_id=user_id;
        this.time=time;
    }

    @NonNull
    public int quiz_id;


    @NonNull
    public int user_id;


    @NonNull
    public String time;
}
