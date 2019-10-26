package com.example.codeforgood.cfg;

import lombok.NonNull;



public class ResponseFormat {
    public int age;
    public String gender;
    public long lat;
    public long lng;
    public int user_result;
    public String time;
    public int user_id;
    public int quiz_id;

    public ResponseFormat(int age, String gender, long lat, long lng, String time, int user_id, int user_result, int quiz_id) {

        this.age=age;
        this.gender=gender;
        this.lat=lat;
        this.lng=lng;
        this.user_result=user_result;
        this.time = time;
        this.user_id = user_id;
        this.user_result=user_result;
        this.quiz_id=quiz_id;



    }
}
