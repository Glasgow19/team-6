package com.example.codeforgood.cfg;
import net.minidev.json.JSONObject;

import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user")
public class UserEntity {
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
    @Column(name = "motivation")
    private Integer motivation;
    @Column(name = "confidence")
    private Integer confidence;
    @Column(name = "physical_competence")
    private Integer physical_competence;
    @Column(name = "opportunity")
    private Integer opportunity;
    @Column(name = "activity")
    private Integer activity;




    public UserEntity(int id, String name, String gender, String location, String city, int motivation, int confidence, int physical_competence, int opportunity, int activity) {
        this.id=id;
        this.age=age;
        this.gender=gender;
        this.location=location;
        this.city=city;
        this.motivation=motivation;
        this.confidence=confidence;
        this.physical_competence=physical_competence;
        this.opportunity=opportunity;
        this.activity=activity;

    }


    public UserEntity(){}



    public JSONObject toJSONObject(){
        JSONObject object = new JSONObject();
        JSONObject userObject = new JSONObject();
        userObject.appendField("age", this.age);
        userObject.appendField("id", this.id);
        userObject.appendField("gender", this.gender);
        userObject.appendField("location", this.location);
        userObject.appendField("city", this.city);
        userObject.appendField("motivation", this.motivation);
        userObject.appendField("confidence", this.confidence);
        userObject.appendField("physical_competence", this.physical_competence);
        userObject.appendField("opportunity", this.opportunity);
        userObject.appendField("activity", this.activity);
        object.appendField("userObject", userObject);

        return object;

    }
}
