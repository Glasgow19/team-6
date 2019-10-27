package com.example.codeforgood.cfg;

import net.minidev.json.JSONObject;
import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "quizes")
public class Quizes {
    @Id
    @Column(name = "id")
    private Integer id;
    @Column(name = "user_id") //need to put the reference in here
    private Integer user_id;



    public Quizes(int id, int user_id) {
        this.id=id;
        this.user_id=user_id;
    }


    public Quizes(){}



    public JSONObject toJSONObject(){
        JSONObject object = new JSONObject();
        JSONObject userObject = new JSONObject();
        userObject.appendField("id", this.id);
        userObject.appendField("user_id", this.user_id);

        object.appendField("userObject", userObject);

        return object;

    }
}
