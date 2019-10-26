package com.example.codeforgood.cfg;

import net.minidev.json.JSONObject;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class UserEntity {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;
    @Column(name = "name")
    private String name;


    public UserEntity(int id, String name, String description, String toxicity) {
        this.id=id;
        this.name=name;

    }


    public UserEntity(){}


    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public JSONObject toJSONObject(){
        JSONObject object = new JSONObject();
        JSONObject medicineObject = new JSONObject();
        medicineObject.appendField("name", this.name);
        medicineObject.appendField("id", this.id);
        object.appendField("medicine", medicineObject);
        return object;

    }
}
