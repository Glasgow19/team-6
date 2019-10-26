package com.example.codeforgood.cfg;

import lombok.*;

import java.io.Serializable;

@RequiredArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class QuizResultId implements Serializable
{

    @NonNull
    public int quiz_id;


    @NonNull
    public int user_id;


    @NonNull
    public String time;
}
