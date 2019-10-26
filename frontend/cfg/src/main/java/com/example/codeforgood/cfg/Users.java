package com.example.codeforgood.cfg;
import net.minidev.json.JSONObject;

import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;
    @Column(name = "age")
    private Integer age;
    @Column(name = "gender")
    private String gender;
    @Column(name = "location")
    private String location;
    @Column(name = "city")
    private String city;
    @Column(name = "user_result")
    private Integer user_result;





    public Users(int id, int age, String gender, String location, String city, int motivation, Integer user_result) {
        this.id=id;
        this.age=age;
        this.gender=gender;
        this.location=location;
        this.city=city;
        this.user_result=user_result;


    }


    public Users(){}



    public JSONObject toJSONObject(){
        JSONObject object = new JSONObject();
        JSONObject userObject = new JSONObject();
        userObject.appendField("age", this.age);
        userObject.appendField("id", this.id);
        userObject.appendField("gender", this.gender);
        userObject.appendField("location", this.location);
        userObject.appendField("city", this.city);
        userObject.appendField("user_result", this.user_result);
        object.appendField("userObject", userObject);

        return object;

    }
}
